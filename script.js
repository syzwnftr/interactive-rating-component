const btns = document.querySelectorAll('.btn');
const btnSubmit = document.querySelector('.btnSubmit');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.container-2');
let userRating = document.querySelector('.user-rating');


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
        userRating.textContent = btn.textContent;
    })
});

btnSubmit.addEventListener('click', () => {
    container1.classList.add('hide');
    container2.classList.remove('hide');
})