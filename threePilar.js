class Book{
    constructor()
    {
        this.fav = [];
    }
    addfav(bookname)
    {
        if (!bookname.includes("great"))
        {
            this.fav.push(bookname);
            }
    }

printFav()
{
    console.log(`favorite Books: ${String(this.fav.length)}`);
    for (let bookname of this.fav )
        {
        console.log(bookname);
        }
}
}
function loadBooks(theBookShelf)
{
    fake(Book_API, function onBooks(booknames) {
        for (let bookname of booknames)
        {
            theBookShelf.addfav(bookname);
        }
        theBookShelf.printFav();
    });
}
var Book_API = "https://some.url/api";
var mybook = new Book();
loadBooks(mybook);

function fake(url, cb)
{
    setTimeout(function fakeLoad() {
        cb(["the song of ice and fire",
            "the great gatby",
            "Crime expectation",
            "great  punishment",
            "you don't Know js"]);
    
    },500);
}
