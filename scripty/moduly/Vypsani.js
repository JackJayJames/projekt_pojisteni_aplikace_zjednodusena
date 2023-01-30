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

        element.appendChild(tabulka);
    }
    _ziskatHlavicku(){
        const hlavicka = document.createElement("thead");
        const radek = document.createElement("tr");
        hlavicka.appendChild(radek);

        radek.appendChild(this._ziskatBunku("th", "Jmeno"));
        radek.appendChild(this._ziskatBunku("th", "Příjmení"));
        radek.appendChild(this._ziskatBunku("th", "Věk"));
        radek.appendChild(this._ziskatBunku("th", "Telefon"));

        return hlavicka;
    }
    _ziskatBunku(elem, text){
        const bunka = document.createElement(elem);
        bunka.textContent = text;
        return bunka;
    }
}