const flashcard = document.getElementById('flashcard');
const content = document.getElementById('content');
const front = document.getElementById('front');
const back = document.getElementById('back');
const nextButton = document.getElementById('next');
const deleteFlashcardBtn = document.getElementById('delete-flashcard-btn');

const flashcardForm = document.getElementById('flashcard-form');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');

const addFlashcardBtn = document.getElementById('add-flashcard-btn');
const formContainer = document.getElementById('form-container');

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
let currentCard = 0;

function loadFlashcard(index) {
    if (flashcards.length > 0) {
        front.textContent = flashcards[index].question;
        back.textContent = flashcards[index].answer;
    } else {
        front.textContent = "No flashcards available";
        back.textContent = "Please create some!";
    }
}

flashcard.addEventListener('click', () => {
    content.classList.toggle('flipped');
    content.style.transform = content.classList.contains('flipped') ? 'rotateY(180deg)' : 'rotateY(0deg)';
});

nextButton.addEventListener('click', () => {
    if (flashcards.length > 0) {
        currentCard = (currentCard + 1) % flashcards.length;
        loadFlashcard(currentCard);
        if (content.classList.contains('flipped')) {
            content.classList.remove('flipped');
            content.style.transform = 'rotateY(0deg)';
        }
    }
});

deleteFlashcardBtn.addEventListener('click', () => {
    if (flashcards.length > 0) {
        flashcards.splice(currentCard, 1);
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
        currentCard = (currentCard % flashcards.length) || 0;
        loadFlashcard(currentCard);
    }
});

addFlashcardBtn.addEventListener('click', () => {
    formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

flashcardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question && answer) {
        const newFlashcard = { question, answer };
        flashcards.push(newFlashcard);
        localStorage.setItem('flashcards', JSON.stringify(flashcards));

        questionInput.value = '';
        answerInput.value = '';
        
        // Reload the flashcards to include the new one
        currentCard = flashcards.length - 1;
        loadFlashcard(currentCard);
    }
});

loadFlashcard(currentCard);
