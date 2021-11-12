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

        document.getElementById('price-artesania').style.display="none"
        document.getElementById('button-name-artesania').style.display="none"
        document.getElementById('text-area').style.display="block"
  }
  if(checkedVenta){
    
    document.getElementById('price-artesania').style.display="block"
    document.getElementById('button-name-artesania').style.display="block"
    document.getElementById('text-area').style.display="none"
  }

}

validaCheckbox();

const hideMenu = () =>{
    document.getElementById('price-artesania').style.display="none"
    document.getElementById('button-name-artesania').style.display="none"
    document.getElementById('text-area').style.display="none"
}

hideMenu();

function register(){
    const name_artesania = document.getElementById("name-artesaniaID").value;
    const price_artesania = document.getElementById("price-artesania").value;
    const text_area = document.getElementById("text-area").value;
    const $indice = document.querySelector("#select-categories").selectedIndex;


    const checkboxMuestra = document.getElementById('post_muestra');
    const checkboxVenta = document.getElementById('post_venta');
    checkboxMuestra.addEventListener("change", validaCheckbox, false);
    checkboxVenta.addEventListener("change", validaCheckbox, false);
    const checkedMuestra = checkboxMuestra.checked;
    const checkedVenta = checkboxVenta.checked;

    const name= document.getElementById("nameInput").value;
    const surname= document.getElementById("surnameInput").value;
    const email= document.getElementById("emailInput").value;

    if(checkedVenta){
        if(name!="" && surname!="" && name_artesania!=""  && $indice!=-1 && validaMail(email) && price_artesania!=""){      
                //almacenar el json en algun lado..
                alert('Registrado correctamente!');   
                vaciarCampos();             
            
            }
            else{
                alert('Datos incompletos!');
                }
    }
    else 
    {
    if(checkedMuestra){
        if(name!="" && surname!="" && name_artesania!=""  && $indice!=-1 && validaMail(email) && text_area!=""){
            alert('Registrado correctamente!');   
                vaciarCampos();             
            
            }
            else{
                alert('Datos incompletos!');
                }
        }}
    return false;
    }
        
        


const vaciarCampos = ()=>{

    document.getElementById("nameInput").value = "";
    document.getElementById("surnameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("name-artesaniaID").value = "";
    document.getElementById("price-artesania").value = "";
    document.getElementById("text-area").value = "";
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
