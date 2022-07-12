function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sauda = window.document.getElementById('sauda')
    var data = new Date()
    var hora = data.getHours()
        //var hora = 19


    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        sauda.innerHTML = 'Bom dia!'
        img.src = 'manhã.png'
        document.body.style.background = '#768203'
    } else if (hora >= 12 && hora <= 18) {
        sauda.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#fdce99'
    } else {
        sauda.innerHTML = "boa noite!"
        img.src = 'noite.png'
        document.body.style.background = '#634d79'
    }
}