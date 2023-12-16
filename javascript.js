function onclickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("navbar").classList.toggle("change");
}

document.getElementById("moon").addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "black";
})