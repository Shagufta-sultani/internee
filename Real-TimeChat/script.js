let Main = document.querySelector(".main");
let Input = document.querySelector(".input");
let Button = document.querySelector(".btn");

console.log(Button);

let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
loadMessages();

Input.addEventListener("keypress", function(e){
    if(e.key === "Enter") sendMessage();
});

function getAReply(userMsg){
    userMsg = userMsg.toLowerCase();
    if(userMsg.includes("hello") || userMsg.includes("hii")) return " Hello! How can I help you?";
    if(userMsg.includes("how are you")) return "I`m good..";
    if(userMsg.includes("bye")) return "GoodBye! ";
    if(userMsg.includes("internee")) return "Internee.pk is the best platform for interships";
    return "Sorry, I didn`t understand that. Can you try again?";
}

Button.addEventListener("click", sendMessage);

function sendMessage(){
    let message = Input.value;
    if(message.trim() === "")
        return;

    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    
    messages.push({text: message, type: "sent", time: time});
    addMessage(message, "sent", time);
    
    setTimeout(() =>{
        let aReply = getAReply(message);
        let aTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            messages.push({text: aReply, type: "received", time: aTime});
            addMessage(aReply, "received", aTime);
            localStorage.setItem("chatMessages", JSON.stringify(messages));
            Main.scrollTop = Main.scrollHeight;
    
    }, 1000);


    localStorage.setItem("chatMessages", JSON.stringify(messages));
    Input.value = '';
    Main.scrollTop = Main.scrollHeight;

}

function addMessage(text, type, time){
    const newMessage = document.createElement('div');
    newMessage.classList.add(type);
    newMessage.innerHTML = `${text} <span class="time">${time}</span> `;
    Main.appendChild(newMessage);
}

function loadMessages(){
    messages.forEach(msg =>{
        addMessage(msg.text, msg.type, msg.time);
    })
}
