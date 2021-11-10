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
    
     const $container  = document.querySelector(`#post${post_number}`);
     $container.innerHTML = `<h3 id="article_name${post_number}"></h3>
                             <h3 id="article_price${post_number}"></h3>
                             <h3 id="article_id${post_number}"></h3>
                             <img class="img-posts" src="" id="article_image${post_number}" alt="">`;
    
     }

// const image_creator = (post_number) => {
//     const $img_creator = document.querySelector(`#post${post_number}`);
//     $img_creator.innerHTML = `<img class="img-posts" src="" id="article_image${post_number}" alt="">`
// }

const RequestMeli = async (article,post_number) => {

    console.log("nombre request",article)
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)

    if(response.ok){
        
        articleMeli = await response.json()
        let cont = 0
        while(cont < 10) 
        {
        console.log("ID: ",articleMeli.results[cont].id)
        article_name =  articleMeli.results[cont].title
        console.log("nombre articulooo",article_name)
        article_price =  articleMeli.results[cont].price
        article_id =  articleMeli.results[cont].id
        post_creator(cont)
        renderName(`NOMBRE DEL ARTICULO: ${article_name}`,cont)
        renderPrice(`PRECIO: ${article_price}`,cont)
        const picture_response = await fetch (`https://api.mercadolibre.com/items/${article_id}`)
        if(picture_response.ok){
            picture_meli = await picture_response.json()
            console.log("ID PICTURE: ",picture_meli.id)
            article_image = picture_meli.pictures[0].secure_url
            //image_creator(post_number)
            renderImage(article_image,cont)
        }
        else{
            renderMessage("Image Error")
        }

        cont+=1;
        }
    }
    else{
        renderMessage("Request Error")
    }
        
        
        console.log(post_number)
        console.log(article_name)
        console.log(article_price)
        
       
        
        

    
   


}

RequestMeli("teclado",1);



