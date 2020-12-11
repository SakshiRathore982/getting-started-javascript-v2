/*function create(name)
{
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            log(`my name is $(name)`);
        }
    };
};
var sus = ["miss sakshi", "colonel", "mrs white"];
var suslist = [];
_.each(sus, function (name) {
    suslist.push(create(name));
});*/
const _ = {};
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
