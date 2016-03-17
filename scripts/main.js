var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/fist.png') {
        myImage.setAttribute('src', 'images/IMG_0072.jpg')
    } else {
        myImage.setAttribute('src', 'images/fist.png')
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt("What's your name?")
    localStorage.setItem('name', myName)
    myHeading.textContent = 'And who the fuck do you think you are ' + myName +
        '?'
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = 'Who the fuck do you think you are ' + storedName +
        '?'
}

myButton.onclick = function() {
    setUserName
}
