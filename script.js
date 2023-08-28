setInterval(alterar, 1000);

function alterar(){
   let objeto = new Date();
   let horas = objeto.getHours();
   let minutos = objeto.getMinutes();
   let segundos = objeto.getSeconds();

   if (horas > 12 ){horas = horas -12; };

   //document.getElementById("digital").innerHTML = objeto.toLocaleTimeString();

   document.getElementById("segundos").style.transform="rotate("+((segundos*6)-90).toString()+"deg";
   document.getElementById("minutos").style.transform="rotate("+((minutos*6)-90).toString()+"deg)";
   ponteiroHora = (minutos / 60) * 30;
   document.getElementById("horas").style.transform="rotate("+(((horas*30)-90)+ponteiroHora).toString()+"deg)";


}

      