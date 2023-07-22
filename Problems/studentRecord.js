// Student Record Manipulation 
let Student = {
    name: "Nidhi",
    age: 10,
    gender: "female",
    address: "Goa"
}

function studentManipulation(obj, prop, opperation, newVal) {
    switch (opperation) {
        case "delete":
            delete obj[prop]
            break;
        case "edit":
            if (obj[prop]) {
                obj[prop] = newVal
            }
    }

return obj
}
let update=studentManipulation(Student,"age","edit", 12)
console.log(update)