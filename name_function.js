function getStudentById(studentId)
{
    return stu.find(function matchId(record) {
        return (record.id == studentId);
    });
}
function reco(recordId)
{
    var record = recordId.map(getStudentById);
    record.sort(function sortByNameAsc(R1, R2) {
        if (R1.name < R2.name) {
            return -1;
        }
        else if (R1.name > R2.name) {
            return 1;
        }
        else {
            return 0;
        }
    });
    record.forEach(function reco(record) {
        console.log(`${record.name} ( ${record.id}):${record.paid ? "paid" : "not paid"} `);
    });
}
function paid()
{
    var IdsTo = stu.filter(function needTo(record) {
        return (record.paid && !current.includes(record.id));
    }).map(function getStudentById(record) {
        return record.id;
    });
    return [...current, ...IdsTo];
}
function remindUnpaid(recordIds)
{
    var unpaid = recordIds.filter(function isUnpaid(studentId) {
        var record = getStudentById(studentId);
        return !record.paid;
    });
    reco(unpaid);
}

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

