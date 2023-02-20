"use strict"

const APP_DATA_KEY = "managerAppData";
class NewTopper{
    constructor(topperName,dueDate,clientName,clientNum,payment,status) {
        this._topperName = topperName;
        this._dueDate = dueDate;
        this._clientName = clientName;
        this._clientNum = clientNum;
        this._payment = payment;
        this._status = status;
    }

    get topperName(){
        return this._topperName;
    };

    get dueDate(){
        return this._dueDate;
    }

    get clientName() {
        return this._clientName;
    }

    get clientNum() {
        return this._clientNum;
    }

    get payment() {
        return this._payment;
    }

    get status() {
        return this._status;
    }

    fromData(topperObject)
    {
        this._topperName= topperObject._topperName;
        this._dueDate = topperObject._dueDate;
        this._clientName = topperObject._clientName;
        this._clientNum = topperObject._clientNum;
        this._payment = topperObject._payment;
        this._status = topperObject._status;
    }
}

class Manager
{
    constructor()
    {
        this._queue = [];
    }

    get queue()
    {
        return this._queue;
    }

    addTopper(topperName,dueDate,clientName,clientNum, payment, status)
    {
        let queue = this.queue;
        let topper = new NewTopper(topperName,dueDate,clientName,clientNum, payment,status);
        let index = 0;
        if (queue.length === 0 || (queue.length === 1 && queue[index]._dueDate <= dueDate)){
            queue.push(topper)
        }
        else {
            for (let i = 0; i < queue.length; i++)
            {
                if (queue[i]._dueDate <= dueDate){
                    index += 1
                }
            }
            if (index < queue.length){
                queue.splice(index,0,topper);
            } else {
                queue.push(topper)
            }
        }
    };

    removeTopper(index)
    {
        this._queue.splice(index, 1);
    };

    getTopper(index)
    {
        let queue = this._queue;
        return queue[index];
    }

    updateTopper(index,topperName,dueDate,clientName,clientNum, payment, status){
        let newTopper = new NewTopper(topperName,dueDate,clientName,clientNum,payment,status)
        this.queue.splice(index,1, newTopper)
    }

    fromData(managerObject)
    {
        this._queue = [];
        let data = managerObject._queue;
        console.log(data)
        for (let i = 0; i < data.length; i++)
        {
            let newTopper = new NewTopper();
            newTopper.fromData(data[i]);
            this._queue.push(newTopper);
        }
    }
}

/* this function is responsible for checking whether data exists in the
local storage at the parameter given called key. when executed it will
return true if there is data at the given key in local storage or return
false if there isn't */
function checkStorage(key)
{
    let localStorageItem = localStorage.getItem(key);
    return localStorageItem !== null;
}

/* this function has the parameters key and data and is responsible for
stringifying the data given, so it can be stored into local storage. */
function updateStorage(key, data)
{
    let jsonString = JSON.stringify(data);
    localStorage.setItem(key, jsonString);
}

/* this function has the parameter key and is used to bring data back
from the local storage and parse it back into object. when executed it
checks if the data is not already an object and then parses it back.*/
function getData(key)
{
    let retrieveData = localStorage.getItem(key);
    if (typeof retrieveData !== "object")
    {
        return JSON.parse(retrieveData);
    }
}

let manager = new Manager()
let appDataCheck = checkStorage(APP_DATA_KEY)
if (appDataCheck === true)
{
    let restoreData = getData(APP_DATA_KEY);
    manager.fromData(restoreData);
}
else
{
    updateStorage(APP_DATA_KEY, manager);
}

