const Hamburger = document.querySelector(".hamburger");
const MobileM = document.querySelector(".mobile-menu");

const navLink = document.querySelector('.navbar-link');


window.addEventListener('scroll', function(){
    
    if( window.pageYOffset > 100 ){
        navLink.style.backgroundColor = "#302c2cf5";
        navLink.style.boxShadow = ' 0 10px 20px rgba(0, 0, 0, 0.5)';
    } else{
    navLink.style.backgroundColor = '';
    navLink.style.boxShadow = '';

    }
});

Hamburger.addEventListener('click', () =>{
    Hamburger.classList.toggle('active');
    MobileM.classList.toggle('active');
});
 
const Transition = document.querySelectorAll(".Transition");
const Observer = new IntersectionObserver((enitries) => {

    enitries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},{ threshold: 0.2 });

Transition.forEach(trans =>{

    Observer.observe(trans);
});

let images = [
    {
        id: 1,
     img: "./img/person-office-analyzing-checking-finance-graphs.jpg",
     color: "rgba(85, 82, 81, 0.7)"

    },
    {
        id: 2,
     img: "./img/stock-market-exchange-economics-investment-graph.jpg",
      color: "rgba(85, 82, 81, 0.7)"

    },
    {
        id: 3,
      img: "./img/young-business-lady-female-director-sitting-office-desk-working-process-business-meeting-working-with-colleague-solving-business-tasks-office-collective-concept (1).jpg",
     color: "rgba(85, 82, 81, 0.7)"
    }
];

const Slides = document.querySelectorAll(".slide");
let current = 0;

Slides.forEach((slide, i) =>{

    slide.style.backgroundImage = `linear-gradient(${images[i].color}, ${images[i].color}), url('${images[i].img}')`;

});

Slides[0].classList.add("active");

function Background(){

    Slides[current].classList.remove("active");
    current = (current + 1) % images.length;
    Slides[current].classList.add("active")
}
setInterval(Background, 9000);



const MainContent = document.querySelector(".main-con");
let MainCont =[
    {
        id: 1,
        para: "WE ARE READY TO HELP YOU",
        heading: "FINANCIAL ANALYSIS & CONSULTING",
        para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis dicta quibusdam, quos doloribus nisi.",
        button:"CONTACT US"
    }
];

const Content = MainCont.map((ele) =>{ 
     return `
            <p class="para">${ele.para}</p>
            <h1>${ele.heading}</h1>
            <p>${ele.para1}</p>
            <button class="btn">${ele.button}</button>
 `;
}).join("");

 MainContent.innerHTML = Content;
