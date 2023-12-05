const Analysis = require("./statistics");
const ages = [
  1, 2, 3, 4, 5,2 
];

const analysis = new Analysis();
analysis.load(ages);
analysis.describe();
