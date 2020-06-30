function gaEnable(){
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

function getCookieConsent(){
    try {
        return document.cookie.split('; ')
            .find(row => row.startsWith('cookieconsent'))
            .split('=')[1];
    } catch (_) {
        return "0";
    }
}
function setCookieConsent(value){
    document.cookie = "cookieconsent=" + value;
}

function createCookieConsentBox(){
    const cookiediv = document.createElement("div");
    cookiediv.id = "consent";
    let text = document.createElement("p");
    text.innerText = "This website uses cookies for analytics. Do you allow the use of cookies?";
    cookiediv.appendChild(text);
    let buttonAccept = document.createElement("button");
    buttonAccept.innerText = "Allow";
    buttonAccept.onclick = ()=>{
        cookiediv.remove();
        setCookieConsent("1");
        gaEnable();
    };
    cookiediv.appendChild(buttonAccept);
    let buttonReject = document.createElement("button");
    buttonReject.innerText = "Deny";
    buttonReject.onclick = ()=>{
        cookiediv.remove();
        setCookieConsent("-1");
    };
    cookiediv.appendChild(buttonReject);
    return cookiediv;
}

if (cookieConsentApplyElement == undefined) var cookieConsentApplyElement = document.body;
let consent = getCookieConsent();
if (consent === "1"){
    gaEnable();
}else if (consent == "0"){
    let cookiediv = createCookieConsentBox();    
    cookieConsentApplyElement.appendChild(cookiediv);
}