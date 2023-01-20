function hasTargetSum(array, target){
const array1 = []
const array2 = []

array.forEach(el => {
  array1.push(el)
  array1.forEach(el1 => {
    if (el1 !== el) {
      array2.push(el + el1)
    }
  })
})
const shouldMatchTargetArr = array2.filter(el2 => el2 === target)
const targetArr = [target]
return targetArr[0] === shouldMatchTargetArr[0] ? true : false
}


/*
  Write the Big O time complexity of your function here
*/

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
