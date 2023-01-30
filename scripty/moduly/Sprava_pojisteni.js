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
            _val_jmeno: document.querySelector("#val-jmeno"),

            _form_prijmeni: document.querySelector("#input-prijmeni"),
            _val_prijmeni: document.querySelector("#val-prijmeni"),

            _form_vek: document.querySelector("#input-vek"),
            _val_vek: document.querySelector("#val-vek"),

            _form_phone: document.querySelector("#input-telefon"),
            _val_telefon: document.querySelector("#val-telefon"),
            _form_btn: document.querySelector("#btn-ulozit"),

            _spustit: function(){
                this._form_btn.onclick = () => {
                    if(!this._zvalidovat())    console.log("Špatný input");
                };
            },
            _zvalidovat: function(){
                let validni = true;

                const val_jmeno = this.validace.jmeno(this._form_jmeno.value);
                const val_prijmeni = this.validace.jmeno(this._form_prijmeni.value);
                const val_vek = this.validace.vek(this._form_vek.value);
                const val_telefon = this.validace.telefon(this._form_phone.value);
                
                if(val_jmeno){
                    console.log("Jmeno " + val_jmeno);
                    this._vypsat_validaci(this._val_jmeno, val_jmeno);
                    validni = false;
                }
                if(val_prijmeni){
                    console.log("Příjmení " + val_prijmeni);
                    this._vypsat_validaci(this._val_prijmeni, val_prijmeni);
                    validni = false;
                }
                if(val_vek){
                    console.log("Věk " + val_vek);
                    this._vypsat_validaci(this._val_vek, val_vek);
                    validni = false;
                }
                if(val_telefon){
                    console.log("Telefon " + val_telefon);
                    this._vypsat_validaci(this._val_telefon, val_telefon);
                    validni = false;
                }
                return validni;
            },
            _vypsat_validaci: function(element, text){
                element.textContent = text;
            }
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