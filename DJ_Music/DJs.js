let http = new XMLHttpRequest();
http.open('get', 'DJs.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let DJSs = JSON.parse(this.responseText);
        let output = "";
        for(let item of DJSs){
            output += `
            <div class="DJs">
            <p class="title">${item.Names}</p>
            <p class="description">Artwork Description: ${item.Artwork_Desc}</p>
            <p class="description"> </p>
            <img src="${item.Picture}" alt="${item.Artwork_Desc}">
            <p class="description"> </p>
            <p class="description">Price: R${item.Price}</p>
            <p class="description">Tax Number: ${item.Tax_Number}</p>
            <p class="description">Contact: ${item.Contact_Details}</p>
            <p class="cart">Contact DJs <i class="bx bx-cart-alt"></i></p>
            </div>
			`;
		}
		document.querySelector(".DJss").innerHTML = output;
	}
}