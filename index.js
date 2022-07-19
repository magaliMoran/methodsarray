import tasks from "./foreach.js";
import fruits from "./map.js";
import shopper from "./mapreloaded.js";
import staff from "./filter.js";
import solution from "./reduce.js";

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

//MAP

const map = document.getElementById('map');

const list = fruits.map(index => {
    return ` <li> ${index.product} - $${index.price} </li>`;
});
console.log(list);
map.innerHTML = list.join('')

//MAPOBJET
const mapOpjet = document.getElementById('mapObjet');
const taxClothes = shopper.map(items => {
    
    return {
        ...items,
        tax:(items.price*3)
    };
})
console.log('taxClothes', taxClothes)

const taxItem = taxClothes.map(item => {
    return ` <li> product: ${item.product} - $${item.price} - tax: ${item.tax} </li>`;
})
console.log('taxItem', taxItem)
mapOpjet.innerHTML = taxItem.join('')

//FILTER
const searchStaff= (query) => {
    return staff.filter(people => {
        return people.name.includes(query) || people.lastName.includes(query) || people.age.includes(query) 
    })
}
console.log('filter', searchStaff(40));

//REDUCE

const located = fruits.map(item => item.located)
.reduce((obj, item) => {
    if (!obj [item]) {
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1;
    }
    return obj;
 }, {})
console.log(located);
//console.log();