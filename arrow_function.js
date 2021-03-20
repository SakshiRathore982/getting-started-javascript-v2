var getStudentById =studentId =>
                stu.find(record=> 
 record.id == studentId
    );

var  reco=recordId=>

    recordId.map(getStudentById).sort((R1, R2) => (R1.name < R2.name) ? -1 : (R1.name > R2.name) ? 1 : 0)
        .forEach(
            record => console.log(`${record.name} ( ${record.id}):${record.paid ? "paid" : "not paid"} `));
    
        
var paid=()=>
 [...current, ...(stu.filter(record =>
         (record.paid && !current.includes(record.id)))
    .map( record=> record.id)
    )];

var remindUnpaid=recordIds=>

     reco(recordIds.filter(studentId=>! getStudentFromId(studentId).paid
     )
    );



var current = [12, 2, 33, 4];
var stu = [{ id: 22, name: "frank", paid: true },
    { id: 22, name: "rank", paid: true },
    { id: 12, name: "suzy", paid: true },
    { id: 2, name: "funk", paid: false },
    { id: 24, name: "mary", paid: false},
    { id: 4, name: "fran", paid: true },
    { id: 42, name: "peter", paid: false},
    { id: 33, name: "sarah", paid: true },
    { id: 211, name: "fatty", paid: true }];

reco(current);
console.log("-------");
current = paid();
reco(current);
console.log("-------");
(current);

