import { RequestMeli } from "./main";

var btn = document.getElementById("button-name-artesania");
btn.addEventListener("click",ComparePrice = ()=>{
    let dato = document.getElementsById('name-artesania')[0].value;
    RequestMeli(dato);
 
},false);
 