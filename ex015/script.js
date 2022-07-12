function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { window.alert('[ERRO] Verifique os dados e tente novamente!.') } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'AdultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'IdosoM.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'CriançaF.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'AdultoF.png ')
            } else {
                //idoso
                img.setAttribute('src', 'IdosaFem.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}