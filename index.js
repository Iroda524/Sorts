var first = document.getElementsByTagName('button')[0],
    second = document.getElementsByTagName('button')[1],
    third = document.getElementsByTagName('button')[2];


first.addEventListener('click', function(){
    first.style.color = 'white'
    first.style.backgroundColor = '#5796ff'
    second.style.color = 'black'
    second.style.backgroundColor = 'white'
    third.style.color = 'black'
    third.style.backgroundColor = 'white'
})

second.addEventListener('click', function(){
    second.style.color = 'white'
    second.style.backgroundColor = '#5796ff'
    first.style.color = 'black'
    first.style.backgroundColor = 'white'
    third.style.color = 'black'
    third.style.backgroundColor = 'white'
})

third.addEventListener('click', function(){
    third.style.color = 'white'
    third.style.backgroundColor = '#5796ff'
    second.style.color = 'black'
    second.style.backgroundColor = 'white'
    first.style.color = 'black'
    first.style.backgroundColor = 'white'
})