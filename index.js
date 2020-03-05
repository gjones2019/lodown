'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;




/** 
 * identity: Takes in a value, and returns the value unchanged.
 * 
 * @param {Any Datatype} value: Can be any datatype/value.
 * 
 * @return {Any Datatype} value: Will be the same value as our input value.
 */
 
 function identity(value) {
    return value;
 }
 
 module.exports.identity = identity;
 
 
 
 
 /** 
 * typeOf: Takes in a value, and defines the type of data the value is. Returns the type in a string.
 * 
 * @param : {value} value : any value or data type
 * 
 * @return: {a string} the type of value: the type of datatype the value is will be returned
 */
 
 function typeOf(value) {
    if (Array.isArray(value)) { 
        return 'array'; 
    } else if (typeof(value) === 'boolean') { 
        return 'boolean'; 
    } else if (typeof(value) === 'function') {
        return 'function'; 
    } else if (typeof(value) === 'undefined') {
        return 'undefined'; 
    } else if (value === null) { 
        return 'null'; 
    } else if (typeof(value) === "object" && value instanceof Date) { 
        return "date"; 
    } else if (typeof(value) === 'number') { 
        return 'number'; 
    } else if (typeof(value) === 'string') {
        return 'string'; 
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
        return 'object'; 
    } else { 
        return 'null'; 
    }
   
}
module.exports.typeOf = typeOf;




/**
 * first: Takes in a array and number, and returns the nth number of first elements of an array.
 * 
 * param: {array} array: the input array data that we're working with. If this value is not an array, nothing will be returned.
 * 
 * param : {number} number: number repping the nth number of first elements that will be returned. If this number is negative, nothing will be returned.
 * 
 *return: {a array} results array: first or nth number of first elements in the array
 * 
 */
 
 function first(array, number) {
   var results = [];  
    if (isNaN(number)) { 
        return array[0];
    }
    else if (number > array.length - 1) { 
        return array;
    } else if (Array.isArray(array) == false || number < 0) { 
        return [];
    }
    else { 
        for (let i = 0; i < number; i++) { 
            results.push(array[i]);
        }
        return results; 
    }
}
module.exports.first = first;
 
 
 
 /**
  * last: Takes in a array and number, and returns the nth number of last elements of an array.
  * 
  * param: {array} array: the input array data that we're working with.  If this value is not an array, nothing will be returned
  *
  * param: {number} number: number repping the nth number of last elements that will be returned. If this number is negative, nothing will be returned.
  * 
  * return: {a array} finalResults array: last or nth number of last elements in the array
  * 
  */
  
 function last(array, number) {
    var results = []; 
    var finalResults = []; 
    if (isNaN(number)) {
        return array[array.length - 1];
    }
    else if (number > array.length - 1) { 
        return array;
    } 
    else if (Array.isArray(array) == false || number < 0) {   
        return results;
    }
    else { 
        for (let i = array.length - 1; i >= 0; i--) {
            results.push(array[i]);
        }
        for (let o = 0; o < number; o++) { 
            finalResults.unshift(results[o]);
        }
        return finalResults; 
    }
}
module.exports.last = last;



/**
 * indexOf: Taks in a array and a value and returns the index of thevalue wesearched for.If it doesn'toccur, -1 is returned.
 * 
 * param: {array} array: array of data to seach to value
 * param: {value} value: the value you want to search for
 * 
 * return: {number} number: returns the numerical index of the value we searched for, if it's not found, -1 will be returned
 */
 
  function indexOf(array, value) {
     for (let i = 0; i < array.length; i++) { 
         if (array[i] === value) { 
             return i;
         }
     } return -1; 
 }
 module.exports.indexOf = indexOf;
 
 
 /** 
  * contains: Takes in a array and a value, and returns true if the value is found in the array, and false if it isn't.
  * 
  * param: {array} array: various dataypes inside of an array to be checked for value
  * param: {value} value: value to search the array for
  * 
  * return: {boolean } true of false: if value is found, true is returned. If it's not found, false is returned.
  * 
  */
  
  function contains(array, value) {
         var contain = (array.includes(value) ? true : false); 
         return contain;
}
module.exports.contains = contains;



/** 
 * unique: takes in a array with duplicates and removes all of the duplicates in it and returns a new unique array.
 * 
 * param: {array} array: array with duplicates
 * 
 * return: {array} result array: array with no duplicates
 */
 
 function unique(array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        if((indexOf(array, array[i])) === i) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.unique = unique;


/**
 * 
 * filter: Takes in a array and test function, and returns a new array that has been filtered with the test function.
 * 
 * param: {array} array: an array of different datatypes and values
 * 
 * param: {a function} test: test function used to filter out the collection by testing and filtering whatever we want it to with it's callback function.
 * 
 * return: {a array} filtered array: new filtered array of values without the filtered out values from the test function running on the original array
 * 
 */
 
 function filter(collection, test) {
    let filtered = [];  
    each(collection, function (value, index, collection) {  
        if (test(value,index,collection)) { 
            filtered.push(value); 
        }
    });
    return filtered; 
}
module.exports.filter = filter;



/**
 * reject: Takes in a array and test function and returns a new array with all of the elements that didnt pass the test 
 * 
 * param: {array or object} collection: any collection of data
 * 
 * param: {function} test function: used as a truth test on the collection of data
 * 
 * return: {array} rejected array: new array of rejected items from our original collection after the truth test was run on it
 * 
 */
 
 function reject(collection, test) {
    var newArray = filter(collection, test);  
    var rejected = []; 
    each(collection, function(e, i, a) { 
        if (newArray.includes(e)) {} 
        else {rejected.push(e)}  
    });
    return rejected; 
 }
module.exports.reject = reject;


/**
 * partition: takes in a arrray and test function. Returns an array with two subarrays.One with all passing items and another with all failed items.
 * 
 * param: {array} array: an array of items to test
 * param: {function} test function: test function to act as a filter
 * 
 * return: {array} [passed, failed]:  an array of subarrays, one containing passed, and another containing failed
 */
 
 function partition(array, funct) {
    let failed = []; 
    let passed = array.filter((element, index, arr) => { 
        if (funct(element, index, arr)) 
        return true; 
        failed.push(element); 
    });
    return [passed, failed]; 
}
module.exports.partition = partition;



/**
 * map: Takes in a array and action function that acts on every element of the array, changing its value.
 * 
 * param: {array or object} collection: any collection of data
 * 
 * param: {function} action: the function which acts on the collection and alters it
 * 
 * return: {a array} altered array: the new array with the altered elements inside of it
 * 
 */
 
 function map(collection, action) {
    let alter = []; 
    each(collection, function(element, index, collection) {  
      alter.push(action(element, index, collection));  
    }); 
    return alter;
}
module.exports.map = map;



/**
 * pluck: Takes a array and property, searches for the property in each array element, and returns a new array with the values of the property searched for.
 * 
 * param: {array} array: array of object
 * 
 * param: {string} prop: the property key to search each object for
 * 
 * return: {array} value[prop] : a new array with the values of the property key that we searched each object for
 * 
 */
 
 function pluck(array, prop) {   
    return map(array, function(value) {  
        return  value[prop]; 
    });
}
module.exports.pluck = pluck;


/**
 * every: Takes a array and test function. If all elements pass the test the ntrue will be returned, if not false will be returned.
 * 
 * param: {array of objects} collection: a collection of data
 * 
 * param: {function} funct: the function that acts as a truth test for the collection. If there is no test function, nothing will be tested and nothing will be returned.
 * 
 * return: {boolean} true or false: If ALL the values pass the test, then true will be returned. If not, false will be returned
 * 
 */
 
 
 function every(collection, funct) {
    var checker = funct || identity; 
    for (var i = 0; i < collection.length; i++)  { 
        if (!checker(collection[i])) { 
            return false;  
        }
    }
    return true; 
  }
  module.exports.every = every;
  
  
 /** 
  * 
  * some: Takes a array and test function. If one or more elements pass the test the n true will be returned, if not false will be returned.
  * 
  * param: {array or object} collection: a collection of data 
  * 
  * param: {function} funct: The function that acts as a truth test for the collection. If there is no test function, nothing will be tested and nothing will be returned. 
  * 
  * return: {boolean} If ONE OR MORE of the values pass the test, then true will be returned. If not, false will be returned
  * 
  */
  
  function some(collection, funct) {
   if (typeof funct !== 'function') { 
       for (let element of collection) {
           if (element) return true; 
       }
        return false; 
   }
 let mapedArr = map(collection, (element, index, collection) => funct(element, index, collection)); 
   for (let element of mapedArr) { 
       if (element) return true;
   }
   return false; 
}
module.exports.some = some;


/**
 * reduce: TAkes a array and function. runs the function over the array and will return a single value for the returned items. The type of data is determined by the seed.
 * 
 * 
 * param: { array} array: array with a collection of data
 * 
 * param: { function} func: the function that will iteriate over the collection
 *  
 * param: {Any Datatype} seed: Optional. Can be any data type
 * 
 * return: {array} current:  Can be any data type. Will return a single value for the returned items after the iteration
 * 
 */
 
 function reduce(array, func, seed){
    var current = seed; 
    if (undefined === current){ 
        current = array[0]; 
        for (let i = 1; i < array.length; i++){ 
            current = func(current, array[i], i);
        }
        return current; 
    }
    for (let i = 0; i < array.length; i++) {
       current = func(current, array[i], i); 
    }
    return current; 
}
module.exports.reduce = reduce;


/**
 * 
 * extend: Takes in 2 or more objects and updates the first object with the second object's properties/values. It will return the updated object(s).
 * 
 * param: {object} object: object 1 which will be changer
 * 
 * param: {object} object: object n which will overwrite object 1 with the same keys
 * 
 * return: {object} object:  object 1 updated with the properties of object 2
 */
 
 function extend(object) {
 each(arguments, function(item){ 
 
  each(item, function(value, prop){ 
   object[prop] = value; 
  });
 });
 return object;
}
module.exports.extend = extend;