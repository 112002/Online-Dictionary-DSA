var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + "/..")).listen(8080, function () {
  console.log('Server is up on port 8080...');
});
const fs = require('fs')
const perf = require('execution-time')();

fs.readFile('file.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    var data = JSON.parse(fileContents)
    const lolol = fileContents
    console.log("Loaded JSON into data variable");
    perf.start();

    var henlo = data[0];
    var mello = new Array();
    var i = 0;
    for (var attributename in henlo) {
      var dat = attributename
      mello[i] = dat
      i++;
    }
    //const results = perf.stop();
    //console.log(results.time);
    console.log(mello[7514])
    var obj821 = {
      a: 0,b: 1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25  
    };
    var banja = mello[7514]
    //var ganja = obj821[banja]
    console.log(linearSearch(mello, "acoustic"))
    console.log(binarySearch(mello, "acoustic"))
    console.log(interpolationSearch(mello, "acoustic"))
    console.log(jumpSearch(mello, "acoustic"))
  
  } catch (err) {
    console.error(err)
  }
})

function linearSearch(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      const results = perf.stop();
      console.log(results.time);
      return i;
    }
  }
  const results = perf.stop();
  console.log(results.time);
  return null;

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


function jumpSearch(arrayToSearch, valueToSearch){
  var length = arrayToSearch.length;
  var step = Math.floor(Math.sqrt(length));
  var index = Math.min(step, length)-1;
  var lowerBound = 0;
  while (arrayToSearch[Math.min(step, length)-1] < valueToSearch)
  {
    lowerBound = step;
    step += step;
    if (lowerBound >= length){
      return -1;
    }
  }
   
  var upperBound = Math.min(step, length);
  while (arrayToSearch[lowerBound] < valueToSearch)
  {
    lowerBound++;
    if (lowerBound == upperBound){
      return -1;
    }
  }
  if (arrayToSearch[lowerBound] == valueToSearch){
     return lowerBound;
  }
  return -1;
}
