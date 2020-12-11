const { name, branch, college } = { "name": "sakshi", "branch": "7semB", "college": "jiet" }
console.log(name);
console.log(branch);
console.log(college);

const game = {
    'suspects': [{
        name: "rusty",
    color:"orange"},
 {
    name:"Miss soar",
    color:"red"
        }]
    
}
var gloop = function ()
{
    for (var i = 0; i < game.suspects.length; i++)
    {   console.log('outer loop ')
        for (var key in game.suspects[i]) {
            console.log("inner loop ")
            if (game.suspects[i][key] == "Rusty")
            {
                console.log('found\'em!')
            }
            else {
                console.log('next time !');
            }
        }
        }
    }

const first = game.suspects[0].color;
console.log(first);
//var fire[{ color: first1 }, { color: second2 }] = game.suspects;
//console.log(fire);
function foo() {
    for (let i = 0; i < game.suspects.length; i++)
    {
        console.log(game.suspects[i]);
        }
}
foo()
