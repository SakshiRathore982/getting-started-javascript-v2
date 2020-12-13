var name = (list) => {
    //console.log(arguments);
    return `col ${list}`;
}
const add = function (a, b=2)
{
    b = b && 2;
    console.log(arguments);
    return a + b;
}
console.log(add(3));

const con = function () {
    const arr = Array.from(arguments);
    arr.push("i love you");
    return arr.join(' ');
}
console.log(con("dashu", "dashu ", "dash "));

console.log(name("sakshi"));