// Commands to run server:
//      npm init
//      npm install nedb
//      node *.js
// The Submit button's onClick function
// Creating the database
const DatabaseStore = require("nedb");
const database = new DatabaseStore(uploadprofile.db);
database.loadDatabase();
console.log("UploadSculpture Running");

function submitData() {
    let name = $('#text1').val();
    let location = $('#text2').val();
    let price = $('#text3').val();
    let creator = $('#text4').val();
    let picture = $('#text5').val();

    let jsonObject={
        "Name":"",
        "Location":"",
        "Price":"",
        "Creator":"",
        "Picture":""
    }
    jsonObject.Name = name;
    jsonObject.Location = location;
    jsonObject.Price = price;
    jsonObject.Creator = creator
    jsonObject.Picture = picture;

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
            <div class="sculpturesGallery">
            <p class="title">${databaseOut[0].Name}</p>
            <p class="description">Location: ${databaseOut[0].Location}</p>
            <img src="${databaseOut[0].Picture}" alt="${databaseOut[0].Name}">
            <p class="description"> </p>
            <p class="description">Price: R${databaseOut[0].Price}</p>
            <p class="description">Creator: ${databaseOut[0].Creator}</p>
            <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
                </div>
        `;
		document.querySelector(".sculpturesGallerys").innerHTML = output;
    });
}