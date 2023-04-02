function genereteQuote(){
    const pictures = [
        innerHTML = `<img src="./imgs/Без названия (1).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (2).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (3).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (4).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (5).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (6).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (7).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (8).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (9).jpg" alt="">`,
        innerHTML = `<img src="./imgs/Без названия (10).jpg" alt="">`,
    ]
    const randomIndex = Math.floor(Math.random() * pictures.length)
    const picture = pictures[randomIndex]
    document.getElementById('pictrs').innerHTML = picture
}

function savePictr(){
    const picture = document.getElementById('pictrs').innerHTML
    localStorage.setItem('pictrs', picture)
}


function loadQuote(){
  const quote = localStorage.getItem('pictrs')
  if(quote){
    document.getElementById('pictrs').innerHTML = picture
  }else{
    genereteQuote()
  }
}


document.getElementById('new-pictrs').addEventListener('click', function(){
    genereteQuote()
    saveQuote()
})

window.addEventListener('load', function(){
    loadQuote()
})
