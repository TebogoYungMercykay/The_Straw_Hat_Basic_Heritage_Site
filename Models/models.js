let http = new XMLHttpRequest();
http.open('get', 'models.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let Modelss = JSON.parse(this.responseText);
        let output = "";
        for(let item of Modelss){
            output += `
            <div class="models">
            <p class="title">${item.Names}</p>
            <p class="description">Artwork Description: ${item.Artwork_Desc}</p>
            <p class="description"> </p>
            <img src="${item.Picture}" alt="${item.Artwork_Desc}">
            <p class="description"> </p>
            <p class="description">Price: R${item.Price}</p>
            <p class="description">Tax Number: ${item.Tax_Number}</p>
            <p class="description">Contact: ${item.Contact_Details}</p>
            <p class="cart">Contact Model <i class="bx bx-cart-alt"></i></p>
            </div>
			`;
		}
		document.querySelector(".modelss").innerHTML = output;
	}
}