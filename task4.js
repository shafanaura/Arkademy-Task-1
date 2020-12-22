// A
let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};

let newData = { ...data, hobby: ["Play Basket Ball", "Reading Book"] };

newData.name = "Shafa Naura";
newData.email = "@shafanaura48@gmail.com";

console.log(newData.name);
console.log(newData.email);
console.log(newData.hobby);

// B
let { street, city } = data.address;
console.log(street);
console.log(city);
