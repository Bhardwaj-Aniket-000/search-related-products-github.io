let input = document.querySelector("#search");
let products = document.querySelectorAll(".items");
let h3 = document.getElementsByTagName("h3");
let arr = Array.from(products);

input.addEventListener("keyup", (e) => {
	let val = input.value.toUpperCase();
	console.log(val);
	for (let i = 0; i < h3.length; i++) {
		let a = h3[i].innerText.toUpperCase();
		if (a.indexOf(val) > -1) {
			arr[i].style.display = "";
		}else {
			arr[i].style.display = "none";
		}
	}
});
