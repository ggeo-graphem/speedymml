const headTag = document.head || document.getElementsByTagName("head")[0];
const speedyBoxes = document.querySelectorAll(".expert_speedy");

window.appendIntlTel = () => {
	const speedyintlTelSrc = document.createElement("script");
	speedyintlTelSrc.setAttribute(
		"src",
		"https://thespeedyapp.com/js/intlTelInput.js"
	);
	speedyintlTelSrc.setAttribute("id", "speedyintlTelSrc");
	speedyintlTelSrc.setAttribute("defer", "true");
	headTag.appendChild(speedyintlTelSrc);
};

window.appendSpeedySrc = () => {
	const speedySrc = document.createElement("script");
	speedySrc.setAttribute("src", "https://thespeedyapp.com/js/utils.js");
	speedySrc.setAttribute("id", "speedySrc");
	speedySrc.setAttribute("defer", "true");
	headTag.appendChild(speedySrc);
};

window.initSpeedyBox = () => {
	window.appendIntlTel();
	window.appendSpeedySrc();
	setTimeout(() => {
		jQuery.noConflict();
		jQuery(function () {
			speedyBoxes.forEach(function (speedyBox) {
				const spID = jQuery(speedyBox).data("speedy-id");
				if (spID) {
					jQuery(`.signup_${spID}`).load(
						"https://thespeedyapp.com/get-signup",
						{
							box_id: `${spID}`,
						}
					);
				}
			});
		});
	}, 3000);
};
if (speedyBoxes.length) {
	window.initSpeedyBox();
}
