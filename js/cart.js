

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

function infoCarrito(cart){

  let htmlContentToAppend = "";

  for(let i = 0; i < cart.articles.length; i++){
      let article = cart.articles[i];
       
      htmlContentToAppend+=

      `<hr>
      <table>
      <thead>
      <div class="container text-center">

      <div class="row border">
      <div class="col-sm-4 col-md-2 border" style="background-color: white;">
      <p id="score"> `+article.name+" "+`  </p>
  </div>
  
  

     
  <div class="col-sm-4 col-md-2 border" style="background-color: white;">
      <p> Cantidad: `+article.count+ `</p>   
      </div>
   

 
      <div class="col-sm-4 col-md-2 border" style="background-color: white;">
      <p> Precio: `+ article.unitCost+`  `+article.currency+` </p>
      </div>
      </div>


      <div class="col-sm-4 col-md-2 border" style="background-color: white;">
       <img src="` +article.src + `" width="300" height="200"> 
      </div>
      </div>
     
       
    </div>
     
    
`

      document.getElementById("carrito").innerHTML = htmlContentToAppend;
  }
}


document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CART_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        cart = resultObj.data;
        infoCarrito(cart);
    }
  

     

    
})
.catch((error) => alert("Hubo un error: " + error));
;

});