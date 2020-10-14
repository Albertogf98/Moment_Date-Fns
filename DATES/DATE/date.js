/*Calcular la diferencia de tiempo entre mi edad y años y devolver en timeStamp*/
let date = require("date-fns");

let dateOfBirth = date.format(new Date(1998,01,02), 'yyyy/MM/dd');
dateOfBirth = Date.parse(dateOfBirth);
let currentDate = date.format(new Date(), 'yyyy/MM/dd');
currentDate = Date.parse(currentDate);

let differenceTimeStamp = date.differenceInMilliseconds;
console.log(differenceTimeStamp(currentDate,dateOfBirth)); //716252400000


