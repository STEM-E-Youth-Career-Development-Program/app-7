function previewFile() {
    const userInput = document.getElementById('mainText');
    const file = document.getElementById("txtInput").files[0];
    const txtReader = new FileReader();

    txtReader.addEventListener('load', ()=> {
        userInput.innerText = txtReader.result;
        console.log(txtReader.result)
    });

    if (file) {
        txtReader.readAsText(file);
    } else {
        console.log('no files selected');
    }
}