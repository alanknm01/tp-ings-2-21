const renderMessage = (id) => {
    const $message = document.querySelector(`#${id}`);
    return $message;
}

const renderImg = (id) => {
    const $image = document.querySelector(`#${id}`);
    return $image;
}

const renderName = (message,post_number)=>{
    const $message = renderMessage(`article_name${post_number}`)
    $message.textContent = message
}

const renderPrice = (price,post_number)=>{
    const $price = renderMessage(`article_price${post_number}`)
    $price.textContent = price
}

const renderImage = (img,post_number)=>{
    const $image = renderImg(`article_image${post_number}`);
    $image.setAttribute('src',img)
}

const renderId = (id,post_number)=>{
    const $id = renderMessage(`article_id${post_number}`)
    $id.textContent = id
}
 
 const post_creator = (post_number) =>{
    console.log("POST NUMBER: ",post_number)
     const $container  = document.querySelector(`#post${post_number}`);
     $container.innerHTML = `<h3 id="article_name${post_number}"></h3>
                             <h3 id="article_price${post_number}"></h3>
                             <h3 id="article_id${post_number}"></h3>
                             <img class="img-posts" src="" id="article_image${post_number}" alt="">`;
         }


const RequestMeli = async (article) => {

    console.log("nombre request",article)
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)

    if(response.ok){
        
        articleMeli = await response.json()
        let post_number = 0
        while(post_number < 10) 
        {

        article_name =  articleMeli.results[post_number].title
        article_price =  articleMeli.results[post_number].price
        article_id =  articleMeli.results[post_number].id
        post_creator(post_number)
        renderName(`NOMBRE DEL ARTICULO: ${article_name}`,post_number)
        renderPrice(`PRECIO: ${article_price}`,post_number)
        const picture_response = await fetch (`https://api.mercadolibre.com/items/${article_id}`)
        if(picture_response.ok){

            picture_meli = await picture_response.json()
            article_image = picture_meli.pictures[0].secure_url
            renderImage(article_image,post_number)
        }
        else{
            renderMessage("Image Error")
        }

        post_number+=1;
        }
    }
    else{
        renderMessage("Request Error")
    }

}

RequestMeli("teclado"); 

