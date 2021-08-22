const listado = "https://japdevdep.github.io/ecommerce-api/product/all.json"; 


    document.getElementById("data").innerHTML = "";
  
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

    fetch(listado)
    .then((respuesta) => respuesta.json())

    .then((datos) => {
        datos.forEach(( products => {
           
            document.getElementById("data").innerHTML +=`
           
          
            <h5> `+products.name+` </h5> 
            <img src="` + products.imgSrc + `" width="300" height="200" alt="` + products.description + `" class="img-thumbnail">    
           
             <p> `+ products.description+` </p> 
            <p> `+ products.cost+products.currency+` </p> 
              <p> Vendidos : `+products.soldCount+` </p> 
        
`;
        
    }));
    })
    .catch((error) => alert("Hubo un error: " + error));
;