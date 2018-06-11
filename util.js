function cloneObject(src) {
    var result;
    if (typeof (src) === 'object') {
        if (src.constructor.name === 'Date') {
            result = src;
        } else {
            if (src.constructor.name === 'Object') {
                console.log('Object');
                result = {};
            } else {
                console.log('Arr');
                result = [];
            }
            for (var value in src) {
                if (src.hasOwnProperty(value)) {
                    if (typeof (src[value]) === 'object') {
                        result[value] = cloneObject(src[value]);
                    } else {
                        result[value] = src[value];
                    }
                }
            }
        }
    } else {
        result = src;
    }
    return result;
}

function uniqArray(arr) {
    var newArr = [];
    for (var i of arr) {
        if (newArr.indexOf(i) === -1) {
            newArr.push(i);
        }
    }
    return newArr;
}

function simpleTrim(str) {
    var newstr = '';
    for (var i of str) {
        if (!(i===' ' | i ==='  ')) {
            console.log(i);
            newstr += i;
        }
    }
    return newstr;
}

function trim(str) {
    // your implement
    var result = "";
    result = str.replace(/^\s+|\s+$/g, "");
    return result;
}
