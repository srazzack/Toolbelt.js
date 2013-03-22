//underscore.js rewrite ._first
var Toolbelt = {
    array: {

        //the first function returns the first element of an array passed. 
        //If an optional 'n' parameter is passed, the first 'n' elements 
        //of the array will be returned. 
        first: function (anyArray, n) {
            var isArray = (anyArray instanceof Array),
                isNum = (typeof n === 'number'),
                result = new Array,
                i = 0,
                negative = n < i;
            if (negative) {
                for (j = anyArray.length + n; i < j; i++) {
                    result[i] = anyArray[i];
                }
                return result;
            } else if (isArray && isNum) {
                for (i = 0, j = anyArray.length; i < n && i < j; i++) {
                    result[i] = anyArray[i];
                }
                return result;
            } else if (isArray || !isNum) {
                return anyArray[0];
            }
        },

        //The 'initial' function will return the all the elements
        //of the array passed except for the last element. 
        //If an 'n' parameter is passed, 'initial' will return
        //all elements if the array except for the last 'n' elements.
        initial: function (anyArray, n) {
            var isArray = (anyArray instanceof Array),
                valRange = (n >= 0 || n == null),
                isNum = (typeof n === 'number'),
                result = new Array;
            if (isArray && isNum && valRange) {
                for (i = 0, j = anyArray.length - n; i < j; i++) {
                    result[i] = anyArray[i];
                }
                return result;
            } else if (!valRange) {
                for (i = 0, j = anyArray.length; i < j; i++) {
                    result[i] = anyArray[i];
                }
                return result;
            } else if (isArray || !isNum) {
                for (i = 0, j = anyArray.length - 1; i < j; i++) {
                    result[i] = anyArray[i];
                }
                return result;
            }
        },

        //The 'last' function returns the last element of the array
        //or last 'n' elements
        last: function (anyArray, n) {
            var isArray = (anyArray instanceof Array),
                valRange = n >= anyArray.length,
                isNum = (typeof n === 'number'),
                result = new Array;
            if (valRange) {
                return anyArray;
            } else if (isArray && isNum && !valRange) {
                for (len = anyArray.length, i = 0, j = len - n; n < len, i < j, j < len; i++, j++) {
                    result[i] = anyArray[j];
                }
                return result;
            } else if (isArray || !isNum) {
                return anyArray[anyArray.length - 1];
            }
        },

        //The 'rest' function returns the Array l
        rest: function (anyArray, n) {
            var isArray = (anyArray instanceof Array),
                isNull = (n == 0 || n == null),
                isNum = (typeof n === 'number'),
                result = new Array,
                valRange = n < 0;
            if (valRange) {
                for (var len = anyArray.length, i = 0, j = anyArray.length + n; j < len; i++, j++) {
                    result[i] = anyArray[j];
                }
                return result;
            } else if (isArray && isNum) {
                for (var len = anyArray.length, i = 0, j = n; j < len; i++, j++) {
                    result[i] = anyArray[j];
                }
                return result;
            } else if (isArray && isNull) {
                for (i = 0, n = 1, len = anyArray.length; i < len, n < len; i++, n++) {
                    result[i] = anyArray[n];
                }
                return result;
            }
        },
        compact: function (anyArray) {
            var TruthyValues = [];
            for (var index in anyArray) {
                if (anyArray[index]) {
                    TruthyValues.push(anyArray[index]);
                }
            }
            return TruthyValues;
        },
        flatten: function (anyArray, singleLevel) {
            if (singleLevel == true) {
                flatArray = Array.prototype.concat.apply([], anyArray);
                return flatArray;
            }
            flatArray = Array.prototype.concat.apply([], anyArray);
            if (flatArray.length != anyArray.length) {
                flatArray = Toolbelt.array.flatten(flatArray);
            }
            return flatArray;
        },
        without: function (anyArray) {
            var i, j; //JS is a function scoped language
            for (i = 0; i < anyArray.length; i++) {
                var v = anyArray[i];
                for (j = 1; j < arguments.length; j++) {
                    if (v == arguments[j]) {
                        anyArray.splice(i--, 1);
                    }
                }
            }
            return anyArray;
        },
        /* union: function(){ //Method one: Array concatenation
          var concatArray = [].concat.apply([], arguments);
          var resultArray = [];

              for (var i = 0; i < concatArray.length; i++) {
                  if (resultArray.indexOf(concatArray[i]) < 0) {
                      resultArray.push(concatArray[i]);
                  }
                } return resultArray;
        */

        union: function () { //Method 2: 
            var unionArray = [];
            for (var i = 0; i < arguments.length; i++) {
                var array = arguments[i];
                for (var j = 0; j < array.length; j++) {
                    var arrayElement = array[j];
                    if (unionArray.indexOf(arrayElement) < 0) {
                        unionArray.push(arrayElement);
                    }
                }
            }
            return unionArray;

        },
        intersection: function () {
            var i, j, e, result = [],
                arrays = [];
            if (arguments.length == 1) {
                return Toolbelt.array.unique(arguments);
            }
            var MA = arguments[0];
            for (i = 0; i < MA.length; i++) {
                e = MA[i];
                var add = true;
                for (j = 1; j < arguments.length; j++) {
                    arrays = arguments[j];
                    if (arrays.indexOf(e) < 0) {
                        add = false;
                        break;
                    }
                }
                if (add) {
                    result.push(e);
                }
            }
            return result;
        },
        difference: function (array) {
            var i, j, e, result = [],
                arrays = [];
            if (arguments.length == 1) {
                return Toolbelt.array.unique(arguments);
            }
            for (i = 0; i < array.length; i++) {
                e = array[i];
                var found = false;
                for (j = 1; j < arguments.length; j++) {
                    arrays = arguments[j];
                    if (arrays.indexOf(e) >= 0) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    result.push(e);
                }
            }
            return result;

        },
        unique: function (array) {
            var result = [],
                i = 0;
            for (; i < array.length; i++) {
                if (result.indexOf(array[i]) < 0) {
                    result.push(array[i]);
                }
            }
            return result;
        },
        zip: function () {
            var result = [];
            for (i = 0; i < arguments[0].length; i++) {
                var zip = [];
                for (j = 0; j < arguments.length; j++) {
                    zip.push(arguments[j][i]);
                }
                result.push(zip);
            }
            return result;
        },

        object: function (list, values) {
            if (!list) return {};
            var result = {}, i;
            for (i = 0; i < list.length; i++) {
                var element = list[i];
                if (values) {

                    result[element] = values[i];
                }
                if (!values) {
                    result[element[0]] = element[1];
                }
            }
            return result;
        },
        indexOf: function (array, value) {
            var i, result, found = false;
            for (i = 0; i < array.length; i++) {
                if (array[i] == value) {
                    found = true;
                    return i;
                }
                if (found = false) {
                    return -1
                }
            }
        },
        lastIndexOf: function (array, value) {
            if (!array) return -1;
            var i, result;
            i = array.length;
            while (i--) if (array[i] === value) return i;
        },
        sortedIndex: function (list, value, iterator) {
            if (iterator) {
                list.sort(iterator);
            }
            for (var i = 0, max = list.length; i < max; i++) {
                if (list[i] > value) {
                    return i;
                }
            }
        },
        range: function (min, max, step) {
            if (!max) {
                max = min;
                min = 0;
            }
            if (!step) {
                step = 1;
            }
            var range = [];
            for (var i = min; step > 0 ? i < max : i > max; i += step) {
                range.push(i);
            }
            return range;
        }
    },
    object: {
        keys: function (anyObject) {
            var obj = (anyObject instanceof Object),
                keys = [];
            if (!obj) throw new TypeError('Invalid Object');
            for (var key in anyObject) {
                keys.push(key);
            }
            return keys;
        },
        values: function (anyObject) {
            var obj = (anyObject instanceof Object),
                values = [];
            if (!obj) throw new TypeError('Invalid Object');
            for (var key in anyObject) {
                values.push(anyObject[key]);
            }
            return values;
        },
        pairs: function (anyObject) {
            var obj = (anyObject instanceof Object),
                pairs = [];
            if (!obj) throw new TypeError('Invalid Object');
            for (var key in anyObject) {
                pairs.push([key, anyObject[key]]);
            }
            return pairs;
        },
        invert: function (anyObject) {
            var obj = (anyObject instanceof Object),
                invert = {};
            if (!obj) throw new TypeError('Invalid Object');
            for (var key in anyObject) {
                invert[anyObject[key]] = key;
            }
            return invert;
        },
        functions: function (anyObject) {
            var methods = [];
            for (var key in anyObject) {
                var func = (anyObject[key] instanceof Function);
                if (func) {
                    methods.push(key);
                }
            }
            return methods.sort();
        },
        extend: function (anyObject) {
            var obj = (anyObject instanceof Object);
            if (!obj) throw new TypeError('Invalid Object');
            for (var i = 1; i < arguments.length; i++) {
                for (var property in arguments[i]) {
                    anyObject[property] = arguments[i][property];
                }
            }
            return anyObject;
        },
        pick: function (anyObject) {
            var obj = (anyObject instanceof Object),
                result = {};
            if (!obj) throw new TypeError('Invalid Object');

            var argArray = Array.prototype.slice.call(arguments, 1);

            for (var key in anyObject) {
                if (argArray.indexOf(key) > 0) {
                    result[key] = anyObject[key];
                }
            }

            return result;
        },
        omit: function (anyObject) {
            var obj = (anyObject instanceof Object),
                result = {};
            if (!obj) throw new TypeError('Invalid Object');
            var argArray = Array.prototype.slice.call(arguments, 1);
            //argArray.shift();
            //console.log(argArray);
            for (var key in anyObject) {
                if (argArray.indexOf(key) < 0) {
                    result[key] = anyObject[key];
                }
            }
            return result;
        },
        defaults: function (anyObject) {
            var obj = (anyObject instanceof Object && arguments instanceof Object),
                result = {};
            if (!obj) throw new TypeError('Invalid Object');
            var defaultObj = arguments[1];

            if (defaultObj) {
                for (var key in defaultObj) {
                    if (anyObject[key] == null || 'undefined') {
                        anyObject[key] = defaultObj[key];
                    }
                }
                return anyObject;
            } else {
                return anyObject;
            }
        },
        clone: function (anyObject) {
            var obj = (anyObject instanceof Object && arguments instanceof Object),
                result = {};
            var isArray = (anyObject instanceof Array);
            if (!obj) return obj;
            result = (isArray ? anyObject.slice() : Toolbelt.object.extend({}, anyObject));
            return result;
        },
        tap: function (object, interceptor) {},
        has: function (anyObject, key) {
            for (key in anyObject) {
                if (key !== undefined || null) {
                    return true;
                }
            }
        },
        isEqual: function (oneObject, anotherObject) {
        },
        isEmpty: function (anyObject) {
            if (anyObject == null) {
                return true
            };
            if (anyObject instanceof Array || anyObject instanceof String) {
                return anyObject.length === 0;
                for (var property in anyObject) {
                    if (Toolbelt.object.has(anyObject, property)) {
                        return false;
                    }
                }
            }
        },
        isElement: function (anyObject) { //question about nodeType and '!!' operator and use}
        },
        isArray: function (anyObject) {
            var result;
            anyObject instanceof Array ? result = true : result = false;
            return result;
        },
        isObject: function (anyObject) {
            var result;
            anyObject instanceof Object ? result = true : result = false;
            return result;
        },
        isFinite: function (anyObject) {
            if (Number(anyObject)) {
                return true;
            }
            return false;
        },
        isNaN: function (anyObject) {
            var result;
            if (!NaN) {
                anyObject instanceof Number ? result = true : result = false;
            }
            return false;
        },
        isNull: function (anyObject) {
            var result;
            anyObject === null ? result = true : result = false;
            return result;
        },
        isBoolean: function (anyObject) {
            var result;
            anyObject instanceof boolean ? result = true : result = false;
            return result;
        },
        isUndefined: function (anyObject) {
            var result;
            anyObject === void 0 ? result = true : result = false;
            return result;
        }

    },
    functions: {
        bind: function (somefunc, context) {
            var slice = Array.prototype.slice;
            var addArgs = slice.call(arguments, 2);
            return function () {
                return somefunc.apply(context, addArgs.concat(slice.call(arguments)));
            }
        },
        partial: function (someFunc) {
            var slice = Array.prototype.slice;
            var addArgs = slice.call(arguments, 1);
            return function () {
                return someFunc.apply(this, addArgs.concat(slice.call(arguments)));
            }
        },
        bindAll: function (anyObject) {
            var slice = Array.prototype.slice;
            var allfuncs = slice.call(arguments, 1);

            function interBind(allfuncs) {
                anyObject[allfuncs] = Toolbelt.functions.bind(anyObject[allfuncs], anyObject);
                return anyObject;
            }
        },
        memoize: function (someFunc, cache) {
            var cache = {};
            return function(){
                var property = cache.apply(this, arguments);
                if(property in cache) {
                return cache[property];
                } 
                else {
                return cache[property] = someFunc.apply(this. arguments);
                }
            }
        },
        delay: function (someFunc, time) {
            var slice = Array.prototype.slice; 
            var funcArgs = slice.call(arguments, 2);
            var applfunc = (function(){return someFunc.apply(null, funcArgs);});
            return setTimeout(applfunc, time);
        },
        defer: function (someFunc) {},
        throttle: function (someFunc, wait) {},
        return : function () {},
        debounce: function (someFunc, wait, immediate) {},
        once: function (someFunc) {},
        wrap: function (someFunc, wrapper) {},
        compose: function () {},
        after: function () {}
    }

};