const Intro = document.querySelector(".intro");


const About = [
    {
        id: 1,
        name: "Shagufta Fidaullah",
        nickName: "Meenu",
        major:" Computer Science",
        Uni: "Baltistan University Skardu",
        current: "6th Semester Completed",
        Tech: ["Programming", "AI", "Learning New Technologies"],
        Hobbies: [ "Sketching", "Learning new Skills", "Reading"],
        para: "Thank You Internee.pk for this amazing opportunity. I`m excited to learn  and  contribute during this Internship.",
        Goal: "My future goal is to gain practical skills in programming and web development during this internship. I want to work on real projects, improve my coding skills, and  build my professional network with Internee.pk.❤️"
    }
]

const AboutMe = About.map((ele)=>{
    return `
    <h2>Personal Info</h2>
    <h3>Name:</h3>
    <p>${ele.name}</p>
    <h3>NickName:</h3>
    <p>${ele.nickName}</p>

    <h2>Academic Background</h2>
    <h3>Major:</h3>
    <p>${ele.major}</p>
    <h3>University:</h3>
    <p>${ele.Uni}</p>
    <h3>Current Year of Study:</h3>
    <p>${ele.current}</p>

    <h2>Tech Interests:</h2>
    <p>${ele.Tech}</p>

    <h2>Hobbies and Interests:</h2>
    <p>${ele.Hobbies}</p>

    <h2>Thanks for Internee.pk:</h2>
    <p>${ele.para}</p>

    <h2>Future Goals:</h2>
    <p>${ele.Goal}</p>
    `;
}).join("");
 Intro.innerHTML = AboutMe;
