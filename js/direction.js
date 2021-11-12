

const renderName = (message,post_number)=>{
    const $message = renderMessage(`article_name${post_number}`)
    $message.textContent = message
}

const renderMessage = (id) => {
    const $message = document.querySelector(`#${id}`);
    return $message;
}

const dir_creator = (array_direccion) =>{
    const $container  = document.querySelector(`#dirList`);
    var optionHTML=""
    for (i=0 ;i < array_direccion.length ;i++){
        dir=dir_Stringer(array_direccion[i])
        optionHTML+=`<option value="${i}">${dir}</option>
         `;
    };
    $container.innerHTML =optionHTML
}

function dir_Stringer(dir_normalizada){
    return dir_normalizada.direccion +", " +dir_normalizada.nombre_localidad
}
const RequestUSIG = async (calle,altura,partido) => {     
    const response = await fetch (`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${calle} ${altura},${partido}`)
    if(response.ok){
        direction= await response.json()
        if("errorMessage" in direction) { 
            alert(direction.errorMessage)
            document.querySelector(`#dirList`).innerHTML="" //vaciar el select
        }else{
            document.getElementById("dirList").style.display="block"
            dir_creator(direction.direccionesNormalizadas)
        }
        
    }
}
const hide_select=()=>{
   document.getElementById("dirList").style.display="none"
}
hide_select();
const direccion_check=()=>{

}

function register_taller(){
        const name_Taller        = document.getElementById("nameInput").value;
        const description_Taller = document.getElementById("descriptionInput").value;
        const categorie_Taller   = document.getElementById("select-categories").value;
        const activitie_Taller   = document.getElementById("select-activities").value;
        const direction_Taller   = document.getElementById("dirList").value;
        const apertura_Taller    = document.getElementById("horarioAperturaInput").value;
        const cierre_Taller      = document.getElementById("horarioCerrarInput").value;
        const telefono_Taller    = document.getElementById("phoneInput").value;
        if (name_Taller!=""&description_Taller!=""&categorie_Taller!=""&activitie_Taller!=""&direction_Taller!=""&apertura_Taller!=""&cierre_Taller!=""&telefono_Taller!=""){

        alert("Taller registrado!")
        vaciarCampos_Taller()
    }else{
        alert('Datos incompletos!');    
    }
}
const vaciarCampos_Taller = ()=>{

    document.getElementById("nameInput").value="";
    document.getElementById("descriptionInput").value="";
    document.getElementById("select-categories").value="";
    document.getElementById("select-activities").value="";
    document.getElementById("dirList").value="";
    document.getElementById("horarioAperturaInput").value="";
    document.getElementById("horarioCerrarInput").value="";
    document.getElementById("phoneInput").value="";
}
const request_direction=()=>{
    
    const calle  =document.getElementById("calleInput").value
    const altura =document.getElementById("alturaInput").value
    const partido=document.getElementById("partidoInput").value
    if(calle!=""&altura!=""){
        RequestUSIG(calle,altura,partido)
    }else{
        alert("Campos de direccion incompletos!")
    }
}