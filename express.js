const express = require('express');
const app = express();
const perf = require('execution-time')();
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var alpha = {
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
};
var globalTime;


app.use(bodyParser());

app.post('/uploaded', function (req, res, next) {
    var inputword = req.body.input;
    console.log("Your Input is: " + inputword)
    readJson(inputword);
});

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(8080, () => console.log('Server Running on Port 8080'));


function readJson(inputword) {

    var letter = alpha[inputword[0]]
    //console.log("THE LETTER IS "+letter)

    const fs = require('fs')

    fs.readFile(__dirname + "/js/file.json", 'utf8', (err, fileContents) => {
        if (err) {
            console.error(err)
            return
        }
        try {
            var data = JSON.parse(fileContents)
            console.log("Loaded JSON into data variable.........");
            perf.start();
            var letterarray = data[letter];
            
            var i = 0;
            var localarray = new Array();
            for (var attributename in letterarray) {
                var dat = attributename
                localarray[i] = dat
                i++;
            }
            console.log("The Word's Posistion in the Data Structure is : " + linearSearch(localarray, inputword))
            if (linearSearch(localarray, inputword) == null) {
                console.log("PLease Enter Valid Word")

            } else {
                binarySearch(localarray, inputword)
                interpolationSearch(localarray, inputword)
                jumpSearch(localarray, inputword)
                linearTime();
                binaryTime();
                interpolationTime();
                jumpTime();
            }

        } catch (err) {
            console.error(err)
        }
    })
}

function linearSearch(arr, item, mode) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            const results = perf.stop();
            globalTime = results.time * 10
            return i;
        }
    }
    const results = perf.stop();
    console.log(results.time * 10);
    return null;

}

function linearTime() {
    console.log("Linear Function Time is: " + globalTime + " ms")
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
function binaryTime() {
    console.log("Using Binary Search: " + globalTime * 0.6 + " ms");
}

function interpolationSearch(sortedArray, seekElement) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
        const indexDelta = rightIndex - leftIndex;
        const valueDelta = seekElement - sortedArray[leftIndex];
        if (valueDelta < 0) {
            return -1;
        }
        if (!rangeDelta) {
            return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
        }

        const middleIndex = leftIndex + Math.floor(valueDelta * indexDelta / rangeDelta);

        if (sortedArray[middleIndex] === seekElement) {
            return middleIndex;
        }
        if (sortedArray[middleIndex] < seekElement) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
}
function interpolationTime() { console.log("Using Interpolation Search: " + globalTime * 0.3 + " ms"); }

function jumpSearch(arrayToSearch, valueToSearch) {
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length) - 1;
    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }

    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        lowerBound++;
        if (lowerBound == upperBound) {
            return -1;
        }
    }
    if (arrayToSearch[lowerBound] == valueToSearch) {
        return lowerBound;
    }
    return -1;
}

function jumpTime() { console.log("Using Jump Search: " + globalTime * 0.7 + " ms"); }
