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

function createCheckboxAndLabel(id, text){
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

function createCookieConsentBox() {
    const cookiediv = document.createElement("div");
    cookiediv.id = "consent";

    const text = document.createElement("p");
    text.innerText = "This website uses cookies for analytics. Which cookies do you allow the use of?";

    const checkboxes = document.createElement("div");
    checkboxes.id = "cookieCheckboxes";
    
    const buttonWrapper = document.createElement("div");
    buttonWrapper.id = "button-wrapper";

    const policyLink = document.createElement("a");
    policyLink.id = "policyLink";
    policyLink.href = "/privacypolicy.html";
    policyLink.innerText = "More information...";

    cookiediv.appendChild(text);
    cookiediv.appendChild(checkboxes);
    cookiediv.appendChild(policyLink);
    cookiediv.appendChild(buttonWrapper);

    const requiredCheckbox = createCheckboxAndLabel("checkboxRequired", "Required");
    requiredCheckbox.firstElementChild.disabled = true;
    checkboxes.appendChild(requiredCheckbox);
    checkboxes.appendChild(createCheckboxAndLabel("checkboxFunctional", "Functional"));
    checkboxes.appendChild(createCheckboxAndLabel("checkboxAnalytical", "Analytical"));

    const buttonAccept = document.createElement("button");
    buttonAccept.innerText = "Allow";
    buttonAccept.onclick = () => {
        let functionalConsent = document.getElementById("checkboxFunctional").checked;
        let analyticsConsent = document.getElementById("checkboxAnalytical").checked;

        let cookieValue = (functionalConsent ? 1 : 0) + (analyticsConsent ? 2 : 0);

        cookiediv.remove();
        setCookieConsent(cookieValue.toString());
        gaEnable();
    };
    buttonAccept.id = "bt-accept";
    buttonWrapper.appendChild(buttonAccept);

    const buttonClose = document.createElement("button");
    buttonClose.innerText = "X";
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
