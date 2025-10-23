function Load(){
  var msg = document.querySelector('p#msg')
  var img = document.querySelector('img#imagem')
  var copyLink = document.querySelector('a#copyLink')
  var now = new Date()
  var hora = now.getHours()
  var minuto = now.getMinutes()
  msg.textContent = `Agora são ${hora} horas e ${minuto} minutos`
  if(hora >= 0 && hora < 12){
    copyLink.style.color = 'gray'
    img.src='assets/manha.jpg'
    document.body.style.background = '#E3CFA5'
  }else if(hora >=12 && hora <=18){
    img.src='assets/tarde.jpg'
    document.body.style.background = '#db7452ff'
  }else{
    img.src='assets/noite.jpg'
    document.body.style.background = '#44324C'
  }
}