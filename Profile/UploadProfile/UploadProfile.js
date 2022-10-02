// Commands to run server:
//      npm init
//      npm install nedb
//      node *.js
// The Submit button's onClick function
// Creating the database
const DatabaseStore = require("nedb");
const database = new DatabaseStore(uploadprofile.db);
database.loadDatabase();
console.log("UploadProfile Running!");

function submitData() {
    var Names = $('#text1').val();
    var Artwork_Desc = $('#text2').val();
    var Price = $('#text3').val();
    var Tax_Number = $('#text4').val();
    var Contact_Details = $('#text5').val();
    var Owner_Image = $('#text6').val();
    var Picture = $('#text7').val();

    jsonObject={
        "Names":"",
        "Artwork_Desc":"",
        "Price":"",
        "Tax_Number":"",
        "Contact_Details":"",
        "Owner_Image":"",
        "Picture":""
    }
    jsonObject.Names = Names;
    jsonObject.Artwork_Desc = Artwork_Desc;
    jsonObject.Price = Price;
    jsonObject.Tax_Number = Tax_Number
    jsonObject.Contact_Details = Contact_Details;
    jsonObject.Owner_Image = Owner_Image;
    jsonObject.Picture = Picture;
    
    // let strObject = JSON.stringify(jsonObject);
    // document.write(strObject);
    // Javascript - Appending object to JSON File

    // Inserting Data to the nedb
    // function databaseInsert() {
    //     database.insert({Name:"Sello"});
    // }
    database.insert();
    // Finding everything in the database
    database.find({}, function(err, databaseOut) {
        if(err) {
            console.log("Error: " + err.message);
        }
        console.log("Loading, Upload to the page!");
        let output = "";
        output += `
        <div class="profile">
        <p class="title">${databaseOut[0].Names}</p>
        <p class="description">Artwork Description: ${databaseOut[0].Artwork_Desc}</p>
        <img src="${databaseOut[0].Owner_Image}" alt="${databaseOut[0].Names}">
        <p class="description"> </p>
        <img src="${databaseOut[0].Picture}" alt="${databaseOut[0].Artwork_Desc}">
        <p class="description"> </p>
        <p class="description">Price: R${databaseOut[0].Price}</p>
        <p class="description">Tax Number: ${databaseOut[0].Tax_Number}</p>
        <p class="description">Contact: ${databaseOut[0].Contact_Details}</p>
        <p class="cart">Contact Seller <i class="bx bx-cart-alt"></i></p>
        </div>
        `;
		document.querySelector(".profiles").innerHTML = output;
        console.log("DONE!");
    });
}