let nip,b;
let saldo=50000;
b=prompt("ingrese su nombre:");
nip=parseInt(prompt("Ingrese el nip: "));

if (nip==111){
let opcion=parseInt(prompt("Bienvenido "+b+", que desea realizar  "+"\n\n  1. consultar saldo   "+" \n\n   2. retiro.   "+" \n\n     3.Para donar  "+" \n\n   ingresa el numero de lo que deseas realizar: "));

switch(opcion){

    default:
     document.write("Ecoja una opcion");

    case 1:
        document.write("Tu saldo es de: "+saldo);
break;
     case 2:
    let banco= parseInt(prompt("¿Seleccione una opcion de banco a retirar"+" \n\n 1. Santander."+" \n\n   2. Banamex."+" \n\n   3. Bienestar."+" \n\n Escoga el numero de su banco: "));
      switch(banco){
     case 1:
     let r2=parseInt(prompt("¿cuanto retirará?"));
    if (r2<50000){
     let c1=saldo-(r2+35);
    let z=r2+35;
    document.write("Se le desconto un $35, <br>Su retiro total es: "+z+".  <br> Saldo en cuenta es: "+c1);
      }
     else
     document.write("Saldo insuficiente");
     break;

    case 2:
    let e1=parseInt(prompt("¿Cuanto retirará? "));
    if (e1<50000){
     let u=e1+25; 
     let c2=saldo-(e1+25);     
     window.alert(" Se le cobrara 25 por el retir,  <br>Su retiro total es: "+u+".  <br> saldo en cuenta es: "+c2);
      }
       else
      document.write("saldo insuficiente");
      break;

      case 3:
     let y1=parseInt(prompt("Cuanto va a retirar? "));
     if (y1<50001){
    let d3=saldo-(y1 +20);
     let p0=y1+20;
     window.alert ("Menos 20 por el retiro, <br> Su retiro total es: "+p0+".   "+"  <br> saldo en cuenta es: "+d3);
     }
     else
     document.write("saldo insuficiente");
    break;
default:
   window.alert("Por favor seleccione una opcion de las anteriores");
    break;
       } 
       break;
            
   case 3:{
                
  let h6=parseInt(prompt("Desea donar a... "+" \n\n  1.CECyTE Puebla $100. "+"  \n\n   2.Teleton $50. " ));
                
  switch(h6){
   case 1:
            
    let t6=saldo-100;
    window.alert("Donó  $100 a CECyTE Puebla."+"\n"+"Saldo en cuenta: $"+t6);
     break;
                
      case 2:
               
     let kl=saldo-50;
       document.write(" Donó a Teletón."+"\n"+"Saldo en cuenta: $"+kl);
                        
     break;
     default:
      document.write(" Elija un opcion  anterior");
      break;

                   
       }}

            
      }
}
else {
document.write("Su nip ingresado es incorrecto");}