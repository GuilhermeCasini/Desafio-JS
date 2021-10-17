 
    function mamaoPapaia() {
       document.getElementById("ma").innerHTML = "Mamão Papaia"; 
       document.getElementById("mostraTotalCompra").value = 4.85; 
     }
   
     function manga() {
       document.getElementById("ga").innerHTML = "Manga";
       document.getElementById("mostraTotalCompra").value = 6.85; 
     }

     function laranja() {
       document.getElementById("l").innerHTML = "Laranja";
       document.getElementById("mostraTotalCompra").value = 3.49; 
     }

     function melao() {
       document.getElementById("mel").innerHTML = "Melão";
       document.getElementById("mostraTotalCompra").value = 2.85; 
     }
     function melancia() {
        document.getElementById("lan").innerHTML = "Melancia";
        document.getElementById("mostraTotalCompra").value = 2.85; 
      }

     let count = 0; 
     function mama(){ 
     if (count++ == 1) { 
         alert("Esta item Mamão Papaia já esta na sua cesta"); 
       }
     }

     let coun = 0;
     function mang(){ 
     if (coun++ == 1) { 
         alert("Esta item Manga já esta na sua cesta"); 
       }
    }

    let cou = 0;
    function la(){  
    if (cou++ == 1) { 
        alert("Esta item Laranja já esta na sua cesta"); 
      }
    }

    let co = 0;
    function lao(){ 
    if (co++ == 1) { 
        alert("Esta item Melão já esta na sua cesta"); 
        
      }
    }
    let c = 0;
    function cia(){ 
    if (c++ == 1) { 
        alert("Esta item Melancia já esta na sua cesta"); 
        
      }
    }
      
      
 
   
//    window.onload= function calculos(){ 
   
//        function calcular(idcestaDoCliente, resultado){
//          const preco = document.querySelectorAll(`#${idcestaDoCliente}> li`)
//          const valorResultado = document.querySelector(`#${resultado}`);
   
//          let totalzinho=0;
        
//          for(let i of preco){
//            totalzinho+= Number (i.dataset.preco);
           
//          }
//          valorResultado.value= totalzinho;
   
       
//        }
//        calcular('cestaDoCliente','mostraTotalCompra')
//     }
