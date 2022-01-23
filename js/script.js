let pagMen = document.getElementById('pagMen');
let totP = document.getElementById('totPag');
let tzAnual;
let net = document.getElementById('monNet');

let doce = document.getElementById('doce');
let vein = document.getElementById('veinti');
let treint = document.getElementById('treinta');
let tz=8.9;
let tzMes;
let mesCant =12;
let CantDes;




doce.addEventListener("click",function(){modvalue12(); Sim();},true);
vein.addEventListener("click",function(){modvalue24(); Sim();},false);
treint.addEventListener("click",function(){modvalue36(); Sim();},false);





function modvalue12(){
    CantDes = parseFloat(document.getElementById('cantDes').value);
    mesCant=12;
    console.log(mesCant);
    tz = parseFloat(document.getElementById('tzAnual').value);
    tz= tz/100; 
    
    console.log(CantDes);
    tzAnual = CantDes * (tz);  
    console.log(tzAnual); 

 }
 function modvalue24(){
    CantDes = parseFloat(document.getElementById('cantDes').value);
    mesCant=24;
    tz = parseFloat(document.getElementById('tzAnual').value);
    tz= tz/100;
    console.log(mesCant);
    tzAnual = CantDes * (tz);
    tzAnual= tzAnual*2;   

}
function modvalue36(){
    CantDes = parseFloat(document.getElementById('cantDes').value);
    mesCant=36;
    tz = parseFloat(document.getElementById('tzAnual').value);
    console.log(mesCant);
    tz= tz/100;
    tzAnual = CantDes * (tz);
    tzAnual= tzAnual*3;

}

console.log(mesCant);
 function Sim(){      
    
    

            let comi=348;      
            
            tzMes=tz/mesCant;
            let Mes=(CantDes / mesCant) + (tzMes);
            let tot = (CantDes + comi) + tzAnual;
            let neto = CantDes - comi;
            console.log(mesCant)
            pagMen.innerHTML= '$'+ (new Intl.NumberFormat('es-MX').format(Mes.toFixed(2)));
            
            net.innerHTML = '$'+ (new Intl.NumberFormat('es-MX').format(neto.toFixed(2))); 
            totP.innerHTML = '$'+ (new Intl.NumberFormat('es-MX').format(tot.toFixed(2)));
   }
    

    let btCan= document.getElementById('cantDes');
    let btTz= document.getElementById('tzAnual');
    let select = document.getElementById("select");
    let selectValue=document.getElementById("selectValue");
    let select1 = document.getElementById("select1");
    let selectValue1=document.getElementById("selectValue1");

    selectValue.innerHTML=btCan.value;
selectValue1.innerHTML=btTz.value;

    function selectNum(){
        
        selectValue.innerHTML=CantDes;
        let cont1;
        if(CantDes==10000){
            cant1=5;
            console.log(selectValue);

        }
        if(CantDes==20000){
            cant1=30;
            console.log(selectValue);

        }
        if(CantDes==30000){
            cant1=50;
            console.log(selectValue);

        }
        if(CantDes==40000){
            cant1=74;

        }
        if(CantDes==50000){
            cant1=94;

        }

        console.log(selectValue.value);
        console.log(CantDes);
        
        selectValue.style.left=cant1+"%";
        
    
    }

    function selectTz(){
        
        tz=tz*100;
        tz.toFixed(2);
        selectValue1.innerHTML=tz;
        
        let cont2;
        if(tz==8.9){
            cont2=5;

        }
        if(tz==12.9){
            cont2=50;

        }
        if(tz==16.9){
            cont2=94;

        }
        selectValue1.style.left=cont2 +"%";

    }
    