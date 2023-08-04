function carregar() {     
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML += '<br>Bom Dia !'
        document.body.style.backgroundColor = '#806650'
        img.src = './imagens/manha.png'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        msg.innerHTML += '<br>Boa Tarde !'
        document.body.style.backgroundColor = '#88b8bb'
        img.src = './imagens/tarde.png'
    } else {
        //BOA NOITE
        msg.innerHTML += '<br>Boa Noite !'
        document.body.style.backgroundColor = '#01254b'
        img.src = './imagens/noite.png'
    }
}

