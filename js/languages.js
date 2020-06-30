const cookietext = {
    lt: ["Šioje svetainėje naudojami slapukai analitikai. Ar sutinkate su slapukų naudojimu?", "Sutinku", "Nesutinku"],
    en: ["This website uses cookies for analytics. Do you allow the use of cookies?", "Allow", "Deny"]
}

class LanguageSwitcher {
    static setCookieLanguage(language){
        let cookiebox = document.getElementById("consent");
        if (cookiebox == undefined) return;
        cookiebox.children[0].innerText = cookietext[language][0];
        cookiebox.children[1].innerText = cookietext[language][1];
        cookiebox.children[2].innerText = cookietext[language][2];
    }

    static getLanguage(){
        try {
            return document.cookie.split('; ')
                .find(row => row.startsWith('language'))
                .split('=')[1];
        } catch (_) {
            return "lt";
        }
    }

    static setLanguage(language, updateLanguageBox = false){
        LanguageSwitcher.currentLanguage = language;
        document.cookie = "language=" + language;
        document.documentElement.lang = language;
        for (let func of LanguageSwitcher.listeners){
            func(language);
        }
        this.setCookieLanguage(language);
        if (!updateLanguageBox) return;
        this.createLanguageBox(LanguageSwitcher.languagebox);
    }

    static createLanguageBox(languagebox){
        languagebox.innerHTML = "";
        languagebox.className = "languageBox";
        for (let key of LanguageSwitcher.languageKeys){
            let item = LanguageSwitcher.languages[key];
    
            let itemText = document.createElement("span");
            if (key == LanguageSwitcher.currentLanguage) itemText.className = "active";
            itemText.innerText = key;
            itemText.setAttribute("ariaLabel", item.name);
            itemText.onclick = ()=>{
                LanguageSwitcher.setLanguage(key, true);
            };
    
            languagebox.appendChild(itemText);
        }
    }

    static makeLanguageBox(element, position) {
        let languagebox = document.createElement("div");
        this.createLanguageBox(languagebox);
    
        if (element.children == undefined || element.children.length == 0){
            element.appendChild(languagebox);
        }else{
            element.insertBefore(languagebox, element.children[position]);
        }
        LanguageSwitcher.languagebox = languagebox;
        document.documentElement.lang = LanguageSwitcher.currentLanguage;
    }

    static addOnLanguageChangeListener(listener){
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