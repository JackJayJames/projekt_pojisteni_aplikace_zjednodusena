'use strict';

export class Vypsani{
    vykreslitTabulku(element, data){
        element.innerHTML = "";
        if(data.length === 0){
            element.textContent = "Nejsou zapsaní žádní pojištěnci";
            return;
        }
    }
}