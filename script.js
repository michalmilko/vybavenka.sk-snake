/////////////////////////////////////////////////////////
///////////////////////// SNAKE /////////////////////////
/////////////////////////////////////////////////////////

///////////////////////DEKLARACIE///////////////////////
var sirkasnake=50;
var vyskasnake=50;

var pohyb=document.getElementById("snake");
var vloz=document.getElementById("celahra");

pohyb.style.width=sirkasnake+"px";
pohyb.style.height=vyskasnake+"px";

var fps=7;
var rychlost=1;

var dolee, horee, lavaa, pravaa;
var poslednetlacitko;
var x,y;
var jedlokocka;
var vytor;
var vstuphore=200;
var vstupstrana=200;
var aktivitaupdown, aktivitaleftright;
var mimohry=true;


//KLAVESNICA A VOLANIE HLAVNEJ FUNKCIE
addEventListener("keydown", pohnut);
 
//HLAVNA FUNKCIA
function pohnut(event){
 
//STLACENIE UP TLACITKA
      if(event.key=="ArrowUp" && poslednetlacitko !== "ArrowDown" && poslednetlacitko !== "ArrowUp" && mimohry==true){

              //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
               clearInterval(pravaa);
               clearInterval(lavaa);
               //OZNACENIE Z KTOREJ STRANY PRICHADZA
               aktivitaupdown=true;
               //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
               horee= setInterval(ide1,fps);
         //SPUSTENIE FUNKCIE-POHYB
         function ide1(){
                                 //POHYB PO SACHOVNICI
                                 switch(vstupstrana){
                                 case 0:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                                                      
                                 break;
                                 case 50:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 100:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 150:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 200:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                   
                                 break;
                                 case 250:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 300:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 350:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                 case 400:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                   
                                 break;
                                 case 450:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    
                                 break;
                                   default:
                                      //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                       if(aktivitaleftright==true){
                                      
                                       vstupstrana-=rychlost;
                                       pohyb.style.left=vstupstrana+"px";

                                    }else{
                                       
                                       vstupstrana+=rychlost;
                                       pohyb.style.left=vstupstrana+"px";
                                    }

                                 }
                          
                              // ss();
                              //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                              if(vstuphore<0){

                                 mimohry=false;
                                 
                              }else{
                                 mimohry=true;
                               }
                           //VRATIT AK MIMO SACHOVNICE
                           if(vstuphore==-50){
                              vstuphore=500;
                           }
                       
                        }
                   
                    //OZNACENIE POSLEDNEHO TLACITKA
                    poslednetlacitko=event.key;
                  
                  }

//STLACENIE LEFT TLACITKA   

      
      if(event.key=="ArrowLeft" && poslednetlacitko !== "ArrowRight" && poslednetlacitko !== "ArrowLeft" && mimohry==true){

            //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
            clearInterval(dolee);
            clearInterval(horee);
            //OZNACENIE Z KTOREJ STRANY PRICHADZA
            aktivitaleftright=true;
            //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
            lavaa= setInterval(ide3,fps);
   //SPUSTENIE FUNKCIE-POHYB
   function ide3(){

                 //POHYB PO SACHOVNICI
                  switch(vstuphore){
                     case 0:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 50:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 100:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 150:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 200:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 250:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 300:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 350:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                       
                     break;
                     case 400:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     case 450:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        
                     break;
                     default:
                        //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                        if(aktivitaupdown==true){
                       
                        vstuphore-=rychlost;
                        pohyb.style.top=vstuphore+"px";

                     }else{
                        
                        vstuphore+=rychlost;
                        pohyb.style.top=vstuphore+"px";
                     }

                  }

                   // ss();
                   //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                  if(vstupstrana<0){
                     mimohry=false;
                     
                  }else{
                     mimohry=true;
                     
                  }
                 
                  //VRATIT AK MIMO SACHOVNICE
                  if(vstupstrana==-50){
                  vstupstrana=500;
                  }
                   
              
                  }
      
              //OZNACENIE POSLEDNEHO TLACITKA
              poslednetlacitko=event.key;


         }
 //STLACENIE DOWN TLACITKA                         
         if(event.key=="ArrowDown" && poslednetlacitko !== "ArrowUp" && poslednetlacitko !== "ArrowDown" && mimohry==true){

                  //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
                  clearInterval(pravaa);
                  clearInterval(lavaa);
                  //OZNACENIE Z KTOREJ STRANY PRICHADZA
                  aktivitaupdown=false;
                  //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                  dolee= setInterval(ide2,fps);
            //SPUSTENIE FUNKCIE-POHYB
            function ide2(){

                           //POHYB PO SACHOVNICI
                           switch(vstupstrana){
                              case 0:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 50:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 100:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 150:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 200:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 250:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 300:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 350:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 400:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                              case 450:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 
                              break;
                                 default:
                                    //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                    if(aktivitaleftright==true){
                                    
                                    vstupstrana-=rychlost;
                                    pohyb.style.left=vstupstrana+"px";

                                 }else{
                                    
                                    vstupstrana+=rychlost;
                                    pohyb.style.left=vstupstrana+"px";
                                 }
                           }
                        //   ss();

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(vstuphore>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                         
                           //VRATIT AK MIMO SACHOVNICE
                           if(vstuphore>=500){
                           vstuphore=0-vyskasnake;
                           }
                           }
                     
                           //OZNACENIE POSLEDNEHO TLACITKA
                           poslednetlacitko=event.key;
                   
                  
   } 
   
   
//STLACENIE RIGHT TLACITKA
   if(event.key=="ArrowRight" && poslednetlacitko !== "ArrowLeft" && poslednetlacitko !== "ArrowRight" && mimohry==true){

                     //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
                     clearInterval(dolee);
                     clearInterval(horee);
                     //OZNACENIE Z KTOREJ STRANY PRICHADZA
                     aktivitaleftright=false;
                     //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                     pravaa= setInterval(ide4,fps);


            //SPUSTENIE FUNKCIE-POHYB
            function ide4(){

                           //POHYB PO SACHOVNICI           
                            switch(vstuphore){
                               case 0:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 console.log("0");

                              break;
                              case 50:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 100:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 150:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 200:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 250:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 300:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 350:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 400:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                              case 450:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 
                              break;
                               default:
                                  //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                 if(aktivitaupdown==true){
                                    
                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";

                                 }else{
                                    
                                    vstuphore+=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                 } 
                           }
                           // ss();

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(vstupstrana>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                           //POHYB MIMO SACHOVNICE
                           if(vstupstrana>=500){
                           vstupstrana=0-sirkasnake;
                           }
                           }
                         
                           //OZNACENIE POSLEDNEHO TLACITKA
                           poslednetlacitko=event.key;
                
          }  
         }     
      
 
   // console.log(pohnut.event) ; 
   

//  trafa();    
//  function ss(){

//    var sirkakocky2 = jedlokocka.y+50;
//    var sirkakocky1 = jedlokocka.y-25;
//    var vyskakocky2 = jedlokocka.x+50;
//    var vyskakocky1 = jedlokocka.x-25;

//   if(vstupstrana>sirkakocky1 && vstupstrana<sirkakocky2 && vstuphore>vyskakocky1 && vstuphore<vyskakocky2){
//    trafa(); 
//   }
// }

  // vytvorenie jedla
// function trafa(vytor){
   
  
//    jedlokocka={
//       sirka: 50,
//       vyska: 50,
//        x: Math.ceil(Math.random()*450),
//        y: Math.ceil(Math.random()*450)
//        };
  
       
     
// vytor=document.createElement("div");
// vytor.style.background="blue";
// vytor.style.height=jedlokocka.sirka+"px";
// vytor.style.width=jedlokocka.vyska+"px";

// vloz.appendChild(vytor);
// vytor.style.position="absolute";
// vytor.style.top=jedlokocka.x+"px";
// vytor.style.left=jedlokocka.y+"px";

// }



// var test=function auto(){
//    var x=10;
//    return x;
// };
// console.log(test);