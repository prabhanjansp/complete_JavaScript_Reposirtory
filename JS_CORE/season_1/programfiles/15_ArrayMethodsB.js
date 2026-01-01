const user = [
  { firstName: "Prabhanjan", lastName: "Puranik", age: "26" },
  { firstName: "Ram", lastName: "surya", age: "225" },
  { firstName: "shyam", lastName: "gopal", age: "224" },
  { firstName: "krish", lastName: "yadav", age: "26" },
];

const res = user.map((x) => x.firstName + " " + x.lastName);
console.log(res);

const output = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

const result = user.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(result);


const re=user.reduce(function (acc,curr) {
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc
 },[]);
 console.log(re)