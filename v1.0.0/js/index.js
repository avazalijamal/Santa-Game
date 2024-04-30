window.addEventListener("load",function(){

 const sehne=document.querySelector("#sehne");
 const xal=document.querySelector("#xal");
 const can=document.querySelector("#can");
 const bonuslar=[];
 
 const width=window.innerWidth;
 const height=window.innerHeight;
 
 sehne.style.width=`${width}px`;
 sehne.style.height=`${height}px`;
 sehne.style.backgroundSize=`${width}px ${height}px`;
 var step=5;
 var XAL=0;
 var CAN=3;
 
 var x=0;

 xal.innerText=XAL;

 caniDeyis();

const santa={
   x:width-100-70,
   y:height-100-100,
   can:3,
   dom:document.createElement("div")
};
 
santa.dom.classList.add("sanat");
santa.dom.style.right=`${santa.x}px`;
santa.dom.style.top=`${santa.y}px`;

sehne.appendChild(santa.dom);
 



function caniDeyis(){
   can.innerHTML="";
   for(let i=1;i<=CAN;i++)
      can.innerHTML+=`<img src="./img/bonus/snowflake.png">`;
}



 function BonusYarat(){
   let dom=document.createElement("div");
   
   let x=0;
   let y=santa.y+10;//Math.floor(100+Math.random()*(height-250));
   let type=(Math.floor(Math.random()*10)%2==0)?true:false;


   dom.classList.add(type?"bonus":"bomba");
   
   dom.style.right=`${x}px`;
   dom.style.top=`${y}px`;

   sehne.appendChild(dom);

   bonuslar.push({dom,x,y,type});
 }


 function Hereket(){

      x-=step;
      sehne.style.backgroundPositionX=`${x}px`;
   
      for(let i=0;i<bonuslar.length;i++){
         bonuslar[i].x+=step;
         bonuslar[i].dom.style.right=`${bonuslar[i].x}px`;


         if(Mesafe(bonuslar[i].x,bonuslar[i].y,santa.x,santa.y)<=40){
            
            if(bonuslar[i].type){
               XAL++;
               xal.innerText=XAL;
            }else{
               CAN--;
               caniDeyis();
               
               if(CAN<=0){
                  do{
                     var izin=confirm("Oyunu uduzdunuz yeniden baslasinmi");
                  }while(!izin);

                  if(izin) window.open("index.html","_parent");
               }
               
            }

            sehne.removeChild(bonuslar[i].dom);
            bonuslar.splice(i--,1);

         }else if(bonuslar[i].x>=width){


            bonuslar.splice(i--,1);
         } 


      }

 }


 function Mesafe(x1,y1,x2,y2){
      x1+=20;
      y1+=20;
      x2+=35;
      y2+=50;
   return Math.round(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)));

 }



//   BonusYarat();

 setInterval(Hereket,200);
var interval=window.setInterval(BonusYarat,10000);


});