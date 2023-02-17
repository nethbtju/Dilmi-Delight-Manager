function backFromView(){
    let box = document.getElementById("viewBox")
    let back = document.getElementById("blurBackground")
    box.style.display = 'none';
    box.value = 'notActive';
    back.style.display = 'none';
}

function showView(vertID){
    let view = document.getElementById("viewWrapper");
    view.innerHTML = `<h3 style = "padding-left: 20px;" id = "viewName" >Panda Topper</h3>
    <span class = "dueDate dueDateLarge" id = "viewDate">Due 15.03.2023</span>
    <span class = "dueDateLarge fullPaid fullPaidLarge" id = "payment">Paid In Full</span>
    <div class="material-symbols-outlined editIconLarge" id = "editButton">edit_note</div>
    <div style = "margin-left: 2%;" class = "viewBody">
      <h5 class = "desTitle"><span class="material-symbols-outlined noteIcon">notes</span>Description</h5>
      <form id = "desForm" action="#">
        <div style = "margin-left: 5%; width: 80%;" class="mdl-textfield mdl-js-textfield">
          <textarea class="mdl-textfield__input" type="text" rows= "3" id="description" ></textarea>
          <label id = "descriptionField" class="mdl-textfield__label" for="description">Add Description...</label>
        </div>
      </form>
      <h5 style = "position: relative; top: -25px;" class = "desTitle"><span class="material-symbols-outlined noteIcon">info</span>Topper Details</h5>
      <div style = "position: relative; top: -25px; display: flex; width: 100%;" class = "detailCards">
        <div class = "clientDetails-wrapper">
          <span style = "font-size: 50px;" class="material-symbols-outlined noteIcon">account_circle</span>
          <div class = "client-wrapper">
            <label class = "clientTitle" for = "viewCName">Client Name</label>
            <br>
            <input class = "clientDetails" id = "viewCName" value = "Rohit Valanki">
          </div>
          <div class = "client-wrapper">
            <label class = "clientTitle" for = "viewCNum">Client Number</label>
            <br>
            <input class = "clientDetails" id = "viewCNum" value = "0435 773 255">
          </div>
        </div>
        <div class = "img-wrapper">
          <span style = "font-size: 50px;" class="material-symbols-outlined">upload</span>
          <form>
            <label>Upload Image</label>
            <input style = "position: relative; padding-inline: 15%; margin-top: 10%;" type = "file" name = "upload" accept = "image/*" id = "imgUpload"/>
          </form>
        </div>
      </div>
    </div>`
    let box = document.getElementById("viewBox");
    let back = document.getElementById("blurBackground");
    if (box.value === 'notActive'){
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

    name.innerHTML = data._topperName;
    dateEl.innerHTML = "Due " + date;
    clientName.value = data._clientName;
    clientNum.value = data._clientNum;



}