

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
    const response = await fetch (`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${calle} ${altura},${partido}&maxOptions=5`)
    if(response.ok){
        direction= await response.json()
        if(direction.direccionesNormalizadas.length!=0) { 
            dir_creator(direction.direccionesNormalizadas)
        }else{//aca yo queria que muestre un cuadro de dialogo diciendole uqen o hay direcciones pero nosesi es el lugar indicado para hacerlo xd
            renderMessage("Request Error")
        }
        
    }
}
RequestUSIG("patricias mendocinas",240,"nogues")