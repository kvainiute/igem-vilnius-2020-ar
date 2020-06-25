class LanguageSwitcher {
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
        for (let func of LanguageSwitcher.listeners){
            func(language);
        }
        if (!updateLanguageBox) return;
        this.createLanguageBox(LanguageSwitcher.languagebox);
    }

    static createLanguageBox(languagebox){
        languagebox.innerHTML = "";
        languagebox.className = "languageBox";
        for (let key of LanguageSwitcher.languageKeys){
            if (key == LanguageSwitcher.currentLanguage) continue;
            let item = LanguageSwitcher.languages[key];
    
            let itemImg = document.createElement("img");
            itemImg.src = item.img;
            itemImg.alt = item.name;
            itemImg.onclick = ()=>{
                LanguageSwitcher.setLanguage(key, true);
            };
    
            languagebox.appendChild(itemImg);
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
    }

    static addOnLanguageChangeListener(listener){
        LanguageSwitcher.listeners.push(listener);
    }
}

LanguageSwitcher.listeners = [];
LanguageSwitcher.languages = {
    lt: {
        name: "lietuvių k.",
        img: "../images/language/lt.svg"
    },
    en: {
        name: "English",
        img: "../images/language/en.svg"
    },
};
LanguageSwitcher.languageKeys = Object.keys(LanguageSwitcher.languages);
LanguageSwitcher.currentLanguage = LanguageSwitcher.getLanguage();