const mtk = 80;
const bahasaIndonesia = 88;
const bahasaInggris = 90;
const ipa = 75;
const pelajaran = [mtk, bahasaInggris, bahasaIndonesia, ipa];
let total = null;

for (var i = 0; i < pelajaran.length; i++) {
	total += parseFloat(pelajaran[i]);
	var rata = total / pelajaran.length;
}

let grade = null;
switch (rata !== null) {
	case rata <= 100 && rata >= 90:
		grade = "A";
		break;
	case rata <= 89 && rata >= 80:
		grade = "B";
		break;
	case rata <= 79 && rata >= 70:
		grade = "C";
		break;
	case rata <= 69 && rata >= 60:
		grade = "D";
		break;
	case rata <= 59 && rata >= 0:
		grade = "E";
		break;
	default:
		grade = undefined;
		break;
}

console.log(`Rata-rata = ${rata}`);
console.log(`Grade = ${grade}`);
