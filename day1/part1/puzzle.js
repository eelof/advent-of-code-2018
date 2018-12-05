const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../input.txt')
});

let result = 0;

lineReader.on('line', line => {
    let operator = line[0];
    let number = parseInt(line.slice(1));
    if(operator == '+') {
        result += number;
    } else {
        result -= number;
    }
}).on('close', () => {
    console.log(result);
});