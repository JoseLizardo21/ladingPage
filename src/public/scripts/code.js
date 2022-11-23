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
    }, 500);
    const cerrar = document.getElementById("cerrar");
    if(cerrar != null)cerrar.addEventListener('click', cerrarVent);

    const lo_tengo = document.getElementById("lo_tengo");
    if(lo_tengo != null)lo_tengo.addEventListener('click', cerrarVent);

    const cerrar2  = document.getElementById("cerrar2");
    if(cerrar2 != null)cerrar2.addEventListener('click', cerrarVent);

}
function cerrarVent(){
    const ventMensaje = document.getElementById('cont-ZMessage');
    ventMensaje.style.visibility = 'hidden'
}
window.addEventListener("load", inicio);