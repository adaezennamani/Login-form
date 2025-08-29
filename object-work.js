//add object keyword of my choice
const workObject = { name: "Precious", dept: "Computer/statistics", level: "300lvl", field: "fullstack web development", height: "normal girl height", favcolor: "red", hobby: "listening to music", favartist: "Central cee", Alias: "Daisy", favquote: "when you've hit rock bottom,the only way to go is up" };

console.log(workObject)


 //delete atleast two

delete workObject.favquote;
delete workObject.Alias;
console.log(workObject)


//add three
workObject.color = "Blueviolet"
workObject.LastName = "Nnamani"
workObject.favpet = "Lahsa dogs"
console.log(workObject)


//print with length on the console
let work = {
    name: "Precious",
    dept: "Computer/statistics",
    level: "300lvl",
    field: "full stack web development",
    height: "normal girl height",
    favcolor: "red",
    favartist: "Central cee",
    hobby: "Listening to music",
    color: "Blueviolet",
    LastName: "Nnamani",
    favpet: "Lahsa dogs"
}

console.log(Object.keys(work).length)


