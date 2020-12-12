const _ ={};
_.map = function (list, callback) {
    var storage = [];
   /* for (var i = 0; i < list.length; i++)
    {
        storage.push(callback(list[i], i, list));
    }*/
_.each(list, function (v, i, list) {
        storage.push(callback(v, i, list));
    });
    return storage;

}

_.map([1, 2, 3], function (val) { console.log(val + 1); })
/*
_.each = function (list, callback)
{
    if (Array.isArray(list)) //true
    {
        for (var i = 0; i < list.length; i++)
        {
            callback(list[i], i, list);
            }
    }
    else {//object
        for (var key in list)
        {
            callback(list[key],key ,list )
                }    
    }
}
_.each(["saily", "goerge", "dkfjdlf"], function (name, i,list) {
    if (list[i + 1]) {
        console.log(name, "is youger then ", list[i + 1])
    }
    else {console.log(name, "is older ")
        
    }
})
*/
