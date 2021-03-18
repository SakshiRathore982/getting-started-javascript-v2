function valid(num)
{
    if (typeof num == "string" && num.trim().length >= 3)
        console.log("true");
    else
        console.log("false");
            
        }
function attended(att, len)
{
    if (typeof att == "string" && att.trim != "")
    {
        att = Number(len);

    }
    if (typeof len == "string" && len.trim != "")
    {
        len = Number(att);
    }
    if (typeof att == "number" && typeof att == "number" &&
        att >= 0 && len >= 0 && Number.isInteger(att) && Number.isInteger(len) && att <= len)
       {
        return true;
    }
    return false;  
}
function find(mat, arr)
{
    var ret = [];
    for (let v of arr) {
        if (Object.is(mat, v)) {
            ret.push(v);
        }
        else if (mat == null && v == null) {
            ret.push(v);
        }
        else if (typeof (mat) == "boolean " && typeof (v) == "boolean")
            if (match == v) {
                ret.push(v);
            }
            else if (typeof (mat) == "string" && mat.trim() != "" && typeof (v) == "number" && !Object.is(v, -0))
            {
                if (mat == v)
                {
                    ret.push(v);
               }    
            }
            else if (typeof mat == "number " && !Object.is(mat, -0) && !Object.is(mat, NaN)
            &&Object.is(mat,Infinity) && !Object.is(mat,-Infinity)&& typeof v=="string" && v.trim()!="")
            {
                if (mat == v)
                {
                    ret.push(v);
                    }
                }
    }
    
    return ret;
}
function set(arr1, arr2)
{
    if (Array.isArray(arr1) && Array.isArray(arr2))
        {
            for(let v of arr1) {
                if (!arr2.includes(v))
                    return false;
            }
            return true;
    }
    return false;
}
var myobj = { a: 2 };

var values = [null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity, "", "0", "42", "42Hello", "true", "false", true, false, myobj];
console.log("mat"+set(find(null, values), [null, undefined]) === true);
console.log(set(find(0, values), [0, "0"]) === true);


// double and triplet
var num = "19";
var num1 = 19;
if (num === num1) {
    console.log("dash");
}
else
    console.log("sak");
valid(num);
console.log(attended(10, 2));