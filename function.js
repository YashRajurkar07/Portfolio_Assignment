let modeBtn = document.querySelector("#mode");
let cmode = "light";

modeBtn.addEventListener("click", () => {
    if(cmode==="light"){
        cmode="dark";
   
        document.getElementById("mode").style.backgroundImage='url(/Images/Light.jpg)';
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
     
    }else{
        cmode = "light";
    
        document.getElementById("mode").style.backgroundImage='url(/Images/Moon.png)';
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});
