import { watch } from "./storage";
import { queue } from "./storage";

export const chekWatch = ()=> {
    const btn = document.querySelector('.modal__watchV');
    const check = watch.find(({ id }) => {
    
        return id == btn.dataset.btn; // не строгоя равенство так как сравниваем строку и число
    
    
    });
console.log(check);
        if (check ) {
            console.log(btn.textContent);
            btn.textContent = 'remove';
            // btn.classList.remove('modal__watchV');
          return  btn.classList.add('remove');  
            
        }

        else {
            btn.textContent = 'add to Watched';
           
         return  btn.classList.remove('remove')  ; 
        } 
    
    
};


export const chekQueue = ()=> {
    const btn = document.querySelector('.modal__queV');
    const check = queue.find(({ id }) => {
    
        return id == btn.dataset.btn; // не строгоя равенство так как сравниваем строку и число
    
    
    });
console.log(check);
        if (check) {
            console.log(btn.textContent);
            btn.textContent = 'remove';
          return  btn.classList.add('remove');  
            
        }

        else {
            btn.textContent = 'add to queue';
         return   btn.classList.remove('remove'); 
        } 
    
   
};