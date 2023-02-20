function backFromView(){
    let box = document.getElementById("viewBox")
    let back = document.getElementById("blurBackground")
    box.style.display = 'none';
    box.value = 'notActive';
    back.style.display = 'none';
}

function showView(vertID){
    let view = document.getElementById("view-wrapper")
    console.log("bun")
    let box = document.getElementById("viewBox");
    let back = document.getElementById("blurBackground");
    console.log(box.value)
    if (box.value === 'notActive'){
        console.log("bun")
        box.style.display = 'block';
        back.style.display = 'block';
    }
    let data = manager.getTopper(vertID);
    let name = document.getElementById("viewName")

    let dateEl = document.getElementById("viewDate")
    let dateRef = data._dueDate.toString();
    let dateY = dateRef.slice(0,4);
    let dateM = dateRef.slice(5,7);
    let dateD = dateRef.slice(8,10);
    let date = dateD + "." + dateM + "." + dateY;

    let clientName = document.getElementById("viewCName")
    let clientNum = document.getElementById("viewCNum")

    let paymentType = document.getElementById("payment")
    let description = document.getElementById("description-wrapper")

    name.innerHTML = data._topperName;
    dateEl.innerHTML = "Due " + date;

    description.innerHTML = "No Description Added"
    paymentType.innerHTML = "Paid In Full";
    clientName.innerHTML =  data._clientName;
    clientNum.innerHTML = data._clientNum;
}

function editView(vertID){
    let buttonType = document.getElementById("button-view")
    console.log(vertID)
    if (buttonType.innerText === "edit"){
        buttonType.value = "done";
        buttonType.innerHTML = `<div class="material-symbols-outlined editIconLarge" id = "editButton">done</div>`
    }
    else if (buttonType.value === "done"){
        buttonType.value = "edit";
        buttonType.innerHTML = `<div class="material-symbols-outlined editIconLarge" id = "editButton">edit</div>`
        showView(vertID)
    }
}