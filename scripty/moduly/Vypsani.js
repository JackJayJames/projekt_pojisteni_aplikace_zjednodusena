'use strict';

export class Vypsani{
    vykreslitTabulku(element, data){
        if(data.length === 0){
            element.textContent = "Nejsou zapsaní žádní pojištěnci";
            return;
        }
    }
}