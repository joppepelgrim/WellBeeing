const blueViolet = document.querySelector('.blueviolet');
const orange = document.querySelector('.orange');
const btn = document.querySelector('.btn');
let currentColor = {}

blueViolet.addEventListener('click', function(){
    currentColor = 'blueviolet'
    return

})

orange.addEventListener('click', function(){
    currentColor = 'orange'
})

btn.addEventListener('click', function(){
    console.log(currentColor)
})






console.log('tets')