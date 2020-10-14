/*Calcular la diferencia de tiempo entre mi edad y años y devolver en timeStamp*/
let moment = require("moment");
moment.locale('es');

let birthday = moment('02/01/1998','MM/DD/YYYY');
let currentDate = moment();

let diference = currentDate.diff(birthday);
console.log(diference);//716382920650
