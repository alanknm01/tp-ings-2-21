var m = null;
var insert = false
var articles = ['angel', 'atrapaSuenios', 'Billeteras', 'calaberas','carpinteria','decoraciones','jarron','mate'];


const search = () => {
    var searchword = document.getElementById('search').value;
    console.log('palabra buscada: ' + searchword);
    articles.forEach(articlename => {
        if (searchword===""){mostrarTodos()}
        if(searchword != articlename){
            //habria que hacer la busqueda por categorias y nombres
            document.getElementById(`articulo_${articlename}`).style.display="none";
        }else{
            document.getElementById(`articulo_${articlename}`).style.display="block"
        }
    });
}

function mostrarTodos(){
    articles.forEach(articlename => {
        document.getElementById(`articulo_${articlename}`).style.display="block"

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

function card_creator(){
    console.log("SE ESTAN CONSTRUYENDO!")
   
    var descriptions= [ 'Angelitos 100% reales no biblicos',
                        'Atrapasueños para calmar las pesadillas',
                        'Billeteras para que no se te escapen los billetes',
                        'Calaberas con B porque calavera no chilla', 
                        'Articulos de carpinteria porque vos no sabes hacer muebles jaja',
                        'Decoraciones de muebles, cocina y basicamente para toda la casa qcyo',
                        'Jarrones para las flores o para la abuela',
                        'Mates para compartir con todos y agarrarte un santo COVID-19'    
    ]
    const $container= document.getElementById("ID_cartelera");
    console.log($container)

    var cards="";
    for(i=0;i<articles.length;i++){
    if(i<6){    cards+=`<div id= "articulo_${articles[i]}" class="card">
                        <img class="card-img-top" src="../img/${articles[i]}.jpeg">
                        <div class="card-body">
                        <h1>${articles[i]}</h1> 
                        <p class="card-text">${descriptions[i]}</p>
                        </div>
                     </div>`
    }else{
        cards+=`<div id= "articulo_${articles[i]}" class="card">
                        <img class="card-img-top" src="../img/${articles[i]}.jpg">
                        <div class="card-body">
                        <h1>${articles[i]}</h1> 
                        <p class="card-text">${descriptions[i]}</p>
                        </div>
                     </div>`
    }
    }
    $container.innerHTML=cards;
}
card_creator()