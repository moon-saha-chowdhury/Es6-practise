const ages = [12,15,17];
const ages1 = [22,25,27,29];
const ages2 = [33,36,40,48];
const allAges = ages.concat(ages1).concat([5]).concat(ages2);
// console.log(allAges);
const allAges2 =[...ages,...ages1,5,...ages2];
console.log(allAges2);

const takaPoisha = [650,450.250];
const maximum = Math.max(...takaPoisha);
console.log(maximum);