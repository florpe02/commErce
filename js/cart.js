document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          cart = resultObj.data;
          infoCarrito(cart);
          calculo();
          
      }
}).catch((error) => alert("Hubo un error: " + error));
});

var cart=[];
var enviovalue= 1.15;

/* function calcularsub(){
    let val= document.getElementById("valor").innerHTML;
    let cant= document.getElementsById("calsub").value;
    let subtotal= document.getElementById("sub");
    let valor=  val*cant;
    subtotal.innerHTML= valor;
}*/

function calculo(){
    let valorPrecio = document.getElementsByClassName("valor2");
    let count = document.getElementsByClassName("calsub");
    let subtotal = 0;
    let precio = 0;
   

    for (let i = 0; i < valorPrecio.length; i++){
// pasar moneda para el desafío, 12500 por 40 es 500 000
        if (cart.articles[i].currency == "USD") {
        precio = 40 * (parseFloat(valorPrecio[i].innerHTML) * parseFloat(count[i].value)) ;
        } else {
            precio = parseFloat(valorPrecio[i].innerHTML) * parseFloat(count[i].value); 
        }

        subtotal += precio;
      
    }

    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById("total").innerHTML = Math.round(subtotal*enviovalue);

}
 function envios (){
        let valor = document.getElementById("tipodeenvio").value;
    
        if (valor == "premiun") {
            enviovalue = 1.15;
            calculo();
        } else if (valor == "express") {
            enviovalue = 1.07;
            calculo();
        } else if (valor == "standard") {
            enviovalue = 1.05;
            calculo();
        }
    
    
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
        <input type="number"  value="`+article.count+ `" onchange="calculo()" class="calsub">   
        </div>

        <div class="col-sm-4 col-md-2 border" style="background-color: white;">
            <p> <br><br><br>Precio:<span id="valor" class="valor2">`+article.unitCost+`</span>`+article.currency+`</p>
        </div>
    
        <div class="col-sm-4 col-md-3 border" style="background-color: white;">
            <img src="` +article.src + `" width="300" height="200"> 
        </div>
    </div> 
</div>
` }


    
  
  document.getElementById("carrito").innerHTML = htmlContentToAppend;
 // calculo()
}