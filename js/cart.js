document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          cart = resultObj.data;
          infoCarrito(cart);
      }
}).catch((error) => alert("Hubo un error: " + error));
});

var cart={};

function mostrarimagen (array){

    let htmlContentToAppend = ""
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

function calcularsub(){
    let val= document.getElementById("valor").innerHTML;
    let cant= document.getElementById("calsub").value;
    let subtotal= document.getElementById("sub");
    let valor=  val*cant;
    subtotal.innerHTML= valor;
}
 

function infoCarrito(cart){

  let htmlContentToAppend = "";
  

  for(let i = 0; i < cart.articles.length; i++){
      let article = cart.articles[i];
       
      htmlContentToAppend+=

      `<hr>
<div class="container text-center">
    <div class="row border">
        <div class="col-sm-4 col-md-3 border" style="background-color: white;">
            <p id="score"> <br><br><br>`+article.name+" "+`  </p>
        </div>

        <div class="col-sm-4 col-md-3 border" style="background-color: white;">
        <p> <br><br><br>Cantidad: </p> 
        <input type="number"  value="`+article.count+ `" onchange="calcularsub()" id="calsub">   
        </div>

        <div class="col-sm-4 col-md-2 border" style="background-color: white;">
            <p> <br><br><br>Precio:<span id="valor">`+article.unitCost+`</span>`+article.currency+`</p>
        </div>
    
        <div class="col-sm-4 col-md-3 border" style="background-color: white;">
            <img src="` +article.src + `" width="300" height="200"> 
        </div>
    </div> 
</div>

<br><br><br>

<div class="container text-center">
    <div class="col-sm-2 col-md-2 border" style="background-color: white;">
        <p>Subtotal:<span id="sub"> </span></p>
        <p id="total">    </p> Total:
        
    </div>
    </div>
</div>
`

    
  }
  document.getElementById("carrito").innerHTML = htmlContentToAppend;
}