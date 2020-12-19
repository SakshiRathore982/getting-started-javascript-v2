const newclue = (name) => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
}
console.log(newclue("clue"));
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue(): isFalse();
};
const LogT = () => { console.log(true); };
const LogF = () => { console.log(false); };
ifElse(0, LogT, LogF);

var I = function (n) { return n + 1; };
var S = function (n) { return n * n; };
var daMath = function (n, func) { return func(n); };
doMath(5, S);
doMath(4, I);