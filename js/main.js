let span = document.getElementsByTagName('span')[0]
let nav = document.getElementsByTagName('nav')[0]
let span1 = document.getElementById('fechar')
let menu = document.getElementsByTagName('menu')[0]



span1.addEventListener('click',()=>{
    let menu = document.getElementsByTagName('menu')[0]
    if(menu.style.display=='block'){
        menu.style.display='none'
        span1.style.display='none'
    }

})
span.addEventListener('click',()=>{
    if(menu.style.display=='block'){
        menu.style.display='none'
        span1.style.display='none'
    }else{
        menu.style.display='block'
        span1.style.display='block'
    }
})

function tamanho(){
    if(window.innerWidth>650){
        menu.style.display='inline'
        span1.style.display='none'
    }
}