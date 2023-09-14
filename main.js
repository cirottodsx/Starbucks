function changeImg(img){
    document.querySelector(".coffe img").src =`./imgs/img${img}.png`
    
    if (img == 1){
        document.querySelector(".circle").style.background = '#017143'
    }
    if (img == 2){
        document.querySelector(".circle").style.background = 'pink'
    }
    if (img == 3){
        document.querySelector(".circle").style.background = '#d752b1'
    }
}