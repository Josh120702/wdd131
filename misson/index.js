
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor =" #000";
        logo.src = "C:\wdd131\misson\byui-logo-white.png";
        document.body.style.color = "#fdfdfdff"
    } else {
        // code for changes to colors and logo
        document.body.style.color = "#000";
        document.body.style.backgroundColor = "#fdfdfdff";
    }
}           
                    