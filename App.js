//Using Selector inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle("show-text");
    });
});


// //Traversing throug the DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', (e) => {
//         const showText = e.currentTarget.parentElement.parentElement;
//         showText.classList.toggle('show-text');
//     })
// })

