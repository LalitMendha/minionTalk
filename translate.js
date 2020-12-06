//This is a controller that will convert the input text to minion language and give the output.

//Get the button id
var btnTranslate = document.querySelector("#btnTrnaslate");
//Add Event to button
btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {
    //Get the input text
    var inputText = document.querySelector("#inputText").value;
    //Server URL
    var url = "https://api.funtranslations.com/translate/minion.json";
    //Make the url to input to server 
    var urlInput = url + "?text=" + inputText
    //encode URL
    urlInput = encodeURI(urlInput);
    //Get the Output box
    var outputText = document.querySelector("#outputText");
    //Call the server and give the query
    fetch(urlInput, {
        method: "Get",
        mode: "no-cors"
    })
    .then(response=> response.json())
    .then(json=> outputText.innerText = json.contents.translated);
}











