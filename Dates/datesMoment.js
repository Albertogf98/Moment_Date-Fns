const moment = require("moment");

const bornDate = moment("19920616", "YYYYMMDD");
const actualDate = moment();

const diffByDates = actualDate.diff(bornDate);

console.log(diffByDates);
