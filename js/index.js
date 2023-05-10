const purchase_btns = document.querySelectorAll('.purchase-amount__btn');

purchase_btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const el = event.target
        const parent = el.closest('.purchase-amount')
        const input = parent.querySelector('.purchase-amount__number')
        if(el.classList.contains('purchase-amount__minus')){
            // Дикримент
            input.value--
            if(input.value<=0){
                input.value = 0
            }
        }
        else{
            // Инкримент
            input.value++
        }
        console.log(input.value)
    })
})