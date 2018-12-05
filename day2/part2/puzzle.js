const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../input.txt')
});

const numberOfSameCharactersInSamePosition = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    let matches = 0;

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == arr2[i]) matches++;
    }

    return matches;
};

const exactlyOneDifference = (str1, str2) => {
    return (numberOfSameCharactersInSamePosition(str1, str2) == str1.length-1 && str1.length == str2.length)
}

const arrayContainsStringWithExactlyOneDifference = (str, arr) => {
    for(let val of arr) {
        if(exactlyOneDifference(str, val)) return true;
    }

    return false;
}

const removeDifferingCharacter = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    let result = "";

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == arr2[i]) result += arr1[i];
    }

    return result;
}

let boxIds = [];

lineReader.on('line', line => {
    boxIds.push(line);
}).on('close', () => {
    let twinBoxIds = boxIds.filter(id => arrayContainsStringWithExactlyOneDifference(id, boxIds));
    console.log("Two identified boxes with exactly one difference: " + twinBoxIds );
    console.log("Removing the one different character: " + removeDifferingCharacter(twinBoxIds[0], twinBoxIds[1]));
});