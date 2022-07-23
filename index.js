import tasks from "./foreach.js";
import fruits from "./map.js";
import shopper from "./mapreloaded.js";
import staff from "./filter.js";
import numbers from "./reduce.js";

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
        obj[item] = obj[item] += 1;
    }
    return obj;
 }, {})
console.log('reduce', located);
//console.log();

//tener la lista del array
//iterar el array con reduce
//generar un objeto donde definan los rangos 
// generar la indicaciones donde se condicionen los items en los rangos
// indicar que devuelva el objeto con los rangos
const range=numbers.reduce((obj,item) => {
    if (item<=20) obj ['1-20'] += 1;
    else if (item<=40) obj ['21-40'] ++;
    else if (item<=60) obj ['41-60'] += 1;
    else if (item<=80) obj ['61-80'] += 1;
    else  obj ['81-100'] += 1;
    return obj
}, {
    '1-20':0,
    '21-40':0,
    '41-60':0,
    '61-80':0,
    '81-100':0,
});
console.log(range)

   function countPositivesSumNegatives(input) {
    //metodo identifique positivos y negativos conidcional
    //metodo que solo cuente los elementos del array y otro que haga la suma de negativos
    //devuelva un arreglo redusca a 2 elemetos el array
  }
