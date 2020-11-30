class workshop {
    constructor(teacher) { /* constructor is keyword not as in cpp by class name*/
        this.teacher = teacher;
    }
    quiet(question) {/*this is function as in cPP */
        console.log(this.teacher, question);
    }
}
var deep = new workshop("kyle");
var react = new workshop("suzy");
deep.quiet("is a teacher");
react.quiet("is a doctor");
