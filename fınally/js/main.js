 var section=document.getElementsByClassName("section");
 for(var  i = 0; i <section.length; i++){
     section[i].addEventListener('click',function(){
         this.classList.toggle("active");
        var pol=this.nextElementSibling;
        if(pol.style.display=="block"){
            pol.style.display="none";
        }

       else{
           pol.style.display="block"
       }

     })
 }

 var sectionlo=document.getElementsByClassName("sectionlo");
 for(var  i = 0; i <sectionlo.length; i++){
     sectionlo[i].addEventListener('click',function(){
         this.classList.toggle("active");
        var dol=this.nextElementSibling;
        if(dol.style.display=="block"){
            dol.style.display="none";
        }


       else{
           dol.style.display="block"
       }

     })
 }

 

var img=document.getElementById("jol");

function first(){
    img.src='img/img9.jpg';
}

        
function second(){
    img.src='img/img8.jpg';
}

        
function third(){
    img.src='img/img7.jpg';
}

        
function fourth(){
    img.src='img/img5.jpg';
}

        

function fifth(){
    img.src='img/img4.jpg';
}
     
function sixth(){
    img.src='img/img10.jpg';
}

        
  
  var myimage=document.getElementById("wol","");
  var myimage=document.getElementById("payin");
  var myiimage=document.getElementById("paying");
  var myimages=document.getElementById("pumb");
  var imgsArray=["img/img22.jpg","img/img22.jpg"];
  var imgstext=1;


  var imggArray=["img/img23.jpg","img/img23.jpg","img/img23.jpg"];
var imggtext=1;
  var imgaArray=["img/img24.jpg","img/img24.jpg","img/img24.jpg"];
 var imagtext=1;
  var imgArray=["img/img25.jpg","img/img25.jpg"];
 
  var imgtext=1;
  
  
 
 
 var prev=document.querySelector(".prev");
 var next=document.querySelector(".next");
 
 



function nextSlide(){
    wol.setAttribute("src",imgArray[imgtext]);
    payin.setAttribute("src",imgaArray[imagtext])
    paying.setAttribute("src",imggArray[imggtext]);
    pumb.setAttribute("src",imgsArray[imgstext]);
    
      
        imagtext++;
        
    
    }




 prev.addEventListener("click",function(){
     prevSlide()
     console.log("gol")
 })
     
 next.addEventListener("click",function(){
    nextSlide() 
   
    

    
})

var myimagel=document.getElementById("wol");
        var imgalArray=["img/img18.jpg","img/img18.jpg","img/img18.jpg"];
 var imagltext=1;
 var myuimage=document.getElementById("payin");
 var imgaliArray=["img/img19.jpg","img/img19.jpg"];
 var imaglitext=1;
 var myuismage=document.getElementById("paying");
 var imgalisArray=["img/img20.jpg","img/img20.jpg"];
 var imaglistext=1;
 var myuiimage=document.getElementById("pumb");
 var imgaliesArray=["img/img21.jpg","img/img21.jpg"];
 var imaglietext=1;
 
 

    function prevSlide(){
        
 wol.setAttribute("src",imgalArray[imagltext]);
 
 payin.setAttribute("src",imgaliArray[imaglitext]);
 paying.setAttribute("src",imgalisArray[imaglistext]);
 pumb.setAttribute("src",imgaliesArray[imaglietext]);







 imagltext++;
   
        

    }
  
  
  
    var imgslide=document.getElementById("img47");
    var imgtslide=document.getElementById("img50");
    var imgfslide=document.getElementById("img49");
    
    var slideArray=["img/img54.jpg","img/img54.jpg"];
    var slidetext=1;
    var slidesArray=["img/img52.jpg","img/img52.jpg","img/img52.jpg"];
    var slidestext=1;
    var slidetArray=["img/img53.jpg","img/img53.jpg","img/img53.jpg"];
 
  var slidettext=1;
  
  
 var firstli=document.querySelector(".img101");
 var lastli=document.querySelector(".img102");

 
 function lastSlide(){
    img47.setAttribute("src",slideArray[slidetext]);
    img50.setAttribute("src",slidesArray[slidestext]);
    img49.setAttribute("src",slidetArray[slidettext]);
    
    
    slidettext++;
        
        
    
    }

    var imgaslide=document.getElementById("img47");
    var imgwslide=document.getElementById("img50");
    var imgqslide=document.getElementById("img49");
    
    var slidewArray=["img/img47.jpg","img/img47.jpg"];
    var slidewtext=1;
    var sliderArray=["img/img50.jpg","img/img50.jpg","img/img50.jpg"];
    var slidertext=1;
    var slideyArray=["img/img49.jpg","img/img49.jpg","img/img49.jpg"];
 
  var slideytext=1;
  






 function firstliSlide(){
    img47.setAttribute("src",slidewArray[slidewtext]);
    img50.setAttribute("src",sliderArray[slidertext]);
    img49.setAttribute("src",slideyArray[slideytext]);
    
    
    slideytext++;
       
 }


    
 firstli.addEventListener("click",function(){
    firstliSlide()
    
    
})
    
lastli.addEventListener("click",function(){
   lastSlide() 
   console.log("ggg")
  
   

   
})



var imgcar=document.getElementById("img59");
var imgcars=document.getElementById("img60");
var imgcarse=document.getElementById("img61");
var imgcarsol=document.getElementById("img62");

var askArray=["img/img63.jpg","img/img63.jpg"];
var asktext=1;
var yozArray=["img/img64.jpg","img/img64.jpg","img/img64.jpg"];
var yoztext=1;
var toxArray=["img/img65.jpg","img/img65.jpg","img/img65.jpg"];
var toxtext=1;

var gelArray=["img/img66.jpg","img/img66.jpg","img/img66.jpg"];

var geltext=1;


 
var birinci=document.querySelector(".sol201");
var ikinci=document.querySelector(".sol202");


birinci.addEventListener("click",function(){
    birinciSlide()
    
    
})
    
ikinci.addEventListener("click",function(){
   ikinciSlide() 
   console.log("ggg")
  
   

   
})

function ikinciSlide(){
    img59.setAttribute("src",askArray[asktext]);
    img60.setAttribute("src",yozArray[yoztext]);
    img61.setAttribute("src",toxArray[toxtext]);
    img62.setAttribute("src",gelArray[geltext]);
    
    
    geltext++;
        
        
    
    }


    var imgtop=document.getElementById("img59");
    var imgtops=document.getElementById("img60");
    var imgtopst=document.getElementById("img61");
    var imgtopla=document.getElementById("img62");
    
    var torArray=["img/img59.jpg","img/img59.jpg"];
    var tortext=1;
    var tokArray=["img/img60.jpg","img/img60.jpg","img/img60.jpg"];
    var toktext=1;
    var tonArray=["img/img61.jpg","img/img61.jpg","img/img61.jpg"];
    var tontext=1;
    
    var toyArray=["img/img62.jpg","img/img62.jpg","img/img62.jpg"];
    
    var toytext=1;
    
    function birinciSlide(){
        img59.setAttribute("src",torArray[tortext]);
        img60.setAttribute("src",tokArray[toktext]);
        img61.setAttribute("src",tonArray[tontext]);
        img62.setAttribute("src",toyArray[toytext]);
        
        
        toytext++;
            
            
        
        }