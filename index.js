//Santiago Rivera, github.com/santriag

//Abilities:
//remove duplicates from string or array
//find values from two arrays that are the same (i.e non-unique elements)
//find values from two string that are the same (i.e non-unique elements)
//find ...

//The following function removes duplicates from an array or string and returns an array or string, respectively
const removeduplicates = function(x){
    if (typeof x === 'object') {
        return x.filter((v,i) => x.indexOf(v) === i);
    }
    if (typeof x === 'string') {
        let sarr = x.split('');
        sarr2 = sarr.filter((v,i) => x.indexOf(v) === i);
        return sarr2.join('');
    }
}
//removeduplicates('asdfasdf') returns 'asdf'
//removeduplicates('astdfasdf') returns 'astdf'. It would NOT return 'tasdf'

//nonuniquearray takes 2 arrays and returns an array with no duplicates that only contains elements present in both parameter arrays
//If you want to keep any duplicates from array p1, then remove lines 25 and 26 and replace all x's & y's w/ p1 & p2, respectively
//If you want to keep any duplicates from array p2, then remove lines 25 and 26 and replace all x's & y's w/ p1 & p2, respectively,
//  you must then switch all p1's and p2's (wherever there is a p1, switch it with a p2, and vice versa)
const nonuniquearray = function(p1, p2) {
    let x = removeduplicates(p1);
    let y = removeduplicates(p2);
    let nonuniqueelem = x.filter(z => {
        for (char of y) {
            if (z === char) {
                return true;
            }
        }
        return false;
    });
    return nonuniqueelem;
}
//nonuniquearray([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]) returns [5,6,7,8,9,10]
//nonuniquearray([1,2,3,4,5,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]) returns [5,6,7,8,9,10]

//nonuniquestring takes two strings and returns a string with no duplicates that only contains the letters found in both strings (i.e letters in common)
//If you want to keep any duplicates from string p1, then remove lines 45 and 46 and assign xarr to p1.split('') and assign yarr to p2.split('')
//If you want to keep any duplicates from string p2, then remove lines 45 and 46 and assign xarr to p1.split('') and assign yarr to p2.split(''),
//  you must then switch all xarr's and yarr'2 (wherever there is a xarr, switch it with a yarr, and vice versa)
const nonuniquestring = function(p1, p2) {
    let x = removeduplicates(p1);
    let y = removeduplicates(p2);
    let xarr = x.split('');
    let yarr = y.split('');
    let nonuniqueltrs = xarr.filter(z => {
        for (char of yarr) {
            if (z === char) {
                return true;
            }
        }
        return false;
    });
    return nonuniqueltrs.join('');
}
//nonuniquestring('simeon', 'gideon') returns 'ieon'
//nonuniquestring('', 'gideon') returns ''

//uncomment the logs below and run them upon running googleq.js on your machine in order to see lines 1-64 functions working:
//console.log("\nremoveduplicates('asdfasdf') returns '"+removeduplicates('asdfasdf')+"'");
//console.log("removeduplicates('astdfasdf') returns '"+removeduplicates('astdfasdf')+"'");
//console.log("nonuniquearray([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]) returns",nonuniquearray([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]));
//console.log("nonuniquearray([1,2,3,4,5,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]) returns",nonuniquearray([1,2,3,4,5,5,6,7,8,9,10], [5,6,7,8,9,10,11,12,13,14,15]));
//console.log("nonuniquestring('simeon', 'gideon') returns '"+nonuniquestring('simeon', 'gideon')+"'");
//console.log("nonuniquestring('', 'gideon') returns '"+nonuniquestring('', 'gideon')+"'\n");

// module.exports.removeduplicates = removeduplicates;
// module.exports.nonuniquearray = nonuniquearray;
// module.exports.nonuniquestring = nonuniquestring;

module.exports = {
    removeduplicates: removeduplicates,
    nonuniquearray: nonuniquearray,
    nonuniquestring: nonuniquestring,
};