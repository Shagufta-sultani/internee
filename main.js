let progress = document.querySelector(".progress-bar");
let Step = document.querySelectorAll(".step");
let Next = document.querySelectorAll(".next");
let Prev = document.querySelectorAll(".prev");

const inputs = document.querySelectorAll("input");

    const name = inputs[0].value.trim();
    const Email = inputs[1].value.trim();
    const CNIC = inputs[2].value.trim();
    const Mobile = inputs[3].value.trim();
    const Password = inputs[4].value.trim();
    const Conpassword = inputs[5].value.trim();

//     function  validateStep(){

//       var Email = document.getElementById("email").value.trim();
//       var CNIC = document.getElementById("number").value.trim();
//       var Mobile = document.getElementById("num").value.trim();
//       var Password = document.getElementById("password").value.trim();

//       if(Email == "" || CNIC == "" || Mobile == "" || Password == ""){
//         alert("No field can be left Empty!");
//         return;
//     }
// }

function showSummary(){

    const name = inputs[0].value;
    const email = inputs[1].value;
    const cnic = inputs[2].value;
    const mobile = inputs[3].value;

        document.querySelector(".summary").innerHTML = `
                <h2>Summary</h2>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>CNIC: ${cnic}</p>
                <p>Mobile: ${mobile}</p>
         `;
    };

console.log(Next);
console.log(Prev);

let currentStep = 0;

function showStep(index){

    Step.forEach((a) =>{
        a.classList.remove("active")
    })
    Step[index].classList.add("active");
};

function nextStep(e){

   e.preventDefault();

    if(currentStep < Step.length - 1 ){
      currentStep++;
      showStep(currentStep);
      ProgressBar();
      showSummary();
    }
}
function prevStep(e){
   e.preventDefault();
    if(currentStep > 0 ){
      currentStep--;
      showStep(currentStep);
       ProgressBar();
    }
}

Next.forEach(btn => btn.addEventListener("click", nextStep));
Prev.forEach(btn => btn.addEventListener("click", prevStep));
showStep(0);
 ProgressBar();

function ProgressBar (){
    const  progres = ((currentStep +  1) / Step.length )* 100;
    progress.style.width = progres + "%";
};
