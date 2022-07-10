import tasks from "./foreach.js";
import fruits from "./map.js";

//FOREACH

const app = document.getElementById('app');

tasks.forEach((taskp, index) => {
    app.innerHTML += `  
        <li>
               <input type='checkbox' id='${index}' name:'${taskp.assignment}' value=${taskp.done} ${taskp.done ? 'checked' : '' } />
                  <label for='${taskp.task}'>${taskp.task} </label>   
         </li>`;
         //console.log(Object.keys(taskp))
});
const map = document.getElementById('map');

const list = fruits.map(index => {
    return ` <li> ${index.product} - ${index.price} </li>`;
});
console.log(list);

