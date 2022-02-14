const slideButtons = document.querySelectorAll('.events-slide-indicator')
const slideImages = document.querySelectorAll('.events-slide-image')
const slideContent = document.querySelectorAll('.events-slide-content-item')

function slideClick(event) {
    removeImageSlide()
    removeContentSlide()
    removeIndicator()
    this.classList.add('is-active');
    const slideContent = document.querySelector(`#${this.id}-content`)
    const slideImage = document.querySelector(`#${this.id}-image`)
    slideContent.classList.add('is-active')
    slideImage.classList.add('is-active')
}

function removeImageSlide() {
    slideContent.forEach(item => {
        item.classList.remove('is-active')
    })
}

function removeContentSlide() {
    slideImages.forEach(image => {
        image.classList.remove('is-active')
    })
}

function removeIndicator() {
    slideButtons.forEach(button => {
        button.classList.remove('is-active')
    })
}

slideButtons.forEach(button => {
    button.addEventListener('click', slideClick)
});