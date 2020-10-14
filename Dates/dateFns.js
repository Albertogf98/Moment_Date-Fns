const datefns = require("date-fns");
const differenceInMilliseconds = require("date-fns/differenceInMilliseconds");
const parse = require("date-fns/parse");

const today = new Date();
const birth = parse("06/17/1992", "MM/dd/yyyy", new Date());

const difference = differenceInMilliseconds(today, birth);
console.log(difference);
