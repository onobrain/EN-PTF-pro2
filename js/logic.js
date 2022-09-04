//pop up show
document.querySelectorAll('#portfolio .gallery-image .cell img').forEach((image)=>{
    image.onclick=()=>{
        document.querySelector(".pop-up").style.display = "block";
        document.querySelector('.pop-up img').src = image.getAttribute('src');
    }
})
document.querySelector('.pop-up .close').addEventListener('click',()=>{
    document.querySelector('.pop-up').style.display = "none";
});
// open navbar tablet & mobile
const togglenav = document.querySelector('#hero .nav-icon');
togglenav.addEventListener('click',()=>{
    document.querySelector('#hero .nav').classList.toggle("open");
})
window.onscroll=()=>{
    document.querySelector('#hero .nav').classList.remove("open");
}
// preload
const preloader =  document.querySelector('.preload_container');
window.addEventListener('load',vanish)

function vanish(){
    preloader.classList.add('disappear');
}
// typing animation
var typed = new Typed(".typing",{
    // need change
    strings:["Photographer","filmmaker","video editor"],
    typeSpeed:100,
    backSpeed:50,
    loop:true,
});
// Sending emails via contact form
function sendEmail(){
    var params = {
        from_name : document.querySelector(".name").value, //input name selector
        email_id : document.querySelector(".email").value,//input email selector
        subject_id : document.querySelector(".subject").value,//input subject selector
        message_id : document.querySelector(".message").value, //input message eselector
    }
    emailjs.send("service_0rc23ee","template_na80qpo",params).then(function(res){
        alert("email sent successfuly!" + res.status);
    })
}
