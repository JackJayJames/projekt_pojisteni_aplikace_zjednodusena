'use strict';

export class Validace{
    jmeno(text){
        if(this._neniPrazdne(text))  return "Toto pole je poviné";
        if(this._nemaSpravnouDelku(text, 2, 20)) return "Vstup musí bát delší 1 písmeno a kratší 21 písmen";
        if(this._obsahujeCisla(text)) return "Vstup nesmí obsahovat čísla";
        if(this._jeJenomJednoSlovo(text)) return "Vstup musí být jedno slovo";
    }
    prijmeni(){
        
    }
    vek(){
        
    }
    telefon(){
        
    }

    _neniPrazdne(vstup){
        if(vstup)
            return false;
        else
            return true;
    }
    _nemaSpravnouDelku(vstup, min, max){
        if((min <= vstup.length) && (vstup.length <= max))
            return false;
        else
            return true;
    }
    _obsahujeCisla(str){
        return /[0-9]/.test(str);
    }
    _jeJenomJednoSlovo(str){
        const slova = str.split(" ");
        if(slova.length > 1)
            return true;
        else
            return false;
    }
}