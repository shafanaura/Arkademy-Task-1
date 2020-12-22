var printSegitiga = 5;

for (var i = printSegitiga; i >= 1; i--) {
	var s = "";

	for (var j = 1; j <= i; j++) {
		s += j;
		s += " ";
	}
	console.log(s);
}
