/*Prompt*/
let name=prompt("Lutfen İsminizi Giriniz!");
let myName=document.querySelector("#myName");
myName.innerHTML=`${name}`
/*Clock*/
window.onload=showTime;
function showTime(){


    var time=new Date();
    var d=time.getDay();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time. getSeconds();


    var gunler=["Pazartesi","Salı","Carsamba","Persembe","Cuma","Cumartesi","Pazar"]
   switch(d){
       case 1:
           d=gunler[0];
        break;
        case 2:
            d=gunler[1];
        break;
        case 3:
            d=gunler[2];
        break;
        case 4:
            d=gunler[3];
        break;
        case 5:
            d=gunler[4];
        break;
        case 6:
            d=gunler[5];
        break;
        case 7:
            d=gunler[6];
        break;      
   }
    
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);

    let tarih=document.querySelector("#myClock")
    tarih.innerHTML=`${h}:${m}:${s}    ${d}`

    var zaman;
    zaman = setInterval("showTime()",1000);
}
function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

function days(){
    
}
