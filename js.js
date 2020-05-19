// 1 задание : уровни 1 и 2
const firstObject = {
    'key1': 'value1'
};

const secondObject = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
};

function resolve(inputObject) {
    let newObject = new Object();
    for (key in inputObject) {
        newObject[inputObject[key]] = key;
    }
    return newObject;
};

const result1 = resolve(firstObject);
const result2 = resolve(secondObject);

console.log(firstObject);
console.log(result1);

console.log(secondObject);
console.log(result2);


// 2 задание
function getCentury(year) {
    let century = Math.floor( (year / 100) + 1 );
    console.log(`${year} год - это ${century} век`);
};

getCentury(1845);