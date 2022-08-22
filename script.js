var dark_btn = document.getElementById("dark-btn");
var settingMenu = document.querySelector(".setting-menu");

const settingMenuToggle =()=>{
    settingMenu.classList.toggle("setting-menu-height")
}
dark_btn.onclick = function(){
    dark_btn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }

}
if(localStorage.getItem("theme")=="light"){
    dark_btn.classList.remove("dark-btn-on");
    document.body.classList.add('dark-theme');
}else{
    if(localStorage.getItem("theme")=="dark"){
        dark_btn.classList.add("dark-btn-on");
        document.body.classList.add('dark-theme');
    }else{
        localStorage.setItem("theme", "light");
    }

}
