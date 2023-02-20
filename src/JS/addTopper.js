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
    let nextDic = {
        pending: "toDo",
        toDo: "inProgress",
        inProgress: "done",
    };
    let data = getData(APP_DATA_KEY)._queue;
    let ul = ``
    for (let i = 0; i < data.length; i ++){
        let stat = data[i]._status
        console.log(stat)
        let slotRef = document.getElementById(stat);
        let item = data[i];
        let dateRef = item._dueDate.toString();
        let dateY = dateRef.slice(0,4);
        let dateM = dateRef.slice(5,7);
        let dateD = dateRef.slice(8,10);
        let date = dateD + "." + dateM + "." + dateY;
        if (stat == 'done'){
            ul += `<ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" for="vert${i}">
          <li disabled class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">arrow_forward</span>Move Next</li>
          <li class="mdl-menu__item mdl-menu__item--full-bleed-divider"><span class="material-symbols-outlined dropIcon">edit</span>Edit</li>
          <li class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">delete</span>Delete</li>
        </ul>`
        } else {
            ul += `<ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" for="vert${i}">
          <li onclick="moveTo(${nextDic[stat.toString()]},${i})" class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">arrow_forward</span>Move Next</li>
          <li class="mdl-menu__item mdl-menu__item--full-bleed-divider"><span class="material-symbols-outlined dropIcon">edit</span>Edit</li>
          <li class="mdl-menu__item"><span class="material-symbols-outlined dropIcon">delete</span>Delete</li>
        </ul>`
        }
        let output = `<div class = "row box">
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
        slotRef.innerHTML += output;
    }
    let dropRef = document.getElementById("dropDowns");
    dropRef.innerHTML = ul;

}
function addTopper(){
    let name = document.getElementById("topperName").value;
    let date = document.getElementById("dueDate").value;
    let client = document.getElementById("clientName").value;
    let number = document.getElementById("clientNum").value;
    manager.addTopper(name, date, client, number,"None", "pending");
    updateStorage(APP_DATA_KEY, manager);
    location.reload();
}

function moveTo(slotType,vertID){
    let paymentInput;
    if (slotType == "toDo"){
        let userInput = prompt("What percentage did user pay?")
        if (userInput == 100){
            paymentInput = "In Full"
        }
        else {
            paymentInput = userInput + "% Deposit"
        }
    }
    let type = slotType.id
    let topper = manager.getTopper(vertID)
    manager.updateTopper(vertID,topper._topperName,topper._dueDate , topper._clientName,topper._clientNum, paymentInput,type)
    updateStorage(APP_DATA_KEY, manager);
    location.reload()
}
