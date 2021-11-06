const renderMessage = (id) => {
    const $message = document.querySelector(`#${id}`);
    return $message;
}

const renderImg = (id) => {
    const $image = document.querySelector(`#${id}`);
    return $image;
}

function renderName(message,post_number){
    const $message = renderMessage(`article_name${post_number}`)
    $message.textContent = message
}

function renderPrice(price,post_number){
    const $price = renderMessage(`article_price${post_number}`)
    $price.textContent = price
}

function renderImage(img,post_number){
    const $image = renderImg(`article_image${post_number}`);
    $image.setAttribute('src',img)
}

function renderId(id,post_number){
    const $id = renderMessage(`article_id${post_number}`)
    $id.textContent = id
}


// const post_creator = (post_number) =>{
    
//     const $container  = document.querySelector(`#post${post_number}`);
//     $container.innerHTML = `<h3 id="article_name${post_number}"></h3>
//                             <h3 id="article_price${post_number}"></h3>
//                             <h3 id="article_id${post_number}"></h3>
//                             <img class="img-posts" src="" id="article_image${post_number}" alt="">`;
    
//     }


const RequestMeli = async (article,post_number) => {
    console.log("nombre request",article)
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)

    if(response.ok){
        
        articleMeli = await response.json() 
        article_name =  articleMeli.results[0].title
        console.log("nombre articulooo",article_name)
        article_price =  articleMeli.results[0].price
        article_id =  articleMeli.results[0].id

        renderName(`NOMBRE DEL ARTICULO: ${article_name}`,post_number)
        renderPrice(`PRECIO: ${article_price}`,post_number)
    }
    else{
        renderMessage("Request Error")
    }
        const picture_response = await fetch (`https://api.mercadolibre.com/items/${article_id}`)
        if(picture_response.ok){
            picture_meli = await picture_response.json()
            article_image = picture_meli.pictures[0].secure_url
            renderImage(article_image,post_number)
        }
        else{
            renderMessage("Image Error")
        }
        console.log(post_number)
        console.log(article_name)
        console.log(article_price)
        
       // post_creator(post_number)
        
        

    
   


}

RequestMeli("mate",1);
RequestMeli("perro",2);
RequestMeli("fundas",3);
RequestMeli("telefonos",4);
RequestMeli("llaveros",5);
RequestMeli("artesanias",6);
RequestMeli("collares",7);
RequestMeli("pulseras",8);
