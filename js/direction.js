

const renderName = (message,post_number)=>{
    const $message = renderMessage(`article_name${post_number}`)
    $message.textContent = message
}

const renderMessage = (id) => {
    const $message = document.querySelector(`#${id}`);
    return $message;
}

const dir_creator = (dir_number) =>{
    console.log("DIR NUMBER: ",dir_number)
     const $container  = document.querySelector(`#post${dir_number}`);
     $container.innerHTML = `<h3 id="article_name${dir_number}"></h3>
                             <h3 id="article_price${dir_number}"></h3>
                             <h3 id="article_id${dir_number}"></h3>
                             <img class="img-posts" src="" id="article_image${dir_number}" alt="">`;
         }

const RequestUSIG = async (calle,altura,partido) => { 
    //article deberia tener los parametros para hacer la normalizacion
    
    const response = await fetch (`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${calle} ${altura},${partido}&maxOptions=5`)

    if(response.ok){
        direction= await response.json()
        direction.direccionesNormalizadas.forEach(dir => {
            console.log(dir)
        });
            
        

    }

}
RequestUSIG("los andes",565,"nogues")