const changeLo = document.querySelector("#changeLo");
const changeTech = document.querySelector("#changeTech");
const headline = document.querySelector("h1");
const selectBox = document.querySelector("#select");
const gradePolExam = document.querySelector("#gradePolExam");
const gradeMathExam = document.querySelector("#gradeMathExam");
const gradeForeignExam = document.querySelector("#gradeForeignExam");
const gradePol = document.querySelector("#gradePolish");
const gradeMath = document.querySelector("#gradeMath");
const gradeForeign = document.querySelector("#gradeForeign");
const gradePlus = document.querySelector("#gradePlus");
const gradeDistYes = document.querySelector("#gradeDistYes");
const volunteerYes = document.querySelector("#volunteerYes");
const scoreDisplay = document.querySelector(".grades-container__score");
const contestFirst = document.querySelector(".ContestFirst");
const contestSecond = document.querySelector(".ContestSecond");
const contestThird = document.querySelector(".ContestThird");
const contestFourth = document.querySelector(".contestFourth");
const contestFifth = document.querySelector(".contestFifth");
const contestSixth = document.querySelector(".contestSixth");
const contestSeventh = document.querySelector(".contestSeventh");
const contestEighth = document.querySelector(".contestEighth");
const contestNinth = document.querySelector(".contestNinth");
const contestTenth = document.querySelector(".contestTenth");
const contestEleventh = document.querySelector(".contestEleventh");
const contestTwelfth = document.querySelector(".contestTwelfth");
const contestThirteenth = document.querySelector(".contestThirteenth");
const contestThourteenth = document.querySelector(".contestThourteenth");
const contestFifteenth = document.querySelector(".contestFifteenth");
const contestSixteenth = document.querySelector(".contestSixteenth");
const contestSeventeenth = document.querySelector(".contestSeventeenth");
const contestEighteenth = document.querySelector(".contestEighteenth");
const contestNineteenth = document.querySelector(".contestNineteenth");
const contestTwenth = document.querySelector(".contestTwenth");
let score = 0;
let contestScore = 0;

const changeLoSite = () => {
	selectBox.innerHTML = `<option value="biologia">Biologia</option>
						<option value="chemia">Chemia</option>
						<option value="fizyka">Fizyka</option>
						<option value="geografia">Geografia</option>
						<option value="historia">Historia</option>
						<option value="informatyka">Informatyka</option>
						<option value="wos">WOS</option>`;
	headline.textContent = `Kalkulator punktów (III LO):`;
};
const changeTechSite = () => {
	selectBox.innerHTML = `<option value="biologia">Biologia</option>
						<option value="chemia">Chemia</option>
						<option value="fizyka">Fizyka</option>
						<option value="geografia">Geografia</option>
						<option value="informatyka">Informatyka</option>`;
	headline.textContent = `Kalkulator punktów (Technikum nr 2):`;
};

const gradeOnPoints = {
	2: 2,
	3: 8,
	4: 14,
	5: 17,
	6: 18,
};

const tenPointsAdd = () => {
	contestScore += 10;
	updateScore();
};
const sevenPointsAdd = () => {
	contestScore += 7;
	updateScore();
};
const fivePointsAdd = () => {
	contestScore += 5;
	updateScore();
};
const fourPointsAdd = () => {
	contestScore += 4;
	updateScore();
};
const threePointsAdd = () => {
	contestScore += 3;
	updateScore();
};
const twoPointsAdd = () => {
	contestScore += 2;
	updateScore();
};
const onePointsAdd = () => {
	contestScore += 1;
	updateScore();
};

function updateScore() {
	let scorePolExam = 0;
	let scoreMathExam = 0;
	let scoreForeignExam = 0;

	if (
		parseFloat(gradePolExam.value) <= 100 &&
		parseFloat(gradePolExam.value) > 0
	) {
		scorePolExam = parseFloat(gradePolExam.value) * 0.35 || 0;
	}
	if (
		parseFloat(gradeMathExam.value) <= 100 &&
		parseFloat(gradeMathExam.value) > 0
	) {
		scoreMathExam = parseFloat(gradeMathExam.value) * 0.35 || 0;
	}
	if (
		parseFloat(gradeForeignExam.value) <= 100 &&
		parseFloat(gradeForeignExam.value) > 0
	) {
		scoreForeignExam = parseFloat(gradeForeignExam.value) * 0.3 || 0;
	}

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

	if (contestScore > 18) {
		contestScore = 18;
	}
	score =
		scorePolExam +
		scoreMathExam +
		scoreForeignExam +
		scorePol +
		scoreMath +
		scoreForeign +
		scorePlus +
		gradeDistPoints +
		volunteerPoints +
		contestScore;
	scoreDisplay.textContent = `Twój wynik to: ${Math.round(score)}`;
}

changeLo.addEventListener("click", changeLoSite);
changeTech.addEventListener("click", changeTechSite);
gradePolExam.addEventListener("input", updateScore);
gradeMathExam.addEventListener("input", updateScore);
gradeForeignExam.addEventListener("input", updateScore);
gradePol.addEventListener("input", updateScore);
gradeMath.addEventListener("input", updateScore);
gradeForeign.addEventListener("input", updateScore);
gradePlus.addEventListener("input", updateScore);
gradeDistYes.addEventListener("input", updateScore);
volunteerYes.addEventListener("input", updateScore);
contestFirst.addEventListener("change", tenPointsAdd);
contestSecond.addEventListener("change", sevenPointsAdd);
contestThird.addEventListener("change", fivePointsAdd);
contestFourth.addEventListener("change", tenPointsAdd);
contestFifth.addEventListener("change", sevenPointsAdd);
contestSixth.addEventListener("change", fivePointsAdd);
contestSeventh.addEventListener("change", tenPointsAdd);
contestEighth.addEventListener("change", sevenPointsAdd);
contestNinth.addEventListener("change", fivePointsAdd);
contestTenth.addEventListener("change", sevenPointsAdd);
contestEleventh.addEventListener("change", fivePointsAdd);
contestTwelfth.addEventListener("change", threePointsAdd);
contestThirteenth.addEventListener("change", tenPointsAdd);
contestThourteenth.addEventListener("change", sevenPointsAdd);
contestFifteenth.addEventListener("change", sevenPointsAdd);
contestSixteenth.addEventListener("change", fivePointsAdd);
contestSeventeenth.addEventListener("change", fourPointsAdd);
contestEighteenth.addEventListener("change", threePointsAdd);
contestNineteenth.addEventListener("change", twoPointsAdd);
contestTwenth.addEventListener("change", onePointsAdd);
