//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardarr () {

    let login_data = {
        login_datos:document.getElementById("emailaddrr").value
      
    };


    let login_data_json = JSON.stringify(login_data);

    
    localStorage.setItem("login_data", login_data_json);
}
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("accedo").addEventListener("click", function(e){
     guardarr()
});
});
