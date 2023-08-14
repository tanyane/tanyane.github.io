document.body.onload = function () {
    setTimeout(() => {
        preloader = document.getElementById("preloader")
        main = document.getElementById("main")
        indextext = document.getElementById("index-text")
        text = document.getElementById("index-text-down")
        preloader.style = "display: none;"
        main.style = "display: flex; animation: 1000ms opac forwards;"
        setTimeout(() => {
            indextext.style = "animation: 1000ms indextext forwards;"
            text.style = "animation: 1000ms text forwards;"
        }, 500);


    }, 1000);
}


logo = document.getElementById("logo")
// console.log(logo)

// logo.onmouseover = function () {
    // console.log(1)
//     logo.style = "animation: 0.5s logo infinite alternate";
// }

// logo.onmouseout = function () {
//     // console.log(0)
//     logo.style = "animation: 0 logo infinite alternate";
// }

// photo = document.getElementById("photo")

// console.log(photo)

