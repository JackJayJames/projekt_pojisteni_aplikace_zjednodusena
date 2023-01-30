'use strict';

export class Validace{
    jmeno(text){
        if(this._neniPrazdne(text))  return "Toto pole je poviné";
        if(this._nemaSpravnouDelku(text, 2, 20)) return "Invalidní vstup";
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
}