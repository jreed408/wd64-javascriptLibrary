const baseURL = 'https://random.dog/woof.json';

function fetchSpace(woof) {
    woof.preventDefault();

    fetch(baseURL)
        .then(results => {
            return results.json()
        })
        .then(json => {
            displayWoof(json);
            // console.log(json);
        });
}

function displayWoof(myImage) {
    myImage.src = myImage;
    let woof = document.body.appendChild(myImage)
}

// let myImage = new Image();
// myImage.src = myImage;
// document.body.appendChild(myImage);
