import{prueba} from "./index.js";

const boton = document.getElementById ("boton");

boton.addEventListener("click", buscador);
//boton.addEventListener("key", buscador);

let verdadero = false;
let obtener2 = "";
function buscador(){
     
let obtener = document.getElementById('search').value;

if(obtener2!=obtener){
    
    if(verdadero==true){
        
    if(((prueba[0].title||prueba[1].title||prueba[2].title||prueba[3].title)==obtener) && (obtener2!=obtener)){

caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
container2.removeChild(cajaPL);
      
verdadero=false;
        
    }
    else {

caja2.removeChild(desb);
caja2.removeChild(titulo);
cajaPL.removeChild(caja2);
cajaPL.removeChild(imagenPL);
container2.removeChild(cajaPL);

        
verdadero=false;
    }
};
    
};

if(prueba[0].title==obtener && obtener!=obtener2){
    
    
    const conjunto = document.getElementById('container2');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","card");
    caja.setAttribute("style","margin-top: 5rem; width: 22rem");
    

    conjunto.appendChild(caja);
    
   
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", "/img/Rest 3.jpg");
    imagen.setAttribute("class","card-img-top");
    
    caja.appendChild(imagen);
    
   
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","card-body");
    
    caja.appendChild(caja2);
    
   
    const titulo = document.createElement("h5");
    titulo.setAttribute("id","titulo");
    titulo.setAttribute("class","card-title");
   
    titulo.textContent = prueba[0].title;
    caja2.appendChild(titulo);
    
   
    const dire = document.createElement("p");
    dire.setAttribute("id","dire");
    dire.setAttribute("class","card-text");
    dire.textContent = prueba[0].dire;
    caja2.appendChild(dire);


    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.setAttribute("class","card-text");
   
    desb.textContent = prueba[0].descr;
    caja2.appendChild(desb);
    
   
 
    
    verdadero = true;

}
if(prueba[1].title==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('container2');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","margin-top: 5rem; width: 22rem");
 conjunto.appendChild(caja);


 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/Rest 2.jpeg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);


 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);


 const titulo = document.createElement("h3");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title");
 titulo.textContent = prueba[1].title;
 caja2.appendChild(titulo);

 const dire = document.createElement("p");
 dire.setAttribute("id","dire");
 dire.setAttribute("class","card-text");
 dire.textContent = prueba[1].dire;
 caja2.appendChild(dire);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = prueba[1].descr;
 caja2.appendChild(desb);
 

 verdadero = true;

}
if(prueba[2].title==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('container2');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","margin-top: 5rem; width: 22rem");
 conjunto.appendChild(caja);
 

 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/Rest.jpeg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);


 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);
  


 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title");
 titulo.textContent = prueba[2].title;
 caja2.appendChild(titulo);

 const dire = document.createElement("p");
 dire.setAttribute("id","dire");
 dire.setAttribute("class","card-text");
 dire.textContent = prueba[2].dire;
 caja2.appendChild(dire);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = prueba[2].descr;
 caja2.appendChild(desb);
 


 verdadero = true;
};
if(prueba[3].title==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('container2');
 const caja = document.createElement("div");
 caja.setAttribute("id","cajaPL");
 caja.setAttribute("class","card");
 caja.setAttribute("style","margin-top: 5rem; width: 22rem");
 conjunto.appendChild(caja);


 const imagen = document.createElement("img");
 imagen.setAttribute("id", "imagenPL");
 imagen.setAttribute("src", "/img/Rest 4.jpg");
 imagen.setAttribute("class","card-img-top");
 caja.appendChild(imagen);
 

 const caja2 = document.createElement("div");
 caja2.setAttribute("id", "caja2");
 caja2.setAttribute("class","card-body");
 caja.appendChild(caja2);
 

 const titulo = document.createElement("h5");
 titulo.setAttribute("id","titulo");
 titulo.setAttribute("class","card-title");
 titulo.textContent = prueba[3].title;
 caja2.appendChild(titulo);


 const dire = document.createElement("p");
 dire.setAttribute("id","dire");
 dire.setAttribute("class","card-text");
 dire.textContent = prueba[3].dire;
 caja2.appendChild(dire);


 const desb = document.createElement("p");
 desb.setAttribute("id","desb");
 desb.setAttribute("class","card-text");
 desb.textContent = prueba[3].descr;
 caja2.appendChild(desb);
 




 verdadero = true;
}

 obtener2 = obtener;


}