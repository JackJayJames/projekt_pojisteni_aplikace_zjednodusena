'use strict';
import { Pojistenec } from "./Pojistenec.js";
import { Validace } from "./Validace.js";

const privatni = new WeakMap();
export class Sprava_pojisteni {
    constructor(){
        privatni.set(this, {
            _seznam_pojistencu: [],
            validace: new Validace(),

            _vypis_pojistencu: document.querySelector("#cont_pojistenci"),
            _form_jmeno: document.querySelector("#input-jmeno"),
            _form_prijmeni: document.querySelector("#input-prijmeni"),
            _form_vek: document.querySelector("#input-vek"),
            _form_phone: document.querySelector("#input-telefon"),
            _form_btn: document.querySelector("#btn-ulozit"),

            _spustit: function(){
                this._form_btn.onclick = () => {
                    if(!this._zvalidovat())    console.log("Špatný input");
                };
            },
            _zvalidovat: function(){
                let validni = true;

                const val_jmeno = this.validace.jmeno(this._form_jmeno.value);
                if(val_jmeno){
                    console.log("Jmeno " + val_jmeno);
                    validni = false;
                }
                
                this.validace.prijmeni();
                this.validace.vek();
                this.validace.telefon();
                return validni;
            },
        });
        this.spustit();

        /*
        this.vypis_pojistencu = document.querySelector("#cont_pojistenci");
        this.form_jmeno = document.querySelector("#input-jmeno");
        this.form_prijmeni = document.querySelector("#input-prijmeni");
        this.form_vek = document.querySelector("#input-vek");
        this.form_phone = document.querySelector("#input-telefon");
        this.form_btn = document.querySelector("#btn-ulozit");*/
    }
    spustit(){
        privatni.get(this)._spustit();
    }
}