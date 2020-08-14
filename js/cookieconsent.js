function gaEnable() {
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'UA-163985569-1');

	let script = document.createElement("script");
	script.src = "https://www.googletagmanager.com/gtag/js?id=UA-163985569-1";
	script.async = true;
	document.head.appendChild(script);
	gaEnable = undefined;
}

function getCookieConsent() {
	try {
		return document.cookie.split('; ')
			.find(row => row.startsWith('cookieconsent'))
			.split('=')[1];
	} catch (_) {
		return "-2";
	}
}

function setCookieConsent(value) {
	document.cookie = "cookieconsent=" + value;
}

function createCheckboxAndLabel(id, text) {
	const div = document.createElement("div");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = true;
	checkbox.id = id;
	div.appendChild(checkbox);

	const labelFunctional = document.createElement("label");
	labelFunctional.htmlFor = id;
	labelFunctional.innerText = text;
	div.appendChild(labelFunctional);
	return div;
}

function acceptCookies() {
	let functionalConsent = document.getElementById("checkboxFunctional").checked;
	let analyticsConsent = document.getElementById("checkboxAnalytical").checked;

	let cookieValue = (functionalConsent ? 1 : 0) + (analyticsConsent ? 2 : 0);

	document.getElementById("consent").remove();
	setCookieConsent(cookieValue.toString());
	if (analyticsConsent) gaEnable();
}

function createCookieConsentBox() {
	const cookiediv = document.createElement("div");
	cookiediv.id = "consent";

	const text = document.createElement("p");
	text.innerHTML = "This website uses cookies for analytics.By clicking 'Allow' or continuing to browse this site, you agree to our < a href = '/privacypolicy.html' > privacy policy < /a>. Which cookies do you allow the use of?"

	const checkboxes = document.createElement("div");
	checkboxes.id = "cookieCheckboxes";
	const checkboxesWrapper = document.createElement('div');
	checkboxesWrapper.id = 'cookieCheckWrap';

	const buttonWrapper = document.createElement("div");
	buttonWrapper.id = "button-wrapper";

	cookiediv.appendChild(text);
	cookiediv.appendChild(checkboxesWrapper);
	checkboxesWrapper.appendChild(checkboxes)
	cookiediv.appendChild(buttonWrapper);

	const requiredCheckbox = createCheckboxAndLabel("checkboxRequired", "Required");
	requiredCheckbox.firstElementChild.disabled = true;
	checkboxes.appendChild(requiredCheckbox);
	checkboxes.appendChild(createCheckboxAndLabel("checkboxFunctional", "Functional"));
	checkboxes.appendChild(createCheckboxAndLabel("checkboxAnalytical", "Analytical"));

	const buttonAccept = document.createElement("button");
	buttonAccept.innerText = "Allow";
	buttonAccept.onclick = acceptCookies


	buttonAccept.id = "bt-accept";
	buttonWrapper.appendChild(buttonAccept);

	const buttonClose = document.createElement("div");
	buttonClose.innerHTML = "<img src='./images/close-yellow.svg'>";
	buttonClose.onclick = () => {
		cookiediv.remove();
		setCookieConsent("-1");
	};
	buttonClose.id = "bt-close";
	buttonWrapper.appendChild(buttonClose);

	return cookiediv;
}



if (cookieConsentApplyElement == undefined) var cookieConsentApplyElement = document.body;
let consent = getCookieConsent();
if (consent === "2" || consent === "3") {
	gaEnable();
} else if (consent == "-2") {
	let cookiediv = createCookieConsentBox();
	cookieConsentApplyElement.appendChild(cookiediv);
}
window.onbeforeunload = acceptCookies
