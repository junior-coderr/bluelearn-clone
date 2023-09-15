const firstPage = document.querySelector('.first-page');
const iconsName = ['bi-palette2','bi-chat-left-text-fill','bi-snow','bi-paragraph','bi-pentagon-fill','bi-postage','bi-shield-fill']

for(var i = 0; i < iconsName.length; i++) {
    let icon = document.createElement('i');
    icon.classList.add('bi');
    icon.classList.add(iconsName[i]);
    icon.classList.add('icons');
    firstPage.appendChild(icon);
    
    icon.style.size=Math.round(Math.random()*100)+'px';
    icon.style.top = Math.round(Math.random() * window.innerHeight) + 'px';
    icon.style.left = Math.round(Math.random() * window.innerWidth) + 'px';
}

function b(c){
    let b = document.querySelector('#b');
    if(c==true){
        b.checked=true;
    }
    if(b.checked) {
        b.checked = false;
        document.querySelector('.first-parent-header').style.backgroundColor='transparent';
    }else{
        b.checked= true;
        document.querySelector('.first-parent-header').style.backgroundColor='#121212';
    }
}



















let scroll = document.querySelector('.scroll');
const third = document.querySelector('.third');
const scrollSide = document.querySelector('.scroll-side');
const headerParent = document.querySelector(".header-parent");



let options = {
    root:null,
    rootMaargin:'0px',
    threshold:.89,
}




const observer = new IntersectionObserver((entries,observer)=>{

if((entries[0].isIntersecting) == true){
    entries[0].target.style.position = 'fixed';
    // entries[0].target.children[0].style.overflow = 'scroll';
    document.body.style.overflow = 'hidden';    
   
    scrollSide.addEventListener("wheel",wheelFun);
    



    if(entries[0].boundingClientRect.y > 0){
        scrollSide.scrollBy(50,0);

        // console.log('from: UP');
    }else{
        // console.log('from: down');
         scrollSide.scrollBy(-50,0);

    }
    
}

},options);




function wheelFun(e){
    scrollSide.scrollBy((e.deltaY),0);

}

const wheel = scrollSide.addEventListener("wheel",wheelFun);
const windowWheel = window.addEventListener("wheel",(e) =>{
   if(e.deltaY > 0){
    headerParent.style.top='-100px';
    b(true);
    document.querySelector('#a').checked = false;
   }else if(e.deltaY < -2){
    headerParent.style.top='0px';

   }
});


scrollSide.addEventListener('scroll',(e) => {
// console.log(e.target.scrollLeft);


        if(e.target.scrollLeft == 0){
        third.style.position = 'relative';    
        document.body.style.overflow = 'scroll';
    
        scrollSide.scrollIntoView({behavior:"smooth",block:"center"});
        window.scrollBy(0,-100);
        
        
        scrollSide.removeEventListener("wheel",wheelFun);

    }else if(e.target.scrollLeft > 2707){
        third.style.position = 'relative';    

        document.body.style.overflow = 'scroll';

        scrollSide.scrollIntoView({behavior:"smooth",block:"center"});
        
        window.scrollBy(0,150);
        scrollSide.removeEventListener("wheel",wheelFun);
     
     console.log('r');

        
    }

    
});




observer.observe(third);

let prewE = null;
let prewE2 = null;

function expand(e){

    e.classList.toggle('black');
    if(prewE != null){
        prewE.classList.toggle('black');
    }
    // if(window.innerWidth < 730){

        console.log('r');
        
        e.nextElementSibling.classList.toggle('block');
        // e.style="background-color:black; color:white;";
        setTimeout(function(){
            e.nextElementSibling.style.transform='scaleY(1)';
        },100);
        
        if(prewE != null){
            prewE.nextElementSibling.classList.toggle('block');
        
            // prewE.style="background-color:white; color:black;";
            setTimeout(function(){
                prewE.nextElementSibling.style.transform='scaleY(0)';
                

                    prewE = e;

            },100);
            // console.log('p');   
        }else{
            prewE = e;
        }

    // }else{
        // prewE2 = e;
        let clone = e.nextElementSibling.cloneNode(true);
        clone.style.transform='scaleY(1)';
        clone.style.display='block';
        console.log(clone);
        if(document.querySelector(".answer").children.length ==0){

            document.querySelector(".answer").appendChild(clone);
        }else{
            document.querySelector(".answer").replaceChild(clone,document.querySelector(".answer").children[0]);
        }
        
        // console.log(e.nextElementSibling);

    // }
}

expand(document.querySelector(".elemC"));
