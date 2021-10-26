document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          cart = resultObj.data;
          infoCarrito(cart);
          calculartotal() 
      }
    
  
       
  
      
  })
  
  .catch((error) => alert("Hubo un error: " + error));
  ;
  
  });

var cart={};

function mostrarimagen (array){

    
    
        let htmlContentToAppend = "";
    
        for(let i = 0; i < array.length; i++){
            let src = array[i];
    
            htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + article.src + `" alt="">
                </div>
            </div>
            `
    
            document.getElementById("src").innerHTML = htmlContentToAppend;
        }
    }
function calculartotal(){
    let total=0;
    let subs= document.getElementsByClassName("subtotal");
    for(let i = 0; i < subs.length; i++){
        total+= parseInt(subs[i].innerHTML);

    }
 
    document.getElementById("total").innerHTML=total;


}

function infoCarrito(cart){

  let htmlContentToAppend = "";
  

  for(let i = 0; i < cart.articles.length; i++){
      let article = cart.articles[i];
       
      htmlContentToAppend+=

      `<hr>
      <div class="container text-center">

      <div class="row border">
      <div class="col-sm-4 col-md-4 border" style="background-color: white;">
      <p id="score"> <br><br><br>`+article.name+" "+`  </p>
  </div>
  
  

     
  <div class="col-sm-4 col-md-2 border" style="background-color: white;">
      <p> <br><br><br>Cantidad: `+article.count+ `</p>   
      </div>
   

 
      <div class="col-sm-4 col-md-2 border" style="background-color: white;">
      <p> <br><br><br>Precio: `+ article.unitCost+`  `+article.currency+` </p>
      </div>
  


      <div class="col-sm-4 col-md-3 border" style="background-color: white;">
       <img src="` +article.src + `" width="300" height="200"> 
      </div>

      </div>
     
       
    </div>
    <br><br><br>
    <div class="container text-center">
   
    <div class="col-sm-2 col-md-2 border" style="background-color: white;">
    <p class="subtotal" id="sub${i}> Subtotal: ` +article.unitCost*article.count+ `</p>
    <p id="total">    </p> Total:
    <p>Envío: </p>
    
     
      <p>Forma de pago: </p>
      <p> Dirección:  </p>
    </div>
    </div>

      </div>
`

      document.getElementById("carrito").innerHTML = htmlContentToAppend;
  }
}


