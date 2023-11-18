const allAnswers = document.getElementsByClassName('answers');
const allQuestions = document.getElementsByClassName('questions');
const allArrow = document.getElementsByClassName('arrow')
const illustrationBox = document.getElementById('illustration-box')

let displayStatus = false;
let id = 'answerId'

//Function for showing and hiding the answer
function answerer(questionBox, answerId, theAnswer) {
    const question = questionBox.querySelector('#question')
    const arrow = questionBox.querySelector('img')
    const answer = document.getElementById(`${answerId}`);

    // For showing the answer
    if (displayStatus == false) {
        
        displayStatus = true;
        question.style.fontWeight = 900;
        answer.innerHTML += `<p id="answer" class="answers">${theAnswer}</p>`;
        answer.style.marginTop = '15px';
        arrow.style.rotate = '180deg'
        illustrationBox.style.left = '-5%'
    } // For hiding the answer
    else if (displayStatus == true && answerId === id) {
        
        displayStatus = false;
        question.style.fontWeight = '';
        answer.style.marginTop = '';
        answer.querySelector('p').remove();
        arrow.style.rotate = ''
        illustrationBox.style.left = ''
    } // For showing the desired answer and hiding the rest of the answers
    else if (displayStatus == true) {

        //hiding all answers
        document.getElementById(`${id}`).style.marginTop = '';
        allAnswers[0].remove()
        for (let i = 0; i < allQuestions.length; i++) {
            allQuestions[i].style.fontWeight = '';
            allArrow[i].style.rotate = ''
        };
        //showing the desired answer
        question.style.fontWeight = 900;
        answer.innerHTML += `<p id="answer" class="answers">${theAnswer}</p>`;
        answer.style.marginTop = '15px';
        arrow.style.rotate = '180deg'
    }
    id = `${answerId}`;
}

//Function to know the size of page and execute the changs
function pageSizeCheck() {
    const bgPattern = document.getElementById('bg-pattern')
    const illustrationWoman = document.getElementById('illustration-woman')
    if (window.innerWidth <= 767) {
        bgPattern.setAttribute('src', 'images/bg-pattern-mobile.svg')
        illustrationWoman.setAttribute('src', 'images/illustration-woman-online-mobile.svg')

        illustrationBox.setAttribute('src', '')
    } else if (window.innerWidth > 767) {
        bgPattern.setAttribute('src', 'images/bg-pattern-desktop.svg')
        illustrationWoman.setAttribute('src', 'images/illustration-woman-online-desktop.svg')
        illustrationBox.setAttribute('src', 'images/illustration-box-desktop.svg')
    }
}
// Event listener for the resize event
window.addEventListener("resize", pageSizeCheck);
// To execute after any resizing
pageSizeCheck();
