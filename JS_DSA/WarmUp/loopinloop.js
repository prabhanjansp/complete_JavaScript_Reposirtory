for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i value =${i},j value =${j}`);
  }
}
/**output
 * i value =0,j value =0
i value =0,j value =1
i value =0,j value =2
i value =1,j value =0
i value =1,j value =1
i value =1,j value =2
i value =2,j value =0
i value =2,j value =1
i value =2,j value =2
 */
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`i value : ${i},j value : ${j}`);
  }
}
/**
 * output
 * i value : 1,j value : 0
i value : 2,j value : 0
i value : 2,j value : 1
 */
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`i value is${i},j value is${j}`);
  }
}
/**
 * output
 * i value is0,j value is0
i value is1,j value is0
i value is1,j value is1
i value is2,j value is0
i value is2,j value is1
i value is2,j value is2
 */
for (let i = 0; i < 3; i++) {
  for (let j = i; j >0; j--) {
    console.log(`i value =>${i} and j value =>${j}`);
  }
}
/**
 * output
 * i value =>1 and j value =>1
i value =>2 and j value =>2
i value =>2 and j value =>1
 */
for (let i = 0; i < 3; i++) {
  for (let j = i; j >=0; j--) {
    console.log(`${i},${j}`);
  }
}
/**
 * output
 * 0,0
 * 1,1
 * 1,0
 * 2,2
 * 2,1
 * 2,0
 * 
 */
for (let i = 5; i >0; i--) {
  for (let j = 0; j <i; j++) {
    console.log(`${i}=>${j}`);
  }
}

/**
 * output
 * 5=>0
5=>1
5=>2
5=>3
5=>4
4=>0
4=>1
4=>2
4=>3
3=>0
3=>1
3=>2
2=>0
2=>1
1=>0
 */