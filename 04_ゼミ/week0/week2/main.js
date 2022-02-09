const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const MemoContainer = document.getElementById("memo-container")




AddButton.onclick = function (){
    const TextInput =  MemoInput.value
    const TextContainer = document.createElement("div")
    TextContainer.className = "textcontainer"
    TextContainer.textContent = TextInput
    MemoContainer.append(TextContainer)
    console.dir(TextInput)
    const DelateButton = document.createElement("button")
    TextContainer.append(DelateButton)
    MemoInput.value = ""
    DelateButton.textContent = "削除～"
    DelateButton.onclick = function(){
        TextContainer.remove()
    }
}

