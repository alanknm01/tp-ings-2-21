const validaCheckbox = ()=>{

    const checkboxMuestra = document.getElementById('post_muestra');
    const checkboxVenta = document.getElementById('post_venta');
    checkboxMuestra.addEventListener("change", validaCheckbox, false);
    checkboxVenta.addEventListener("change", validaCheckbox, false);
    var checkedMuestra = checkboxMuestra.checked;
    var checkedVenta = checkboxVenta.checked;
    console.log("checked muestra: ",checkedMuestra)
    console.log("checked venta: ",checkedVenta)
    if(checkedMuestra){
        alert("CHECKED MUESTRA ELEGIDO!")
        document.getElementById('price-artesania').style.display="none"
  }
  if(checkedVenta){
    alert("CHECKED VENTA ELEGIDO!")
    
    document.getElementById('price-artesania').style.display="block"
  }

}

validaCheckbox();

function register(){
    const name_artesania = document.getElementById("name-artesaniaID").value;
    const $select = document.querySelector("select-categories")
    const $indice = document.querySelector("select-categories").selectedIndex;
    console.log("el indice es: ",$indice)
    const selected_option = $select.options[$indice].text

    const name= document.getElementById("nameInput").value;
    const surname= document.getElementById("surnameInput").value;
    const dni = document.getElementById("dniInput").value;
    const email= document.getElementById("emailInput").value;
    
    console.log("REGISTER checked muestra: ",checkedMuestra)
    console.log("REGISTER checked venta: ",checkedVenta)
    if(name!="" && surname!="" && name_artesania!=""  && $indice!=-1 && validaMail(email) && validaDNI(dni)){
        
            let post = {
                "name_artesania" : name_artesania,
                "category" : selected_option,
                "dni" : dni,
                "email" : email,
                "password" : password,
            }
            //almacenar el json en algun lado..
            alert('Registrado correctamente!');
            vaciarCampos();
            loginMenu();
        
        
        }
        else{
            alert('Datos incompletos!');
            }
        }


const vaciarCampos = ()=>{

    document.getElementById("nameInput").value = "";
    document.getElementById("dniInput").value = "";
    document.getElementById("surnameInput").value = "";
    document.getElementById("fechaNacimientoInput").value = ""; 
    document.getElementById("emailInput").value = "";
    document.getElementById("post_venta").attributes("checked","true");
}
  
const validaMail = (mail)=>{
        var ex_regular_mail; 
        ex_regular_mail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if(ex_regular_mail.test (mail) == true){
            return true;
        } else {
            return false;
        }  
}

const validaDNI = (dni)=>{
    var ex_regular_dni; 
    ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
    if(ex_regular_dni.test (dni) == true){
         return true;
    }else{
       return false;
     }
}
