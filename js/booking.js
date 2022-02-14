const form = document.querySelector('.reservations-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const meridiem = document.querySelector('#meridiem')

const numOfPeople = document.querySelector('#num-of-people')
const plural = document.querySelector('.numpicker-text')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

function checkPlural() {
    if (numOfPeople.textContent === '1') {
        plural.textContent = 'person'
    } else {
        plural.textContent = 'people'
    }
}

function showError(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('error')
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.classList.remove('error')
    formControl.classList.add('success')
}

function checkRequired(inputArray) {
    inputArray.forEach( input => {
        if (input.value.trim() === '') {
            showError(input, `This field is required`)
        } else {
            showSuccess(input)
        }
    })
}

function checkEmail(input) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.trim()===''){
         showError(input, 'This field is required')
    }
   else if (reg.test(input.value.trim())) {
        showSuccess(input)
    }
   else if(!reg.test(input.value.trim())) {
         showError(input, 'Please enter a valid email')
    }
}

function checkNumLength(input, min, max) {
    if(input.value===''){
        showError(input, `This field is incomplete`)
     }
  else if (input.value < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
        console.log('less value')
    } 
    if(input.value===''){
        showError(input, `This field is incomplete`)
     }
    else if (input.value > max) {
        showError(input, `${getFieldName(input)} value must be less than ${max+1}`)
        console.log('greater value')
    } 
    if(!input.value < min && !input.value > max){
        showSuccess(input)
    }

}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


minusButton.addEventListener('click', event => {
    event.preventDefault()
    if (numOfPeople.textContent > 1) {
        numOfPeople.textContent = parseInt(numOfPeople.textContent) - 1
        checkPlural()
    }
})

plusButton.addEventListener('click', event => {
    event.preventDefault()
    if (numOfPeople.textContent < 20) {
        numOfPeople.textContent = parseInt(numOfPeople.textContent) + 1
        checkPlural()
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()
    checkRequired([name, email, day, month, year, minute, hour])
    checkEmail(email)
    checkNumLength(day, 1, 31)
    checkNumLength(month, 1, 12)
    checkNumLength(year, 2022, 2025)
    checkNumLength(hour, 1, 12)
    checkNumLength(minute, 00, 59)
})
