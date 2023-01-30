'use strict';
import { Pojistenec } from "./Pojistenec.js";

const privatni = new WeakMap();
export class Sprava_pojisteni {
    constructor(){
        privatni.set(this, {
            _seznam_pojistencu: [],
        });

        this.vypis_pojistencu = document.querySelector("#cont_pojistenci");
        this.form_jmeno = document.querySelector("#input-jmeno");
        this.form_prijmeni = document.querySelector("#input-prijmeni");
        this.form_vek = document.querySelector("#input-vek");
        this.form_phone = document.querySelector("#input-telefon");
        this.form_btn = document.querySelector("#btn-ulozit");

        this._sputit();
    }
    _sputit(){
        this.form_btn.onclick = () => {
            if(!this.zvalidovat)    console.log("Správný input");
        };
    }
}