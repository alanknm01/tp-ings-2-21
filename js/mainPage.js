var m = null;
var insert = false

var articles = new Array('angel', 'atrapasuenios', 'billeteras', 'calaberas');

const search = () => {
    var searchword = document.getElementById('search').value;
    console.log('palabra buscada: ' + searchword);
    articles.forEach(articlename => {
        if(searchword == articlename)
            //habria que hacer la busqueda por categorias y nombres
            console.log('palabra encontrada: ' + articlename);
    });
}

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


function make_map(){
    m = new Mapa()
}

function add_taller_from_html(){
    if(!insert){
        add_taller("UNGS", "Universidad Nacional de Gral. Sarmiento", "A", [-34.5221554, -58.7000067])
        add_taller("Terrazas de Mayo", "Terrazas de Mayo Shopping", "A", [-34.529152, -58.701454])
        add_taller("San Miguel", "Localidad de San Miguel", "B", [-34.542729, -58.712297])
        insert = true;
    }
}

function add_taller(nombre, descripcion, categoria, coordenadas) {
    try {
        m.add_to_map(nombre, coordenadas);
        add_taller_to_list(nombre, descripcion, coordenadas);
    } catch (error) {
        console.log(error);
    }
}

function add_taller_to_list(nombre, descripcion, coordenadas){
    const div_talleres_list =document.querySelector(`.talleres-list`);
    div_talleres_list.innerHTML += `<input id="tallerId" type="button" class="list-group-item list-group-item-action" onclick=focus_taller("${coordenadas}") value="${nombre}">`;
}

function focus_taller(coordenadas){
    var new_coordenadas = coordenadas.split(',')
    m.map.setView(new_coordenadas, 15);
}