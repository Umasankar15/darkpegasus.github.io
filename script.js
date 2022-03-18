const ratedScore = document.querySelector(".star-rating");
const submitBtn = document.querySelector(".submit-btn");
const rateNumber = document.querySelectorAll(".rate-number");
const rateCard = document.querySelector('.card-component');
const tyCard = document.querySelector('.ty-component');
const score = document.querySelector('.rate-score');
let scorerated;


ratedScore.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.className === 'rate-number'){
        rateNumber.forEach(element => element.classList.remove("selected"));
        e.target.classList.add("selected");
        submitBtn.removeAttribute('disabled');
        scorerated = e.target.innerText;
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rateCard.style.display = 'none';
    tyCard.style.display = 'flex';
    const ratedscore = document.createElement('p');
    ratedscore.classList.add('ty-selectedscore');
    ratedscore.append(document.createTextNode(`You selected ${scorerated} out of 5`));
    score.appendChild(ratedscore);
});
