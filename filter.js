const _ = {};
const vdata = [
    {
        name: "mis sackd", present: true, rooms: [{ kitchen: false }, { ballroom: false }, { cons: false }, { 'dinning room ': false }]
    }
    , {
        name: "john ", present: false, rooms: [{ kitchen: false }, { ballroom: false }, { cons: false }, { 'dining room ': false }]
    }, { name: "marry ", present: false, rooms: [{ kitchen: false }, { ballroom: false }, { cons: false }, { 'dining room ': false }] }
];

_.filter = function (arr, cb) {
    const storage = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (cb(arr[i], i, arr) == true)
        {
            storage.push(arr[i]);
            }
    }

    return storage;
}
  /*  _.filter = function (arr, cb) {
        const storage = [];
        _.each(arr, function (item, i, list) {
            if (cb(item, i, list)) storage.push(item);
        });
    
    return storage;
    }*/
_.filter(vdata, function (sus) {
    return sus.present;
});




