const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_REL = "relevancia";
var currentproductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortproducts(criterio, array){
    let result = [];
    if (criterio === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost){ return 1; }
            return 0;
        });
    }else if (criterio === ORDER_DESC_BY_COST){
        result = array.sort (function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criterio === ORDER_BY_PROD_REL){
        result = array.sort(function(a, b) {
            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showproductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentproductsArray.length; i++){
        let products = currentproductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.cost) <= maxCount))){

            htmlContentToAppend += `
            <div class="col-md-6">
            <a href="product-info.html" class="list-group-item list-group-item-action">
            
                <div class="row">
              
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">` + products.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + products.description + `</p>
                        <p class="mb-1">` + products.cost + ` ` + products.currency + `</p>
                    </div>
                </div>
                
            </a>
            </div>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowproducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentproductsArray = productsArray;
    }

    currentproductsArray = sortproducts(currentSortCriteria, currentproductsArray);

    //Muestro las categorías ordenadas
    showproductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowproducts(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowproducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowproducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowproducts(ORDER_BY_PROD_REL);
    });

    

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showproductsList();
    })
});