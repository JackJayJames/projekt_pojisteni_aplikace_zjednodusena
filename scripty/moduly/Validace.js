'use strict';

export class Validace{
    jmeno(text){
        /**
         * Tato metoda volá metody validace *text*
         * return - chybné hlášky
         */
        if(this._neniPrazdne(text))  return "Toto pole je poviné";
        if(this._nemaSpravnouDelku(text, 2, 20)) return "Vstup musí bát delší 1 písmeno a kratší 21 písmen";
        if(this._obsahujeCisla(text)) return "Vstup nesmí obsahovat čísla";
        if(this._jeJenomJednoSlovo(text)) return "Vstup musí být jedno slovo";
    }
    vek(cislo){
        /**
         * Tato metoda volá metody validace *cislo*
         * return - chybné hlášky
         */
        if(this._neniPrazdne(cislo))  return "Toto pole je poviné";
    }
    telefon(cislo){
        /**
         * Tato metoda volá metody validace *cislo*
         * return - chybné hlášky
         */
        cislo = cislo.split(" ").join("");
        if(this._neniPrazdne(cislo))    return "Toto pole je poviné";
        if(this._neniJenomCislo(cislo)) return "Vstup musí být jenom číslo";
        if(this._validaceTelCisla(cislo))   return "Invalidní telefoní číslo";
    }

    _neniPrazdne(vstup){
        /**
         * Kontroluje zda je vstup prázdný
         */
        if(vstup)
            return false;
        else
            return true;
    }
    _nemaSpravnouDelku(vstup, min, max){
        /**
         * Kontroluje zda má vstup správnou délku
         */
        return !((min <= vstup.length) && (vstup.length <= max));
    }
    _obsahujeCisla(str){
        /**
         * Kontroluje zda str neobahuje čísla
         */
        return /[0-9]/.test(str);
    }
    _jeJenomJednoSlovo(str){
        /**
         * Kontroluje zda str je jenom jedno slovo
         */
        const slova = str.split(" ");
        if(slova.length > 1)
            return true;
        else
            return false;
    }
    _neniJenomCislo(cislo){
        /**
         * kontroluje zda string cislo obsahuje pouze čísla
         */
        return isNaN(cislo);
    }
    _validaceTelCisla(cislo){
        /**
         * kontroluje zda delka stringu cislo je 9
         */
        return cislo.length !== 9;
    }
}