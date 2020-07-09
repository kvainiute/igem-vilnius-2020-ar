const cookietext = {
    lt: ["Šioje svetainėje naudojami slapukai analitikai. Su kurių slapukų naudojimu sutinkate?", "Sutinku", "Privalomi", "Funkciniai", "Analitiniai", "Daugiau informacijos..."],
    en: ["This website uses cookies for analytics. Which cookies do you allow the use of?", "Allow", "Required", "Functional", "Analytical", "More information..."]
}

class LanguageSwitcher {
    static setCookieLanguage(language) {
        let cookiebox = document.getElementById("consent");
        let buttons = document.getElementById("button-wrapper");
        let checkboxes = document.getElementById("cookieCheckboxes");
        if (cookiebox == undefined) return;
        cookiebox.children[0].innerText = cookietext[language][0];
        buttons.children[0].innerText = cookietext[language][1];
        checkboxes.children[0].lastElementChild.innerText = cookietext[language][2];
        checkboxes.children[1].lastElementChild.innerText = cookietext[language][3];
        checkboxes.children[2].lastElementChild.innerText = cookietext[language][4];
        document.getElementById("policyLink").innerText = cookietext[language][5];
    }

    static getLanguage() {
        try {
            return document.cookie.split('; ')
                .find(row => row.startsWith('language'))
                .split('=')[1];
        } catch (_) {
            return "lt";
        }
    }

    static setLanguage(language, updateLanguageBox = false) {
        LanguageSwitcher.currentLanguage = language;
        let cookieconsent = getCookieConsent();
        if (cookieconsent === "1" || cookieconsent === "3") {
            document.cookie = "language=" + language;
        }
        document.documentElement.lang = language;
        for (let func of LanguageSwitcher.listeners) {
            func(language);
        }
        this.setCookieLanguage(language);
        if (!updateLanguageBox) return;
        this.createLanguageBox(LanguageSwitcher.languagebox);
    }

    static createLanguageBox(languagebox) {
        languagebox.innerHTML = "";
        languagebox.className = "languageBox";
        for (let key of LanguageSwitcher.languageKeys) {
            let item = LanguageSwitcher.languages[key];

            let itemText = document.createElement("span");
            if (key == LanguageSwitcher.currentLanguage) itemText.className = "active";
            itemText.innerText = key;
            itemText.setAttribute("ariaLabel", item.name);
            itemText.onclick = () => {
                LanguageSwitcher.setLanguage(key, true);
            };

            languagebox.appendChild(itemText);
        }
    }

    static makeLanguageBox(element, position) {
        let languagebox = document.createElement("div");
        this.createLanguageBox(languagebox);

        if (element.children == undefined || element.children.length == 0) {
            element.appendChild(languagebox);
        } else {
            element.insertBefore(languagebox, element.children[position]);
        }
        LanguageSwitcher.languagebox = languagebox;
        document.documentElement.lang = LanguageSwitcher.currentLanguage;
    }

    static addOnLanguageChangeListener(listener) {
        LanguageSwitcher.listeners.push(listener);
    }
}

LanguageSwitcher.listeners = [];
LanguageSwitcher.languages = {
    lt: {
        name: "lietuvių k.",
        img: "images/language/lt.svg"
    },
    en: {
        name: "English",
        img: "images/language/en.svg"
    },
};
LanguageSwitcher.languageKeys = Object.keys(LanguageSwitcher.languages);
LanguageSwitcher.currentLanguage = LanguageSwitcher.getLanguage();
LanguageSwitcher.setCookieLanguage(LanguageSwitcher.currentLanguage);
