const purchase_btns = document.querySelectorAll('.purchase-amount__btn');
purchase_btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const el = event.target
        const parent = el.closest('.purchase-amount')
        const input = parent.querySelector('.purchase-amount__count')
        if (el.classList.contains('purchase-amount__btn--minus')) {
            // Дикримент
            input.value--
            if (input.value <= 0) {
                input.value = 0
            }
        }
        else {
            // Инкримент
            input.value++
        }
    })
})


const openTabs = (event, tabName) => {
    let i, tabContent, tabLinks;

    tabContent = document.querySelectorAll(".tabContent")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    tabLinks = document.querySelectorAll(".description-list__item")
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" description-list__item--active", "")
    }

    document.getElementById(tabName).style.display = "block"
    event.currentTarget.className += " description-list__item--active";
}

// const checkoutInp = document.querySelector('.checkout')
// checkoutInp.addEventListener('click', event => {
//     event.preventDefault()
//     if (input.classList.contains('formInp--name')) {
//         const nameReg = /^[a-zA-Z]+$/
//         if (input.value.match(nameReg)) {
//             input.style.border = '1px solid green'
//         }
//         else {
//             input.style.border = '1px dashed red'
//         }
//         console.log(input)
//     }
// })

// const checkoutBtn = document.querySelector('.cart-order__btn--checkout')
// checkoutBtn.addEventListener('click', event => {
//     event.preventDefault()
// })


const reviewBtn = document.querySelector('.review__btn');
if (reviewBtn) {
    reviewBtn.addEventListener('click', event => {
        const reviewInputs = document.querySelectorAll('.review__input')
        let data = {}
        reviewInputs.forEach(input => {
            let regex;
            if (input.classList.contains('review__input--name')) {
                regex = /^[a-zA-Z]+$/
                if (input.value.match(regex)) {
                    input.classList.remove('review__input--error')
                    data.name = input.value
                }
                else {
                    input.classList.add('review__input--error')
                }
            }
            if (input.classList.contains('review__input--email')) {
                regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (input.value.match(regex)) {
                    input.classList.remove('review__input--error')
                    data.email = input.value
                }
                else {
                    input.classList.add('review__input--error')
                }
            }
            if (input.classList.contains('review__input--comment')) {
                regex = /^[A-Za-zА-Яа-яЁё\s]{6,}/
                if (input.value.match(regex)) {
                    input.classList.remove('review__input--error')
                    data.comment = input.value
                }
                else {
                    input.classList.add('review__input--error')
                }
            }

            if (Object.keys(data).length == 3) {
                const reviewModal = document.querySelector('.modal')
                reviewModal.classList.add('modal--active')
            }
        })
    })
}




const reviewModal = document.querySelector('.modal')
if (reviewModal) {
    reviewModal.addEventListener('click', event => {
        reviewModal.classList.remove('modal--active')
        location.reload()
    })
}





const checkoutBtn = document.querySelector('.cart-order__btn--checkout');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', event => {
        const formInp = document.querySelectorAll('.formInp')
        let data = {}
        formInp.forEach(input => {
            let regex;
            if (input.classList.contains('formInp--name')) {
                regex = /^[a-zA-Z]+$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.name = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--phone')) {
                regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.phone = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--email')) {
                regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.email = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--coupon')) {
                regex = /^[0-9]{5}$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.coupon = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--homeNumber')) {
                regex = /^[0-9]{1,4}$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.homeNumber = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--kvartNumber')) {
                regex = /^[0-9]{1,4}$/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.kvartNumber = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--city')) {
                regex = /^[A-Za-zА-Яа-яЁё\s]{2,}/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.city = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (input.classList.contains('formInp--street')) {
                regex = /^[A-Za-zА-Яа-яЁё\s]{2,}/
                if (input.value.match(regex)) {
                    input.classList.remove('formInp--error')
                    data.street = input.value
                }
                else {
                    input.classList.add('formInp--error')
                }
            }

            if (Object.keys(data).length == 8) {
                const reviewModal = document.querySelector('.modal')
                reviewModal.classList.add('modal--active')
            }
        })
    })
}


const persdataBtn = document.querySelector('.persdata-form__btn--save');
if (persdataBtn) {
    persdataBtn.addEventListener('click', event => {
        const formInput = document.querySelectorAll('.persdata-group__input')
        let data = {}
        formInput.forEach(input => {
            let regex;
            if (input.classList.contains('persdata-group__input--name')) {
                regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.name = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (input.classList.contains('persdata-group__input--phoneNumber')) {
                regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.phoneNumber = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (input.classList.contains('persdata-group__input--email')) {
                regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.email = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (input.classList.contains('persdata-group__input--address')) {
                regex = /^[A-Za-z-0-99999999]/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.address = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (input.classList.contains('persdata-group__input--region')) {
                regex = /^[A-Za-zА-Яа-яЁё\s]{2,}/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.region = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (input.classList.contains('persdata-group__input--locality')) {
                regex = /^[A-Za-zА-Яа-яЁё\s]{2,}/
                if (input.value.match(regex)) {
                    input.classList.remove('persdata-group__input--error')
                    data.locality = input.value
                }
                else {
                    input.classList.add('persdata-group__input--error')
                }
            }
            if (Object.keys(data).length == 6) {
                const reviewModal = document.querySelector('.modal')
                reviewModal.classList.add('modal--active')
            }
        })
    })
}

const paymentBtns = document.querySelectorAll('.payment-form__btn')
paymentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.payment-form__btn--active').classList.remove('payment-form__btn--active');
        btn.classList.add('payment-form__btn--active');
    })
})