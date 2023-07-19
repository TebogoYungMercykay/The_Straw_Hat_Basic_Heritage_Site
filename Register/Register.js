// Commands to run server:
//      npm init
//      npm install nedb
//      node *.js
// The Submit button's onClick function
// Creating the database
const DatabaseStore = require("nedb");
const database = new DatabaseStore("../Login/logindb");
database.loadDatabase();
console.log("UploadProfile Running!");
// database.insert({Email:"strawhat@gmail.com",Password:"strawhat23",Names:"Straw Hat",Age:"20",Contact_Details:"0664110178 strawhat@mail.com",Owner_Image:"",Picture:""});
// database.insert({Names:"P",Artwork_Desc:"I",Price:"U",Tax_Number:"I",Contact_Details:"J",Owner_Image:"B",Picture:"N"});

function submitData() {
    database.insert({Email:$('#text1').val(),Password:$('#text2').val(),Names:$('#text3').val(),Age:$('#text4').val(),Contact_Details:$('#text5').val(),Owner_Image:$('#text6').val(),Picture:$('#text7').val()});
}
