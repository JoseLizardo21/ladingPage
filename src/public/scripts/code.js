function inicio(){
    const img1 = document.getElementById("cel1");
    const img2 = document.getElementById("cel2");
    const img3 = document.getElementById("cel3");
    const img4 = document.getElementById("cel4");
    setTimeout(()=>{
        img1.style.marginTop = "250px";
        img2.style.marginLeft = "400px";
        img3.style.marginLeft = "100px";
        img4.style.marginTop = "-100px";
    }, 500)
}
window.addEventListener("load", inicio);