const RightAb = document.querySelector(".right-about ");

const rigthAbout = [
    {
        p: "WHO WE ARE",
        h2: "Get to know about ",
        head: " our company",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quibusdam labore repellat dolores quia sed impedit dignissimos voluptates magnam quidem, tempora natus corporis. Consequuntur, totam.",
        pa: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sint amet excepturi nemo, vero laudantium.",
        btn: " READ MORE"
    }
];

const AboutSec = rigthAbout.map((a) => {
    return`
                <p class="ap">${a.p}</p>
                <h2>${a.h2}<span class="span">${a.head}</span></h2>
                <p class="apara">${a.para}</p>
                <p class="apara">${a.pa}</p>
                <button class="btn">${a.btn}</button>
    `;
}).join("")

RightAb.innerHTML = AboutSec;


const AboutDot = document.querySelector(".about-content");

const aboutdot = [
    {
        id: 1,
        h3: "George Walker",
        para: "Chief Fiancial Analysis ",
        para1: "`Lorem ipsum dolor sit amet consectetur adipisicing elit.  optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Assumend ducimus?`" 
    },
    {
        id: 2,
        h3: "George Walker",
        para: "Chief Fiancial Analysis ",
        para1: "`Lorem ipsum dolor sit amet consectetur adipisicing elit.  optioLorem ipsum, dolor sit amet consectetur adipisicing elit. Assumend ducimus?`" 
    },

];
const Dot = aboutdot.map((b) =>{
    return `
               <div class="about1 transition-delay: 0.2s">
                <h3>${b.h3}</h3>
                <p class="AbouP">${b.para}</p>
                <p class="aboutp">${b.para1}</p>
                </div>  
    `;
}).join("")

AboutDot.innerHTML = Dot;



