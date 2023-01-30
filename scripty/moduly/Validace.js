'use strict';

export class Validace{
    jmeno(text){
        if(this.neniPrazdne(text))  return "Toto pole je poviné";
    }
    prijmeni(){
        
    }
    vek(){
        
    }
    telefon(){
        
    }

    neniPrazdne(vstup){
        if(vstup)
            return false;
        else
            return true;
    }
}