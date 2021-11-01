function guardarr () {

    let nombre_data = {
        nombre_data:document.getElementById("nombres").value
    
    };
    let nombre_data_json = JSON.stringify(nombre_data);
    localStorage.setItem("nombre_data", nombre_data_json);

    
    let apellido_data = {
        apellido_data:document.getElementById("apellidos").value
    
    };
    let apellido_data_json = JSON.stringify(apellido_data);
    localStorage.setItem("apellido_data", apellido_data_json);

    let edad_data = {
        edad_data:document.getElementById("edad").value
    
    };
    let edad_data_json = JSON.stringify(edad_data);
    localStorage.setItem("edad_data", edad_data_json);



    let email_data = {
        email_data:document.getElementById("email").value
    
    };
    let email_data_json = JSON.stringify(email_data);
    localStorage.setItem("email_data", email_data_json);

    let telefono_data = {
        telefono_data:document.getElementById("telefono").value
    
    };
    let telefono_data_json = JSON.stringify(telefono_data);
    localStorage.setItem("telefono_data", telefono_data_json);

}
var nombre_data
var apellido_data
var edad_data
var email_data
var telefono_data

function recuperarrr() {
  if (localStorage.getItem("nombre_data")) {

    
      nombre_data_json = localStorage.getItem("nombre_data");

    
      nombre_data= JSON.parse(nombre_data_json);
  }
   
      document.getElementById ("nombres").value=
      nombre_data.nombre_data






if (localStorage.getItem("apellido_data")) {

    
    apellido_data_json = localStorage.getItem("apellido_data");

  
    apellido_data= JSON.parse(apellido_data_json);

 
    document.getElementById ("apellidos").value=
    apellido_data.apellido_data

}

if (localStorage.getItem("edad_data")) {

    
    edad_data_json = localStorage.getItem("edad_data");

  
    edad_data= JSON.parse(edad_data_json);

 
    document.getElementById ("edad").value=
   edad_data.edad_data


  

    if (localStorage.getItem("email_data")) {

    
        email_data_json = localStorage.getItem("email_data");
    
      
        email_data= JSON.parse(email_data_json);
    
     
        document.getElementById ("email").value=
        email_data.email_data
    
        
            if (localStorage.getItem("telefono_data")) {
          
              
                telefono_data_json = localStorage.getItem("telefono_data");
          
              
                telefono_data= JSON.parse(telefono_data_json);
            
             
                document.getElementById ("telefono").value=
                telefono_data.telefono_data
            }
          
    }
}
}




document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("accedoo").addEventListener("click", function(e){
     guardarr()
    });

     recuperarrr()
 

 
});




(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
