function backFromView(){
    let box = document.getElementById("viewBox")
    let back = document.getElementById("blurBackground")
    box.style.display = 'none';
    box.value = 'notActive';
    back.style.display = 'none';
}

function showView(vertID){
    let box = document.getElementById("viewBox")
    let back = document.getElementById("blurBackground")
    if (box.value === 'notActive'){
        box.style.display = 'block';
        back.style.display = 'block';
    }


}