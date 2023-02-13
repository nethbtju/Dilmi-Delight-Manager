let q = [{_topperName: 'Mickey', _dueDate: '2023-02-10T11:47', _clientName: '', _clientNum: ''},
    {_topperName: 'Minnie', _dueDate: '2023-02-13T11:47', _clientName: '', _clientNum: ''},{
    _topperName: 'Bunny', _dueDate: '2023-02-15T11:40', _clientName: '', _clientNum: ''}]
function addTopper(bun) {
    let topper = bun
    let index = 0;
    for (let i = 0; i < q.length; i++)
    {
        if (q[i]._dueDate > bun._dueDate)
        {
            index = i;
        }
    }
    q.splice(index - 1,0,topper);

};
