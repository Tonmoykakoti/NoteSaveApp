const btn = document.querySelector('button')
const textBox = document.querySelector('#text-box')

btn.addEventListener('click', function(e){
    e.preventDefault()
    let textValue = textBox.value
    if(textValue === ''){
        alert('please write something')
    }else{
        localStorage.setItem('Notes', textValue)
    }
    console.log('clicked')
})
