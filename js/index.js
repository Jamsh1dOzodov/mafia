const purchase_btns = document.querySelectorAll('.purchase-amount__btn');

purchase_btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const el = event.target
        const parent = el.closest('.purchase-amount')
        const input = parent.querySelector('.purchase-amount__count')
        if(el.classList.contains('purchase-amount__btn--minus')){
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
    })
})


const openTabs = (event, tabName) => {
    let i, tabContent, tabLinks;

    tabContent = document.querySelectorAll(".tabContent")
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none"
    }

    tabLinks = document.querySelectorAll(".description-list__item")
    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" description-list__item--active", "")
    }

    document.getElementById(tabName).style.display = "block"
    event.currentTarget.className += " description-list__item--active";
}