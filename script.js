
const loader = this.document.querySelector(".main-loader")
const main = document.querySelector("main")



document.onreadystatechange = function(){
   if(document.readyState !== "complete"){
      loader.className = "main-loader"
      main.className += " hide"
   }
   else{
      loader.className += " hide"
      main.className = "display"
   }
}



window.onscroll = function(){

   scrollFunction()
}


// ---------------------- toggleNavbars ------------------

function scrollFunction(){
   const toggleNav = document.querySelector(".toggle-nav")
  
   if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
      toggleNav.style.top = "0px"
   }

   else{
      toggleNav.style.top = "-500px"
   }
}






// -------------------------- navbar -----------------------

const menuIcon = document.querySelector(".icon")
const icon1 = document.querySelector("#icon1")
const icon2 = document.querySelector("#icon2")
const icon3 = document.querySelector("#icon3")
const navbar = document.querySelector("#navbars")
const description = document.querySelector(".description")
const navHeading = document.querySelector(".nav-heading")
const firstChildNav = navbar.firstElementChild


function menuFunction(){
   
   if(navbar.className === "navbars"){
      icon1.className += " rotate1"
      icon2.className += " hide"
      icon3.className += " rotate2"
      navbar.className += " responsive"
      description.className += " nav"
      menuIcon.className += " icon-margin"
      navHeading.className += " heading-margin"
      firstChildNav.className += " home-margin"
   }

   else{
      icon1.className = "icon1"
      icon2.className = "icon1"
      icon3.className = "icon1"
      navbar.className = "navbars"
      description.className = "description"
      menuIcon.className = "icon"
      navHeading.className = "nav-heading"
      firstChildNav.className = "navbar"
   }
}


// ---- responsive toggleNav ----

function toggleNavFunction(){
   const toggleIcon1 = document.querySelector("#toggle-icon1")
   const toggleIcon2 = document.querySelector("#toggle-icon2")
   const toggleIcon3 = document.querySelector("#toggle-icon3")
   const toggleNavHeading = document.querySelector(".toggle-nav-heading")
   const toggleNavbars = document.querySelector(".toggle-navbars")
   const toggleNav = document.querySelector(".toggle-nav")

   if(toggleNavHeading.className === "toggle-nav-heading"){
      toggleIcon1.className += " toggle-rotate1"
      toggleIcon2.className += " hide"
      toggleIcon3.className += " toggle-rotate2"
      toggleNavHeading.className += " responsive"
      toggleNavbars.className += " responsive"
      toggleNav.className += " responsive"

   }
   else{
      toggleIcon1.className = "icon1"
      toggleIcon2.className = "icon1"
      toggleIcon3.className = "icon1"
      toggleNavHeading.className = "toggle-nav-heading"
      toggleNavbars.className =  "toggle-navbars"
      toggleNav.className = "toggle-nav"
   }
}









// --------------- typewrite ----------------


animationText()

   let id = document.querySelector("#typing-animation")
   let text1 = "Python Developer"; 
   let text2 = "Aspiring Full-Stack Web Developer"

   let now = text1;

   let index = 0; 

   let arr = []


   function animationText(){

      setTimeout(() =>{

            if(index < now.length){
               arr.push(now[index])
               let newArr = arr.join("")
               //console.log(newArr)
               id.innerText = newArr + "|"
               index++;
               animationText()
            }
            else{
               id.innerText = "|"
               index = 0
               for(let i=0; i<45;i++){
                  arr.pop()
               }
               animationText()
               if(now === text1){
                  now = text2
               }
               else{
                  now = text1
               }
            }
      },200)
   };




// ---------- scroll function -------

window.addEventListener("DOMContentLoaded", function(event){
   event.preventDefault()

   const learnMore = document.querySelector(".learn-more")
   const about = document.querySelector("#about")

   learnMore.addEventListener("click", function(){

      about.scrollIntoView({behavior : "smooth"})
   })

});


// --------------- contact ----------------


(function(){
   emailjs.init("oQ31vm90CKjG9s9F3")
})()

document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent form submission

   emailjs.sendForm('service_5spbdec', 'template_yr1cypu', this)
       .then(function() {
         swal("Successfull!", "your message was sent!", "success");
       }, function(error) {
         swal("unsuccessfull!", "message not sent!", "error");
       });


      const input = document.querySelectorAll("input")
      const message = document.querySelector("#detail")

      for(let i=0; i<3; i++){
         input[i].value = ""
      }
      message.value = ""

});


