class FontSwitcher {
    static get(){
        try {
            return document.cookie.split('; ')
                .find(row => row.startsWith('font'))
                .split('=')[1];
        } catch (_) {
            return "none";
        }
    }

    static set(font = "none"){
        FontSwitcher.currentFont = font;
        let cookieconsent = getCookieConsent();
        if (cookieconsent === "1" || cookieconsent === "3"){
            document.cookie = "font=" + font;
        }
        FontSwitcher.styleElement.innerText = FontSwitcher.fonts[font].style;
    }

    static toggle(){
        console.log("toggle");
        if (FontSwitcher.currentFont == "od"){
            FontSwitcher.set("none");
        }else{
            FontSwitcher.set("od");
        }
        console.log(FontSwitcher.get());
    }

    static init(){
        FontSwitcher.currentFont = FontSwitcher.get();
        FontSwitcher.styleElement = document.createElement("style");
        document.head.appendChild(FontSwitcher.styleElement);
        FontSwitcher.set(FontSwitcher.get());
    }
}

FontSwitcher.fonts = {
    od: {
        style: '* { font-family: "opendyslexic" !important; line-height: 1em}'
    },
    none: {
        style: ""
    }
};