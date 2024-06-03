const
	display = document.querySelector("#money"),
	button = document.querySelector("#b1");
let startmoney = 0;

const reducer =startm=>display.innerHTML = `Money : ${startm} $`;
reducer(startmoney);
button.addEventListener("click", () => {
	startmoney += 1;
	reducer(startmoney);
});
