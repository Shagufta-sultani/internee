let progressBar = document.querySelector("#progress-bar");
let fileInput = document.querySelector("#fileInput");
let Btn = document.querySelector("#browseBtn");
let dropArea = document.querySelector(".drop-area");

function startProgress(callback){

    let progress = 0;
    progressBar.style.width = "0%";
    progressBar.style.padding = "2rem";

    const interval = setInterval(() =>{
        progress += 10;
    progressBar.style.width = progress + "%";

    if(progress >= 100 ){
        clearInterval(interval);
        callback();
    }
    }, 300);
 }
Btn.addEventListener("click", () =>{
    fileInput.click();
});

fileInput.addEventListener("change", function(){
    const file = fileInput.files[0];

    if (!file) return;

    const  allowedTypes = [
        "image/jpg",
        "image/png",
        "image/gif"
    ];

    if(!allowedTypes.includes(file.type)){
        alert("JPG, PNG, GIF");
        return;
    }
    startProgress(() =>{
        console.log("Progress Complete");
        
    })

    const reader = new FileReader();

        reader.onload = function (e) {

            startProgress(() =>{
                
                document.getElementById("preview").innerHTML= `<img style="width:200px" src="${e.target.result}" alt="Preview">`;
               const img = document.querySelector("img");
               img.style.width = "300px";
                 img.style.marginTop = "2rem";
                img.style.borderRadius = "1rem";

                localStorage.setItem("UploadImage", e.target.result);
            })
        };
        reader.readAsDataURL(file);
    });

    const savedImage = localStorage.getItem("UploadImage");
    if(savedImage){
       document.getElementById("preview").innerHTML = `<img src="${savedImage}"
       style="width:300px; margin-top:2rem; border-radius: 1rem ;">`;
    }

dropArea.addEventListener("dragover", (e) =>{
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    console.log(file);
});

