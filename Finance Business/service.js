const transition = document.querySelectorAll(".transition");

const observer = new IntersectionObserver((enitries) => {

    enitries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},{ threshold: 0.2 });

transition.forEach(trans =>{
    observer.observe(trans);
});

const ServiceSec = document.querySelector(".service-sec");
const Services = [
    {
        id: 1,
        img: "./img/stock-market-exchange-economics-investment-graph.jpg",
        h3: "Market Analysis",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae. Ab nesciunt doloremque dolorem eaque.",
        butt: "READ ME"
    },
    {
        id: 2,
        img: "./img/young-business-lady-female-director-sitting-office-desk-working-process-business-meeting-working-with-colleague-solving-business-tasks-office-collective-concept (1).jpg",
        h3: "Digital Currency",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae. Ab nesciunt doloremque dolorem eaque.",
        butt: "READ ME"
    },
    {
        id: 3,
        img: "./img/person-office-analyzing-checking-finance-graphs.jpg",
        h3: "Historical Data",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae. Ab nesciunt doloremque dolorem eaque.",
        butt: "READ ME"
    }
];

const serviceCont = Services.map((ele) => {
    return `
            <div class="serv-div">
                <img src="${ele.img}" alt="">
                <div class="ext">
                    <h3>${ele.h3}</h3>
                <p class="p1">${ele.para}</p>
                <button class="btn">${ele.butt}</button>
                </div>
            </div>
    `;
}).join("");

ServiceSec.innerHTML = serviceCont;


const BottService = document.querySelector(".left-sec");

const mainService = [
    {
        p: "LOREM IPSUM DOLOR SIT AMET",
        h2: "Our solutions for your ",
        H2: "business growth",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae maiores officia, doloribus iure inventore ex adipisci fuga tenetur, debitis explicabo. Perferendis magnam quos fugiat.",

        p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a quo ab repudiandae corporis magnam cupiditate optio aperiam qui labore.",
        btn: "READ MORE"
    }
];

const bottomServ = mainService.map((ele) => {
    return `
                <p class="P1">${ele.p}</p>
                <h2>${ele.h2} <span class="span">${ele.H2}</span></h2>
                <p class="p2">${ele.para}</p>
                <p class="p3">${ele.p1}</p>
                <button class="btn">${ele.btn}</button>
    `;
}).join("");

BottService.innerHTML = bottomServ;

