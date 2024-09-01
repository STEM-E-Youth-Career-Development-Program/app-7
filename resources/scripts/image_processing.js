function processHandwrittenNotes(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const userInput = document.getElementById('mainText');

    reader.onload = function(e) {
        const imageUrl = e.target.result;

        Tesseract.recognize(
            imageUrl,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            console.log(text);
            userInput.innerText = text;
        })
    };

    reader.readAsDataURL(file);
}