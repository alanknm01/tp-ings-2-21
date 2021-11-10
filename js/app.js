$( document ).ready(function() {
    userState();
});

const registerMenu = ()=> {
    document.getElementById('form-login').style.display="none";
    document.getElementById('form-SignUp').style.display="block";
    document.getElementById('pagoSignUp').style.display="none";
}

const loginMenu = ()=>{
    //document.getElementById('form-SignUp').style.display="none";
    //document.getElementById('form-login').style.display="block";
    localStorage.setItem('MedioPago','Invalido');
}

const medioPagoMenu = ()=>{
    document.getElementById('form-SignUp').style.display="none";
    document.getElementById('pagoSignUp').style.display="block";
    showFormMercadoPago();
}

const userState = ()=>{
    if (localStorage.getItem('Login')=='True'){
        $("#loginItem").css('display','none');
        localStorage.setItem('Login','False');
    }
    else{
        $("#logoutItem").css('display','none');
    }
}


const validaCheckbox = ()=>{

    const checkboxMuestra = document.getElementById('post_muestra');
    const checkboxVenta = document.getElementById('post_venta');
    checkboxMuestra.addEventListener("change", validaCheckbox, false);
    checkboxVenta.addEventListener("change", validaCheckbox, false);
    const checkedMuestra = checkboxMuestra.checked;
    const checkedVenta = checkboxVenta.checked;
    if(checkedMuestra){
        
        document.getElementById('price-artesania').style.display="none"
  }
  if(checkedVenta)
    document.getElementById('price-artesania').style.display="block"
}

validaCheckbox();

// console.log(document.getElementById("post_venta"))
// console.log(document.getElementById("post_venta").checked)

function register(){
    var name_artesania = $("#name-artesania").val();
    const $select = document.querySelector("#select-categories")
    var $indice = document.querySelector("#select-categories").selectedIndex;
    const selected_option = $select.options[$indice].text
    console.log("OPCION ELEGIDA: ",selected_option)
    //console.log("OPCION ELEGIDA: ",$select)
    var name= $("#nameInput").val();
    var surname= $("#surnameInput").val();
    var dni = $("#dniInput").val();
    var fechaNacimiento = $("#fechaNacimientoInput").val();
    
    var email= $("#emailInput").val();
    

    if(name!="" && surname!="" && name_artesania!=""  && $indice!=-1 && validaMail(email) && validaDNI(dni) && validarFecha(fechaNacimiento) && vehiculoCheck() && domicilioCheck()){
        
            let post = {
                "name_artesania" : name_artesania,
                "category" : selected_option,
                "dni" : dni,
                "fechaNac": fechaNacimiento,
                "email" : email,
                "password" : password,
            }
            localStorage.setItem('account',JSON.stringify(post));
            alert('Registrado correctamente!');
            vaciarCampos();
            loginMenu();
        
        
        }
        else{
            alert('Datos incompletos!');
            }
        }

const validaContraseña = (pass) =>{
    if (pass.length>=8 && pass.length<=20){
        return true;
    }
    else{
        return false;
    }
}

const validarFecha = (fechaNacimiento)=>{
    fecha= Date.parse(fechaNacimiento); 
    if(fecha<=Date.now()){
    return true;
}
    else{
    return false;
    }
}

const vaciarCampos = ()=>{
    $("#nameInput").val("");
    $("#surnameInput").val("");
    $("#dniInput").val("");
    $("#fechaNacimientoInput").val(""); 
    $("#emailInput").val("");
    $("#userInput").val("");
    $("#passwordInput").val("");
    $("#vehiculoIncorrecto").attr("checked","true");
    $("#domicilioIncorrecto").attr("checked","true");
}

const registrarMedioPago = ()=>{
    //Tarjeta de Credito
    var tarjetaNumero= $("#numTarj").val();
    var tarjetaNombre= $("#nombTarj").val();
    var tarjetaFecha= $("#fechaExpTarj").val();
    var tarjetaCodigo= $("#codSegTarj").val();

    //Mercado pago
    var mercadoPagoEmail= $("#emailMP").val();

    //Transferencia
    var transferenciaCbu= $("#cbuTransf").val();
    var transferenciaCuil= $("#cuiltTransf").val();

    if(validaMailMercadoPago(mercadoPagoEmail) && validaTarjetaCredito(tarjetaNumero, tarjetaNombre, tarjetaFecha, tarjetaCodigo) && validarTransferencia(transferenciaCbu, transferenciaCuil)){
        localStorage.setItem('MedioPago','Valido');
        alert('Medio de pago registrado!');
        vaciarCamposMedioPago();
        registerMenu();    
    }
}

const cancelarMedioPago = () =>{
    vaciarCamposMedioPago();
    registerMenu();
}

const vaciarCamposMedioPago = ()=>{
    $("#radioFormTarjetaCredito").prop("checked",false);
    $("#radioFormMercadoPago").prop("checked",true);
    $("#radioFormTransferenciaBancaria").prop("checked",false);
    showFormMercadoPago();
    $("#numTarj").val("");
    $("#nombTarj").val("");
    $("#fechaExpTarj").val("");
    $("#codSegTarj").val("");
    $("#emailMP").val("");
    $("#cbuTransf").val("");
    $("#cuiltTransf").val("");
}

const vehiculoCheck = ()=>{
    if ($("#vehiculoCorrecto").prop("checked")){
    return true;
}
  else{
      return false;
  }
}

const domicilioCheck = ()=>{
    if ($("#domicilioCorrecto").prop("checked")){
        return true;
    }
      else{
          return false;
      }
}

 
const validaMailMercadoPago = (mail)=>{
    if ($("#emailMP").prop('required')){
        var ex_regular_mail; 
        ex_regular_mail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if(ex_regular_mail.test (mail) == true){
            return true;
        } else {
            return false;
        }  
    } else {
        return true;
    }
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

const validaNumero = (valor)=>{
    let isnum = /^\d+$/;
    if (isnum.test(valor)){
        return true;
    } else {
        return false;
    }
}

const validaTarjetaCredito = (tarjetaNumero, tarjetaNombre, tarjetaFecha, tarjetaCodigo)=>{
    if ($("#numTarj").prop('required')){
        if (tarjetaCodigo.length == 3 && validaNumero(tarjetaCodigo) && tarjetaNombre!="" && (tarjetaFecha.length == 4 || tarjetaFecha.length==5)  && tarjetaNumero.length==16 && validaNumero(tarjetaNumero)){
            return true;
        } else {
            alert('Datos de tarjeta erróneos!');
            return false;
        }
    } else {
        return true;
    }
}

const validarTransferencia = (transferenciaCbu, transferenciaCuil)=>{
    if ($("#cbuTransf").prop('required')){
        if(transferenciaCbu!="" && transferenciaCuil.length == 11 && validaNumero(transferenciaCuil) && transferenciaCbu.length == 22 && validaNumero(transferenciaCbu)){
            return true;
        } else {
            alert('Datos de transferencia erróneos!')
            return false;
        }
    } else {
        return true;
    }
}

const login = ()=>{
    var email=$("#userInputLogin").val();
    var password=$("#passwordInputLogin").val();
    var account= JSON.parse(localStorage.getItem('account'));
    if(email==account.Email){
        if(password==account.Password){
            alert('Bienvenido!');
          window.location.href='./index.html';
          localStorage.setItem('Login','True');
        }
        else{
            alert('Contraseña incorrecta');
        }
    }
    else{
        alert('Usuario inexistente');
    }
}

const showFormMercadoPago = ()=>{
    $("#formMercadoPago").css('display','block');
    $("#emailMP").prop('required',true);
    
    $("#formTarjetaCredito").css('display','none');
    $("#numTarj").prop('required',false);
    $("#nombTarj").prop('required',false);
    $("#fechaExpTarj").prop('required',false);
    $("#codSegTarj").prop('required',false);
    
    $("#formTransferenciaBancaria").css('display','none');
    $("#cbuTransf").prop('required',false);
    $("#cuiltTransf").prop('required',false);
}
const showFormTarjetaCredito = () => {
    $("#formMercadoPago").css('display','none');
    $("#emailMP").prop('required',false);

    $("#formTarjetaCredito").css('display','block');
    $("#numTarj").prop('required',true);
    $("#nombTarj").prop('required',true);
    $("#fechaExpTarj").prop('required',true);
    $("#codSegTarj").prop('required',true);

    $("#formTransferenciaBancaria").css('display','none');
    $("#cbuTransf").prop('required',false);
    $("#cuiltTransf").prop('required',false);
}
const showFormTransferenciaBancaria = () => {
    $("#formMercadoPago").css('display','none');
    $("#emailMP").prop('required',false);

    $("#formTarjetaCredito").css('display','none');
    $("#numTarj").prop('required',false);
    $("#nombTarj").prop('required',false);
    $("#fechaExpTarj").prop('required',false);
    $("#codSegTarj").prop('required',false);

    $("#formTransferenciaBancaria").css('display','block');
    $("#cbuTransf").prop('required',true);
    $("#cuiltTransf").prop('required',true);
}