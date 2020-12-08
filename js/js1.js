let minSercen = Array.from(document.querySelectorAll('.te-sercen li')),
    sercenLi1 = document.getElementById('tli1'),
    sercenLi2 = document.getElementById('tli2'),
    sercenLi3 = document.getElementById('tli3'),
    sercenLi4 = document.getElementById('tli4'),
    sercenLi5 = document.getElementById('tli5');
let plus = 1;
actS();

    function actS(){
        remove();
        minSercen[plus-1].classList.add('actsercen');
    }
    sercenLi1.onclick = function acts1(){
        plus = 1;
        actS();

    };
    sercenLi2.onclick = function acts1(){
        plus = 2;
        actS();
    };
    sercenLi3.onclick = function acts1(){
        plus = 3;
        actS();
    };
    sercenLi4.onclick = function acts1(){
        plus = 4;
        actS();
    };
    sercenLi5.onclick = function acts1(){
        plus = 5;
        actS();
    };
    
    function remove(){
        minSercen.forEach(function(li){
            li.classList.remove('actsercen');
        });
    };

let minPrsic  = Array.from(document.querySelectorAll('.te-prsic li')),
    prsli1 = document.getElementById('pli1'),
    prsli2 = document.getElementById('pli2'),
    prsli3 = document.getElementById('pli3'),
    prsli4 = document.getElementById('pli4'),
    prsli5 = document.getElementById('pli5'),
    plusP = 1 ;

    function actP()
    {
        removep();
        minPrsic[plusP-1].classList.add('actsercen');
    }
    prsli1.onclick = function(){
       
        plusP = 1;
         actP();
    };
    prsli2.onclick = function(){
        
        plusP = 2;
        actP();
    };
    prsli3.onclick = function(){
       
        plusP = 3;
         actP();
    };
    prsli4.onclick = function(){
       
        plusP = 4;
         actP();
    };
    prsli5.onclick = function(){
        
        plusP = 5;
        actP();
    };
    function removep(){
        minPrsic.forEach(function(li){
            li.classList.remove('actsercen');
        });
    };

let imgBox = Array.from(document.querySelectorAll('.box-img img')),
    imgNav = Array.from(document.querySelectorAll('.img-s ul li')),
    priveBut = document.getElementById('pe'),
    nextBut = document.getElementById('nt'),
    numImg = 1;


nextBut.onclick = next;
priveBut.onclick = prive;


function next()
{
    numImg++;
    actImgnav();
};
function prive()
{ 
    actImgnav();
    numImg--;
   
};

actImgnav();
function actImgnav(){
    reImg();
    imgBox[numImg-1].classList.add('actimg');
    imgNav[numImg-1].classList.add('acts-i');

    if(numImg == 1){
        priveBut.classList.add("actdis1");
    } else { 
        priveBut.classList.remove("actdis1");
    }

    if(numImg == 3){
        nextBut.classList.add("actdis1");
    } else { 
        nextBut.classList.remove("actdis1");
    }
}
function reImg(){
    imgNav.forEach(function(li){
        li.classList.remove('acts-i'); 
    })
    imgBox.forEach(function(img){
        img.classList.remove('actimg'); 
    })
}

let butSe = document.getElementById('butmin'),
    ch = document.getElementById('search'),
    co = document.getElementById('cont');

butSe.onclick = actmins;

function actmins()
{
 ch.classList.add('actsearchmin');
 co.classList.remove('actmin')
};