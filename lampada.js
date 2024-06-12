function desligarLampada(){
    document.getElementById("lampadas").innerHTML = ""
    let img = document.querySelector("img")
    img.src = "off.gif"
    document.body.appendChild(img)
}

function ligarLampada(){
    //document.getElementById("lampadas").innerHTML = ""
    let img = document.querySelector("img")
    img.src = "on.gif"
    document.body.appendChild(img)
}