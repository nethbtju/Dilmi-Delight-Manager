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
    let length = manager.queue.length
    print(length)
}
function addTopper(){
    let name = document.getElementById("topperName").value;
    let date = document.getElementById("dueDate").value;
    let client = document.getElementById("clientName").value;
    let number = document.getElementById("clientNum").value;
    manager.addTopper(name, date, client, number);
    updateStorage(APP_DATA_KEY, manager);
    location.reload()
}