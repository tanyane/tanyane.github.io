document.body.onload = function() {
    setTimeout(() => {
        preloader = document.getElementById("preloader")
        main = document.getElementById("main")
        preloader.style = "display: none;"
        main.style = "display: block;"
    }, 1000);
}


logo = document.getElementById("logo")
// console.log(logo)

logo.onmouseover = function () {
    // console.log(1)
    logo.style = "animation: 0.5s logo infinite alternate";
}

logo.onmouseout = function () {
    // console.log(0)
    logo.style = "animation: 0 logo infinite alternate";
}

