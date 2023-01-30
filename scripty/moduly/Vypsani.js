'use strict';

export class Vypsani{
    vykreslitTabulku(element, data){
        element.innerHTML = "";
        if(data.length === 0){
            element.textContent = "Nejsou zapsaní žádní pojištěnci";
            return;
        }

        const tabulka = document.createElement("table");
        tabulka.appendChild(this._ziskatHlavicku());
        
        const tBody = document.createElement("tbody");
        tabulka.appendChild(tBody);
        for(const pojistenec of data){
            tBody.appendChild(this._ziskatRadek(pojistenec));
        }

        element.appendChild(tabulka);
    }
    _ziskatHlavicku(){
        const hlavicka = document.createElement("thead");
        const radek = document.createElement("tr");
        hlavicka.appendChild(radek);

        radek.appendChild(this._ziskatBunku("th", "Jméno a příjmení"));
        radek.appendChild(this._ziskatBunku("th", "Věk"));
        radek.appendChild(this._ziskatBunku("th", "Telefon"));

        return hlavicka;
    }
    _ziskatRadek(pojistenec){
        const radek = document.createElement("tr");
        
        radek.appendChild(this._ziskatBunku("td", `${pojistenec["jmeno"]} ${pojistenec["prijmeni"]}`));
        radek.appendChild(this._ziskatBunku("td", pojistenec["vek"]));
        radek.appendChild(this._ziskatBunku("td", pojistenec["telefon"]));

        return radek;
    }
    _ziskatBunku(elem, text){
        const bunka = document.createElement(elem);
        bunka.textContent = text;
        return bunka;
    }
}