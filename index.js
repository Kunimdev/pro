const html = document.documentElement;

function changeTheme(){

    if(!html.classList.contains('darkMode')){
        html.classList.add('darkMode');
    }else{
        html.classList.remove('darkMode');
    }

}