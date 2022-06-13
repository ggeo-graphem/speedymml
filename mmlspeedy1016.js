const headTag = document.head || document.getElementsByTagName("head")[0];

window.appendIntlTel = () => {
	console.log("appendIntlTel");
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
	console.log("appendSpeedySrc");
	const speedySrc = document.createElement("script");
	speedySrc.setAttribute("src", "https://thespeedyapp.com/js/utils.js");
	speedySrc.setAttribute("id", "speedySrc");
	speedySrc.setAttribute("defer", "true");
	headTag.appendChild(speedySrc);
};

window.initSpeedyBox = () => {
	console.log("initSpeedyBox");
	window.appendIntlTel();
	window.appendSpeedySrc();
	setTimeout(() => {
		jQuery.noConflict();
		jQuery(function () {
			jQuery(".signup_1016").load("https://thespeedyapp.com/get-signup", {
				box_id: "1016",
			});
		});
	}, 1000);
};
window.initSpeedyBox();
