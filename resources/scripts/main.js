const mainContainer = document.getElementById("main-container");

// conditions
const activeTab = (tab) => {
  if (tab === "text") {
    mainContainer.innerHTML = `
    <span id="text-tab" class="selected-tab">Import Text</span>
    <span id="file-tab" class="non-selected-tab">Import File</span>
    <div class="import-text-box"></div>
  `;
  } else if (tab === "file") {
    mainContainer.innerHTML = `
    <span id="text-tab" class="non-selected-tab">Import Text</span>
    <span id="file-tab" class="selected-tab">Import File</span>
    <div class="input-file-box"></div>
  `;
  };

  // updates
  clickEvents();
};

// setting up listeners
const clickEvents = () => {
  const importTextBtn = document.getElementById("text-tab");
  const importFileBtn = document.getElementById("file-tab");

  importFileBtn.addEventListener("click", () => {
    activeTab("file");
  });

  importTextBtn.addEventListener("click", () => {
    activeTab("text");
  });
};

// initialize content
activeTab("text")


//basically event listeners to handle when the user wants to upload files when clicking the importFileButton
document.getElementById('importFileButton').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  // Handle the file selection
  const file = event.target.files[0];
  if (file) {
      console.log(`File selected: ${file.name}`);
  }
});
