'use strict';
import { Pojistenec } from "./Pojistenec.js";
import { Validace } from "./Validace.js";
import { Vypsani } from "./Vypsani.js";

const privatni = new WeakMap();
export class Sprava_pojisteni {
    constructor(){
        privatni.set(this, {
            _seznam_pojistencu: localStorage.getItem("pojistenci") ? JSON.parse(localStorage.getItem("pojistenci")) : [],
            _validace: new Validace(),
            _output: new Vypsani(),

            _vypis_pojistencu: document.querySelector("#cont_pojistenci"),

            _form_jmeno: document.querySelector("#input-jmeno"),
            _val_jmeno: document.querySelector("#val-jmeno"),

            _form_prijmeni: document.querySelector("#input-prijmeni"),
            _val_prijmeni: document.querySelector("#val-prijmeni"),

            _form_vek: document.querySelector("#input-vek"),
            _val_vek: document.querySelector("#val-vek"),

            _form_phone: document.querySelector("#input-telefon"),
            _val_telefon: document.querySelector("#val-telefon"),

            _form_btn: document.querySelector("#btn-ulozit"),

            _spustit: function(){
                /**
                 * Zavolá metodu modulu, a vykreslí tabulku
                 * Přidá tlačítku onclick()
                 */
                this._output.vykreslitTabulku(this._vypis_pojistencu, this._seznam_pojistencu);
                this._form_btn.onclick = () => {
                    this._smazatValidace();
                    if(!this._zvalidovat()) return;

                    this._vytvoritPojistence();
                    this._output.vykreslitTabulku(this._vypis_pojistencu, this._seznam_pojistencu);
                };
            },
            _vytvoritPojistence: function(){
                /**
                 * Vytvoří pojištěnce přes třídu modulu Pojistenec.js
                 * zavolá metodu pro uložení pojistěnce do paměti
                 */
                const pojistenec = new Pojistenec(this._form_jmeno.value, this._form_prijmeni.value, this._form_vek.value, this._form_phone.value);
                this._ulozitPojistence(pojistenec);
            },
            _ulozitPojistence: function(pojistenec){
                /**
                 * Uloží pojistence ve formátu JSON do paměti localStarage
                 */
                this._seznam_pojistencu.push(pojistenec);
                localStorage.setItem("pojistenci", JSON.stringify(this._seznam_pojistencu));
            },
            _zvalidovat: function(){
                /**
                 * Zvaliduje vstupy formuláře přes metody modulu Validace.js
                 * Následně zavolá metodu pro výpis chybné validace, příslušnému elementu
                 */
                let validni = true;

                const val_jmeno = this._validace.jmeno(this._form_jmeno.value);
                const val_prijmeni = this._validace.jmeno(this._form_prijmeni.value);
                const val_vek = this._validace.vek(this._form_vek.value);
                const val_telefon = this._validace.telefon(this._form_phone.value);
                
                if(val_jmeno){
                    this._vypsat_validaci(this._val_jmeno, val_jmeno);
                    validni = false;
                }
                if(val_prijmeni){
                    this._vypsat_validaci(this._val_prijmeni, val_prijmeni);
                    validni = false;
                }
                if(val_vek){
                    this._vypsat_validaci(this._val_vek, val_vek);
                    validni = false;
                }
                if(val_telefon){
                    this._vypsat_validaci(this._val_telefon, val_telefon);
                    validni = false;
                }
                return validni;
            },
            _vypsat_validaci: function(element, text){
                /**
                 * Vypíše výsledek validace, příslušnému elementu
                 */
                element.textContent = text;
            },
            _smazatValidace: function(){
                /**
                 * Smaže všechny výsledky validace, které jsou zobrazeny ve formuláři
                 */
                this._val_jmeno.textContent = "";
                this._val_prijmeni.textContent = "";
                this._val_vek.textContent = "";
                this._val_telefon.textContent = "";
            }
        });
        this.spustit();
    }
    spustit(){
        /**
         * Tato metoda spustí aplikaci, tím že zavolá privátní metodu _spustit()
         */
        privatni.get(this)._spustit();
    }
}