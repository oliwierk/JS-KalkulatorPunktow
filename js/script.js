const gradePol = document.querySelector("#gradePolish");
const gradeMath = document.querySelector("#gradeMath");
const gradeForeign = document.querySelector("#gradeForeign");
const gradePlus = document.querySelector("#gradePlus");
const gradeDistYes = document.querySelector("#gradeDistYes");
const volunteerYes = document.querySelector("#volunteerYes");

let score = 0;
const scoreDisplay = document.querySelector(".grades-container__score");

const gradeOnPoints = {
	2: 2,
	3: 8,
	4: 14,
	5: 17,
	6: 18,
};

const updateScore = () => {
	const scorePol =
		gradeOnPoints[Math.min(Math.max(parseFloat(gradePol.value), 1), 6)] || 0;
	const scoreMath =
		gradeOnPoints[Math.min(Math.max(parseFloat(gradeMath.value), 1), 6)] || 0;
	const scoreForeign =
		gradeOnPoints[Math.min(Math.max(parseFloat(gradeForeign.value), 1), 6)] ||
		0;
	const scorePlus =
		gradeOnPoints[Math.min(Math.max(parseFloat(gradePlus.value), 1), 6)] || 0;
	let gradeDistPoints = 0;
	let volunteerPoints = 0;
	if (gradeDistYes.checked) {
		gradeDistPoints = 7;
	} else {
		gradeDistPoints = 0;
	}
	if (volunteerYes.checked) {
		volunteerPoints = 3;
	} else {
		volunteerPoints = 0;
	}
	score =
		scorePol +
		scoreMath +
		scoreForeign +
		scorePlus +
		gradeDistPoints +
		volunteerPoints;
	scoreDisplay.textContent = `Twój wynik to: ${score}`;
};

gradePol.addEventListener("input", updateScore);
gradeMath.addEventListener("input", updateScore);
gradeForeign.addEventListener("input", updateScore);
gradePlus.addEventListener("input", updateScore);
gradeDistYes.addEventListener("input", updateScore);
volunteerYes.addEventListener("input", updateScore);
