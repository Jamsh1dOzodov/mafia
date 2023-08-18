const commentCount = document.querySelector('.comment-count');
let commentsData = [];


const commentHTML = (name, text) => {
    return `
        <div>
            <div class="comment-first">
                <h3 class="comment-first__name">${name}</h3>
                <img class="comment-first__rating" src="./img/star.svg" alt="Звездочка">
                <img class="comment-first__rating" src="./img/star.svg" alt="Звездочка">
                <img class="comment-first__rating" src="./img/star.svg" alt="Звездочка">
                <img class="comment-first__rating" src="./img/star.svg" alt="Звездочка">
                <img class="comment-first__rating" src="./img/star.svg" alt="Звездочка">
            </div>
            <p class="comment__text">${text}</p>
        </div>
    `
}




fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        commentsData = data.slice(-20)
        commentCount.textContent = commentsData.length
        const btnCommentMore = document.querySelector('.comment__more')
        const commentWrapper = document.querySelector('.comment__items')
        commentsData.slice(-2).forEach(comment => {
            commentWrapper.insertAdjacentHTML('afterbegin', commentHTML(comment.name, comment.body))
        })

        btnCommentMore.addEventListener('click', () => {
            commentsData.slice(0, -2).forEach(comment => {
                commentWrapper.insertAdjacentHTML('beforeend', commentHTML(comment.name, comment.body))
            })
        })
    })