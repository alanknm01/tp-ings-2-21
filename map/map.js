
class Mapa {

  constructor(){
    this.ungsLocation = [-34.5221554, -58.7000067];
    this.map = L.map('mapid').setView(this.ungsLocation, 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  get_map(){
    return this.map;
  }

  add_to_map(nombre, coordenadas){
    console.log('add');
    console.log(coordenadas);
    console.log(nombre);
    
    var newMarker=L.marker(coordenadas)
    newMarker.addTo(this.map)
      .bindPopup(nombre);
  }
}

// function init_storage(){
//   try {
//     var first_obj_json = '[]';
//     var init = JSON.parse(first_obj_json);
//     localStorage.setItem('myStorage', JSON.stringify(init));
//     console.log('Se inició correctamente');
//   } catch (error) {
//     alert(error);
//   }
// }


// init_storage()
