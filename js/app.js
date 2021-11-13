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
    console.log("el indice seleccionado es el: ",$indice)

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
        if(name!="" && surname!="" && name_artesania!=""  && $indice!=-1 && $indice!=0 && validaMail(email) && price_artesania!=""){      
                alert('Registrado correctamente!');   
                window.location.href = window.location.href;           
            
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
                location.reload();

            }
            else{
                alert('Datos incompletos!');
                }
        }}
    return false;
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
                             <img class="img-posts" src="" id="article_image${post_number}" alt="" width="50px">`;
         }


const RequestMeli = async (article) => {

    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${article}`)

    if(response.ok){
        
        articleMeli = await response.json()
        let post_number = 0
        while(post_number < 10) {

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

const open = document.getElementById('button-name-artesania');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    const name_artesania = document.getElementById("name-artesaniaID").value;
    modal_container.classList.add('show');  
    RequestMeli(name_artesania);
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});