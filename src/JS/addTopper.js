function showAddNew() {
    let ref = document.getElementById('addNew')
    let icon = document.getElementById('addbtn')
    if (ref.value === 'notActive')
    {
        icon.innerHTML = `<span class="material-symbols-outlined plus" id = "addIcon">expand_less</span>Add New`
        ref.style.display = 'block';
        ref.value = 'active';
    }
    else{
        icon.innerHTML = `<span class="material-symbols-outlined plus" id = "addIcon">expand_more</span>Add New`
        ref.style.display = 'none';
        ref.value = 'notActive';
    }
}
function loadDisplay(){
    let data = getData(APP_DATA_KEY)._queue;
    console.log(data);
    let output = ``;
    let ul = ``
    for (let i = 0; i < data.length; i ++){
        let item = data[i];
        let dateRef = item._dueDate.toString();
        let dateY = dateRef.slice(0,4);
        let dateM = dateRef.slice(5,7);
        let dateD = dateRef.slice(8,10);
        let date = dateD + "." + dateM + "." + dateY;
        ul += `<ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" for="vert${i}">
          <li class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">arrow_forward</span>Move To Do</li>
          <li class="mdl-menu__item mdl-menu__item--full-bleed-divider"><span class="material-symbols-outlined dropIcon">edit</span>Edit</li>
          <li class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">delete</span>Delete</li>
        </ul>`
        output += `<div class = "row box">
            <button id="vert${i}" class="mdl-button mdl-js-button mdl-button--icon vert">
                <i class="material-symbols-outlined">more_horiz</i>
            </button>
          <div class = "tags fullPaid"><span class = "tagText"></span></div>
          <div onclick="showView(${i})">
          <div class = "topperName">${item._topperName}</div>
            <span class = "dueDate">${date}</span>
            <div class = "customerQuick"><span class="material-symbols-outlined accTag">account_circle</span><span>${item._clientName}</span>
            </div>
          </div>
        </div>`;
    }
    let pendingRef = document.getElementById("pending");
    let dropRef = document.getElementById("dropDowns");
    dropRef.innerHTML = ul;
    pendingRef.innerHTML = output;
}
function addTopper(){
    let name = document.getElementById("topperName").value;
    let date = document.getElementById("dueDate").value;
    let client = document.getElementById("clientName").value;
    let number = document.getElementById("clientNum").value;
    manager.addTopper(name, date, client, number);
    updateStorage(APP_DATA_KEY, manager);
    location.reload();
}

