let myDictionary = [];
let input = document.getElementById("inpWord");
const searchBtn = document.getElementById("searchWord");
const saveBtn = document.getElementById("saveWord");
const wordFound = document.querySelector(".word");
const definition = document.querySelector(".def");

function findWord() {
    let doesDictionaryContainWord = myDictionary.includes(input.value);
    if (doesDictionaryContainWord) {
        wordFound.textContent = input.value + ":";
        definition.textContent = "This word exists in the dictionary...";
        definition.style.backgroundColor = "#b5e7a0";
    } else {
        wordFound.textContent = "Does not exist !";
        definition.textContent = "This word does not exist in the dictionary, please save it by pressing the save button.";
        definition.style.backgroundColor = "#f7786b";
    }
}
searchBtn.addEventListener("click", findWord);

function saveNewWord() {
    myDictionary.push(input.value);
    input.value = "";
}
saveBtn.addEventListener("click", saveNewWord);