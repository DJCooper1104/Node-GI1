const weatherForm = document.querySelector('form')
 //giving us access to search
const search = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
messageTwo.textContent = ''

 weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
fetch('/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
         messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

        }
    })
})
 })

