vInicialMax = 100
vAngularMax = 100
phiMax = 360
thetaMax = 360

function prueba() {
    console.log("22222222222222")
}

function actualizarInputs() {
    let vInicial = document.getElementById('vInicial').value
    let vAngular = document.getElementById('vAngular').value
    let phi = document.getElementById('phi').value
    let theta = document.getElementById('theta').value
    
    /* Revisar si inputs validos */

    console.log("vInicial anterior: " + getCookie('vInicial'))
    console.log("vAngular anterior: " + getCookie('vAngular'))
    console.log("phi anterior: " + getCookie('phi'))
    console.log("thetha anterior: " + getCookie('theta'))
    
    console.log("vInicial nueva: " + vInicial)
    console.log("vAngular nueva: " + vAngular)
    console.log("phi nueva: " + phi)
    console.log("theta nueva: " + theta)

    createCookie('vInicial', vInicial, 1)
    createCookie('vAngular', vAngular, 1)
    createCookie('phi', phi, 1)
    createCookie('theta', theta, 1)
    
    console.log("")
    window.location.replace("arco.html");
}

function recibirInputs() {
    let vInicial = document.getElementById('vInicial').value
    let vAngular = document.getElementById('vAngular').value
    let phi = document.getElementById('phi').value
    let theta = document.getElementById('theta').value
    var correcto = true
    if (vInicial <= 0 || vInicial > vInicialMax) {
        correcto = false
        document.getElementById('vInicial').style.borderColor = "red"
        console.log("Error en velocidad incial")
    }
    if (vAngular <= 0 || vAngular > vAngularMax) {
        correcto = false
        document.getElementById('vAngular').style.borderColor = "red"
        console.log("Error en velocidad angular")
    }
    if (phi <= 0 || phi > phiMax) {
        correcto = false
        document.getElementById('phi').style.borderColor = "red"
        console.log("Error en phi")
    }
    if (theta <= 0 || theta > thetaMax) {
        correcto = false
        document.getElementById('theta').style.borderColor = "red"
        console.log("Error en theta")
    }

    if (correcto) {
        console.log("correcto")
        actualizarInputs()
    }
    else {
        alert("Por favor revisa tus inputs")
    }
}