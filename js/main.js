const renderMessage = (id) => {
    const $message = document.querySelector(`#${id}`);
    return $message;
}

const renderImg = (id) => {
    const $image = document.querySelector(`#${id}`);
    return $image;
}






function renderName(message){
    const $message = renderMessage('article_name')
    $message.textContent = message
}

function renderPrice(price){
    const $price = renderMessage('article_price')
    $price.textContent = price
}

function renderImage(img){
    const $image = renderImg('article_image');
    $image.setAttribute('src',img)
}

function renderId(id){
    const $id = renderMessage('article_id')
    $id.textContent = id
}

const RequestMeli = async (article) => {

    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)

    if(response.ok){
        articleMeli = await response.json()
        article_name =  articleMeli.results[0].title
        article_price = articleMeli.results[0].price
        article_id = articleMeli.results[0].id
        picture_response = await fetch (`https://api.mercadolibre.com/items/${article_id}`)
        if(picture_response.ok){
            picture_meli = await picture_response.json()
            article_image = picture_meli.pictures[0].secure_url

        }
       // article_id2 = article_id.pictures.id
        renderName(`NOMBRE DEL ARTICULO: ${article_name}`)
        renderPrice(`PRECIO: ${article_price}`)
        //renderId(`El id del articulo es: ${article_id2}`)
        renderImage(article_image)

    }
    else{
        renderName("Error no se pudo encontrar lo solicitado")
    }


}

RequestMeli("mate");