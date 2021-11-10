import { RequestMeli } from "./main";

var btn = document.getElementById("button-name-artesania");
btn.addEventListener("click",ComparePrice = ()=>{
    let dato = document.getElementsById('name-artesania')[0].value;
    console.log("EL DATO ES: ",dato)
    RequestMeli(dato);
 
},false);
 