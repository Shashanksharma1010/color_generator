// getting the hexcode and button
const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
const mainSection = document.querySelector('.main');

// Asynchronous Function ( which means it works parallely with all the code)
btn.addEventListener('click', () => {getRgb();})

// clipboard logic
const clipboard = (code) => {
    navigator.clipboard.writeText(code);

    // creating a message when text is copied
    p = document.createElement('p');
    p.innerText = "Text Copied"
    mainSection.appendChild(p);

    // removing all messages after 1s
    setTimeout(() => {
        const children = mainSection.children; 
        for(var index = 0; index < children.length; index++) {
            if (index > 0) {
                mainSection.children[index].remove();
            }
        }
    },1000)
}

// random number by hex code.
const getColor =  () => {
    // Hex
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = '#'+randomNumber.toString(16);

    // changing the hex code in DOM.
    colorCode.innerText = randomCode;
    mainSection.style.backgroundColor = colorCode.innerText;

    // copying to clipboard
    clipboard(randomCode);
}

// random number by rgb.
const getRgb = () => {
    // random number generator between 0 and 255.
    const createRgbNo = (num) => {num = Math.floor(Math.random()*256); return num}

    // changing the hex code in DOM by using map filter to add random number in rgb array.
    const rgb = [0,0,0];
    colorCode.innerText = 'rgb(' + rgb.map(createRgbNo) + ')'
    mainSection.style.backgroundColor = colorCode.innerText;

    // copying to clipboard
    clipboard(colorCode.innerText);
}

// initial call.
getRgb()