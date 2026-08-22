import { g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
var VERSION = "1.13.8";
var root = typeof self == "object" && self.self === self && self || typeof globalThis == "object" && globalThis.global === globalThis && globalThis || Function("return this")() || {};
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
var push = ArrayProto.push, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
var supportsArrayBuffer = typeof ArrayBuffer !== "undefined", supportsDataView = typeof DataView !== "undefined";
var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeCreate = Object.create, nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
var _isNaN = isNaN, _isFinite = isFinite;
var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
var nonEnumerableProps = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
];
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
function isNull(obj) {
  return obj === null;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
const isString = tagTester("String");
const isNumber = tagTester("Number");
const isDate = tagTester("Date");
const isRegExp = tagTester("RegExp");
const isError = tagTester("Error");
const isSymbol = tagTester("Symbol");
const isArrayBuffer = tagTester("ArrayBuffer");
var isFunction = tagTester("Function");
var nodelist = root.document && root.document.childNodes;
if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
  isFunction = function(obj) {
    return typeof obj == "function" || false;
  };
}
const isFunction$1 = isFunction;
const hasObjectTag = tagTester("Object");
var hasDataViewBug = supportsDataView && (!/\[native code\]/.test(String(DataView)) || hasObjectTag(new DataView(new ArrayBuffer(8)))), isIE11 = typeof Map !== "undefined" && hasObjectTag(/* @__PURE__ */ new Map());
var isDataView = tagTester("DataView");
function alternateIsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
}
const isDataView$1 = hasDataViewBug ? alternateIsDataView : isDataView;
const isArray = nativeIsArray || tagTester("Array");
function has$1(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var isArguments = tagTester("Arguments");
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return has$1(obj, "callee");
    };
  }
})();
const isArguments$1 = isArguments;
function isFinite$1(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
function isNaN$1(obj) {
  return isNumber(obj) && _isNaN(obj);
}
function constant(value) {
  return function() {
    return value;
  };
}
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
const getByteLength = shallowProperty("byteLength");
const isBufferLike = createSizePropertyCheck(getByteLength);
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView$1(obj) : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}
const isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);
const getLength = shallowProperty("length");
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i) hash[keys2[i]] = true;
  return {
    contains: function(key) {
      return hash[key] === true;
    },
    push: function(key) {
      hash[key] = true;
      return keys2.push(key);
    }
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has$1(obj, prop) && !keys2.contains(prop)) keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj) if (has$1(obj, key)) keys2.push(key);
  if (hasEnumBug) collectNonEnumProps(obj, keys2);
  return keys2;
}
function isEmpty(obj) {
  if (obj == null) return true;
  var length = getLength(obj);
  if (typeof length == "number" && (isArray(obj) || isString(obj) || isArguments$1(obj))) return length === 0;
  return getLength(keys(obj)) === 0;
}
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null) return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}
function _$1(obj) {
  if (obj instanceof _$1) return obj;
  if (!(this instanceof _$1)) return new _$1(obj);
  this._wrapped = obj;
}
_$1.VERSION = VERSION;
_$1.prototype.value = function() {
  return this._wrapped;
};
_$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
_$1.prototype.toString = function() {
  return String(this._wrapped);
};
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength(bufferSource)
  );
}
var tagDataView = "[object DataView]";
function isEqual(a, b) {
  var todo = [{ a, b }];
  var aStack = [], bStack = [];
  while (todo.length) {
    var frame = todo.pop();
    if (frame === true) {
      aStack.pop();
      bStack.pop();
      continue;
    }
    a = frame.a;
    b = frame.b;
    if (a === b) {
      if (a !== 0 || 1 / a === 1 / b) continue;
      return false;
    }
    if (a == null || b == null) return false;
    if (a !== a) {
      if (b !== b) continue;
      return false;
    }
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") return false;
    if (a instanceof _$1) a = a._wrapped;
    if (b instanceof _$1) b = b._wrapped;
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    if (hasDataViewBug && className == "[object Object]" && isDataView$1(a)) {
      if (!isDataView$1(b)) return false;
      className = tagDataView;
    }
    switch (className) {
      // These types are compared by value.
      case "[object RegExp]":
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case "[object String]":
        if ("" + a === "" + b) continue;
        return false;
      case "[object Number]":
        todo.push({ a: +a, b: +b });
        continue;
      case "[object Date]":
      case "[object Boolean]":
        if (+a === +b) continue;
        return false;
      case "[object Symbol]":
        if (SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)) continue;
        return false;
      case "[object ArrayBuffer]":
      case tagDataView:
        todo.push({ a: toBufferView(a), b: toBufferView(b) });
        continue;
    }
    var areArrays = className === "[object Array]";
    if (!areArrays && isTypedArray$1(a)) {
      var byteLength = getByteLength(a);
      if (byteLength !== getByteLength(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) continue;
      areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false;
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
        return false;
      }
    }
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a) {
        if (bStack[length] === b) break;
        return false;
      }
    }
    if (length >= 0) continue;
    aStack.push(a);
    bStack.push(b);
    todo.push(true);
    if (areArrays) {
      length = a.length;
      if (length !== b.length) return false;
      while (length--) {
        todo.push({ a: a[length], b: b[length] });
      }
    } else {
      var _keys = keys(a), key;
      length = _keys.length;
      if (keys(b).length !== length) return false;
      while (length--) {
        key = _keys[length];
        if (!has$1(b, key)) return false;
        todo.push({ a: a[key], b: b[key] });
      }
    }
  }
  return true;
}
function allKeys(obj) {
  if (!isObject(obj)) return [];
  var keys2 = [];
  for (var key in obj) keys2.push(key);
  if (hasEnumBug) collectNonEnumProps(obj, keys2);
  return keys2;
}
function ie11fingerprint(methods) {
  var length = getLength(methods);
  return function(obj) {
    if (obj == null) return false;
    var keys2 = allKeys(obj);
    if (getLength(keys2)) return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction$1(obj[methods[i]])) return false;
    }
    return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
  };
}
var forEachName = "forEach", hasName = "has", commonInit = ["clear", "delete"], mapTail = ["get", hasName, "set"];
var mapMethods = commonInit.concat(forEachName, mapTail), weakMapMethods = commonInit.concat(mapTail), setMethods = ["add"].concat(commonInit, forEachName, hasName);
const isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
const isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
const isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
const isWeakSet = tagTester("WeakSet");
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs2;
}
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
  }
  return result2;
}
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction$1(obj[key])) names.push(key);
  }
  return names.sort();
}
function createAssigner(keysFunc, defaults2) {
  return function(obj) {
    var length = arguments.length;
    if (defaults2) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults2 || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}
const extend = createAssigner(allKeys);
const extendOwn = createAssigner(keys);
const defaults = createAssigner(allKeys, true);
function ctor() {
  return function() {
  };
}
function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
function create(prototype, props) {
  var result2 = baseCreate(prototype);
  if (props) extendOwn(result2, props);
  return result2;
}
function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
}
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
function toPath$1(path) {
  return isArray(path) ? path : [path];
}
_$1.toPath = toPath$1;
function toPath(path) {
  return _$1.toPath(path);
}
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
function get(object2, path, defaultValue) {
  var value = deepGet(object2, toPath(path));
  return isUndefined(value) ? defaultValue : value;
}
function has(obj, path) {
  path = toPath(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has$1(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}
function identity(value) {
  return value;
}
function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
function property(path) {
  path = toPath(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value) {
        return func.call(context, value);
      };
    // The 2-argument case is omitted because we’re not using it.
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction$1(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray(value)) return matcher(value);
  return property(value);
}
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
_$1.iteratee = iteratee;
function cb(value, context, argCount) {
  if (_$1.iteratee !== iteratee) return _$1.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function noop() {
}
function propertyOf(obj) {
  if (obj == null) return noop;
  return function(path) {
    return get(obj, path);
  };
}
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee2(i);
  return accum;
}
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
const now = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function createEscaper(map2) {
  var escaper = function(match) {
    return map2[match];
  };
  var source = "(?:" + keys(map2).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string2) {
    string2 = string2 == null ? "" : "" + string2;
    return testRegexp.test(string2) ? string2.replace(replaceRegexp, escaper) : string2;
  };
}
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};
const escape = createEscaper(escapeMap);
const unescapeMap = invert(escapeMap);
const unescape$1 = createEscaper(unescapeMap);
const templateSettings = _$1.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var noMatch = /(.)^/;
var escapes = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
function escapeChar(match) {
  return "\\" + escapes[match];
}
var bareIdentifier = /^\s*(\w|\$)+\s*$/;
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults({}, settings, _$1.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape2, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape2) {
      source += "'+\n((__t=(" + escape2 + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument)) throw new Error(
      "variable is not a bare identifier: " + argument
    );
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = function(data) {
    return render.call(this, data, _$1);
  };
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
function result(obj, path, fallback) {
  path = toPath(path);
  var length = path.length;
  if (!length) {
    return isFunction$1(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
    }
    obj = isFunction$1(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
function chain(obj) {
  var instance = _$1(obj);
  instance._chain = true;
  return instance;
}
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2)) return result2;
  return self2;
}
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});
partial.placeholder = _$1;
const bind = restArguments(function(func, context, args) {
  if (!isFunction$1(func)) throw new TypeError("Bind must be called on a function");
  var bound = restArguments(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
});
const isArrayLike = createSizePropertyCheck(getLength);
function flatten$1(input, depth, strict) {
  if (!depth && depth !== 0) depth = Infinity;
  var output = [], idx = 0, i = 0, length = getLength(input) || 0, stack = [];
  while (true) {
    if (i >= length) {
      if (!stack.length) break;
      var frame = stack.pop();
      i = frame.i;
      input = frame.v;
      length = getLength(input);
      continue;
    }
    var value = input[i++];
    if (stack.length >= depth) {
      output[idx++] = value;
    } else if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
      stack.push({ i, v: input });
      i = 0;
      input = value;
      length = getLength(input);
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
const bindAll = restArguments(function(obj, keys2) {
  keys2 = flatten$1(keys2, false, false);
  var index = keys2.length;
  if (index < 1) throw new Error("bindAll must be passed function names");
  while (index--) {
    var key = keys2[index];
    obj[key] = bind(obj[key], obj);
  }
  return obj;
});
function memoize(func, hasher) {
  var memoize2 = function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has$1(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize2.cache = {};
  return memoize2;
}
const delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});
const defer = partial(delay, _$1, 1);
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  var throttled = function() {
    var _now = now();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = function() {
    var passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result2 = func.apply(context, args);
      if (!timeout) args = context = null;
    }
  };
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
function wrap(func, wrapper) {
  return partial(wrapper, func);
}
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--) result2 = args[i].call(this, result2);
    return result2;
  };
}
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1) func = null;
    return memo;
  };
}
const once = partial(before, 2);
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}
const findIndex = createPredicateIndexFinder(1);
const findLastIndex = createPredicateIndexFinder(-1);
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value = iteratee2(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value) low = mid + 1;
    else high = mid;
  }
  return low;
}
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN$1);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}
const indexOf = createIndexFinder(1, findIndex, sortedIndex);
const lastIndexOf = createIndexFinder(-1, findLastIndex);
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function createReduce(dir) {
  var reducer = function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };
  return function(obj, iteratee2, memo, context) {
    var initial2 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
  };
}
const reduce = createReduce(1);
const reduceRight = createReduce(-1);
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != "number" || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}
const invoke = restArguments(function(obj, path, args) {
  var contextPath, func;
  if (isFunction$1(path)) {
    func = path;
  } else {
    path = toPath(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return map(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
});
function pluck(obj, key) {
  return map(obj, property(key));
}
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (isArray(obj)) return slice.call(obj);
  if (isString(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike(obj)) return map(obj, identity);
  return values(obj);
}
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length = getLength(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
function shuffle(obj) {
  return sample(obj, Infinity);
}
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), "value");
}
function group(behavior, partition2) {
  return function(obj, iteratee2, context) {
    var result2 = partition2 ? [[], []] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
const groupBy = group(function(result2, value, key) {
  if (has$1(result2, key)) result2[key].push(value);
  else result2[key] = [value];
});
const indexBy = group(function(result2, value, key) {
  result2[key] = value;
});
const countBy = group(function(result2, value, key) {
  if (has$1(result2, key)) result2[key]++;
  else result2[key] = 1;
});
const partition = group(function(result2, value, pass) {
  result2[pass ? 0 : 1].push(value);
}, true);
function size(obj) {
  if (obj == null) return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}
function keyInObj(value, key, obj) {
  return key in obj;
}
const pick = restArguments(function(obj, keys2) {
  var result2 = {}, iteratee2 = keys2[0];
  if (obj == null) return result2;
  if (isFunction$1(iteratee2)) {
    if (keys2.length > 1) iteratee2 = optimizeCb(iteratee2, keys2[1]);
    keys2 = allKeys(obj);
  } else {
    iteratee2 = keyInObj;
    keys2 = flatten$1(keys2, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys2.length; i < length; i++) {
    var key = keys2[i];
    var value = obj[key];
    if (iteratee2(value, key, obj)) result2[key] = value;
  }
  return result2;
});
const omit = restArguments(function(obj, keys2) {
  var iteratee2 = keys2[0], context;
  if (isFunction$1(iteratee2)) {
    iteratee2 = negate(iteratee2);
    if (keys2.length > 1) context = keys2[1];
  } else {
    keys2 = map(flatten$1(keys2, false, false), String);
    iteratee2 = function(value, key) {
      return !contains(keys2, key);
    };
  }
  return pick(obj, iteratee2, context);
});
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
function compact(array) {
  return filter(array, Boolean);
}
function flatten(array, depth) {
  return flatten$1(array, depth, false);
}
const difference = restArguments(function(array, rest2) {
  rest2 = flatten$1(rest2, true, true);
  return filter(array, function(value) {
    return !contains(rest2, value);
  });
});
const without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null) iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed) result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
    }
  }
  return result2;
}
const union = restArguments(function(arrays) {
  return uniq(flatten$1(arrays, true, true));
});
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (contains(result2, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result2.push(item);
  }
  return result2;
}
function unzip(array) {
  var length = array && max(array, getLength).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
const zip = restArguments(unzip);
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
    }
  }
  return result2;
}
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
  }
  return result2;
}
function chainResult(instance, obj) {
  return instance._chain ? _$1(obj).chain() : obj;
}
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _$1[name] = obj[name];
    _$1.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_$1, args));
    };
  });
  return _$1;
}
each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === "shift" || name === "splice") && obj.length === 0) {
        delete obj[0];
      }
    }
    return chainResult(this, obj);
  };
});
each(["concat", "join", "slice"], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return chainResult(this, obj);
  };
});
const allExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION,
  after,
  all: every,
  allKeys,
  any: some,
  assign: extendOwn,
  before,
  bind,
  bindAll,
  chain,
  chunk,
  clone,
  collect: map,
  compact,
  compose,
  constant,
  contains,
  countBy,
  create,
  debounce,
  default: _$1,
  defaults,
  defer,
  delay,
  detect: find,
  difference,
  drop: rest,
  each,
  escape,
  every,
  extend,
  extendOwn,
  filter,
  find,
  findIndex,
  findKey,
  findLastIndex,
  findWhere,
  first,
  flatten,
  foldl: reduce,
  foldr: reduceRight,
  forEach: each,
  functions,
  get,
  groupBy,
  has,
  head: first,
  identity,
  include: contains,
  includes: contains,
  indexBy,
  indexOf,
  initial,
  inject: reduce,
  intersection,
  invert,
  invoke,
  isArguments: isArguments$1,
  isArray,
  isArrayBuffer,
  isBoolean,
  isDataView: isDataView$1,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isError,
  isFinite: isFinite$1,
  isFunction: isFunction$1,
  isMap,
  isMatch,
  isNaN: isNaN$1,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isTypedArray: isTypedArray$1,
  isUndefined,
  isWeakMap,
  isWeakSet,
  iteratee,
  keys,
  last,
  lastIndexOf,
  map,
  mapObject,
  matcher,
  matches: matcher,
  max,
  memoize,
  methods: functions,
  min,
  mixin,
  negate,
  noop,
  now,
  object,
  omit,
  once,
  pairs,
  partial,
  partition,
  pick,
  pluck,
  property,
  propertyOf,
  random,
  range,
  reduce,
  reduceRight,
  reject,
  rest,
  restArguments,
  result,
  sample,
  select: filter,
  shuffle,
  size,
  some,
  sortBy,
  sortedIndex,
  tail: rest,
  take: first,
  tap,
  template,
  templateSettings,
  throttle,
  times,
  toArray,
  toPath: toPath$1,
  transpose: unzip,
  unescape: unescape$1,
  union,
  uniq,
  unique: uniq,
  uniqueId,
  unzip,
  values,
  where,
  without,
  wrap,
  zip
}, Symbol.toStringTag, { value: "Module" }));
var _ = mixin(allExports);
_._ = _;
var eve$2 = { exports: {} };
var eve$1 = eve$2.exports;
var hasRequiredEve;
function requireEve() {
  if (hasRequiredEve) return eve$2.exports;
  hasRequiredEve = 1;
  (function(module) {
    (function(glob) {
      var version = "0.5.4", has2 = "hasOwnProperty", separator = /[\.\/]/, comaseparator = /\s*,\s*/, wildcard = "*", numsort = function(a, b) {
        return a - b;
      }, current_event, stop, events = { n: {} }, firstDefined = function() {
        for (var i = 0, ii = this.length; i < ii; i++) {
          if (typeof this[i] != "undefined") {
            return this[i];
          }
        }
      }, lastDefined = function() {
        var i = this.length;
        while (--i) {
          if (typeof this[i] != "undefined") {
            return this[i];
          }
        }
      }, objtos = Object.prototype.toString, Str = String, isArray2 = Array.isArray || function(ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
      }, eve2 = function(name, scope) {
        var oldstop = stop, args = Array.prototype.slice.call(arguments, 2), listeners = eve2.listeners(name), z = 0, l, indexed = [], queue = {}, out = [], ce = current_event;
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
          indexed.push(listeners[i].zIndex);
          if (listeners[i].zIndex < 0) {
            queue[listeners[i].zIndex] = listeners[i];
          }
        }
        indexed.sort(numsort);
        while (indexed[z] < 0) {
          l = queue[indexed[z++]];
          out.push(l.apply(scope, args));
          if (stop) {
            stop = oldstop;
            return out;
          }
        }
        for (i = 0; i < ii; i++) {
          l = listeners[i];
          if ("zIndex" in l) {
            if (l.zIndex == indexed[z]) {
              out.push(l.apply(scope, args));
              if (stop) {
                break;
              }
              do {
                z++;
                l = queue[indexed[z]];
                l && out.push(l.apply(scope, args));
                if (stop) {
                  break;
                }
              } while (l);
            } else {
              queue[l.zIndex] = l;
            }
          } else {
            out.push(l.apply(scope, args));
            if (stop) {
              break;
            }
          }
        }
        stop = oldstop;
        current_event = ce;
        return out;
      };
      eve2._events = events;
      eve2.listeners = function(name) {
        var names = isArray2(name) ? name : name.split(separator), e = events, item, items, k, i, ii, j, jj, nes, es = [e], out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
          nes = [];
          for (j = 0, jj = es.length; j < jj; j++) {
            e = es[j].n;
            items = [e[names[i]], e[wildcard]];
            k = 2;
            while (k--) {
              item = items[k];
              if (item) {
                nes.push(item);
                out = out.concat(item.f || []);
              }
            }
          }
          es = nes;
        }
        return out;
      };
      eve2.separator = function(sep) {
        if (sep) {
          sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
          sep = "[" + sep + "]";
          separator = new RegExp(sep);
        } else {
          separator = /[\.\/]/;
        }
      };
      eve2.on = function(name, f) {
        if (typeof f != "function") {
          return function() {
          };
        }
        var names = isArray2(name) ? isArray2(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
          (function(name2) {
            var names2 = isArray2(name2) ? name2 : Str(name2).split(separator), e = events, exist;
            for (var i2 = 0, ii2 = names2.length; i2 < ii2; i2++) {
              e = e.n;
              e = e.hasOwnProperty(names2[i2]) && e[names2[i2]] || (e[names2[i2]] = { n: {} });
            }
            e.f = e.f || [];
            for (i2 = 0, ii2 = e.f.length; i2 < ii2; i2++) if (e.f[i2] == f) {
              exist = true;
              break;
            }
            !exist && e.f.push(f);
          })(names[i]);
        }
        return function(zIndex) {
          if (+zIndex == +zIndex) {
            f.zIndex = +zIndex;
          }
        };
      };
      eve2.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
          eve2.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
      };
      eve2.stop = function() {
        stop = 1;
      };
      eve2.nt = function(subname) {
        var cur = isArray2(current_event) ? current_event.join(".") : current_event;
        if (subname) {
          return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
      };
      eve2.nts = function() {
        return isArray2(current_event) ? current_event : current_event.split(separator);
      };
      eve2.off = eve2.unbind = function(name, f) {
        if (!name) {
          eve2._events = events = { n: {} };
          return;
        }
        var names = isArray2(name) ? isArray2(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
          for (var i = 0, ii = names.length; i < ii; i++) {
            eve2.off(names[i], f);
          }
          return;
        }
        names = isArray2(name) ? name : Str(name).split(separator);
        var e, key, splice, i, ii, j, jj, cur = [events], inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
          for (j = 0; j < cur.length; j += splice.length - 2) {
            splice = [j, 1];
            e = cur[j].n;
            if (names[i] != wildcard) {
              if (e[names[i]]) {
                splice.push(e[names[i]]);
                inodes.unshift({
                  n: e,
                  name: names[i]
                });
              }
            } else {
              for (key in e) if (e[has2](key)) {
                splice.push(e[key]);
                inodes.unshift({
                  n: e,
                  name: key
                });
              }
            }
            cur.splice.apply(cur, splice);
          }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
          e = cur[i];
          while (e.n) {
            if (f) {
              if (e.f) {
                for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                  e.f.splice(j, 1);
                  break;
                }
                !e.f.length && delete e.f;
              }
              for (key in e.n) if (e.n[has2](key) && e.n[key].f) {
                var funcs = e.n[key].f;
                for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                  funcs.splice(j, 1);
                  break;
                }
                !funcs.length && delete e.n[key].f;
              }
            } else {
              delete e.f;
              for (key in e.n) if (e.n[has2](key) && e.n[key].f) {
                delete e.n[key].f;
              }
            }
            e = e.n;
          }
        }
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
          e = inodes[i];
          for (key in e.n[e.name].f) {
            continue prune;
          }
          for (key in e.n[e.name].n) {
            continue prune;
          }
          delete e.n[e.name];
        }
      };
      eve2.once = function(name, f) {
        var f2 = function() {
          eve2.off(name, f2);
          return f.apply(this, arguments);
        };
        return eve2.on(name, f2);
      };
      eve2.version = version;
      eve2.toString = function() {
        return "You are running Eve " + version;
      };
      glob.eve = eve2;
      module.exports ? module.exports = eve2 : glob.eve = eve2;
    })(typeof window != "undefined" ? window : eve$1);
  })(eve$2);
  return eve$2.exports;
}
var snap_svgCjs;
var hasRequiredSnap_svgCjs;
function requireSnap_svgCjs() {
  if (hasRequiredSnap_svgCjs) return snap_svgCjs;
  hasRequiredSnap_svgCjs = 1;
  window.eve = requireEve();
  var mina = (function(eve2) {
    var animations = {}, requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      setTimeout(callback, 16, (/* @__PURE__ */ new Date()).getTime());
      return true;
    }, requestID, isArray2 = Array.isArray || function(a) {
      return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
    }, idgen = 0, idprefix = "M" + (+/* @__PURE__ */ new Date()).toString(36), ID = function() {
      return idprefix + (idgen++).toString(36);
    }, timer = Date.now || function() {
      return +/* @__PURE__ */ new Date();
    }, sta = function(val) {
      var a = this;
      if (val == null) {
        return a.s;
      }
      var ds = a.s - val;
      a.b += a.dur * ds;
      a.B += a.dur * ds;
      a.s = val;
    }, speed = function(val) {
      var a = this;
      if (val == null) {
        return a.spd;
      }
      a.spd = val;
    }, duration = function(val) {
      var a = this;
      if (val == null) {
        return a.dur;
      }
      a.s = a.s * val / a.dur;
      a.dur = val;
    }, stopit = function() {
      var a = this;
      delete animations[a.id];
      a.update();
      eve2("mina.stop." + a.id, a);
    }, pause = function() {
      var a = this;
      if (a.pdif) {
        return;
      }
      delete animations[a.id];
      a.update();
      a.pdif = a.get() - a.b;
    }, resume = function() {
      var a = this;
      if (!a.pdif) {
        return;
      }
      a.b = a.get() - a.pdif;
      delete a.pdif;
      animations[a.id] = a;
      frame();
    }, update = function() {
      var a = this, res2;
      if (isArray2(a.start)) {
        res2 = [];
        for (var j = 0, jj = a.start.length; j < jj; j++) {
          res2[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
        }
      } else {
        res2 = +a.start + (a.end - a.start) * a.easing(a.s);
      }
      a.set(res2);
    }, frame = function(timeStamp) {
      if (!timeStamp) {
        if (!requestID) {
          requestID = requestAnimFrame(frame);
        }
        return;
      }
      var len = 0;
      for (var i in animations) if (animations.hasOwnProperty(i)) {
        var a = animations[i], b = a.get();
        len++;
        a.s = (b - a.b) / (a.dur / a.spd);
        if (a.s >= 1) {
          delete animations[i];
          a.s = 1;
          len--;
          (function(a2) {
            setTimeout(function() {
              eve2("mina.finish." + a2.id, a2);
            });
          })(a);
        }
        a.update();
      }
      requestID = len ? requestAnimFrame(frame) : false;
    }, mina2 = function(a, A, b, B, get2, set, easing) {
      var anim = {
        id: ID(),
        start: a,
        end: A,
        b,
        s: 0,
        dur: B - b,
        spd: 1,
        get: get2,
        set,
        easing: easing || mina2.linear,
        status: sta,
        speed,
        duration,
        stop: stopit,
        pause,
        resume,
        update
      };
      animations[anim.id] = anim;
      var len = 0, i;
      for (i in animations) if (animations.hasOwnProperty(i)) {
        len++;
        if (len == 2) {
          break;
        }
      }
      len == 1 && frame();
      return anim;
    };
    mina2.time = timer;
    mina2.getById = function(id) {
      return animations[id] || null;
    };
    mina2.linear = function(n) {
      return n;
    };
    mina2.easeout = function(n) {
      return Math.pow(n, 1.7);
    };
    mina2.easein = function(n) {
      return Math.pow(n, 0.48);
    };
    mina2.easeinout = function(n) {
      if (n == 1) {
        return 1;
      }
      if (n == 0) {
        return 0;
      }
      var q = 0.48 - n / 1.04, Q = Math.sqrt(0.1734 + q * q), x = Q - q, X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1), y = -Q - q, Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1), t = X + Y + 0.5;
      return (1 - t) * 3 * t * t + t * t * t;
    };
    mina2.backin = function(n) {
      if (n == 1) {
        return 1;
      }
      var s = 1.70158;
      return n * n * ((s + 1) * n - s);
    };
    mina2.backout = function(n) {
      if (n == 0) {
        return 0;
      }
      n = n - 1;
      var s = 1.70158;
      return n * n * ((s + 1) * n + s) + 1;
    };
    mina2.elastic = function(n) {
      if (n == !!n) {
        return n;
      }
      return Math.pow(2, -10 * n) * Math.sin((n - 0.075) * (2 * Math.PI) / 0.3) + 1;
    };
    mina2.bounce = function(n) {
      var s = 7.5625, p = 2.75, l;
      if (n < 1 / p) {
        l = s * n * n;
      } else {
        if (n < 2 / p) {
          n -= 1.5 / p;
          l = s * n * n + 0.75;
        } else {
          if (n < 2.5 / p) {
            n -= 2.25 / p;
            l = s * n * n + 0.9375;
          } else {
            n -= 2.625 / p;
            l = s * n * n + 0.984375;
          }
        }
      }
      return l;
    };
    window.mina = mina2;
    return mina2;
  })(typeof eve == "undefined" ? function() {
  } : eve);
  var Snap2 = (function(root2) {
    Snap22.version = "0.5.1";
    function Snap22(w, h) {
      if (w) {
        if (w.nodeType) {
          return wrap2(w);
        }
        if (is(w, "array") && Snap22.set) {
          return Snap22.set.apply(Snap22, w);
        }
        if (w instanceof Element) {
          return w;
        }
        if (h == null) {
          try {
            w = glob.doc.querySelector(String(w));
            return wrap2(w);
          } catch (e) {
            return null;
          }
        }
      }
      w = w == null ? "100%" : w;
      h = h == null ? "100%" : h;
      return new Paper(w, h);
    }
    Snap22.toString = function() {
      return "Snap v" + this.version;
    };
    Snap22._ = {};
    var glob = {
      win: root2.window,
      doc: root2.window.document
    };
    Snap22._.glob = glob;
    var has2 = "hasOwnProperty", Str = String, toFloat = parseFloat, toInt = parseInt, math2 = Math, mmax = math2.max, mmin = math2.min, abs = math2.abs, PI = math2.PI, E = "", objectToString = Object.prototype.toString, colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i;
    Snap22._.separator = /[,\s]+/;
    var commaSpaces = /[\s]*,[\s]*/, hsrg = { hs: 1, rg: 1 }, pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig, idgen = 0, idprefix = "S" + (+/* @__PURE__ */ new Date()).toString(36), ID = function(el) {
      return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    }, xlink = "http://www.w3.org/1999/xlink", xmlns2 = "http://www.w3.org/2000/svg", hub = {};
    Snap22.url = function(url) {
      return "url('#" + url + "')";
    };
    function $(el, attr) {
      if (attr) {
        if (el == "#text") {
          el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
          el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
          el = $(el);
        }
        if (typeof attr == "string") {
          if (el.nodeType == 1) {
            if (attr.substring(0, 6) == "xlink:") {
              return el.getAttributeNS(xlink, attr.substring(6));
            }
            if (attr.substring(0, 4) == "xml:") {
              return el.getAttributeNS(xmlns2, attr.substring(4));
            }
            return el.getAttribute(attr);
          } else if (attr == "text") {
            return el.nodeValue;
          } else {
            return null;
          }
        }
        if (el.nodeType == 1) {
          for (var key in attr) if (attr[has2](key)) {
            var val = Str(attr[key]);
            if (val) {
              if (key.substring(0, 6) == "xlink:") {
                el.setAttributeNS(xlink, key.substring(6), val);
              } else if (key.substring(0, 4) == "xml:") {
                el.setAttributeNS(xmlns2, key.substring(4), val);
              } else {
                el.setAttribute(key, val);
              }
            } else {
              el.removeAttribute(key);
            }
          }
        } else if ("text" in attr) {
          el.nodeValue = attr.text;
        }
      } else {
        el = glob.doc.createElementNS(xmlns2, el);
      }
      return el;
    }
    Snap22._.$ = $;
    Snap22._.id = ID;
    function is(o, type) {
      type = Str.prototype.toLowerCase.call(type);
      if (type == "finite") {
        return isFinite(o);
      }
      if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
      }
      return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
    }
    Snap22.format = /* @__PURE__ */ (function() {
      var tokenRegex = /\{([^\}]+)\}/g, objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, replacer = function(all, key, obj) {
        var res2 = obj;
        key.replace(objNotationRegex, function(all2, name, quote, quotedName, isFunc) {
          name = name || quotedName;
          if (res2) {
            if (name in res2) {
              res2 = res2[name];
            }
            typeof res2 == "function" && isFunc && (res2 = res2());
          }
        });
        res2 = (res2 == null || res2 == obj ? all : res2) + "";
        return res2;
      };
      return function(str, obj) {
        return Str(str).replace(tokenRegex, function(all, key) {
          return replacer(all, key, obj);
        });
      };
    })();
    function clone2(obj) {
      if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
      }
      var res2 = new obj.constructor();
      for (var key in obj) if (obj[has2](key)) {
        res2[key] = clone2(obj[key]);
      }
      return res2;
    }
    Snap22._.clone = clone2;
    function repush(array, item) {
      for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
      }
    }
    function cacher(f, scope, postprocessor) {
      function newf() {
        var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
        if (cache[has2](args)) {
          repush(count, args);
          return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
      }
      return newf;
    }
    Snap22._.cacher = cacher;
    function angle(x1, y1, x2, y2, x3, y3) {
      if (x3 == null) {
        var x = x1 - x2, y = y1 - y2;
        if (!x && !y) {
          return 0;
        }
        return (180 + math2.atan2(-y, -x) * 180 / PI + 360) % 360;
      } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
      }
    }
    function rad(deg2) {
      return deg2 % 360 * PI / 180;
    }
    function deg(rad2) {
      return rad2 * 180 / PI % 360;
    }
    Snap22.rad = rad;
    Snap22.deg = deg;
    Snap22.sin = function(angle2) {
      return math2.sin(Snap22.rad(angle2));
    };
    Snap22.tan = function(angle2) {
      return math2.tan(Snap22.rad(angle2));
    };
    Snap22.cos = function(angle2) {
      return math2.cos(Snap22.rad(angle2));
    };
    Snap22.asin = function(num) {
      return Snap22.deg(math2.asin(num));
    };
    Snap22.acos = function(num) {
      return Snap22.deg(math2.acos(num));
    };
    Snap22.atan = function(num) {
      return Snap22.deg(math2.atan(num));
    };
    Snap22.atan2 = function(num) {
      return Snap22.deg(math2.atan2(num));
    };
    Snap22.angle = angle;
    Snap22.len = function(x1, y1, x2, y2) {
      return Math.sqrt(Snap22.len2(x1, y1, x2, y2));
    };
    Snap22.len2 = function(x1, y1, x2, y2) {
      return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };
    Snap22.closestPoint = function(path, x, y) {
      function distance2(p) {
        var dx = p.x - x, dy = p.y - y;
        return dx * dx + dy * dy;
      }
      var pathNode = path.node, pathLength = pathNode.getTotalLength(), precision = pathLength / pathNode.pathSegList.numberOfItems * 0.125, best, bestLength, bestDistance = Infinity;
      for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
          best = scan;
          bestLength = scanLength;
          bestDistance = scanDistance;
        }
      }
      precision *= 0.5;
      while (precision > 0.5) {
        var before2, after2, beforeLength, afterLength, beforeDistance, afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before2 = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
          best = before2;
          bestLength = beforeLength;
          bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after2 = pathNode.getPointAtLength(afterLength))) < bestDistance) {
          best = after2;
          bestLength = afterLength;
          bestDistance = afterDistance;
        } else {
          precision *= 0.5;
        }
      }
      best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
      };
      return best;
    };
    Snap22.is = is;
    Snap22.snapTo = function(values2, value, tolerance) {
      tolerance = is(tolerance, "finite") ? tolerance : 10;
      if (is(values2, "array")) {
        var i = values2.length;
        while (i--) if (abs(values2[i] - value) <= tolerance) {
          return values2[i];
        }
      } else {
        values2 = +values2;
        var rem = value % values2;
        if (rem < tolerance) {
          return value - rem;
        }
        if (rem > values2 - tolerance) {
          return value - rem + values2;
        }
      }
      return value;
    };
    Snap22.getRGB = cacher(function(colour) {
      if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
      }
      if (colour == "none") {
        return { r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString };
      }
      !(hsrg[has2](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
      if (!colour) {
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
      }
      var red, green, blue, opacity, t, values2, rgb = colour.match(colourRegExp);
      if (rgb) {
        if (rgb[2]) {
          blue = toInt(rgb[2].substring(5), 16);
          green = toInt(rgb[2].substring(3, 5), 16);
          red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
          blue = toInt((t = rgb[3].charAt(3)) + t, 16);
          green = toInt((t = rgb[3].charAt(2)) + t, 16);
          red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
          values2 = rgb[4].split(commaSpaces);
          red = toFloat(values2[0]);
          values2[0].slice(-1) == "%" && (red *= 2.55);
          green = toFloat(values2[1]);
          values2[1].slice(-1) == "%" && (green *= 2.55);
          blue = toFloat(values2[2]);
          values2[2].slice(-1) == "%" && (blue *= 2.55);
          rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values2[3]));
          values2[3] && values2[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
          values2 = rgb[5].split(commaSpaces);
          red = toFloat(values2[0]);
          values2[0].slice(-1) == "%" && (red /= 100);
          green = toFloat(values2[1]);
          values2[1].slice(-1) == "%" && (green /= 100);
          blue = toFloat(values2[2]);
          values2[2].slice(-1) == "%" && (blue /= 100);
          (values2[0].slice(-3) == "deg" || values2[0].slice(-1) == "°") && (red /= 360);
          rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values2[3]));
          values2[3] && values2[3].slice(-1) == "%" && (opacity /= 100);
          return Snap22.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
          values2 = rgb[6].split(commaSpaces);
          red = toFloat(values2[0]);
          values2[0].slice(-1) == "%" && (red /= 100);
          green = toFloat(values2[1]);
          values2[1].slice(-1) == "%" && (green /= 100);
          blue = toFloat(values2[2]);
          values2[2].slice(-1) == "%" && (blue /= 100);
          (values2[0].slice(-3) == "deg" || values2[0].slice(-1) == "°") && (red /= 360);
          rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values2[3]));
          values2[3] && values2[3].slice(-1) == "%" && (opacity /= 100);
          return Snap22.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math2.round(red), 255);
        green = mmin(math2.round(green), 255);
        blue = mmin(math2.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = { r: red, g: green, b: blue, toString: rgbtoString };
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
      }
      return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
    }, Snap22);
    Snap22.hsb = cacher(function(h, s, b) {
      return Snap22.hsb2rgb(h, s, b).hex;
    });
    Snap22.hsl = cacher(function(h, s, l) {
      return Snap22.hsl2rgb(h, s, l).hex;
    });
    Snap22.rgb = cacher(function(r, g2, b, o) {
      if (is(o, "finite")) {
        var round2 = math2.round;
        return "rgba(" + [round2(r), round2(g2), round2(b), +o.toFixed(2)] + ")";
      }
      return "#" + (16777216 | b | g2 << 8 | r << 16).toString(16).slice(1);
    });
    var toHex = function(color) {
      var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0], red = "rgb(255, 0, 0)";
      toHex = cacher(function(color2) {
        if (color2.toLowerCase() == "red") {
          return red;
        }
        i.style.color = red;
        i.style.color = color2;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
      });
      return toHex(color);
    }, hsbtoString = function() {
      return "hsb(" + [this.h, this.s, this.b] + ")";
    }, hsltoString = function() {
      return "hsl(" + [this.h, this.s, this.l] + ")";
    }, rgbtoString = function() {
      return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
    }, prepareRGB = function(r, g2, b) {
      if (g2 == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g2 = r.g;
        r = r.r;
      }
      if (g2 == null && is(r, string)) {
        var clr = Snap22.getRGB(r);
        r = clr.r;
        g2 = clr.g;
        b = clr.b;
      }
      if (r > 1 || g2 > 1 || b > 1) {
        r /= 255;
        g2 /= 255;
        b /= 255;
      }
      return [r, g2, b];
    }, packageRGB = function(r, g2, b, o) {
      r = math2.round(r * 255);
      g2 = math2.round(g2 * 255);
      b = math2.round(b * 255);
      var rgb = {
        r,
        g: g2,
        b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap22.rgb(r, g2, b),
        toString: rgbtoString
      };
      is(o, "finite") && (rgb.opacity = o);
      return rgb;
    };
    Snap22.color = function(clr) {
      var rgb;
      if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap22.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
      } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap22.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
      } else {
        if (is(clr, "string")) {
          clr = Snap22.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
          rgb = Snap22.rgb2hsl(clr);
          clr.h = rgb.h;
          clr.s = rgb.s;
          clr.l = rgb.l;
          rgb = Snap22.rgb2hsb(clr);
          clr.v = rgb.b;
        } else {
          clr = { hex: "none" };
          clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
          clr.error = 1;
        }
      }
      clr.toString = rgbtoString;
      return clr;
    };
    Snap22.hsb2rgb = function(h, s, v, o) {
      if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
      }
      h *= 360;
      var R, G, B, X, C;
      h = h % 360 / 60;
      C = v * s;
      X = C * (1 - abs(h % 2 - 1));
      R = G = B = v - C;
      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return packageRGB(R, G, B, o);
    };
    Snap22.hsl2rgb = function(h, s, l, o) {
      if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
      }
      if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
      }
      h *= 360;
      var R, G, B, X, C;
      h = h % 360 / 60;
      C = 2 * s * (l < 0.5 ? l : 1 - l);
      X = C * (1 - abs(h % 2 - 1));
      R = G = B = l - C / 2;
      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return packageRGB(R, G, B, o);
    };
    Snap22.rgb2hsb = function(r, g2, b) {
      b = prepareRGB(r, g2, b);
      r = b[0];
      g2 = b[1];
      b = b[2];
      var H, S2, V, C;
      V = mmax(r, g2, b);
      C = V - mmin(r, g2, b);
      H = C == 0 ? null : V == r ? (g2 - b) / C : V == g2 ? (b - r) / C + 2 : (r - g2) / C + 4;
      H = (H + 360) % 6 * 60 / 360;
      S2 = C == 0 ? 0 : C / V;
      return { h: H, s: S2, b: V, toString: hsbtoString };
    };
    Snap22.rgb2hsl = function(r, g2, b) {
      b = prepareRGB(r, g2, b);
      r = b[0];
      g2 = b[1];
      b = b[2];
      var H, S2, L, M, m, C;
      M = mmax(r, g2, b);
      m = mmin(r, g2, b);
      C = M - m;
      H = C == 0 ? null : M == r ? (g2 - b) / C : M == g2 ? (b - r) / C + 2 : (r - g2) / C + 4;
      H = (H + 360) % 6 * 60 / 360;
      L = (M + m) / 2;
      S2 = C == 0 ? 0 : L < 0.5 ? C / (2 * L) : C / (2 - 2 * L);
      return { h: H, s: S2, l: L, toString: hsltoString };
    };
    Snap22.parsePathString = function(pathString) {
      if (!pathString) {
        return null;
      }
      var pth = Snap22.path(pathString);
      if (pth.arr) {
        return Snap22.path.clone(pth.arr);
      }
      var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 }, data = [];
      if (is(pathString, "array") && is(pathString[0], "array")) {
        data = Snap22.path.clone(pathString);
      }
      if (!data.length) {
        Str(pathString).replace(pathCommand, function(a, b, c) {
          var params = [], name = b.toLowerCase();
          c.replace(pathValues, function(a2, b2) {
            b2 && params.push(+b2);
          });
          if (name == "m" && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = "l";
            b = b == "m" ? "l" : "L";
          }
          if (name == "o" && params.length == 1) {
            data.push([b, params[0]]);
          }
          if (name == "r") {
            data.push([b].concat(params));
          } else while (params.length >= paramCounts[name]) {
            data.push([b].concat(params.splice(0, paramCounts[name])));
            if (!paramCounts[name]) {
              break;
            }
          }
        });
      }
      data.toString = Snap22.path.toString;
      pth.arr = Snap22.path.clone(data);
      return data;
    };
    var parseTransformString = Snap22.parseTransformString = function(TString) {
      if (!TString) {
        return null;
      }
      var data = [];
      if (is(TString, "array") && is(TString[0], "array")) {
        data = Snap22.path.clone(TString);
      }
      if (!data.length) {
        Str(TString).replace(tCommand, function(a, b, c) {
          var params = [];
          b.toLowerCase();
          c.replace(pathValues, function(a2, b2) {
            b2 && params.push(+b2);
          });
          data.push([b].concat(params));
        });
      }
      data.toString = Snap22.path.toString;
      return data;
    };
    function svgTransform2string(tstr) {
      var res2 = [];
      tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
          params.push(0, 0);
        }
        if (name == "scale") {
          if (params.length > 2) {
            params = params.slice(0, 2);
          } else if (params.length == 2) {
            params.push(0, 0);
          }
          if (params.length == 1) {
            params.push(params[0], 0, 0);
          }
        }
        if (name == "skewX") {
          res2.push(["m", 1, 0, math2.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
          res2.push(["m", 1, math2.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
          res2.push([name.charAt(0)].concat(params));
        }
        return all;
      });
      return res2;
    }
    Snap22._.svgTransform2string = svgTransform2string;
    Snap22._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
    function transform2matrix(tstr, bbox) {
      var tdata = parseTransformString(tstr), m = new Snap22.Matrix();
      if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
          var t = tdata[i], tlen = t.length, command = Str(t[0]).toLowerCase(), absolute = t[0] != command, inver = absolute ? m.invert() : 0, x1, y1, x2, y2, bb;
          if (command == "t" && tlen == 2) {
            m.translate(t[1], 0);
          } else if (command == "t" && tlen == 3) {
            if (absolute) {
              x1 = inver.x(0, 0);
              y1 = inver.y(0, 0);
              x2 = inver.x(t[1], t[2]);
              y2 = inver.y(t[1], t[2]);
              m.translate(x2 - x1, y2 - y1);
            } else {
              m.translate(t[1], t[2]);
            }
          } else if (command == "r") {
            if (tlen == 2) {
              bb = bb || bbox;
              m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
            } else if (tlen == 4) {
              if (absolute) {
                x2 = inver.x(t[2], t[3]);
                y2 = inver.y(t[2], t[3]);
                m.rotate(t[1], x2, y2);
              } else {
                m.rotate(t[1], t[2], t[3]);
              }
            }
          } else if (command == "s") {
            if (tlen == 2 || tlen == 3) {
              bb = bb || bbox;
              m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
            } else if (tlen == 4) {
              if (absolute) {
                x2 = inver.x(t[2], t[3]);
                y2 = inver.y(t[2], t[3]);
                m.scale(t[1], t[1], x2, y2);
              } else {
                m.scale(t[1], t[1], t[2], t[3]);
              }
            } else if (tlen == 5) {
              if (absolute) {
                x2 = inver.x(t[3], t[4]);
                y2 = inver.y(t[3], t[4]);
                m.scale(t[1], t[2], x2, y2);
              } else {
                m.scale(t[1], t[2], t[3], t[4]);
              }
            }
          } else if (command == "m" && tlen == 7) {
            m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
          }
        }
      }
      return m;
    }
    Snap22._.transform2matrix = transform2matrix;
    Snap22._unit2px = unit2px;
    glob.doc.contains || glob.doc.compareDocumentPosition ? function(a, b) {
      var adown = a.nodeType == 9 ? a.documentElement : a, bup = b && b.parentNode;
      return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function(a, b) {
      if (b) {
        while (b) {
          b = b.parentNode;
          if (b == a) {
            return true;
          }
        }
      }
      return false;
    };
    function getSomeDefs(el) {
      var p = el.node.ownerSVGElement && wrap2(el.node.ownerSVGElement) || el.node.parentNode && wrap2(el.node.parentNode) || Snap22.select("svg") || Snap22(0, 0), pdefs = p.select("defs"), defs = pdefs == null ? false : pdefs.node;
      if (!defs) {
        defs = make("defs", p.node).node;
      }
      return defs;
    }
    function getSomeSVG(el) {
      return el.node.ownerSVGElement && wrap2(el.node.ownerSVGElement) || Snap22.select("svg");
    }
    Snap22._.getSomeDefs = getSomeDefs;
    Snap22._.getSomeSVG = getSomeSVG;
    function unit2px(el, name, value) {
      var svg = getSomeSVG(el).node, out = {}, mgr = svg.querySelector(".svg---mgr");
      if (!mgr) {
        mgr = $("rect");
        $(mgr, { x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none" });
        svg.appendChild(mgr);
      }
      function getW(val) {
        if (val == null) {
          return E;
        }
        if (val == +val) {
          return val;
        }
        $(mgr, { width: val });
        try {
          return mgr.getBBox().width;
        } catch (e) {
          return 0;
        }
      }
      function getH(val) {
        if (val == null) {
          return E;
        }
        if (val == +val) {
          return val;
        }
        $(mgr, { height: val });
        try {
          return mgr.getBBox().height;
        } catch (e) {
          return 0;
        }
      }
      function set(nam, f) {
        if (name == null) {
          out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
          out = f(value == null ? el.attr(nam) || 0 : value);
        }
      }
      switch (el.type) {
        case "rect":
          set("rx", getW);
          set("ry", getH);
        case "image":
          set("width", getW);
          set("height", getH);
        case "text":
          set("x", getW);
          set("y", getH);
          break;
        case "circle":
          set("cx", getW);
          set("cy", getH);
          set("r", getW);
          break;
        case "ellipse":
          set("cx", getW);
          set("cy", getH);
          set("rx", getW);
          set("ry", getH);
          break;
        case "line":
          set("x1", getW);
          set("x2", getW);
          set("y1", getH);
          set("y2", getH);
          break;
        case "marker":
          set("refX", getW);
          set("markerWidth", getW);
          set("refY", getH);
          set("markerHeight", getH);
          break;
        case "radialGradient":
          set("fx", getW);
          set("fy", getH);
          break;
        case "tspan":
          set("dx", getW);
          set("dy", getH);
          break;
        default:
          set(name, getW);
      }
      svg.removeChild(mgr);
      return out;
    }
    Snap22.select = function(query) {
      query = Str(query).replace(/([^\\]):/g, "$1\\:");
      return wrap2(glob.doc.querySelector(query));
    };
    Snap22.selectAll = function(query) {
      var nodelist2 = glob.doc.querySelectorAll(query), set = (Snap22.set || Array)();
      for (var i = 0; i < nodelist2.length; i++) {
        set.push(wrap2(nodelist2[i]));
      }
      return set;
    };
    function add2group(list) {
      if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
      }
      var i = 0, j = 0, node = this.node;
      while (this[i]) delete this[i++];
      for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
          list[i].forEach(function(el) {
            node.appendChild(el.node);
          });
        } else {
          node.appendChild(list[i].node);
        }
      }
      var children = node.childNodes;
      for (i = 0; i < children.length; i++) {
        this[j++] = wrap2(children[i]);
      }
      return this;
    }
    setInterval(function() {
      for (var key in hub) if (hub[has2](key)) {
        var el = hub[key], node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
          delete hub[key];
        }
      }
    }, 1e4);
    function Element(el) {
      if (el.snap in hub) {
        return hub[el.snap];
      }
      var svg;
      try {
        svg = el.ownerSVGElement;
      } catch (e) {
      }
      this.node = el;
      if (svg) {
        this.paper = new Paper(svg);
      }
      this.type = el.tagName || el.nodeName;
      var id = this.id = ID(this);
      this.anims = {};
      this._ = {
        transform: []
      };
      el.snap = id;
      hub[id] = this;
      if (this.type == "g") {
        this.add = add2group;
      }
      if (this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }) {
        for (var method in Paper.prototype) if (Paper.prototype[has2](method)) {
          this[method] = Paper.prototype[method];
        }
      }
    }
    Element.prototype.attr = function(params, value) {
      var el = this, node = el.node;
      if (!params) {
        if (node.nodeType != 1) {
          return {
            text: node.nodeValue
          };
        }
        var attr = node.attributes, out = {};
        for (var i = 0, ii = attr.length; i < ii; i++) {
          out[attr[i].nodeName] = attr[i].nodeValue;
        }
        return out;
      }
      if (is(params, "string")) {
        if (arguments.length > 1) {
          var json = {};
          json[params] = value;
          params = json;
        } else {
          return eve("snap.util.getattr." + params, el).firstDefined();
        }
      }
      for (var att in params) {
        if (params[has2](att)) {
          eve("snap.util.attr." + att, el, params[att]);
        }
      }
      return el;
    };
    Snap22.parse = function(svg) {
      var f = glob.doc.createDocumentFragment(), full = true, div = glob.doc.createElement("div");
      svg = Str(svg);
      if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
      }
      div.innerHTML = svg;
      svg = div.getElementsByTagName("svg")[0];
      if (svg) {
        if (full) {
          f = svg;
        } else {
          while (svg.firstChild) {
            f.appendChild(svg.firstChild);
          }
        }
      }
      return new Fragment(f);
    };
    function Fragment(frag) {
      this.node = frag;
    }
    Snap22.fragment = function() {
      var args = Array.prototype.slice.call(arguments, 0), f = glob.doc.createDocumentFragment();
      for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
          f.appendChild(item.node);
        }
        if (item.nodeType) {
          f.appendChild(item);
        }
        if (typeof item == "string") {
          f.appendChild(Snap22.parse(item).node);
        }
      }
      return new Fragment(f);
    };
    function make(name, parent) {
      var res2 = $(name);
      parent.appendChild(res2);
      var el = wrap2(res2);
      return el;
    }
    function Paper(w, h) {
      var res2, desc, defs, proto = Paper.prototype;
      if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
        if (w.snap in hub) {
          return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res2 = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
          desc = $("desc");
          desc.appendChild(doc.createTextNode("Created with Snap"));
          res2.node.appendChild(desc);
        }
        if (!defs) {
          defs = $("defs");
          res2.node.appendChild(defs);
        }
        res2.defs = defs;
        for (var key in proto) if (proto[has2](key)) {
          res2[key] = proto[key];
        }
        res2.paper = res2.root = res2;
      } else {
        res2 = make("svg", glob.doc.body);
        $(res2.node, {
          height: h,
          version: 1.1,
          width: w,
          xmlns: xmlns2
        });
      }
      return res2;
    }
    function wrap2(dom) {
      if (!dom) {
        return dom;
      }
      if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
      }
      if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
      }
      if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
      }
      return new Element(dom);
    }
    Snap22._.make = make;
    Snap22._.wrap = wrap2;
    Paper.prototype.el = function(name, attr) {
      var el = make(name, this.node);
      attr && el.attr(attr);
      return el;
    };
    Element.prototype.children = function() {
      var out = [], ch = this.node.childNodes;
      for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap22(ch[i]);
      }
      return out;
    };
    function jsonFiller(root22, o) {
      for (var i = 0, ii = root22.length; i < ii; i++) {
        var item = {
          type: root22[i].type,
          attr: root22[i].attr()
        }, children = root22[i].children();
        o.push(item);
        if (children.length) {
          jsonFiller(children, item.childNodes = []);
        }
      }
    }
    Element.prototype.toJSON = function() {
      var out = [];
      jsonFiller([this], out);
      return out[0];
    };
    eve.on("snap.util.getattr", function() {
      var att = eve.nt();
      att = att.substring(att.lastIndexOf(".") + 1);
      var css = att.replace(/[A-Z]/g, function(letter) {
        return "-" + letter.toLowerCase();
      });
      if (cssAttr[has2](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
      } else {
        return $(this.node, att);
      }
    });
    var cssAttr = {
      "alignment-baseline": 0,
      "baseline-shift": 0,
      "clip": 0,
      "clip-path": 0,
      "clip-rule": 0,
      "color": 0,
      "color-interpolation": 0,
      "color-interpolation-filters": 0,
      "color-profile": 0,
      "color-rendering": 0,
      "cursor": 0,
      "direction": 0,
      "display": 0,
      "dominant-baseline": 0,
      "enable-background": 0,
      "fill": 0,
      "fill-opacity": 0,
      "fill-rule": 0,
      "filter": 0,
      "flood-color": 0,
      "flood-opacity": 0,
      "font": 0,
      "font-family": 0,
      "font-size": 0,
      "font-size-adjust": 0,
      "font-stretch": 0,
      "font-style": 0,
      "font-variant": 0,
      "font-weight": 0,
      "glyph-orientation-horizontal": 0,
      "glyph-orientation-vertical": 0,
      "image-rendering": 0,
      "kerning": 0,
      "letter-spacing": 0,
      "lighting-color": 0,
      "marker": 0,
      "marker-end": 0,
      "marker-mid": 0,
      "marker-start": 0,
      "mask": 0,
      "opacity": 0,
      "overflow": 0,
      "pointer-events": 0,
      "shape-rendering": 0,
      "stop-color": 0,
      "stop-opacity": 0,
      "stroke": 0,
      "stroke-dasharray": 0,
      "stroke-dashoffset": 0,
      "stroke-linecap": 0,
      "stroke-linejoin": 0,
      "stroke-miterlimit": 0,
      "stroke-opacity": 0,
      "stroke-width": 0,
      "text-anchor": 0,
      "text-decoration": 0,
      "text-rendering": 0,
      "unicode-bidi": 0,
      "visibility": 0,
      "word-spacing": 0,
      "writing-mode": 0
    };
    eve.on("snap.util.attr", function(value) {
      var att = eve.nt(), attr = {};
      att = att.substring(att.lastIndexOf(".") + 1);
      attr[att] = value;
      var style = att.replace(/-(\w)/gi, function(all, letter) {
        return letter.toUpperCase();
      }), css = att.replace(/[A-Z]/g, function(letter) {
        return "-" + letter.toLowerCase();
      });
      if (cssAttr[has2](css)) {
        this.node.style[style] = value == null ? E : value;
      } else {
        $(this.node, attr);
      }
    });
    /* @__PURE__ */ (function(proto) {
    })(Paper.prototype);
    Snap22.ajax = function(url, postData, callback, scope) {
      var req = new XMLHttpRequest(), id = ID();
      if (req) {
        if (is(postData, "function")) {
          scope = callback;
          callback = postData;
          postData = null;
        } else if (is(postData, "object")) {
          var pd = [];
          for (var key in postData) if (postData.hasOwnProperty(key)) {
            pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
          }
          postData = pd.join("&");
        }
        req.open(postData ? "POST" : "GET", url, true);
        if (postData) {
          req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
          eve.once("snap.ajax." + id + ".0", callback);
          eve.once("snap.ajax." + id + ".200", callback);
          eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
          if (req.readyState != 4) return;
          eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
          return req;
        }
        req.send(postData);
        return req;
      }
    };
    Snap22.load = function(url, callback, scope) {
      Snap22.ajax(url, function(req) {
        var f = Snap22.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
      });
    };
    var getOffset = function(elem) {
      var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop, left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
      return {
        y: top,
        x: left
      };
    };
    Snap22.getElementByPoint = function(x, y) {
      var paper = this;
      paper.canvas;
      var target = glob.doc.elementFromPoint(x, y);
      if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target), sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
          target = hits[hits.length - 1];
        }
      }
      if (!target) {
        return null;
      }
      return wrap2(target);
    };
    Snap22.plugin = function(f) {
      f(Snap22, Element, Paper, glob, Fragment);
    };
    glob.win.Snap = Snap22;
    return Snap22;
  })(window || snap_svgCjs);
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype, is = Snap22.is, Str = String, unit2px = Snap22._unit2px, $ = Snap22._.$, make = Snap22._.make, getSomeDefs = Snap22._.getSomeDefs, has2 = "hasOwnProperty", wrap2 = Snap22._.wrap;
    elproto.getBBox = function(isWithoutTransform) {
      if (this.type == "tspan") {
        return Snap22._.box(this.node.getClientRects().item(0));
      }
      if (!Snap22.Matrix || !Snap22.path) {
        return this.node.getBBox();
      }
      var el = this, m = new Snap22.Matrix();
      if (el.removed) {
        return Snap22._.box();
      }
      while (el.type == "use") {
        if (!isWithoutTransform) {
          m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
        }
        if (el.original) {
          el = el.original;
        } else {
          var href = el.attr("xlink:href");
          el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
        }
      }
      var _2 = el._, pathfinder = Snap22.path.get[el.type] || Snap22.path.get.deflt;
      try {
        if (isWithoutTransform) {
          _2.bboxwt = pathfinder ? Snap22.path.getBBox(el.realPath = pathfinder(el)) : Snap22._.box(el.node.getBBox());
          return Snap22._.box(_2.bboxwt);
        } else {
          el.realPath = pathfinder(el);
          el.matrix = el.transform().localMatrix;
          _2.bbox = Snap22.path.getBBox(Snap22.path.map(el.realPath, m.add(el.matrix)));
          return Snap22._.box(_2.bbox);
        }
      } catch (e) {
        return Snap22._.box();
      }
    };
    var propString = function() {
      return this.string;
    };
    function extractTransform(el, tstr) {
      if (tstr == null) {
        var doReturn = true;
        if (el.type == "linearGradient" || el.type == "radialGradient") {
          tstr = el.node.getAttribute("gradientTransform");
        } else if (el.type == "pattern") {
          tstr = el.node.getAttribute("patternTransform");
        } else {
          tstr = el.node.getAttribute("transform");
        }
        if (!tstr) {
          return new Snap22.Matrix();
        }
        tstr = Snap22._.svgTransform2string(tstr);
      } else {
        if (!Snap22._.rgTransform.test(tstr)) {
          tstr = Snap22._.svgTransform2string(tstr);
        } else {
          tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
        }
        if (is(tstr, "array")) {
          tstr = Snap22.path ? Snap22.path.toString.call(tstr) : Str(tstr);
        }
        el._.transform = tstr;
      }
      var m = Snap22._.transform2matrix(tstr, el.getBBox(1));
      if (doReturn) {
        return m;
      } else {
        el.matrix = m;
      }
    }
    elproto.transform = function(tstr) {
      var _2 = this._;
      if (tstr == null) {
        var papa = this, global = new Snap22.Matrix(this.node.getCTM()), local = extractTransform(this), ms = [local], m = new Snap22.Matrix(), i, localString = local.toTransformString(), string2 = Str(local) == Str(this.matrix) ? Str(_2.transform) : localString;
        while (papa.type != "svg" && (papa = papa.parent())) {
          ms.push(extractTransform(papa));
        }
        i = ms.length;
        while (i--) {
          m.add(ms[i]);
        }
        return {
          string: string2,
          globalMatrix: global,
          totalMatrix: m,
          localMatrix: local,
          diffMatrix: global.clone().add(local.invert()),
          global: global.toTransformString(),
          total: m.toTransformString(),
          local: localString,
          toString: propString
        };
      }
      if (tstr instanceof Snap22.Matrix) {
        this.matrix = tstr;
        this._.transform = tstr.toTransformString();
      } else {
        extractTransform(this, tstr);
      }
      if (this.node) {
        if (this.type == "linearGradient" || this.type == "radialGradient") {
          $(this.node, { gradientTransform: this.matrix });
        } else if (this.type == "pattern") {
          $(this.node, { patternTransform: this.matrix });
        } else {
          $(this.node, { transform: this.matrix });
        }
      }
      return this;
    };
    elproto.parent = function() {
      return wrap2(this.node.parentNode);
    };
    elproto.append = elproto.add = function(el) {
      if (el) {
        if (el.type == "set") {
          var it = this;
          el.forEach(function(el2) {
            it.add(el2);
          });
          return this;
        }
        el = wrap2(el);
        this.node.appendChild(el.node);
        el.paper = this.paper;
      }
      return this;
    };
    elproto.appendTo = function(el) {
      if (el) {
        el = wrap2(el);
        el.append(this);
      }
      return this;
    };
    elproto.prepend = function(el) {
      if (el) {
        if (el.type == "set") {
          var it = this, first2;
          el.forEach(function(el2) {
            if (first2) {
              first2.after(el2);
            } else {
              it.prepend(el2);
            }
            first2 = el2;
          });
          return this;
        }
        el = wrap2(el);
        var parent = el.parent();
        this.node.insertBefore(el.node, this.node.firstChild);
        this.add && this.add();
        el.paper = this.paper;
        this.parent() && this.parent().add();
        parent && parent.add();
      }
      return this;
    };
    elproto.prependTo = function(el) {
      el = wrap2(el);
      el.prepend(this);
      return this;
    };
    elproto.before = function(el) {
      if (el.type == "set") {
        var it = this;
        el.forEach(function(el2) {
          var parent2 = el2.parent();
          it.node.parentNode.insertBefore(el2.node, it.node);
          parent2 && parent2.add();
        });
        this.parent().add();
        return this;
      }
      el = wrap2(el);
      var parent = el.parent();
      this.node.parentNode.insertBefore(el.node, this.node);
      this.parent() && this.parent().add();
      parent && parent.add();
      el.paper = this.paper;
      return this;
    };
    elproto.after = function(el) {
      el = wrap2(el);
      var parent = el.parent();
      if (this.node.nextSibling) {
        this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
      } else {
        this.node.parentNode.appendChild(el.node);
      }
      this.parent() && this.parent().add();
      parent && parent.add();
      el.paper = this.paper;
      return this;
    };
    elproto.insertBefore = function(el) {
      el = wrap2(el);
      var parent = this.parent();
      el.node.parentNode.insertBefore(this.node, el.node);
      this.paper = el.paper;
      parent && parent.add();
      el.parent() && el.parent().add();
      return this;
    };
    elproto.insertAfter = function(el) {
      el = wrap2(el);
      var parent = this.parent();
      el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
      this.paper = el.paper;
      parent && parent.add();
      el.parent() && el.parent().add();
      return this;
    };
    elproto.remove = function() {
      var parent = this.parent();
      this.node.parentNode && this.node.parentNode.removeChild(this.node);
      delete this.paper;
      this.removed = true;
      parent && parent.add();
      return this;
    };
    elproto.select = function(query) {
      return wrap2(this.node.querySelector(query));
    };
    elproto.selectAll = function(query) {
      var nodelist2 = this.node.querySelectorAll(query), set = (Snap22.set || Array)();
      for (var i = 0; i < nodelist2.length; i++) {
        set.push(wrap2(nodelist2[i]));
      }
      return set;
    };
    elproto.asPX = function(attr, value) {
      if (value == null) {
        value = this.attr(attr);
      }
      return +unit2px(this, attr, value);
    };
    elproto.use = function() {
      var use, id = this.node.id;
      if (!id) {
        id = this.id;
        $(this.node, {
          id
        });
      }
      if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
        use = make(this.type, this.node.parentNode);
      } else {
        use = make("use", this.node.parentNode);
      }
      $(use.node, {
        "xlink:href": "#" + id
      });
      use.original = this;
      return use;
    };
    function fixids(el) {
      var els = el.selectAll("*"), it, url = /^\s*url\(("|'|)(.*)\1\)\s*$/, ids = [], uses = {};
      function urltest(it2, name) {
        var val = $(it2.node, name);
        val = val && val.match(url);
        val = val && val[2];
        if (val && val.charAt() == "#") {
          val = val.substring(1);
        } else {
          return;
        }
        if (val) {
          uses[val] = (uses[val] || []).concat(function(id) {
            var attr = {};
            attr[name] = Snap22.url(id);
            $(it2.node, attr);
          });
        }
      }
      function linktest(it2) {
        var val = $(it2.node, "xlink:href");
        if (val && val.charAt() == "#") {
          val = val.substring(1);
        } else {
          return;
        }
        if (val) {
          uses[val] = (uses[val] || []).concat(function(id) {
            it2.attr("xlink:href", "#" + id);
          });
        }
      }
      for (var i = 0, ii = els.length; i < ii; i++) {
        it = els[i];
        urltest(it, "fill");
        urltest(it, "stroke");
        urltest(it, "filter");
        urltest(it, "mask");
        urltest(it, "clip-path");
        linktest(it);
        var oldid = $(it.node, "id");
        if (oldid) {
          $(it.node, { id: it.id });
          ids.push({
            old: oldid,
            id: it.id
          });
        }
      }
      for (i = 0, ii = ids.length; i < ii; i++) {
        var fs = uses[ids[i].old];
        if (fs) {
          for (var j = 0, jj = fs.length; j < jj; j++) {
            fs[j](ids[i].id);
          }
        }
      }
    }
    elproto.clone = function() {
      var clone2 = wrap2(this.node.cloneNode(true));
      if ($(clone2.node, "id")) {
        $(clone2.node, { id: clone2.id });
      }
      fixids(clone2);
      clone2.insertAfter(this);
      return clone2;
    };
    elproto.toDefs = function() {
      var defs = getSomeDefs(this);
      defs.appendChild(this.node);
      return this;
    };
    elproto.pattern = elproto.toPattern = function(x, y, width, height) {
      var p = make("pattern", getSomeDefs(this));
      if (x == null) {
        x = this.getBBox();
      }
      if (is(x, "object") && "x" in x) {
        y = x.y;
        width = x.width;
        height = x.height;
        x = x.x;
      }
      $(p.node, {
        x,
        y,
        width,
        height,
        patternUnits: "userSpaceOnUse",
        id: p.id,
        viewBox: [x, y, width, height].join(" ")
      });
      p.node.appendChild(this.node);
      return p;
    };
    elproto.marker = function(x, y, width, height, refX, refY) {
      var p = make("marker", getSomeDefs(this));
      if (x == null) {
        x = this.getBBox();
      }
      if (is(x, "object") && "x" in x) {
        y = x.y;
        width = x.width;
        height = x.height;
        refX = x.refX || x.cx;
        refY = x.refY || x.cy;
        x = x.x;
      }
      $(p.node, {
        viewBox: [x, y, width, height].join(" "),
        markerWidth: width,
        markerHeight: height,
        orient: "auto",
        refX: refX || 0,
        refY: refY || 0,
        id: p.id
      });
      p.node.appendChild(this.node);
      return p;
    };
    var eldata = {};
    elproto.data = function(key, value) {
      var data = eldata[this.id] = eldata[this.id] || {};
      if (arguments.length == 0) {
        eve("snap.data.get." + this.id, this, data, null);
        return data;
      }
      if (arguments.length == 1) {
        if (Snap22.is(key, "object")) {
          for (var i in key) if (key[has2](i)) {
            this.data(i, key[i]);
          }
          return this;
        }
        eve("snap.data.get." + this.id, this, data[key], key);
        return data[key];
      }
      data[key] = value;
      eve("snap.data.set." + this.id, this, value, key);
      return this;
    };
    elproto.removeData = function(key) {
      if (key == null) {
        eldata[this.id] = {};
      } else {
        eldata[this.id] && delete eldata[this.id][key];
      }
      return this;
    };
    elproto.outerSVG = elproto.toString = toString2(1);
    elproto.innerSVG = toString2();
    function toString2(type) {
      return function() {
        var res2 = type ? "<" + this.type : "", attr = this.node.attributes, chld = this.node.childNodes;
        if (type) {
          for (var i = 0, ii = attr.length; i < ii; i++) {
            res2 += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
          }
        }
        if (chld.length) {
          type && (res2 += ">");
          for (i = 0, ii = chld.length; i < ii; i++) {
            if (chld[i].nodeType == 3) {
              res2 += chld[i].nodeValue;
            } else if (chld[i].nodeType == 1) {
              res2 += wrap2(chld[i]).toString();
            }
          }
          type && (res2 += "</" + this.type + ">");
        } else {
          type && (res2 += "/>");
        }
        return res2;
      };
    }
    elproto.toDataURL = function() {
      if (window && window.btoa) {
        var bb = this.getBBox(), svg = Snap22.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
          x: +bb.x.toFixed(3),
          y: +bb.y.toFixed(3),
          width: +bb.width.toFixed(3),
          height: +bb.height.toFixed(3),
          contents: this.outerSVG()
        });
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
      }
    };
    Fragment.prototype.select = elproto.select;
    Fragment.prototype.selectAll = elproto.selectAll;
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString, Str = String, math2 = Math, E = "";
    function Matrix(a, b, c, d, e, f) {
      if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
        this.a = a.a;
        this.b = a.b;
        this.c = a.c;
        this.d = a.d;
        this.e = a.e;
        this.f = a.f;
        return;
      }
      if (a != null) {
        this.a = +a;
        this.b = +b;
        this.c = +c;
        this.d = +d;
        this.e = +e;
        this.f = +f;
      } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
      }
    }
    (function(matrixproto) {
      matrixproto.add = function(a, b, c, d, e, f) {
        if (a && a instanceof Matrix) {
          return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
        }
        var aNew = a * this.a + b * this.c, bNew = a * this.b + b * this.d;
        this.e += e * this.a + f * this.c;
        this.f += e * this.b + f * this.d;
        this.c = c * this.a + d * this.c;
        this.d = c * this.b + d * this.d;
        this.a = aNew;
        this.b = bNew;
        return this;
      };
      Matrix.prototype.multLeft = function(a, b, c, d, e, f) {
        if (a && a instanceof Matrix) {
          return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
        }
        var aNew = a * this.a + c * this.b, cNew = a * this.c + c * this.d, eNew = a * this.e + c * this.f + e;
        this.b = b * this.a + d * this.b;
        this.d = b * this.c + d * this.d;
        this.f = b * this.e + d * this.f + f;
        this.a = aNew;
        this.c = cNew;
        this.e = eNew;
        return this;
      };
      matrixproto.invert = function() {
        var me = this, x = me.a * me.d - me.b * me.c;
        return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
      };
      matrixproto.clone = function() {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
      };
      matrixproto.translate = function(x, y) {
        this.e += x * this.a + y * this.c;
        this.f += x * this.b + y * this.d;
        return this;
      };
      matrixproto.scale = function(x, y, cx, cy) {
        y == null && (y = x);
        (cx || cy) && this.translate(cx, cy);
        this.a *= x;
        this.b *= x;
        this.c *= y;
        this.d *= y;
        (cx || cy) && this.translate(-cx, -cy);
        return this;
      };
      matrixproto.rotate = function(a, x, y) {
        a = Snap22.rad(a);
        x = x || 0;
        y = y || 0;
        var cos = +math2.cos(a).toFixed(9), sin = +math2.sin(a).toFixed(9);
        this.add(cos, sin, -sin, cos, x, y);
        return this.add(1, 0, 0, 1, -x, -y);
      };
      matrixproto.skewX = function(x) {
        return this.skew(x, 0);
      };
      matrixproto.skewY = function(y) {
        return this.skew(0, y);
      };
      matrixproto.skew = function(x, y) {
        x = x || 0;
        y = y || 0;
        x = Snap22.rad(x);
        y = Snap22.rad(y);
        var c = math2.tan(x).toFixed(9);
        var b = math2.tan(y).toFixed(9);
        return this.add(1, b, c, 1, 0, 0);
      };
      matrixproto.x = function(x, y) {
        return x * this.a + y * this.c + this.e;
      };
      matrixproto.y = function(x, y) {
        return x * this.b + y * this.d + this.f;
      };
      matrixproto.get = function(i) {
        return +this[Str.fromCharCode(97 + i)].toFixed(4);
      };
      matrixproto.toString = function() {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
      };
      matrixproto.offset = function() {
        return [this.e.toFixed(4), this.f.toFixed(4)];
      };
      function norm(a) {
        return a[0] * a[0] + a[1] * a[1];
      }
      function normalize(a) {
        var mag = math2.sqrt(norm(a));
        a[0] && (a[0] /= mag);
        a[1] && (a[1] /= mag);
      }
      matrixproto.determinant = function() {
        return this.a * this.d - this.b * this.c;
      };
      matrixproto.split = function() {
        var out = {};
        out.dx = this.e;
        out.dy = this.f;
        var row = [[this.a, this.b], [this.c, this.d]];
        out.scalex = math2.sqrt(norm(row[0]));
        normalize(row[0]);
        out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
        row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
        out.scaley = math2.sqrt(norm(row[1]));
        normalize(row[1]);
        out.shear /= out.scaley;
        if (this.determinant() < 0) {
          out.scalex = -out.scalex;
        }
        var sin = row[0][1], cos = row[1][1];
        if (cos < 0) {
          out.rotate = Snap22.deg(math2.acos(cos));
          if (sin < 0) {
            out.rotate = 360 - out.rotate;
          }
        } else {
          out.rotate = Snap22.deg(math2.asin(sin));
        }
        out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
        out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
        out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
        return out;
      };
      matrixproto.toTransformString = function(shorter) {
        var s = shorter || this.split();
        if (!+s.shear.toFixed(9)) {
          s.scalex = +s.scalex.toFixed(4);
          s.scaley = +s.scaley.toFixed(4);
          s.rotate = +s.rotate.toFixed(4);
          return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
        } else {
          return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
        }
      };
    })(Matrix.prototype);
    Snap22.Matrix = Matrix;
    Snap22.matrix = function(a, b, c, d, e, f) {
      return new Matrix(a, b, c, d, e, f);
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var make = Snap22._.make, wrap2 = Snap22._.wrap, is = Snap22.is, getSomeDefs = Snap22._.getSomeDefs, reURLValue = /^url\((['"]?)([^)]+)\1\)$/, $ = Snap22._.$, URL = Snap22.url, Str = String, separator = Snap22._.separator, E = "";
    Snap22.deurl = function(value) {
      var res2 = String(value).match(reURLValue);
      return res2 ? res2[2] : value;
    };
    eve.on("snap.util.attr.mask", function(value) {
      if (value instanceof Element || value instanceof Fragment) {
        eve.stop();
        if (value instanceof Fragment && value.node.childNodes.length == 1) {
          value = value.node.firstChild;
          getSomeDefs(this).appendChild(value);
          value = wrap2(value);
        }
        if (value.type == "mask") {
          var mask = value;
        } else {
          mask = make("mask", getSomeDefs(this));
          mask.node.appendChild(value.node);
        }
        !mask.node.id && $(mask.node, {
          id: mask.id
        });
        $(this.node, {
          mask: URL(mask.id)
        });
      }
    });
    (function(clipIt) {
      eve.on("snap.util.attr.clip", clipIt);
      eve.on("snap.util.attr.clip-path", clipIt);
      eve.on("snap.util.attr.clipPath", clipIt);
    })(function(value) {
      if (value instanceof Element || value instanceof Fragment) {
        eve.stop();
        var clip, node = value.node;
        while (node) {
          if (node.nodeName === "clipPath") {
            clip = new Element(node);
            break;
          }
          if (node.nodeName === "svg") {
            clip = void 0;
            break;
          }
          node = node.parentNode;
        }
        if (!clip) {
          clip = make("clipPath", getSomeDefs(this));
          clip.node.appendChild(value.node);
          !clip.node.id && $(clip.node, {
            id: clip.id
          });
        }
        $(this.node, {
          "clip-path": URL(clip.node.id || clip.id)
        });
      }
    });
    function fillStroke(name) {
      return function(value) {
        eve.stop();
        if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
          value = value.node.firstChild;
          getSomeDefs(this).appendChild(value);
          value = wrap2(value);
        }
        if (value instanceof Element) {
          if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
            if (!value.node.id) {
              $(value.node, {
                id: value.id
              });
            }
            var fill = URL(value.node.id);
          } else {
            fill = value.attr(name);
          }
        } else {
          fill = Snap22.color(value);
          if (fill.error) {
            var grad = Snap22(getSomeDefs(this).ownerSVGElement).gradient(value);
            if (grad) {
              if (!grad.node.id) {
                $(grad.node, {
                  id: grad.id
                });
              }
              fill = URL(grad.node.id);
            } else {
              fill = value;
            }
          } else {
            fill = Str(fill);
          }
        }
        var attrs = {};
        attrs[name] = fill;
        $(this.node, attrs);
        this.node.style[name] = E;
      };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string2) {
      string2 = Str(string2);
      var tokens = string2.match(gradrg);
      if (!tokens) {
        return null;
      }
      var type = tokens[1], params = tokens[2], stops = tokens[3];
      params = params.split(/\s*,\s*/).map(function(el) {
        return +el == el ? +el : el;
      });
      if (params.length == 1 && params[0] == 0) {
        params = [];
      }
      stops = stops.split("-");
      stops = stops.map(function(el) {
        el = el.split(":");
        var out = {
          color: el[0]
        };
        if (el[1]) {
          out.offset = parseFloat(el[1]);
        }
        return out;
      });
      var len = stops.length, start = 0, j = 0;
      function seed(i2, end) {
        var step = (end - start) / (i2 - j);
        for (var k = j; k < i2; k++) {
          stops[k].offset = +(+start + step * (k - j)).toFixed(2);
        }
        j = i2;
        start = end;
      }
      len--;
      for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
        seed(i, stops[i].offset);
      }
      stops[len].offset = stops[len].offset || 100;
      seed(len, stops[len].offset);
      return {
        type,
        params,
        stops
      };
    });
    eve.on("snap.util.attr.d", function(value) {
      eve.stop();
      if (is(value, "array") && is(value[0], "array")) {
        value = Snap22.path.toString.call(value);
      }
      value = Str(value);
      if (value.match(/[ruo]/i)) {
        value = Snap22.path.toAbsolute(value);
      }
      $(this.node, { d: value });
    })(-1);
    eve.on("snap.util.attr.#text", function(value) {
      eve.stop();
      value = Str(value);
      var txt = glob.doc.createTextNode(value);
      while (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
      }
      this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function(value) {
      eve.stop();
      this.attr({ d: value });
    })(-1);
    eve.on("snap.util.attr.class", function(value) {
      eve.stop();
      this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function(value) {
      var vb;
      if (is(value, "object") && "x" in value) {
        vb = [value.x, value.y, value.width, value.height].join(" ");
      } else if (is(value, "array")) {
        vb = value.join(" ");
      } else {
        vb = value;
      }
      $(this.node, {
        viewBox: vb
      });
      eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function(value) {
      this.transform(value);
      eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function(value) {
      if (this.type == "rect") {
        eve.stop();
        $(this.node, {
          rx: value,
          ry: value
        });
      }
    })(-1);
    eve.on("snap.util.attr.textpath", function(value) {
      eve.stop();
      if (this.type == "text") {
        var id, tp, node;
        if (!value && this.textPath) {
          tp = this.textPath;
          while (tp.node.firstChild) {
            this.node.appendChild(tp.node.firstChild);
          }
          tp.remove();
          delete this.textPath;
          return;
        }
        if (is(value, "string")) {
          var defs = getSomeDefs(this), path = wrap2(defs.parentNode).path(value);
          defs.appendChild(path.node);
          id = path.id;
          path.attr({ id });
        } else {
          value = wrap2(value);
          if (value instanceof Element) {
            id = value.attr("id");
            if (!id) {
              id = value.id;
              value.attr({ id });
            }
          }
        }
        if (id) {
          tp = this.textPath;
          node = this.node;
          if (tp) {
            tp.attr({ "xlink:href": "#" + id });
          } else {
            tp = $("textPath", {
              "xlink:href": "#" + id
            });
            while (node.firstChild) {
              tp.appendChild(node.firstChild);
            }
            node.appendChild(tp);
            this.textPath = wrap2(tp);
          }
        }
      }
    })(-1);
    eve.on("snap.util.attr.text", function(value) {
      if (this.type == "text") {
        var node = this.node, tuner = function(chunk2) {
          var out = $("tspan");
          if (is(chunk2, "array")) {
            for (var i2 = 0; i2 < chunk2.length; i2++) {
              out.appendChild(tuner(chunk2[i2]));
            }
          } else {
            out.appendChild(glob.doc.createTextNode(chunk2));
          }
          out.normalize && out.normalize();
          return out;
        };
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
        var tuned = tuner(value);
        while (tuned.firstChild) {
          node.appendChild(tuned.firstChild);
        }
      }
      eve.stop();
    })(-1);
    function setFontSize(value) {
      eve.stop();
      if (value == +value) {
        value += "px";
      }
      this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);
    eve.on("snap.util.getattr.transform", function() {
      eve.stop();
      return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function() {
      eve.stop();
      return this.textPath;
    })(-1);
    (function() {
      function getter(end) {
        return function() {
          eve.stop();
          var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
          if (style == "none") {
            return style;
          } else {
            return Snap22(glob.doc.getElementById(style.match(reURLValue)[1]));
          }
        };
      }
      function setter(end) {
        return function(value) {
          eve.stop();
          var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
          if (value == "" || !value) {
            this.node.style[name] = "none";
            return;
          }
          if (value.type == "marker") {
            var id = value.node.id;
            if (!id) {
              $(value.node, { id: value.id });
            }
            this.node.style[name] = URL(id);
            return;
          }
        };
      }
      eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
      eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
      eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
      eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
      eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
      eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
      eve.on("snap.util.attr.marker-end", setter("end"))(-1);
      eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
      eve.on("snap.util.attr.marker-start", setter("start"))(-1);
      eve.on("snap.util.attr.markerStart", setter("start"))(-1);
      eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
      eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    })();
    eve.on("snap.util.getattr.r", function() {
      if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
        eve.stop();
        return $(this.node, "rx");
      }
    })(-1);
    function textExtract(node) {
      var out = [];
      var children = node.childNodes;
      for (var i = 0, ii = children.length; i < ii; i++) {
        var chi = children[i];
        if (chi.nodeType == 3) {
          out.push(chi.nodeValue);
        }
        if (chi.tagName == "tspan") {
          if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
            out.push(chi.firstChild.nodeValue);
          } else {
            out.push(textExtract(chi));
          }
        }
      }
      return out;
    }
    eve.on("snap.util.getattr.text", function() {
      if (this.type == "text" || this.type == "tspan") {
        eve.stop();
        var out = textExtract(this.node);
        return out.length == 1 ? out[0] : out;
      }
    })(-1);
    eve.on("snap.util.getattr.#text", function() {
      return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function(internal) {
      if (internal) {
        return;
      }
      eve.stop();
      var value = eve("snap.util.getattr.fill", this, true).firstDefined();
      return Snap22(Snap22.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function(internal) {
      if (internal) {
        return;
      }
      eve.stop();
      var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
      return Snap22(Snap22.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function() {
      eve.stop();
      var vb = $(this.node, "viewBox");
      if (vb) {
        vb = vb.split(separator);
        return Snap22._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
      } else {
        return;
      }
    })(-1);
    eve.on("snap.util.getattr.points", function() {
      var p = $(this.node, "points");
      eve.stop();
      if (p) {
        return p.split(separator);
      } else {
        return;
      }
    })(-1);
    eve.on("snap.util.getattr.path", function() {
      var p = $(this.node, "d");
      eve.stop();
      return p;
    })(-1);
    eve.on("snap.util.getattr.class", function() {
      return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
      eve.stop();
      return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g, Str = String, elproto = Element.prototype;
    elproto.addClass = function(value) {
      var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
      if (classes.length) {
        j = 0;
        while (clazz = classes[j++]) {
          pos = curClasses.indexOf(clazz);
          if (!~pos) {
            curClasses.push(clazz);
          }
        }
        finalValue = curClasses.join(" ");
        if (className != finalValue) {
          elem.className.baseVal = finalValue;
        }
      }
      return this;
    };
    elproto.removeClass = function(value) {
      var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
      if (curClasses.length) {
        j = 0;
        while (clazz = classes[j++]) {
          pos = curClasses.indexOf(clazz);
          if (~pos) {
            curClasses.splice(pos, 1);
          }
        }
        finalValue = curClasses.join(" ");
        if (className != finalValue) {
          elem.className.baseVal = finalValue;
        }
      }
      return this;
    };
    elproto.hasClass = function(value) {
      var elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [];
      return !!~curClasses.indexOf(value);
    };
    elproto.toggleClass = function(value, flag) {
      if (flag != null) {
        if (flag) {
          return this.addClass(value);
        } else {
          return this.removeClass(value);
        }
      }
      var classes = (value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
      j = 0;
      while (clazz = classes[j++]) {
        pos = curClasses.indexOf(clazz);
        if (~pos) {
          curClasses.splice(pos, 1);
        } else {
          curClasses.push(clazz);
        }
      }
      finalValue = curClasses.join(" ");
      if (className != finalValue) {
        elem.className.baseVal = finalValue;
      }
      return this;
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var operators = {
      "+": function(x, y) {
        return x + y;
      },
      "-": function(x, y) {
        return x - y;
      },
      "/": function(x, y) {
        return x / y;
      },
      "*": function(x, y) {
        return x * y;
      }
    }, Str = String, reUnit = /[a-z]+$/i, reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
      return val;
    }
    function getUnit(unit) {
      return function(val) {
        return +val.toFixed(3) + unit;
      };
    }
    eve.on("snap.util.attr", function(val) {
      var plus = Str(val).match(reAddon);
      if (plus) {
        var evnt = eve.nt(), name = evnt.substring(evnt.lastIndexOf(".") + 1), a = this.attr(name), atr = {};
        eve.stop();
        var unit = plus[3] || "", aUnit = a.match(reUnit), op = operators[plus[1]];
        if (aUnit && aUnit == unit) {
          val = op(parseFloat(a), +plus[2]);
        } else {
          a = this.asPX(name);
          val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
        }
        if (isNaN(a) || isNaN(val)) {
          return;
        }
        atr[name] = val;
        this.attr(atr);
      }
    })(-10);
    eve.on("snap.util.equal", function(name, b) {
      var a = Str(this.attr(name) || ""), bplus = Str(b).match(reAddon);
      if (bplus) {
        eve.stop();
        var unit = bplus[3] || "", aUnit = a.match(reUnit), op = operators[bplus[1]];
        if (aUnit && aUnit == unit) {
          return {
            from: parseFloat(a),
            to: op(parseFloat(a), +bplus[2]),
            f: getUnit(aUnit)
          };
        } else {
          a = this.asPX(name);
          return {
            from: a,
            to: op(a, this.asPX(name, bplus[2] + unit)),
            f: getNumber
          };
        }
      }
    })(-10);
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype, is = Snap22.is;
    proto.rect = function(x, y, w, h, rx, ry) {
      var attr;
      if (ry == null) {
        ry = rx;
      }
      if (is(x, "object") && x == "[object Object]") {
        attr = x;
      } else if (x != null) {
        attr = {
          x,
          y,
          width: w,
          height: h
        };
        if (rx != null) {
          attr.rx = rx;
          attr.ry = ry;
        }
      }
      return this.el("rect", attr);
    };
    proto.circle = function(cx, cy, r) {
      var attr;
      if (is(cx, "object") && cx == "[object Object]") {
        attr = cx;
      } else if (cx != null) {
        attr = {
          cx,
          cy,
          r
        };
      }
      return this.el("circle", attr);
    };
    var preload = /* @__PURE__ */ (function() {
      function onerror() {
        this.parentNode.removeChild(this);
      }
      return function(src, f) {
        var img = glob.doc.createElement("img"), body = glob.doc.body;
        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        img.onload = function() {
          f.call(img);
          img.onload = img.onerror = null;
          body.removeChild(img);
        };
        img.onerror = onerror;
        body.appendChild(img);
        img.src = src;
      };
    })();
    proto.image = function(src, x, y, width, height) {
      var el = this.el("image");
      if (is(src, "object") && "src" in src) {
        el.attr(src);
      } else if (src != null) {
        var set = {
          "xlink:href": src,
          preserveAspectRatio: "none"
        };
        if (x != null && y != null) {
          set.x = x;
          set.y = y;
        }
        if (width != null && height != null) {
          set.width = width;
          set.height = height;
        } else {
          preload(src, function() {
            Snap22._.$(el.node, {
              width: this.offsetWidth,
              height: this.offsetHeight
            });
          });
        }
        Snap22._.$(el.node, set);
      }
      return el;
    };
    proto.ellipse = function(cx, cy, rx, ry) {
      var attr;
      if (is(cx, "object") && cx == "[object Object]") {
        attr = cx;
      } else if (cx != null) {
        attr = {
          cx,
          cy,
          rx,
          ry
        };
      }
      return this.el("ellipse", attr);
    };
    proto.path = function(d) {
      var attr;
      if (is(d, "object") && !is(d, "array")) {
        attr = d;
      } else if (d) {
        attr = { d };
      }
      return this.el("path", attr);
    };
    proto.group = proto.g = function(first2) {
      var el = this.el("g");
      if (arguments.length == 1 && first2 && !first2.type) {
        el.attr(first2);
      } else if (arguments.length) {
        el.add(Array.prototype.slice.call(arguments, 0));
      }
      return el;
    };
    proto.svg = function(x, y, width, height, vbx, vby, vbw, vbh) {
      var attrs = {};
      if (is(x, "object") && y == null) {
        attrs = x;
      } else {
        if (x != null) {
          attrs.x = x;
        }
        if (y != null) {
          attrs.y = y;
        }
        if (width != null) {
          attrs.width = width;
        }
        if (height != null) {
          attrs.height = height;
        }
        if (vbx != null && vby != null && vbw != null && vbh != null) {
          attrs.viewBox = [vbx, vby, vbw, vbh];
        }
      }
      return this.el("svg", attrs);
    };
    proto.mask = function(first2) {
      var el = this.el("mask");
      if (arguments.length == 1 && first2 && !first2.type) {
        el.attr(first2);
      } else if (arguments.length) {
        el.add(Array.prototype.slice.call(arguments, 0));
      }
      return el;
    };
    proto.ptrn = function(x, y, width, height, vx, vy, vw, vh) {
      if (is(x, "object")) {
        var attr = x;
      } else {
        attr = { patternUnits: "userSpaceOnUse" };
        if (x) {
          attr.x = x;
        }
        if (y) {
          attr.y = y;
        }
        if (width != null) {
          attr.width = width;
        }
        if (height != null) {
          attr.height = height;
        }
        if (vx != null && vy != null && vw != null && vh != null) {
          attr.viewBox = [vx, vy, vw, vh];
        } else {
          attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
        }
      }
      return this.el("pattern", attr);
    };
    proto.use = function(id) {
      if (id != null) {
        if (id instanceof Element) {
          if (!id.attr("id")) {
            id.attr({ id: Snap22._.id(id) });
          }
          id = id.attr("id");
        }
        if (String(id).charAt() == "#") {
          id = id.substring(1);
        }
        return this.el("use", { "xlink:href": "#" + id });
      } else {
        return Element.prototype.use.call(this);
      }
    };
    proto.symbol = function(vx, vy, vw, vh) {
      var attr = {};
      if (vx != null && vy != null && vw != null && vh != null) {
        attr.viewBox = [vx, vy, vw, vh];
      }
      return this.el("symbol", attr);
    };
    proto.text = function(x, y, text) {
      var attr = {};
      if (is(x, "object")) {
        attr = x;
      } else if (x != null) {
        attr = {
          x,
          y,
          text: text || ""
        };
      }
      return this.el("text", attr);
    };
    proto.line = function(x1, y1, x2, y2) {
      var attr = {};
      if (is(x1, "object")) {
        attr = x1;
      } else if (x1 != null) {
        attr = {
          x1,
          x2,
          y1,
          y2
        };
      }
      return this.el("line", attr);
    };
    proto.polyline = function(points) {
      if (arguments.length > 1) {
        points = Array.prototype.slice.call(arguments, 0);
      }
      var attr = {};
      if (is(points, "object") && !is(points, "array")) {
        attr = points;
      } else if (points != null) {
        attr = { points };
      }
      return this.el("polyline", attr);
    };
    proto.polygon = function(points) {
      if (arguments.length > 1) {
        points = Array.prototype.slice.call(arguments, 0);
      }
      var attr = {};
      if (is(points, "object") && !is(points, "array")) {
        attr = points;
      } else if (points != null) {
        attr = { points };
      }
      return this.el("polygon", attr);
    };
    (function() {
      var $ = Snap22._.$;
      function Gstops() {
        return this.selectAll("stop");
      }
      function GaddStop(color, offset) {
        var stop = $("stop"), attr = {
          offset: +offset + "%"
        };
        color = Snap22.color(color);
        attr["stop-color"] = color.hex;
        if (color.opacity < 1) {
          attr["stop-opacity"] = color.opacity;
        }
        $(stop, attr);
        var stops = this.stops(), inserted;
        for (var i = 0; i < stops.length; i++) {
          var stopOffset = parseFloat(stops[i].attr("offset"));
          if (stopOffset > offset) {
            this.node.insertBefore(stop, stops[i].node);
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          this.node.appendChild(stop);
        }
        return this;
      }
      function GgetBBox() {
        if (this.type == "linearGradient") {
          var x1 = $(this.node, "x1") || 0, x2 = $(this.node, "x2") || 1, y1 = $(this.node, "y1") || 0, y2 = $(this.node, "y2") || 0;
          return Snap22._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
        } else {
          var cx = this.node.cx || 0.5, cy = this.node.cy || 0.5, r = this.node.r || 0;
          return Snap22._.box(cx - r, cy - r, r * 2, r * 2);
        }
      }
      function GsetStops(str) {
        var grad = str, stops = this.stops();
        if (typeof str == "string") {
          grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
        }
        if (!Snap22.is(grad, "array")) {
          return;
        }
        for (var i = 0; i < stops.length; i++) {
          if (grad[i]) {
            var color = Snap22.color(grad[i].color), attr = { "offset": grad[i].offset + "%" };
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
              attr["stop-opacity"] = color.opacity;
            }
            stops[i].attr(attr);
          } else {
            stops[i].remove();
          }
        }
        for (i = stops.length; i < grad.length; i++) {
          this.addStop(grad[i].color, grad[i].offset);
        }
        return this;
      }
      function gradient(defs, str) {
        var grad = eve("snap.util.grad.parse", null, str).firstDefined(), el;
        if (!grad) {
          return null;
        }
        grad.params.unshift(defs);
        if (grad.type.toLowerCase() == "l") {
          el = gradientLinear.apply(0, grad.params);
        } else {
          el = gradientRadial.apply(0, grad.params);
        }
        if (grad.type != grad.type.toLowerCase()) {
          $(el.node, {
            gradientUnits: "userSpaceOnUse"
          });
        }
        var stops = grad.stops, len = stops.length;
        for (var i = 0; i < len; i++) {
          var stop = stops[i];
          el.addStop(stop.color, stop.offset);
        }
        return el;
      }
      function gradientLinear(defs, x1, y1, x2, y2) {
        var el = Snap22._.make("linearGradient", defs);
        el.stops = Gstops;
        el.addStop = GaddStop;
        el.getBBox = GgetBBox;
        el.setStops = GsetStops;
        if (x1 != null) {
          $(el.node, {
            x1,
            y1,
            x2,
            y2
          });
        }
        return el;
      }
      function gradientRadial(defs, cx, cy, r, fx, fy) {
        var el = Snap22._.make("radialGradient", defs);
        el.stops = Gstops;
        el.addStop = GaddStop;
        el.getBBox = GgetBBox;
        if (cx != null) {
          $(el.node, {
            cx,
            cy,
            r
          });
        }
        if (fx != null && fy != null) {
          $(el.node, {
            fx,
            fy
          });
        }
        return el;
      }
      proto.gradient = function(str) {
        return gradient(this.defs, str);
      };
      proto.gradientLinear = function(x1, y1, x2, y2) {
        return gradientLinear(this.defs, x1, y1, x2, y2);
      };
      proto.gradientRadial = function(cx, cy, r, fx, fy) {
        return gradientRadial(this.defs, cx, cy, r, fx, fy);
      };
      proto.toString = function() {
        var doc = this.node.ownerDocument, f = doc.createDocumentFragment(), d = doc.createElement("div"), svg = this.node.cloneNode(true), res2;
        f.appendChild(d);
        d.appendChild(svg);
        Snap22._.$(svg, { xmlns: "http://www.w3.org/2000/svg" });
        res2 = d.innerHTML;
        f.removeChild(f.firstChild);
        return res2;
      };
      proto.toDataURL = function() {
        if (window && window.btoa) {
          return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
        }
      };
      proto.clear = function() {
        var node = this.node.firstChild, next;
        while (node) {
          next = node.nextSibling;
          if (node.tagName != "defs") {
            node.parentNode.removeChild(node);
          } else {
            proto.clear.call({ node });
          }
          node = next;
        }
      };
    })();
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    var elproto = Element.prototype, is = Snap22.is, clone2 = Snap22._.clone, has2 = "hasOwnProperty", p2s = /,?([a-z]),?/gi, toFloat = parseFloat, math2 = Math, PI = math2.PI, mmin = math2.min, mmax = math2.max, pow = math2.pow, abs = math2.abs;
    function paths(ps) {
      var p = paths.ps = paths.ps || {};
      if (p[ps]) {
        p[ps].sleep = 100;
      } else {
        p[ps] = {
          sleep: 100
        };
      }
      setTimeout(function() {
        for (var key in p) if (p[has2](key) && key != ps) {
          p[key].sleep--;
          !p[key].sleep && delete p[key];
        }
      });
      return p[ps];
    }
    function box(x, y, width, height) {
      if (x == null) {
        x = y = width = height = 0;
      }
      if (y == null) {
        y = x.y;
        width = x.width;
        height = x.height;
        x = x.x;
      }
      return {
        x,
        y,
        width,
        w: width,
        height,
        h: height,
        x2: x + width,
        y2: y + height,
        cx: x + width / 2,
        cy: y + height / 2,
        r1: math2.min(width, height) / 2,
        r2: math2.max(width, height) / 2,
        r0: math2.sqrt(width * width + height * height) / 2,
        path: rectPath(x, y, width, height),
        vb: [x, y, width, height].join(" ")
      };
    }
    function toString2() {
      return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
      var res2 = clone2(pathArray);
      res2.toString = toString2;
      return res2;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
      if (length == null) {
        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
      } else {
        return findDotsAtSegment(
          p1x,
          p1y,
          c1x,
          c1y,
          c2x,
          c2y,
          p2x,
          p2y,
          getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length)
        );
      }
    }
    function getLengthFactory(istotal, subpath) {
      function O(val) {
        return +(+val).toFixed(3);
      }
      return Snap22._.cacher(function(path, length, onlystart) {
        if (path instanceof Element) {
          path = path.attr("d");
        }
        path = path2curve(path);
        var x, y, p, l, sp = "", subpaths = {}, point, len = 0;
        for (var i = 0, ii = path.length; i < ii; i++) {
          p = path[i];
          if (p[0] == "M") {
            x = +p[1];
            y = +p[2];
          } else {
            l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
            if (len + l > length) {
              if (subpath && !subpaths.start) {
                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                sp += [
                  "C" + O(point.start.x),
                  O(point.start.y),
                  O(point.m.x),
                  O(point.m.y),
                  O(point.x),
                  O(point.y)
                ];
                if (onlystart) {
                  return sp;
                }
                subpaths.start = sp;
                sp = [
                  "M" + O(point.x),
                  O(point.y) + "C" + O(point.n.x),
                  O(point.n.y),
                  O(point.end.x),
                  O(point.end.y),
                  O(p[5]),
                  O(p[6])
                ].join();
                len += l;
                x = +p[5];
                y = +p[6];
                continue;
              }
              if (!istotal && !subpath) {
                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                return point;
              }
            }
            len += l;
            x = +p[5];
            y = +p[6];
          }
          sp += p.shift() + p;
        }
        subpaths.end = sp;
        point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
        return point;
      }, null, Snap22._.clone);
    }
    var getTotalLength = getLengthFactory(1), getPointAtLength = getLengthFactory(), getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
      var t1 = 1 - t, t13 = pow(t1, 3), t12 = pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y, mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x), my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y), nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x), ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y), ax = t1 * p1x + t * c1x, ay = t1 * p1y + t * c1y, cx = t1 * c2x + t * p2x, cy = t1 * c2y + t * p2y, alpha = 90 - math2.atan2(mx - nx, my - ny) * 180 / PI;
      return {
        x,
        y,
        m: { x: mx, y: my },
        n: { x: nx, y: ny },
        start: { x: ax, y: ay },
        end: { x: cx, y: cy },
        alpha
      };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
      if (!Snap22.is(p1x, "array")) {
        p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
      }
      var bbox = curveDim.apply(null, p1x);
      return box(
        bbox.min.x,
        bbox.min.y,
        bbox.max.x - bbox.min.x,
        bbox.max.y - bbox.min.y
      );
    }
    function isPointInsideBBox(bbox, x, y) {
      return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
      bbox1 = box(bbox1);
      bbox2 = box(bbox2);
      return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
      var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
      return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
      if (z == null) {
        z = 1;
      }
      z = z > 1 ? 1 : z < 0 ? 0 : z;
      var z2 = z / 2, n = 12, Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], sum = 0;
      for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * math2.sqrt(comb);
      }
      return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
      if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
        return;
      }
      var t = 1, step = t / 2, t2 = t - step, l, e = 0.01;
      l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
      while (abs(l - ll) > e) {
        step /= 2;
        t2 += (l < ll ? 1 : -1) * step;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
      }
      return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
      if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
        return;
      }
      var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (!denominator) {
        return;
      }
      var px = nx / denominator, py = ny / denominator, px2 = +px.toFixed(2), py2 = +py.toFixed(2);
      if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
        return;
      }
      return { x: px, y: py };
    }
    function interHelper(bez1, bez2, justCount) {
      var bbox1 = bezierBBox(bez1), bbox2 = bezierBBox(bez2);
      if (!isBBoxIntersect(bbox1, bbox2)) {
        return justCount ? 0 : [];
      }
      var l1 = bezlen.apply(0, bez1), l2 = bezlen.apply(0, bez2), n1 = ~~(l1 / 8), n2 = ~~(l2 / 8), dots1 = [], dots2 = [], xy = {}, res2 = justCount ? 0 : [];
      for (var i = 0; i < n1 + 1; i++) {
        var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
        dots1.push({ x: p.x, y: p.y, t: i / n1 });
      }
      for (i = 0; i < n2 + 1; i++) {
        p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
        dots2.push({ x: p.x, y: p.y, t: i / n2 });
      }
      for (i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
          var di = dots1[i], di1 = dots1[i + 1], dj = dots2[j], dj1 = dots2[j + 1], ci = abs(di1.x - di.x) < 1e-3 ? "y" : "x", cj = abs(dj1.x - dj.x) < 1e-3 ? "y" : "x", is2 = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
          if (is2) {
            if (xy[is2.x.toFixed(4)] == is2.y.toFixed(4)) {
              continue;
            }
            xy[is2.x.toFixed(4)] = is2.y.toFixed(4);
            var t1 = di.t + abs((is2[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t), t2 = dj.t + abs((is2[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
            if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
              if (justCount) {
                res2++;
              } else {
                res2.push({
                  x: is2.x,
                  y: is2.y,
                  t1,
                  t2
                });
              }
            }
          }
        }
      }
      return res2;
    }
    function pathIntersection(path1, path2) {
      return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
      return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
      path1 = path2curve(path1);
      path2 = path2curve(path2);
      var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res2 = justCount ? 0 : [];
      for (var i = 0, ii = path1.length; i < ii; i++) {
        var pi = path1[i];
        if (pi[0] == "M") {
          x1 = x1m = pi[1];
          y1 = y1m = pi[2];
        } else {
          if (pi[0] == "C") {
            bez1 = [x1, y1].concat(pi.slice(1));
            x1 = bez1[6];
            y1 = bez1[7];
          } else {
            bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
            x1 = x1m;
            y1 = y1m;
          }
          for (var j = 0, jj = path2.length; j < jj; j++) {
            var pj = path2[j];
            if (pj[0] == "M") {
              x2 = x2m = pj[1];
              y2 = y2m = pj[2];
            } else {
              if (pj[0] == "C") {
                bez2 = [x2, y2].concat(pj.slice(1));
                x2 = bez2[6];
                y2 = bez2[7];
              } else {
                bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                x2 = x2m;
                y2 = y2m;
              }
              var intr = interHelper(bez1, bez2, justCount);
              if (justCount) {
                res2 += intr;
              } else {
                for (var k = 0, kk = intr.length; k < kk; k++) {
                  intr[k].segment1 = i;
                  intr[k].segment2 = j;
                  intr[k].bez1 = bez1;
                  intr[k].bez2 = bez2;
                }
                res2 = res2.concat(intr);
              }
            }
          }
        }
      }
      return res2;
    }
    function isPointInsidePath(path, x, y) {
      var bbox = pathBBox(path);
      return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
      var pth = paths(path);
      if (pth.bbox) {
        return clone2(pth.bbox);
      }
      if (!path) {
        return box();
      }
      path = path2curve(path);
      var x = 0, y = 0, X = [], Y = [], p;
      for (var i = 0, ii = path.length; i < ii; i++) {
        p = path[i];
        if (p[0] == "M") {
          x = p[1];
          y = p[2];
          X.push(x);
          Y.push(y);
        } else {
          var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
          X = X.concat(dim.min.x, dim.max.x);
          Y = Y.concat(dim.min.y, dim.max.y);
          x = p[5];
          y = p[6];
        }
      }
      var xmin = mmin.apply(0, X), ymin = mmin.apply(0, Y), xmax = mmax.apply(0, X), ymax = mmax.apply(0, Y), bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
      pth.bbox = clone2(bb);
      return bb;
    }
    function rectPath(x, y, w, h, r) {
      if (r) {
        return [
          ["M", +x + +r, y],
          ["l", w - r * 2, 0],
          ["a", r, r, 0, 0, 1, r, r],
          ["l", 0, h - r * 2],
          ["a", r, r, 0, 0, 1, -r, r],
          ["l", r * 2 - w, 0],
          ["a", r, r, 0, 0, 1, -r, -r],
          ["l", 0, r * 2 - h],
          ["a", r, r, 0, 0, 1, r, -r],
          ["z"]
        ];
      }
      var res2 = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
      res2.toString = toString2;
      return res2;
    }
    function ellipsePath(x, y, rx, ry, a) {
      if (a == null && ry == null) {
        ry = rx;
      }
      x = +x;
      y = +y;
      rx = +rx;
      ry = +ry;
      if (a != null) {
        var rad = Math.PI / 180, x1 = x + rx * Math.cos(-ry * rad), x2 = x + rx * Math.cos(-a * rad), y1 = y + rx * Math.sin(-ry * rad), y2 = y + rx * Math.sin(-a * rad), res2 = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
      } else {
        res2 = [
          ["M", x, y],
          ["m", 0, -ry],
          ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
          ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
          ["z"]
        ];
      }
      res2.toString = toString2;
      return res2;
    }
    var unit2px = Snap22._unit2px, getPath = {
      path: function(el) {
        return el.attr("path");
      },
      circle: function(el) {
        var attr = unit2px(el);
        return ellipsePath(attr.cx, attr.cy, attr.r);
      },
      ellipse: function(el) {
        var attr = unit2px(el);
        return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
      },
      rect: function(el) {
        var attr = unit2px(el);
        return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
      },
      image: function(el) {
        var attr = unit2px(el);
        return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
      },
      line: function(el) {
        return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
      },
      polyline: function(el) {
        return "M" + el.attr("points");
      },
      polygon: function(el) {
        return "M" + el.attr("points") + "z";
      },
      deflt: function(el) {
        var bbox = el.node.getBBox();
        return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
      }
    };
    function pathToRelative(pathArray) {
      var pth = paths(pathArray), lowerCase = String.prototype.toLowerCase;
      if (pth.rel) {
        return pathClone(pth.rel);
      }
      if (!Snap22.is(pathArray, "array") || !Snap22.is(pathArray && pathArray[0], "array")) {
        pathArray = Snap22.parsePathString(pathArray);
      }
      var res2 = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
      if (pathArray[0][0] == "M") {
        x = pathArray[0][1];
        y = pathArray[0][2];
        mx = x;
        my = y;
        start++;
        res2.push(["M", x, y]);
      }
      for (var i = start, ii = pathArray.length; i < ii; i++) {
        var r = res2[i] = [], pa = pathArray[i];
        if (pa[0] != lowerCase.call(pa[0])) {
          r[0] = lowerCase.call(pa[0]);
          switch (r[0]) {
            case "a":
              r[1] = pa[1];
              r[2] = pa[2];
              r[3] = pa[3];
              r[4] = pa[4];
              r[5] = pa[5];
              r[6] = +(pa[6] - x).toFixed(3);
              r[7] = +(pa[7] - y).toFixed(3);
              break;
            case "v":
              r[1] = +(pa[1] - y).toFixed(3);
              break;
            case "m":
              mx = pa[1];
              my = pa[2];
            default:
              for (var j = 1, jj = pa.length; j < jj; j++) {
                r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
              }
          }
        } else {
          r = res2[i] = [];
          if (pa[0] == "m") {
            mx = pa[1] + x;
            my = pa[2] + y;
          }
          for (var k = 0, kk = pa.length; k < kk; k++) {
            res2[i][k] = pa[k];
          }
        }
        var len = res2[i].length;
        switch (res2[i][0]) {
          case "z":
            x = mx;
            y = my;
            break;
          case "h":
            x += +res2[i][len - 1];
            break;
          case "v":
            y += +res2[i][len - 1];
            break;
          default:
            x += +res2[i][len - 2];
            y += +res2[i][len - 1];
        }
      }
      res2.toString = toString2;
      pth.rel = pathClone(res2);
      return res2;
    }
    function pathToAbsolute(pathArray) {
      var pth = paths(pathArray);
      if (pth.abs) {
        return pathClone(pth.abs);
      }
      if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
        pathArray = Snap22.parsePathString(pathArray);
      }
      if (!pathArray || !pathArray.length) {
        return [["M", 0, 0]];
      }
      var res2 = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
      if (pathArray[0][0] == "M") {
        x = +pathArray[0][1];
        y = +pathArray[0][2];
        mx = x;
        my = y;
        start++;
        res2[0] = ["M", x, y];
      }
      var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
      for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
        res2.push(r = []);
        pa = pathArray[i];
        pa0 = pa[0];
        if (pa0 != pa0.toUpperCase()) {
          r[0] = pa0.toUpperCase();
          switch (r[0]) {
            case "A":
              r[1] = pa[1];
              r[2] = pa[2];
              r[3] = pa[3];
              r[4] = pa[4];
              r[5] = pa[5];
              r[6] = +pa[6] + x;
              r[7] = +pa[7] + y;
              break;
            case "V":
              r[1] = +pa[1] + y;
              break;
            case "H":
              r[1] = +pa[1] + x;
              break;
            case "R":
              var dots = [x, y].concat(pa.slice(1));
              for (var j = 2, jj = dots.length; j < jj; j++) {
                dots[j] = +dots[j] + x;
                dots[++j] = +dots[j] + y;
              }
              res2.pop();
              res2 = res2.concat(catmullRom2bezier(dots, crz));
              break;
            case "O":
              res2.pop();
              dots = ellipsePath(x, y, pa[1], pa[2]);
              dots.push(dots[0]);
              res2 = res2.concat(dots);
              break;
            case "U":
              res2.pop();
              res2 = res2.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
              r = ["U"].concat(res2[res2.length - 1].slice(-2));
              break;
            case "M":
              mx = +pa[1] + x;
              my = +pa[2] + y;
            default:
              for (j = 1, jj = pa.length; j < jj; j++) {
                r[j] = +pa[j] + (j % 2 ? x : y);
              }
          }
        } else if (pa0 == "R") {
          dots = [x, y].concat(pa.slice(1));
          res2.pop();
          res2 = res2.concat(catmullRom2bezier(dots, crz));
          r = ["R"].concat(pa.slice(-2));
        } else if (pa0 == "O") {
          res2.pop();
          dots = ellipsePath(x, y, pa[1], pa[2]);
          dots.push(dots[0]);
          res2 = res2.concat(dots);
        } else if (pa0 == "U") {
          res2.pop();
          res2 = res2.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
          r = ["U"].concat(res2[res2.length - 1].slice(-2));
        } else {
          for (var k = 0, kk = pa.length; k < kk; k++) {
            r[k] = pa[k];
          }
        }
        pa0 = pa0.toUpperCase();
        if (pa0 != "O") {
          switch (r[0]) {
            case "Z":
              x = +mx;
              y = +my;
              break;
            case "H":
              x = r[1];
              break;
            case "V":
              y = r[1];
              break;
            case "M":
              mx = r[r.length - 2];
              my = r[r.length - 1];
            default:
              x = r[r.length - 2];
              y = r[r.length - 1];
          }
        }
      }
      res2.toString = toString2;
      pth.abs = pathClone(res2);
      return res2;
    }
    function l2c(x1, y1, x2, y2) {
      return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
      var _13 = 1 / 3, _23 = 2 / 3;
      return [
        _13 * x1 + _23 * ax,
        _13 * y1 + _23 * ay,
        _13 * x2 + _23 * ax,
        _13 * y2 + _23 * ay,
        x2,
        y2
      ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
      var _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res2 = [], xy, rotate = Snap22._.cacher(function(x3, y3, rad2) {
        var X = x3 * math2.cos(rad2) - y3 * math2.sin(rad2), Y = x3 * math2.sin(rad2) + y3 * math2.cos(rad2);
        return { x: X, y: Y };
      });
      if (!rx || !ry) {
        return [x1, y1, x2, y2, x2, y2];
      }
      if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var x = (x1 - x2) / 2, y = (y1 - y2) / 2;
        var h = x * x / (rx * rx) + y * y / (ry * ry);
        if (h > 1) {
          h = math2.sqrt(h);
          rx = h * rx;
          ry = h * ry;
        }
        var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) * math2.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))), cx = k * rx * y / ry + (x1 + x2) / 2, cy = k * -ry * x / rx + (y1 + y2) / 2, f1 = math2.asin(((y1 - cy) / ry).toFixed(9)), f2 = math2.asin(((y2 - cy) / ry).toFixed(9));
        f1 = x1 < cx ? PI - f1 : f1;
        f2 = x2 < cx ? PI - f2 : f2;
        f1 < 0 && (f1 = PI * 2 + f1);
        f2 < 0 && (f2 = PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
          f1 = f1 - PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
          f2 = f2 - PI * 2;
        }
      } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
      }
      var df = f2 - f1;
      if (abs(df) > _120) {
        var f2old = f2, x2old = x2, y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * math2.cos(f2);
        y2 = cy + ry * math2.sin(f2);
        res2 = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
      }
      df = f2 - f1;
      var c1 = math2.cos(f1), s1 = math2.sin(f1), c2 = math2.cos(f2), s2 = math2.sin(f2), t = math2.tan(df / 4), hx = 4 / 3 * rx * t, hy = 4 / 3 * ry * t, m1 = [x1, y1], m2 = [x1 + hx * s1, y1 - hy * c1], m3 = [x2 + hx * s2, y2 - hy * c2], m4 = [x2, y2];
      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];
      if (recursive) {
        return [m2, m3, m4].concat(res2);
      } else {
        res2 = [m2, m3, m4].concat(res2).join().split(",");
        var newres = [];
        for (var i = 0, ii = res2.length; i < ii; i++) {
          newres[i] = i % 2 ? rotate(res2[i - 1], res2[i], rad).y : rotate(res2[i], res2[i + 1], rad).x;
        }
        return newres;
      }
    }
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
      var tvalues = [], bounds = [[], []], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
      for (var i = 0; i < 2; ++i) {
        if (i == 0) {
          b = 6 * x0 - 12 * x1 + 6 * x2;
          a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
          c = 3 * x1 - 3 * x0;
        } else {
          b = 6 * y0 - 12 * y1 + 6 * y2;
          a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
          c = 3 * y1 - 3 * y0;
        }
        if (abs(a) < 1e-12) {
          if (abs(b) < 1e-12) {
            continue;
          }
          t = -c / b;
          if (0 < t && t < 1) {
            tvalues.push(t);
          }
          continue;
        }
        b2ac = b * b - 4 * c * a;
        sqrtb2ac = math2.sqrt(b2ac);
        if (b2ac < 0) {
          continue;
        }
        t1 = (-b + sqrtb2ac) / (2 * a);
        if (0 < t1 && t1 < 1) {
          tvalues.push(t1);
        }
        t2 = (-b - sqrtb2ac) / (2 * a);
        if (0 < t2 && t2 < 1) {
          tvalues.push(t2);
        }
      }
      var j = tvalues.length, jlen = j, mt;
      while (j--) {
        t = tvalues[j];
        mt = 1 - t;
        bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
        bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
      }
      bounds[0][jlen] = x0;
      bounds[1][jlen] = y0;
      bounds[0][jlen + 1] = x3;
      bounds[1][jlen + 1] = y3;
      bounds[0].length = bounds[1].length = jlen + 2;
      return {
        min: { x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1]) },
        max: { x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1]) }
      };
    }
    function path2curve(path, path2) {
      var pth = !path2 && paths(path);
      if (!path2 && pth.curve) {
        return pathClone(pth.curve);
      }
      var p = pathToAbsolute(path), p2 = path2 && pathToAbsolute(path2), attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, processPath = function(path3, d, pcom2) {
        var nx, ny;
        if (!path3) {
          return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
        }
        !(path3[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
        switch (path3[0]) {
          case "M":
            d.X = path3[1];
            d.Y = path3[2];
            break;
          case "A":
            path3 = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path3.slice(1))));
            break;
          case "S":
            if (pcom2 == "C" || pcom2 == "S") {
              nx = d.x * 2 - d.bx;
              ny = d.y * 2 - d.by;
            } else {
              nx = d.x;
              ny = d.y;
            }
            path3 = ["C", nx, ny].concat(path3.slice(1));
            break;
          case "T":
            if (pcom2 == "Q" || pcom2 == "T") {
              d.qx = d.x * 2 - d.qx;
              d.qy = d.y * 2 - d.qy;
            } else {
              d.qx = d.x;
              d.qy = d.y;
            }
            path3 = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path3[1], path3[2]));
            break;
          case "Q":
            d.qx = path3[1];
            d.qy = path3[2];
            path3 = ["C"].concat(q2c(d.x, d.y, path3[1], path3[2], path3[3], path3[4]));
            break;
          case "L":
            path3 = ["C"].concat(l2c(d.x, d.y, path3[1], path3[2]));
            break;
          case "H":
            path3 = ["C"].concat(l2c(d.x, d.y, path3[1], d.y));
            break;
          case "V":
            path3 = ["C"].concat(l2c(d.x, d.y, d.x, path3[1]));
            break;
          case "Z":
            path3 = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
            break;
        }
        return path3;
      }, fixArc = function(pp, i2) {
        if (pp[i2].length > 7) {
          pp[i2].shift();
          var pi = pp[i2];
          while (pi.length) {
            pcoms1[i2] = "A";
            p2 && (pcoms2[i2] = "A");
            pp.splice(i2++, 0, ["C"].concat(pi.splice(0, 6)));
          }
          pp.splice(i2, 1);
          ii = mmax(p.length, p2 && p2.length || 0);
        }
      }, fixM = function(path1, path22, a1, a2, i2) {
        if (path1 && path22 && path1[i2][0] == "M" && path22[i2][0] != "M") {
          path22.splice(i2, 0, ["M", a2.x, a2.y]);
          a1.bx = 0;
          a1.by = 0;
          a1.x = path1[i2][1];
          a1.y = path1[i2][2];
          ii = mmax(p.length, p2 && p2.length || 0);
        }
      }, pcoms1 = [], pcoms2 = [], pfirst = "", pcom = "";
      for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
        p[i] && (pfirst = p[i][0]);
        if (pfirst != "C") {
          pcoms1[i] = pfirst;
          i && (pcom = pcoms1[i - 1]);
        }
        p[i] = processPath(p[i], attrs, pcom);
        if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C";
        fixArc(p, i);
        if (p2) {
          p2[i] && (pfirst = p2[i][0]);
          if (pfirst != "C") {
            pcoms2[i] = pfirst;
            i && (pcom = pcoms2[i - 1]);
          }
          p2[i] = processPath(p2[i], attrs2, pcom);
          if (pcoms2[i] != "A" && pfirst == "C") {
            pcoms2[i] = "C";
          }
          fixArc(p2, i);
        }
        fixM(p, p2, attrs, attrs2, i);
        fixM(p2, p, attrs2, attrs, i);
        var seg = p[i], seg2 = p2 && p2[i], seglen = seg.length, seg2len = p2 && seg2.length;
        attrs.x = seg[seglen - 2];
        attrs.y = seg[seglen - 1];
        attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
        attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
        attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
        attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
        attrs2.x = p2 && seg2[seg2len - 2];
        attrs2.y = p2 && seg2[seg2len - 1];
      }
      if (!p2) {
        pth.curve = pathClone(p);
      }
      return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
      if (!matrix) {
        return path;
      }
      var x, y, i, j, ii, jj, pathi;
      path = path2curve(path);
      for (i = 0, ii = path.length; i < ii; i++) {
        pathi = path[i];
        for (j = 1, jj = pathi.length; j < jj; j += 2) {
          x = matrix.x(pathi[j], pathi[j + 1]);
          y = matrix.y(pathi[j], pathi[j + 1]);
          pathi[j] = x;
          pathi[j + 1] = y;
        }
      }
      return path;
    }
    function catmullRom2bezier(crp, z) {
      var d = [];
      for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
        var p = [
          { x: +crp[i - 2], y: +crp[i - 1] },
          { x: +crp[i], y: +crp[i + 1] },
          { x: +crp[i + 2], y: +crp[i + 3] },
          { x: +crp[i + 4], y: +crp[i + 5] }
        ];
        if (z) {
          if (!i) {
            p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
          } else if (iLen - 4 == i) {
            p[3] = { x: +crp[0], y: +crp[1] };
          } else if (iLen - 2 == i) {
            p[2] = { x: +crp[0], y: +crp[1] };
            p[3] = { x: +crp[2], y: +crp[3] };
          }
        } else {
          if (iLen - 4 == i) {
            p[3] = p[2];
          } else if (!i) {
            p[0] = { x: +crp[i], y: +crp[i + 1] };
          }
        }
        d.push([
          "C",
          (-p[0].x + 6 * p[1].x + p[2].x) / 6,
          (-p[0].y + 6 * p[1].y + p[2].y) / 6,
          (p[1].x + 6 * p[2].x - p[3].x) / 6,
          (p[1].y + 6 * p[2].y - p[3].y) / 6,
          p[2].x,
          p[2].y
        ]);
      }
      return d;
    }
    Snap22.path = paths;
    Snap22.path.getTotalLength = getTotalLength;
    Snap22.path.getPointAtLength = getPointAtLength;
    Snap22.path.getSubpath = function(path, from, to) {
      if (this.getTotalLength(path) - to < 1e-6) {
        return getSubpathsAtLength(path, from).end;
      }
      var a = getSubpathsAtLength(path, to, 1);
      return from ? getSubpathsAtLength(a, from).end : a;
    };
    elproto.getTotalLength = function() {
      if (this.node.getTotalLength) {
        return this.node.getTotalLength();
      }
    };
    elproto.getPointAtLength = function(length) {
      return getPointAtLength(this.attr("d"), length);
    };
    elproto.getSubpath = function(from, to) {
      return Snap22.path.getSubpath(this.attr("d"), from, to);
    };
    Snap22._.box = box;
    Snap22.path.findDotsAtSegment = findDotsAtSegment;
    Snap22.path.bezierBBox = bezierBBox;
    Snap22.path.isPointInsideBBox = isPointInsideBBox;
    Snap22.closest = function(x, y, X, Y) {
      var r = 100, b = box(x - r / 2, y - r / 2, r, r), inside = [], getter = X[0].hasOwnProperty("x") ? function(i2) {
        return {
          x: X[i2].x,
          y: X[i2].y
        };
      } : function(i2) {
        return {
          x: X[i2],
          y: Y[i2]
        };
      }, found = 0;
      while (r <= 1e6 && !found) {
        for (var i = 0, ii = X.length; i < ii; i++) {
          var xy = getter(i);
          if (isPointInsideBBox(b, xy.x, xy.y)) {
            found++;
            inside.push(xy);
            break;
          }
        }
        if (!found) {
          r *= 2;
          b = box(x - r / 2, y - r / 2, r, r);
        }
      }
      if (r == 1e6) {
        return;
      }
      var len = Infinity, res2;
      for (i = 0, ii = inside.length; i < ii; i++) {
        var l = Snap22.len(x, y, inside[i].x, inside[i].y);
        if (len > l) {
          len = l;
          inside[i].len = l;
          res2 = inside[i];
        }
      }
      return res2;
    };
    Snap22.path.isBBoxIntersect = isBBoxIntersect;
    Snap22.path.intersection = pathIntersection;
    Snap22.path.intersectionNumber = pathIntersectionNumber;
    Snap22.path.isPointInside = isPointInsidePath;
    Snap22.path.getBBox = pathBBox;
    Snap22.path.get = getPath;
    Snap22.path.toRelative = pathToRelative;
    Snap22.path.toAbsolute = pathToAbsolute;
    Snap22.path.toCubic = path2curve;
    Snap22.path.map = mapPath;
    Snap22.path.toString = toString2;
    Snap22.path.clone = pathClone;
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    var mmax = Math.max, mmin = Math.min;
    var Set = function(items) {
      this.items = [];
      this.bindings = {};
      this.length = 0;
      this.type = "set";
      if (items) {
        for (var i = 0, ii = items.length; i < ii; i++) {
          if (items[i]) {
            this[this.items.length] = this.items[this.items.length] = items[i];
            this.length++;
          }
        }
      }
    }, setproto = Set.prototype;
    setproto.push = function() {
      var item, len;
      for (var i = 0, ii = arguments.length; i < ii; i++) {
        item = arguments[i];
        if (item) {
          len = this.items.length;
          this[len] = this.items[len] = item;
          this.length++;
        }
      }
      return this;
    };
    setproto.pop = function() {
      this.length && delete this[this.length--];
      return this.items.pop();
    };
    setproto.forEach = function(callback, thisArg) {
      for (var i = 0, ii = this.items.length; i < ii; i++) {
        if (callback.call(thisArg, this.items[i], i) === false) {
          return this;
        }
      }
      return this;
    };
    setproto.animate = function(attrs, ms, easing, callback) {
      if (typeof easing == "function" && !easing.length) {
        callback = easing;
        easing = mina.linear;
      }
      if (attrs instanceof Snap22._.Animation) {
        callback = attrs.callback;
        easing = attrs.easing;
        ms = easing.dur;
        attrs = attrs.attr;
      }
      var args = arguments;
      if (Snap22.is(attrs, "array") && Snap22.is(args[args.length - 1], "array")) {
        var each2 = true;
      }
      var begin, handler = function() {
        if (begin) {
          this.b = begin;
        } else {
          begin = this.b;
        }
      }, cb2 = 0, set = this, callbacker = callback && function() {
        if (++cb2 == set.length) {
          callback.call(this);
        }
      };
      return this.forEach(function(el, i) {
        eve.once("snap.animcreated." + el.id, handler);
        if (each2) {
          args[i] && el.animate.apply(el, args[i]);
        } else {
          el.animate(attrs, ms, easing, callbacker);
        }
      });
    };
    setproto.remove = function() {
      while (this.length) {
        this.pop().remove();
      }
      return this;
    };
    setproto.bind = function(attr, a, b) {
      var data = {};
      if (typeof a == "function") {
        this.bindings[attr] = a;
      } else {
        var aname = b || attr;
        this.bindings[attr] = function(v) {
          data[aname] = v;
          a.attr(data);
        };
      }
      return this;
    };
    setproto.attr = function(value) {
      var unbound = {};
      for (var k in value) {
        if (this.bindings[k]) {
          this.bindings[k](value[k]);
        } else {
          unbound[k] = value[k];
        }
      }
      for (var i = 0, ii = this.items.length; i < ii; i++) {
        this.items[i].attr(unbound);
      }
      return this;
    };
    setproto.clear = function() {
      while (this.length) {
        this.pop();
      }
    };
    setproto.splice = function(index, count, insertion) {
      index = index < 0 ? mmax(this.length + index, 0) : index;
      count = mmax(0, mmin(this.length - index, count));
      var tail = [], todel = [], args = [], i;
      for (i = 2; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      for (i = 0; i < count; i++) {
        todel.push(this[index + i]);
      }
      for (; i < this.length - index; i++) {
        tail.push(this[index + i]);
      }
      var arglen = args.length;
      for (i = 0; i < arglen + tail.length; i++) {
        this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
      }
      i = this.items.length = this.length -= count - arglen;
      while (this[i]) {
        delete this[i++];
      }
      return new Set(todel);
    };
    setproto.exclude = function(el) {
      for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
        this.splice(i, 1);
        return true;
      }
      return false;
    };
    setproto.insertAfter = function(el) {
      var i = this.items.length;
      while (i--) {
        this.items[i].insertAfter(el);
      }
      return this;
    };
    setproto.getBBox = function() {
      var x = [], y = [], x2 = [], y2 = [];
      for (var i = this.items.length; i--; ) if (!this.items[i].removed) {
        var box = this.items[i].getBBox();
        x.push(box.x);
        y.push(box.y);
        x2.push(box.x + box.width);
        y2.push(box.y + box.height);
      }
      x = mmin.apply(0, x);
      y = mmin.apply(0, y);
      x2 = mmax.apply(0, x2);
      y2 = mmax.apply(0, y2);
      return {
        x,
        y,
        x2,
        y2,
        width: x2 - x,
        height: y2 - y,
        cx: x + (x2 - x) / 2,
        cy: y + (y2 - y) / 2
      };
    };
    setproto.clone = function(s) {
      s = new Set();
      for (var i = 0, ii = this.items.length; i < ii; i++) {
        s.push(this.items[i].clone());
      }
      return s;
    };
    setproto.toString = function() {
      return "Snap‘s set";
    };
    setproto.type = "set";
    Snap22.Set = Set;
    Snap22.set = function() {
      var set = new Set();
      if (arguments.length) {
        set.push.apply(set, Array.prototype.slice.call(arguments, 0));
      }
      return set;
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    var names = {}, reUnit = /[%a-z]+$/i, Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
      var l = item[0];
      switch (l.toLowerCase()) {
        case "t":
          return [l, 0, 0];
        case "m":
          return [l, 1, 0, 0, 1, 0, 0];
        case "r":
          if (item.length == 4) {
            return [l, 0, item[2], item[3]];
          } else {
            return [l, 0];
          }
        case "s":
          if (item.length == 5) {
            return [l, 1, 1, item[3], item[4]];
          } else if (item.length == 3) {
            return [l, 1, 1];
          } else {
            return [l, 1];
          }
      }
    }
    function equaliseTransform(t1, t2, getBBox) {
      t1 = t1 || new Snap22.Matrix();
      t2 = t2 || new Snap22.Matrix();
      t1 = Snap22.parseTransformString(t1.toTransformString()) || [];
      t2 = Snap22.parseTransformString(t2.toTransformString()) || [];
      var maxlength = Math.max(t1.length, t2.length), from = [], to = [], i = 0, j, jj, tt1, tt2;
      for (; i < maxlength; i++) {
        tt1 = t1[i] || getEmpty(t2[i]);
        tt2 = t2[i] || getEmpty(tt1);
        if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
          t1 = Snap22._.transform2matrix(t1, getBBox());
          t2 = Snap22._.transform2matrix(t2, getBBox());
          from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
          to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
          break;
        }
        from[i] = [];
        to[i] = [];
        for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
          j in tt1 && (from[i][j] = tt1[j]);
          j in tt2 && (to[i][j] = tt2[j]);
        }
      }
      return {
        from: path2array(from),
        to: path2array(to),
        f: getPath(from)
      };
    }
    function getNumber(val) {
      return val;
    }
    function getUnit(unit) {
      return function(val) {
        return +val.toFixed(3) + unit;
      };
    }
    function getViewBox(val) {
      return val.join(" ");
    }
    function getColour(clr) {
      return Snap22.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
      var k = 0, i, ii, j, jj, out, a, b = [];
      for (i = 0, ii = path.length; i < ii; i++) {
        out = "[";
        a = ['"' + path[i][0] + '"'];
        for (j = 1, jj = path[i].length; j < jj; j++) {
          a[j] = "val[" + k++ + "]";
        }
        out += a + "]";
        b[i] = out;
      }
      return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
      var out = [];
      for (var i = 0, ii = path.length; i < ii; i++) {
        for (var j = 1, jj = path[i].length; j < jj; j++) {
          out.push(path[i][j]);
        }
      }
      return out;
    }
    function isNumeric(obj) {
      return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
      if (!Snap22.is(arr1, "array") || !Snap22.is(arr2, "array")) {
        return false;
      }
      return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function(name, b) {
      return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function(name, b) {
      var A, B, a = Str(this.attr(name) || ""), el = this;
      if (names[name] == "colour") {
        A = Snap22.color(a);
        B = Snap22.color(b);
        return {
          from: [A.r, A.g, A.b, A.opacity],
          to: [B.r, B.g, B.b, B.opacity],
          f: getColour
        };
      }
      if (name == "viewBox") {
        A = this.attr(name).vb.split(" ").map(Number);
        B = b.split(" ").map(Number);
        return {
          from: A,
          to: B,
          f: getViewBox
        };
      }
      if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
        if (typeof b == "string") {
          b = Str(b).replace(/\.{3}|\u2026/g, a);
        }
        a = this.matrix;
        if (!Snap22._.rgTransform.test(b)) {
          b = Snap22._.transform2matrix(Snap22._.svgTransform2string(b), this.getBBox());
        } else {
          b = Snap22._.transform2matrix(b, this.getBBox());
        }
        return equaliseTransform(a, b, function() {
          return el.getBBox(1);
        });
      }
      if (name == "d" || name == "path") {
        A = Snap22.path.toCubic(a, b);
        return {
          from: path2array(A[0]),
          to: path2array(A[1]),
          f: getPath(A[0])
        };
      }
      if (name == "points") {
        A = Str(a).split(Snap22._.separator);
        B = Str(b).split(Snap22._.separator);
        return {
          from: A,
          to: B,
          f: function(val) {
            return val;
          }
        };
      }
      if (isNumeric(a) && isNumeric(b)) {
        return {
          from: parseFloat(a),
          to: parseFloat(b),
          f: getNumber
        };
      }
      var aUnit = a.match(reUnit), bUnit = Str(b).match(reUnit);
      if (aUnit && arrayEqual(aUnit, bUnit)) {
        return {
          from: parseFloat(a),
          to: parseFloat(b),
          f: getUnit(aUnit)
        };
      } else {
        return {
          from: this.asPX(name),
          to: this.asPX(name, b),
          f: getNumber
        };
      }
    });
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    var elproto = Element.prototype, has2 = "hasOwnProperty", supportsTouch = "createTouch" in glob.doc, events = [
      "click",
      "dblclick",
      "mousedown",
      "mousemove",
      "mouseout",
      "mouseover",
      "mouseup",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel"
    ], touchMap = {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend"
    }, getScroll = function(xy, el) {
      var name = xy == "y" ? "scrollTop" : "scrollLeft", doc = el && el.node ? el.node.ownerDocument : glob.doc;
      return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    }, preventTouch = function() {
      return this.originalEvent.preventDefault();
    }, stopTouch = function() {
      return this.originalEvent.stopPropagation();
    }, addEvent = function(obj, type, fn, element) {
      var realName = supportsTouch && touchMap[type] ? touchMap[type] : type, f = function(e) {
        var scrollY = getScroll("y", element), scrollX = getScroll("x", element);
        if (supportsTouch && touchMap[has2](type)) {
          for (var i2 = 0, ii = e.targetTouches && e.targetTouches.length; i2 < ii; i2++) {
            if (e.targetTouches[i2].target == obj || obj.contains(e.targetTouches[i2].target)) {
              var olde = e;
              e = e.targetTouches[i2];
              e.originalEvent = olde;
              e.preventDefault = preventTouch;
              e.stopPropagation = stopTouch;
              break;
            }
          }
        }
        var x = e.clientX + scrollX, y = e.clientY + scrollY;
        return fn.call(element, e, x, y);
      };
      if (type !== realName) {
        obj.addEventListener(type, f, false);
      }
      obj.addEventListener(realName, f, false);
      return function() {
        if (type !== realName) {
          obj.removeEventListener(type, f, false);
        }
        obj.removeEventListener(realName, f, false);
        return true;
      };
    }, drag = [], dragMove = function(e) {
      var x = e.clientX, y = e.clientY, scrollY = getScroll("y"), scrollX = getScroll("x"), dragi, j = drag.length;
      while (j--) {
        dragi = drag[j];
        if (supportsTouch) {
          var i2 = e.touches && e.touches.length, touch;
          while (i2--) {
            touch = e.touches[i2];
            if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
              x = touch.clientX;
              y = touch.clientY;
              (e.originalEvent ? e.originalEvent : e).preventDefault();
              break;
            }
          }
        } else {
          e.preventDefault();
        }
        var node = dragi.el.node;
        node.nextSibling;
        node.parentNode;
        node.style.display;
        x += scrollX;
        y += scrollY;
        eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
      }
    }, dragUp = function(e) {
      Snap22.unmousemove(dragMove).unmouseup(dragUp);
      var i2 = drag.length, dragi;
      while (i2--) {
        dragi = drag[i2];
        dragi.el._drag = {};
        eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
        eve.off("snap.drag.*." + dragi.el.id);
      }
      drag = [];
    };
    for (var i = events.length; i--; ) {
      (function(eventName) {
        Snap22[eventName] = elproto[eventName] = function(fn, scope) {
          if (Snap22.is(fn, "function")) {
            this.events = this.events || [];
            this.events.push({
              name: eventName,
              f: fn,
              unbind: addEvent(this.node || document, eventName, fn, scope || this)
            });
          } else {
            for (var i2 = 0, ii = this.events.length; i2 < ii; i2++) if (this.events[i2].name == eventName) {
              try {
                this.events[i2].f.call(this);
              } catch (e) {
              }
            }
          }
          return this;
        };
        Snap22["un" + eventName] = elproto["un" + eventName] = function(fn) {
          var events2 = this.events || [], l = events2.length;
          while (l--) if (events2[l].name == eventName && (events2[l].f == fn || !fn)) {
            events2[l].unbind();
            events2.splice(l, 1);
            !events2.length && delete this.events;
            return this;
          }
          return this;
        };
      })(events[i]);
    }
    elproto.hover = function(f_in, f_out, scope_in, scope_out) {
      return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    elproto.unhover = function(f_in, f_out) {
      return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
      var el = this;
      if (!arguments.length) {
        var origTransform;
        return el.drag(function(dx, dy) {
          this.attr({
            transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
          });
        }, function() {
          origTransform = this.transform().local;
        });
      }
      function start(e, x, y) {
        (e.originalEvent || e).preventDefault();
        el._drag.x = x;
        el._drag.y = y;
        el._drag.id = e.identifier;
        !drag.length && Snap22.mousemove(dragMove).mouseup(dragUp);
        drag.push({ el, move_scope, start_scope, end_scope });
        onstart && eve.on("snap.drag.start." + el.id, onstart);
        onmove && eve.on("snap.drag.move." + el.id, onmove);
        onend && eve.on("snap.drag.end." + el.id, onend);
        eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
      }
      function init(e, x, y) {
        eve("snap.draginit." + el.id, el, e, x, y);
      }
      eve.on("snap.draginit." + el.id, start);
      el._drag = {};
      draggable.push({ el, start, init });
      el.mousedown(init);
      return el;
    };
    elproto.undrag = function() {
      var i2 = draggable.length;
      while (i2--) if (draggable[i2].el == this) {
        this.unmousedown(draggable[i2].init);
        draggable.splice(i2, 1);
        eve.unbind("snap.drag.*." + this.id);
        eve.unbind("snap.draginit." + this.id);
      }
      !draggable.length && Snap22.unmousemove(dragMove).unmouseup(dragUp);
      return this;
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    Element.prototype;
    var pproto = Paper.prototype, rgurl = /^\s*url\((.+)\)/, Str = String, $ = Snap22._.$;
    Snap22.filter = {};
    pproto.filter = function(filstr) {
      var paper = this;
      if (paper.type != "svg") {
        paper = paper.paper;
      }
      var f = Snap22.parse(Str(filstr)), id = Snap22._.id();
      paper.node.offsetWidth;
      paper.node.offsetHeight;
      var filter2 = $("filter");
      $(filter2, {
        id,
        filterUnits: "userSpaceOnUse"
      });
      filter2.appendChild(f.node);
      paper.defs.appendChild(filter2);
      return new Element(filter2);
    };
    eve.on("snap.util.getattr.filter", function() {
      eve.stop();
      var p = $(this.node, "filter");
      if (p) {
        var match = Str(p).match(rgurl);
        return match && Snap22.select(match[1]);
      }
    });
    eve.on("snap.util.attr.filter", function(value) {
      if (value instanceof Element && value.type == "filter") {
        eve.stop();
        var id = value.node.id;
        if (!id) {
          $(value.node, { id: value.id });
          id = value.id;
        }
        $(this.node, {
          filter: Snap22.url(id)
        });
      }
      if (!value || value == "none") {
        eve.stop();
        this.node.removeAttribute("filter");
      }
    });
    Snap22.filter.blur = function(x, y) {
      if (x == null) {
        x = 2;
      }
      var def = y == null ? x : [x, y];
      return Snap22.format('<feGaussianBlur stdDeviation="{def}"/>', {
        def
      });
    };
    Snap22.filter.blur.toString = function() {
      return this();
    };
    Snap22.filter.shadow = function(dx, dy, blur, color, opacity) {
      if (opacity == null) {
        if (color == null) {
          opacity = blur;
          blur = 4;
          color = "#000";
        } else {
          opacity = color;
          color = blur;
          blur = 4;
        }
      }
      if (blur == null) {
        blur = 4;
      }
      if (opacity == null) {
        opacity = 1;
      }
      if (dx == null) {
        dx = 0;
        dy = 2;
      }
      if (dy == null) {
        dy = dx;
      }
      color = Snap22.color(color);
      return Snap22.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
        color,
        dx,
        dy,
        blur,
        opacity
      });
    };
    Snap22.filter.shadow.toString = function() {
      return this();
    };
    Snap22.filter.grayscale = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
        a: 0.2126 + 0.7874 * (1 - amount),
        b: 0.7152 - 0.7152 * (1 - amount),
        c: 0.0722 - 0.0722 * (1 - amount),
        d: 0.2126 - 0.2126 * (1 - amount),
        e: 0.7152 + 0.2848 * (1 - amount),
        f: 0.0722 - 0.0722 * (1 - amount),
        g: 0.2126 - 0.2126 * (1 - amount),
        h: 0.0722 + 0.9278 * (1 - amount)
      });
    };
    Snap22.filter.grayscale.toString = function() {
      return this();
    };
    Snap22.filter.sepia = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
        a: 0.393 + 0.607 * (1 - amount),
        b: 0.769 - 0.769 * (1 - amount),
        c: 0.189 - 0.189 * (1 - amount),
        d: 0.349 - 0.349 * (1 - amount),
        e: 0.686 + 0.314 * (1 - amount),
        f: 0.168 - 0.168 * (1 - amount),
        g: 0.272 - 0.272 * (1 - amount),
        h: 0.534 - 0.534 * (1 - amount),
        i: 0.131 + 0.869 * (1 - amount)
      });
    };
    Snap22.filter.sepia.toString = function() {
      return this();
    };
    Snap22.filter.saturate = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feColorMatrix type="saturate" values="{amount}"/>', {
        amount: 1 - amount
      });
    };
    Snap22.filter.saturate.toString = function() {
      return this();
    };
    Snap22.filter.hueRotate = function(angle) {
      angle = angle || 0;
      return Snap22.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
        angle
      });
    };
    Snap22.filter.hueRotate.toString = function() {
      return this();
    };
    Snap22.filter.invert = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
        amount,
        amount2: 1 - amount
      });
    };
    Snap22.filter.invert.toString = function() {
      return this();
    };
    Snap22.filter.brightness = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
        amount
      });
    };
    Snap22.filter.brightness.toString = function() {
      return this();
    };
    Snap22.filter.contrast = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return Snap22.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
        amount,
        amount2: 0.5 - amount / 2
      });
    };
    Snap22.filter.contrast.toString = function() {
      return this();
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var box = Snap22._.box, is = Snap22.is, firstLetter = /^[^a-z]*([tbmlrc])/i, toString2 = function() {
      return "T" + this.dx + "," + this.dy;
    };
    Element.prototype.getAlign = function(el, way) {
      if (way == null && is(el, "string")) {
        way = el;
        el = null;
      }
      el = el || this.paper;
      var bx = el.getBBox ? el.getBBox() : box(el), bb = this.getBBox(), out = {};
      way = way && way.match(firstLetter);
      way = way ? way[1].toLowerCase() : "c";
      switch (way) {
        case "t":
          out.dx = 0;
          out.dy = bx.y - bb.y;
          break;
        case "b":
          out.dx = 0;
          out.dy = bx.y2 - bb.y2;
          break;
        case "m":
          out.dx = 0;
          out.dy = bx.cy - bb.cy;
          break;
        case "l":
          out.dx = bx.x - bb.x;
          out.dy = 0;
          break;
        case "r":
          out.dx = bx.x2 - bb.x2;
          out.dy = 0;
          break;
        default:
          out.dx = bx.cx - bb.cx;
          out.dy = 0;
          break;
      }
      out.toString = toString2;
      return out;
    };
    Element.prototype.align = function(el, way) {
      return this.transform("..." + this.getAlign(el, way));
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype, is = Snap22.is, Str = String, has2 = "hasOwnProperty";
    function slice2(from, to, f) {
      return function(arr) {
        var res2 = arr.slice(from, to);
        if (res2.length == 1) {
          res2 = res2[0];
        }
        return f ? f(res2) : res2;
      };
    }
    var Animation = function(attr, ms, easing, callback) {
      if (typeof easing == "function" && !easing.length) {
        callback = easing;
        easing = mina.linear;
      }
      this.attr = attr;
      this.dur = ms;
      easing && (this.easing = easing);
      callback && (this.callback = callback);
    };
    Snap22._.Animation = Animation;
    Snap22.animation = function(attr, ms, easing, callback) {
      return new Animation(attr, ms, easing, callback);
    };
    elproto.inAnim = function() {
      var el = this, res2 = [];
      for (var id in el.anims) if (el.anims[has2](id)) {
        (function(a) {
          res2.push({
            anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
            mina: a,
            curStatus: a.status(),
            status: function(val) {
              return a.status(val);
            },
            stop: function() {
              a.stop();
            }
          });
        })(el.anims[id]);
      }
      return res2;
    };
    Snap22.animate = function(from, to, setter, ms, easing, callback) {
      if (typeof easing == "function" && !easing.length) {
        callback = easing;
        easing = mina.linear;
      }
      var now2 = mina.time(), anim = mina(from, to, now2, now2 + ms, mina.time, setter, easing);
      callback && eve.once("mina.finish." + anim.id, callback);
      return anim;
    };
    elproto.stop = function() {
      var anims = this.inAnim();
      for (var i = 0, ii = anims.length; i < ii; i++) {
        anims[i].stop();
      }
      return this;
    };
    elproto.animate = function(attrs, ms, easing, callback) {
      if (typeof easing == "function" && !easing.length) {
        callback = easing;
        easing = mina.linear;
      }
      if (attrs instanceof Animation) {
        callback = attrs.callback;
        easing = attrs.easing;
        ms = attrs.dur;
        attrs = attrs.attr;
      }
      var fkeys = [], tkeys = [], keys2 = {}, from, to, f, eq, el = this;
      for (var key in attrs) if (attrs[has2](key)) {
        if (el.equal) {
          eq = el.equal(key, Str(attrs[key]));
          from = eq.from;
          to = eq.to;
          f = eq.f;
        } else {
          from = +el.attr(key);
          to = +attrs[key];
        }
        var len = is(from, "array") ? from.length : 1;
        keys2[key] = slice2(fkeys.length, fkeys.length + len, f);
        fkeys = fkeys.concat(from);
        tkeys = tkeys.concat(to);
      }
      var now2 = mina.time(), anim = mina(fkeys, tkeys, now2, now2 + ms, mina.time, function(val) {
        var attr = {};
        for (var key2 in keys2) if (keys2[has2](key2)) {
          attr[key2] = keys2[key2](val);
        }
        el.attr(attr);
      }, easing);
      el.anims[anim.id] = anim;
      anim._attrs = attrs;
      anim._callback = callback;
      eve("snap.animcreated." + el.id, anim);
      eve.once("mina.finish." + anim.id, function() {
        eve.off("mina.*." + anim.id);
        delete el.anims[anim.id];
        callback && callback.call(el);
      });
      eve.once("mina.stop." + anim.id, function() {
        eve.off("mina.*." + anim.id);
        delete el.anims[anim.id];
      });
      return el;
    };
  });
  Snap2.plugin(function(Snap22, Element, Paper, glob) {
    var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000", pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162", purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF", deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA", indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE", blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF", lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA", cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4", teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5", green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853", lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17", lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00", yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600", amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00", orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00", deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00", brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723", grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121", bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    Snap22.mui = {};
    Snap22.flat = {};
    function saveColor(colors) {
      colors = colors.split(/(?=#)/);
      var color = new String(colors[5]);
      color[50] = colors[0];
      color[100] = colors[1];
      color[200] = colors[2];
      color[300] = colors[3];
      color[400] = colors[4];
      color[500] = colors[5];
      color[600] = colors[6];
      color[700] = colors[7];
      color[800] = colors[8];
      color[900] = colors[9];
      if (colors[10]) {
        color.A100 = colors[10];
        color.A200 = colors[11];
        color.A400 = colors[12];
        color.A700 = colors[13];
      }
      return color;
    }
    Snap22.mui.red = saveColor(red);
    Snap22.mui.pink = saveColor(pink);
    Snap22.mui.purple = saveColor(purple);
    Snap22.mui.deeppurple = saveColor(deeppurple);
    Snap22.mui.indigo = saveColor(indigo);
    Snap22.mui.blue = saveColor(blue);
    Snap22.mui.lightblue = saveColor(lightblue);
    Snap22.mui.cyan = saveColor(cyan);
    Snap22.mui.teal = saveColor(teal);
    Snap22.mui.green = saveColor(green);
    Snap22.mui.lightgreen = saveColor(lightgreen);
    Snap22.mui.lime = saveColor(lime);
    Snap22.mui.yellow = saveColor(yellow);
    Snap22.mui.amber = saveColor(amber);
    Snap22.mui.orange = saveColor(orange);
    Snap22.mui.deeporange = saveColor(deeporange);
    Snap22.mui.brown = saveColor(brown);
    Snap22.mui.grey = saveColor(grey);
    Snap22.mui.bluegrey = saveColor(bluegrey);
    Snap22.flat.turquoise = "#1abc9c";
    Snap22.flat.greensea = "#16a085";
    Snap22.flat.sunflower = "#f1c40f";
    Snap22.flat.orange = "#f39c12";
    Snap22.flat.emerland = "#2ecc71";
    Snap22.flat.nephritis = "#27ae60";
    Snap22.flat.carrot = "#e67e22";
    Snap22.flat.pumpkin = "#d35400";
    Snap22.flat.peterriver = "#3498db";
    Snap22.flat.belizehole = "#2980b9";
    Snap22.flat.alizarin = "#e74c3c";
    Snap22.flat.pomegranate = "#c0392b";
    Snap22.flat.amethyst = "#9b59b6";
    Snap22.flat.wisteria = "#8e44ad";
    Snap22.flat.clouds = "#ecf0f1";
    Snap22.flat.silver = "#bdc3c7";
    Snap22.flat.wetasphalt = "#34495e";
    Snap22.flat.midnightblue = "#2c3e50";
    Snap22.flat.concrete = "#95a5a6";
    Snap22.flat.asbestos = "#7f8c8d";
    Snap22.importMUIColors = function() {
      for (var color in Snap22.mui) {
        if (Snap22.mui.hasOwnProperty(color)) {
          window[color] = Snap22.mui[color];
        }
      }
    };
  });
  snap_svgCjs = Snap2;
  return snap_svgCjs;
}
var snap_svgCjsExports = requireSnap_svgCjs();
const Snap = /* @__PURE__ */ getDefaultExportFromCjs(snap_svgCjsExports);
var webfontloader = { exports: {} };
var hasRequiredWebfontloader;
function requireWebfontloader() {
  if (hasRequiredWebfontloader) return webfontloader.exports;
  hasRequiredWebfontloader = 1;
  (function(module) {
    (function() {
      function aa(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }
      function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c2 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c2, d);
            return a.apply(b, c2);
          };
        }
        return function() {
          return a.apply(b, arguments);
        };
      }
      function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments);
      }
      var q = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document;
      }
      var da = !!window.FontFace;
      function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b;
      }
      function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild);
      }
      function v(a) {
        a.parentNode && a.parentNode.removeChild(a);
      }
      function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
          for (var f = false, g2 = 0; g2 < d.length; g2 += 1) if (b[e] === d[g2]) {
            f = true;
            break;
          }
          f || d.push(b[e]);
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
          f = false;
          for (g2 = 0; g2 < c.length; g2 += 1) if (d[e] === c[g2]) {
            f = true;
            break;
          }
          f || b.push(d[e]);
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return true;
        return false;
      }
      function ea(a) {
        return a.o.location.hostname || a.a.location.hostname;
      }
      function z(a, b, c) {
        function d() {
          m && e && f && (m(g2), m = null);
        }
        b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
        var e = false, f = true, g2 = null, m = c || null;
        da ? (b.onload = function() {
          e = true;
          d();
        }, b.onerror = function() {
          e = true;
          g2 = Error("Stylesheet failed to load");
          d();
        }) : setTimeout(function() {
          e = true;
          d();
        }, 0);
        u(a, "head", b);
      }
      function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
          var f = t(a, "script", { src: b }), g2 = false;
          f.onload = f.onreadystatechange = function() {
            g2 || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g2 = true, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
          };
          e.appendChild(f);
          setTimeout(function() {
            g2 || (g2 = true, c && c(Error("Script load timeout")));
          }, d || 5e3);
          return f;
        }
        return null;
      }
      function B() {
        this.a = 0;
        this.c = null;
      }
      function C(a) {
        a.a++;
        return function() {
          a.a--;
          D(a);
        };
      }
      function E(a, b) {
        a.c = b;
        D(a);
      }
      function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null);
      }
      function F(a) {
        this.a = a || "-";
      }
      F.prototype.c = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a);
      };
      function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10));
      }
      function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
      }
      function I(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
          var d = a[c].replace(/['"]/g, "");
          -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
        }
        return b.join(",");
      }
      function J(a) {
        return a.a + a.f;
      }
      function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b;
      }
      function ga(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b;
      }
      function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = false !== b.events;
        this.g = false !== b.classes;
      }
      function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        K(a, "loading");
      }
      function L(a) {
        if (a.g) {
          var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
          b || c.push(a.a.c("wf", "inactive"));
          w(a.f, c, d);
        }
        K(a, "inactive");
      }
      function K(a, b, c) {
        if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));
        else a.h[b]();
      }
      function ja() {
        this.c = {};
      }
      function ka(a, b, c) {
        var d = [], e;
        for (e in b) if (b.hasOwnProperty(e)) {
          var f = a.c[e];
          f && d.push(f(b[e], c));
        }
        return d;
      }
      function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function N(a) {
        u(a.c, "body", a.a);
      }
      function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
      }
      function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3e3;
        this.h = f || void 0;
      }
      P.prototype.start = function() {
        var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d2, e2) {
          function f2() {
            q() - c >= b.f ? e2() : a.fonts.load(fa(b.a), b.h).then(function(a2) {
              1 <= a2.length ? d2() : setTimeout(f2, 25);
            }, function() {
              e2();
            });
          }
          f2();
        }), e = null, f = new Promise(function(a2, d2) {
          e = setTimeout(d2, b.f);
        });
        Promise.race([f, d]).then(function() {
          e && (clearTimeout(e), e = null);
          b.g(b.a);
        }, function() {
          b.j(b.a);
        });
      };
      function Q(a, b, c, d, e, f, g2) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g2 || "BESbswy";
        this.f = {};
        this.w = e || 3e3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
      }
      var R = { D: "serif", C: "sans-serif" }, S = null;
      function T() {
        if (null === S) {
          var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
        }
        return S;
      }
      Q.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
      };
      function la(a, b, c) {
        for (var d in R) if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return true;
        return false;
      }
      function U(a) {
        var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
      }
      function ma(a) {
        setTimeout(p(function() {
          U(this);
        }, a), 50);
      }
      function V(a, b) {
        setTimeout(p(function() {
          v(this.g.a);
          v(this.h.a);
          v(this.j.a);
          v(this.m.a);
          b(this.a);
        }, a), 0);
      }
      function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = false;
        this.s = c;
      }
      var X = null;
      W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
        K(b, "fontactive", a);
        this.m = true;
        na(this);
      };
      W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
          var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
          w(b.f, d, e);
        }
        K(b, "fontinactive", a);
        na(this);
      };
      function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
      }
      function oa(a) {
        this.j = a;
        this.a = new ja();
        this.h = 0;
        this.f = this.g = true;
      }
      oa.prototype.load = function(a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = false !== a.events;
        this.f = false !== a.classes;
        pa(this, new ha(this.c, a), a);
      };
      function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
          var a2 = e || null, m = d || null || {};
          if (0 === c.length && f) L(b.a);
          else {
            b.f += c.length;
            f && (b.j = f);
            var h, l = [];
            for (h = 0; h < c.length; h++) {
              var k = c[h], n = m[k.c], r = b.a, x = k;
              r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r, "fontloading", x);
              r = null;
              if (null === X) if (window.FontFace) {
                var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
              } else X = false;
              X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a2, n);
              l.push(r);
            }
            for (h = 0; h < l.length; h++) l[h].start();
          }
        }, 0);
      }
      function pa(a, b, c) {
        var d = [], e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for (c = d.length; b < c; b++) d[b].load(function(b2, d2, c2) {
          qa(a, f, b2, d2, c2);
        });
      }
      function ra(a, b) {
        this.c = a;
        this.a = b;
      }
      ra.prototype.load = function(a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c2 = f["__mti_fntLst" + d](), e2 = [], h;
            if (c2) for (var l = 0; l < c2.length; l++) {
              var k = c2[l].fontfamily;
              void 0 != c2[l].fontStyle && void 0 != c2[l].fontWeight ? (h = c2[l].fontStyle + c2[l].fontWeight, e2.push(new G(k, h))) : e2.push(new G(k));
            }
            a(e2);
          } else setTimeout(function() {
            b();
          }, 50);
        }
        var c = this, d = c.a.projectId, e = c.a.version;
        if (d) {
          var f = c.c.o;
          A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e2) {
            e2 ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
              return c.a;
            }, b());
          }).id = "__MonotypeAPIScript__" + d;
        } else a([]);
      };
      function sa(a, b) {
        this.c = a;
        this.a = b;
      }
      sa.prototype.load = function(a) {
        var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g2 = new B();
        b = 0;
        for (c = d.length; b < c; b++) z(this.c, d[b], C(g2));
        var m = [];
        b = 0;
        for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));
        else m.push(new G(d[0]));
        E(g2, function() {
          a(m, f);
        });
      };
      function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || "";
      }
      var ua = "https://fonts.googleapis.com/css";
      function va(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = b[d].split(":");
          3 == e.length && a.f.push(e.pop());
          var f = "";
          2 == e.length && "" != e[1] && (f = ":");
          a.a.push(e.join(f));
        }
      }
      function wa(a) {
        if (0 == a.a.length) throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit=")) return a.c;
        for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b;
      }
      function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {};
      }
      var za = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function Da(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
          var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
          if (2 <= d.length) {
            var g2;
            var m = d[1];
            g2 = [];
            if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
              var k;
              k = m[l];
              if (k.match(/^[\w-]+$/)) {
                var n = Ca.exec(k.toLowerCase());
                if (null == n) k = "";
                else {
                  k = n[2];
                  k = null == k || "" == k ? "n" : Ba[k];
                  n = n[1];
                  if (null == n || "" == n) n = "4";
                  else var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                  k = [k, n].join("");
                }
              } else k = "";
              k && g2.push(k);
            }
            0 < g2.length && (f = g2);
            3 == d.length && (d = d[2], g2 = [], d = d ? d.split(",") : g2, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
          }
          a.c[e] || (d = za[e]) && (a.c[e] = d);
          for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
        }
      }
      function Ea(a, b) {
        this.c = a;
        this.a = b;
      }
      var Fa = { Arimo: true, Cousine: true, Tinos: true };
      Ea.prototype.load = function(a) {
        var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function() {
          a(f.a, f.c, Fa);
        });
      };
      function Ga(a, b) {
        this.c = a;
        this.a = b;
      }
      Ga.prototype.load = function(a) {
        var b = this.a.id, c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b2) {
          if (b2) a([]);
          else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b2 = c.Typekit.config.fn;
            for (var e = [], f = 0; f < b2.length; f += 2) for (var g2 = b2[f], m = b2[f + 1], h = 0; h < m.length; h++) e.push(new G(g2, m[h]));
            try {
              c.Typekit.load({ events: false, classes: false, async: true });
            } catch (l) {
            }
            a(e);
          }
        }, 2e3) : a([]);
      };
      function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = [];
      }
      Ha.prototype.load = function(a) {
        var b = this.f.id, c = this.c.o, d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b2, c2) {
          for (var g2 = 0, m = c2.fonts.length; g2 < m; ++g2) {
            var h = c2.fonts[g2];
            d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
          }
          a(d.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b2) {
          b2 && a([]);
        })) : a([]);
      };
      var Y = new oa(window);
      Y.a.c.custom = function(a, b) {
        return new sa(b, a);
      };
      Y.a.c.fontdeck = function(a, b) {
        return new Ha(b, a);
      };
      Y.a.c.monotype = function(a, b) {
        return new ra(b, a);
      };
      Y.a.c.typekit = function(a, b) {
        return new Ga(b, a);
      };
      Y.a.c.google = function(a, b) {
        return new Ea(b, a);
      };
      var Z = { load: p(Y.load, Y) };
      module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
    })();
  })(webfontloader);
  return webfontloader.exports;
}
var webfontloaderExports = requireWebfontloader();
const WebFont = /* @__PURE__ */ getDefaultExportFromCjs(webfontloaderExports);
function Diagram() {
  this.title = void 0;
  this.actors = [];
  this.signals = [];
}
Diagram.prototype.getActor = function(alias, name) {
  alias = alias.trim();
  var i;
  var actors = this.actors;
  for (i in actors) {
    if (actors[i].alias == alias) {
      return actors[i];
    }
  }
  i = actors.push(new Diagram.Actor(alias, name || alias, actors.length));
  return actors[i - 1];
};
Diagram.prototype.getActorWithAlias = function(input) {
  input = input.trim();
  var s = /([\s\S]+) as (\S+)$/im.exec(input);
  var alias;
  var name;
  if (s) {
    name = s[1].trim();
    alias = s[2].trim();
  } else {
    name = alias = input;
  }
  return this.getActor(alias, name);
};
Diagram.prototype.setTitle = function(title) {
  this.title = title;
};
Diagram.prototype.addSignal = function(signal) {
  this.signals.push(signal);
};
Diagram.Actor = function(alias, name, index) {
  this.alias = alias;
  this.name = name;
  this.index = index;
};
Diagram.Signal = function(actorA, signaltype, actorB, message) {
  this.type = "Signal";
  this.actorA = actorA;
  this.actorB = actorB;
  this.linetype = signaltype & 3;
  this.arrowtype = signaltype >> 2 & 3;
  this.message = message;
};
Diagram.Signal.prototype.isSelf = function() {
  return this.actorA.index == this.actorB.index;
};
Diagram.Note = function(actor, placement, message) {
  this.type = "Note";
  this.actor = actor;
  this.placement = placement;
  this.message = message;
  if (this.hasManyActors() && actor[0] == actor[1]) {
    throw new Error("Note should be over two different actors");
  }
};
Diagram.Note.prototype.hasManyActors = function() {
  return _.isArray(this.actor);
};
Diagram.unescape = function(s) {
  return s.trim().replace(/^"(.*)"$/m, "$1").replace(/\\n/gm, "\n");
};
Diagram.LINETYPE = {
  SOLID: 0,
  DOTTED: 1
};
Diagram.ARROWTYPE = {
  FILLED: 0,
  OPEN: 1
};
Diagram.PLACEMENT = {
  LEFTOF: 0,
  RIGHTOF: 1,
  OVER: 2
};
if (typeof Object.getPrototypeOf !== "function") {
  if (typeof "test".__proto__ === "object") {
    Object.getPrototypeOf = function(object2) {
      return object2.__proto__;
    };
  } else {
    Object.getPrototypeOf = function(object2) {
      return object2.constructor.prototype;
    };
  }
}
var parser = (function() {
  function Parser() {
    this.yy = {};
  }
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v) ;
    return o2;
  }, $V0 = [5, 8, 9, 13, 15, 24], $V1 = [1, 13], $V2 = [1, 17], $V3 = [24, 29, 30], parser2 = {
    trace: function() {
    },
    yy: {},
    symbols_: {
      error: 2,
      start: 3,
      document: 4,
      EOF: 5,
      line: 6,
      statement: 7,
      NL: 8,
      participant: 9,
      actor_alias: 10,
      signal: 11,
      note_statement: 12,
      title: 13,
      message: 14,
      note: 15,
      placement: 16,
      actor: 17,
      over: 18,
      actor_pair: 19,
      ",": 20,
      left_of: 21,
      right_of: 22,
      signaltype: 23,
      ACTOR: 24,
      linetype: 25,
      arrowtype: 26,
      LINE: 27,
      DOTLINE: 28,
      ARROW: 29,
      OPENARROW: 30,
      MESSAGE: 31,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      5: "EOF",
      8: "NL",
      9: "participant",
      13: "title",
      15: "note",
      18: "over",
      20: ",",
      21: "left_of",
      22: "right_of",
      24: "ACTOR",
      27: "LINE",
      28: "DOTLINE",
      29: "ARROW",
      30: "OPENARROW",
      31: "MESSAGE"
    },
    productions_: [
      0,
      [3, 2],
      [4, 0],
      [4, 2],
      [6, 1],
      [6, 1],
      [7, 2],
      [7, 1],
      [7, 1],
      [7, 2],
      [12, 4],
      [12, 4],
      [19, 1],
      [19, 3],
      [16, 1],
      [16, 1],
      [11, 4],
      [17, 1],
      [10, 1],
      [23, 2],
      [23, 1],
      [25, 1],
      [25, 1],
      [26, 1],
      [26, 1],
      [14, 1]
    ],
    performAction: function(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          return yy.parser.yy;
        case 4:
          break;
        case 6:
          $$[$0];
          break;
        case 7:
        case 8:
          yy.parser.yy.addSignal($$[$0]);
          break;
        case 9:
          yy.parser.yy.setTitle($$[$0]);
          break;
        case 10:
          this.$ = new Diagram.Note($$[$0 - 1], $$[$0 - 2], $$[$0]);
          break;
        case 11:
          this.$ = new Diagram.Note($$[$0 - 1], Diagram.PLACEMENT.OVER, $$[$0]);
          break;
        case 12:
        case 20:
          this.$ = $$[$0];
          break;
        case 13:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 14:
          this.$ = Diagram.PLACEMENT.LEFTOF;
          break;
        case 15:
          this.$ = Diagram.PLACEMENT.RIGHTOF;
          break;
        case 16:
          this.$ = new Diagram.Signal($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0]);
          break;
        case 17:
          this.$ = yy.parser.yy.getActor(Diagram.unescape($$[$0]));
          break;
        case 18:
          this.$ = yy.parser.yy.getActorWithAlias(Diagram.unescape($$[$0]));
          break;
        case 19:
          this.$ = $$[$0 - 1] | $$[$0] << 2;
          break;
        case 21:
          this.$ = Diagram.LINETYPE.SOLID;
          break;
        case 22:
          this.$ = Diagram.LINETYPE.DOTTED;
          break;
        case 23:
          this.$ = Diagram.ARROWTYPE.FILLED;
          break;
        case 24:
          this.$ = Diagram.ARROWTYPE.OPEN;
          break;
        case 25:
          this.$ = Diagram.unescape($$[$0].substring(1));
      }
    },
    table: [
      o($V0, [2, 2], {
        3: 1,
        4: 2
      }),
      {
        1: [3]
      },
      {
        5: [1, 3],
        6: 4,
        7: 5,
        8: [1, 6],
        9: [1, 7],
        11: 8,
        12: 9,
        13: [1, 10],
        15: [1, 12],
        17: 11,
        24: $V1
      },
      {
        1: [2, 1]
      },
      o($V0, [2, 3]),
      o($V0, [2, 4]),
      o($V0, [2, 5]),
      {
        10: 14,
        24: [1, 15]
      },
      o($V0, [2, 7]),
      o($V0, [2, 8]),
      {
        14: 16,
        31: $V2
      },
      {
        23: 18,
        25: 19,
        27: [1, 20],
        28: [1, 21]
      },
      {
        16: 22,
        18: [1, 23],
        21: [1, 24],
        22: [1, 25]
      },
      o([20, 27, 28, 31], [2, 17]),
      o($V0, [2, 6]),
      o($V0, [2, 18]),
      o($V0, [2, 9]),
      o($V0, [2, 25]),
      {
        17: 26,
        24: $V1
      },
      {
        24: [2, 20],
        26: 27,
        29: [1, 28],
        30: [1, 29]
      },
      o($V3, [2, 21]),
      o($V3, [2, 22]),
      {
        17: 30,
        24: $V1
      },
      {
        17: 32,
        19: 31,
        24: $V1
      },
      {
        24: [2, 14]
      },
      {
        24: [2, 15]
      },
      {
        14: 33,
        31: $V2
      },
      {
        24: [2, 19]
      },
      {
        24: [2, 23]
      },
      {
        24: [2, 24]
      },
      {
        14: 34,
        31: $V2
      },
      {
        14: 35,
        31: $V2
      },
      {
        20: [1, 36],
        31: [2, 12]
      },
      o($V0, [2, 16]),
      o($V0, [2, 10]),
      o($V0, [2, 11]),
      {
        17: 37,
        24: $V1
      },
      {
        31: [2, 13]
      }
    ],
    defaultActions: {
      3: [2, 1],
      24: [2, 14],
      25: [2, 15],
      27: [2, 19],
      28: [2, 23],
      29: [2, 24],
      37: [2, 13]
    },
    parseError: function(str, hash) {
      if (!hash.recoverable) throw new Error(str);
      this.trace(str);
    },
    parse: function(input) {
      function lex() {
        var token;
        return token = lexer2.lex() || EOF, "number" != typeof token && (token = self2.symbols_[token] || token), token;
      }
      var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1, args = lstack.slice.call(arguments, 1), lexer2 = Object.create(this.lexer), sharedState = {
        yy: {}
      };
      for (var k in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, k) && (sharedState.yy[k] = this.yy[k]);
      lexer2.setInput(input, sharedState.yy), sharedState.yy.lexer = lexer2, sharedState.yy.parser = this, "undefined" == typeof lexer2.yylloc && (lexer2.yylloc = {});
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      "function" == typeof sharedState.yy.parseError ? this.parseError = sharedState.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      for (var symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval = {}; ; ) {
        if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : (null !== symbol && "undefined" != typeof symbol || (symbol = lex()), action = table[state] && table[state][symbol]), "undefined" == typeof action || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state])
            this.terminals_[p] && p > TERROR && expected.push("'" + this.terminals_[p] + "'");
          errStr = lexer2.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1)
          throw new Error(
            "Parse Error: multiple actions possible at state: " + state + ", token: " + symbol
          );
        switch (action[0]) {
          case 1:
            stack.push(symbol), vstack.push(lexer2.yytext), lstack.push(lexer2.yylloc), stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, preErrorSymbol = null) : (yyleng = lexer2.yyleng, yytext = lexer2.yytext, yylineno = lexer2.yylineno, yyloc = lexer2.yylloc, recovering > 0);
            break;
          case 2:
            if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            }, ranges && (yyval._$.range = [
              lstack[lstack.length - (len || 1)].range[0],
              lstack[lstack.length - 1].range[1]
            ]), r = this.performAction.apply(
              yyval,
              [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args)
            ), "undefined" != typeof r)
              return r;
            len && (stack = stack.slice(0, -1 * len * 2), vstack = vstack.slice(0, -1 * len), lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, lexer = /* @__PURE__ */ (function() {
    var lexer2 = {
      EOF: 1,
      parseError: function(str, hash) {
        if (!this.yy.parser) throw new Error(str);
        this.yy.parser.parseError(str, hash);
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        return this.yy = yy || this.yy || {}, this._input = input, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch, this.yyleng++, this.offset++, this.match += ch, this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        return lines ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length, lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - len), //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), lines.length - 1 && (this.yylineno -= lines.length - 1);
        var r = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - len]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        return this.options.backtrack_lexer ? (this._backtrack = true, this) : this.parseError(
          "Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(),
          {
            text: "",
            token: null,
            line: this.yylineno
          }
        );
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        return next.length < 20 && (next += this._input.substr(0, 20 - next.length)), (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput(), c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer && // save context
        (backup = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (backup.yylloc.range = this.yylloc.range.slice(0))), lines = match[0].match(/(?:\r\n?|\n).*/g), lines && (this.yylineno += lines.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        }, this.yytext += match[0], this.match += match[0], this.matches = match, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(match[0].length), this.matched += match[0], token = this.performAction.call(
          this,
          this.yy,
          this,
          indexed_rule,
          this.conditionStack[this.conditionStack.length - 1]
        ), this.done && this._input && (this.done = false), token)
          return token;
        if (this._backtrack) {
          for (var k in backup) this[k] = backup[k];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var token, match, tempMatch, index;
        this._more || (this.yytext = "", this.match = "");
        for (var rules = this._currentRules(), i = 0; i < rules.length; i++)
          if (tempMatch = this._input.match(this.rules[rules[i]]), tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            if (match = tempMatch, index = i, this.options.backtrack_lexer) {
              if (token = this.test_match(tempMatch, rules[i]), token !== false) return token;
              if (this._backtrack) {
                match = false;
                continue;
              }
              return false;
            }
            if (!this.options.flex) break;
          }
        return match ? (token = this.test_match(match, rules[index]), token !== false && token) : "" === this._input ? this.EOF : this.parseError(
          "Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
          {
            text: "",
            token: null,
            line: this.yylineno
          }
        );
      },
      // return next match that has a token
      lex: function() {
        var r = this.next();
        return r ? r : this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var n = this.conditionStack.length - 1;
        return n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(n) {
        return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: {
        "case-insensitive": true
      },
      performAction: function(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            return 8;
          case 1:
            break;
          case 2:
            break;
          case 3:
            return 9;
          case 4:
            return 21;
          case 5:
            return 22;
          case 6:
            return 18;
          case 7:
            return 15;
          case 8:
            return 13;
          case 9:
            return 20;
          case 10:
            return 24;
          case 11:
            return 24;
          case 12:
            return 28;
          case 13:
            return 27;
          case 14:
            return 30;
          case 15:
            return 29;
          case 16:
            return 31;
          case 17:
            return 5;
          case 18:
            return "INVALID";
        }
      },
      rules: [
        /^(?:[\r\n]+)/i,
        /^(?:\s+)/i,
        /^(?:#[^\r\n]*)/i,
        /^(?:participant\b)/i,
        /^(?:left of\b)/i,
        /^(?:right of\b)/i,
        /^(?:over\b)/i,
        /^(?:note\b)/i,
        /^(?:title\b)/i,
        /^(?:,)/i,
        /^(?:[^\->:,\r\n"]+)/i,
        /^(?:"[^"]+")/i,
        /^(?:--)/i,
        /^(?:-)/i,
        /^(?:>>)/i,
        /^(?:>)/i,
        /^(?:[^\r\n]+)/i,
        /^(?:$)/i,
        /^(?:.)/i
      ],
      conditions: {
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          inclusive: true
        }
      }
    };
    return lexer2;
  })();
  return parser2.lexer = lexer, Parser.prototype = parser2, parser2.Parser = Parser, new Parser();
})();
function ParseError(message, hash) {
  _.extend(this, hash);
  this.name = "ParseError";
  this.message = message || "";
}
ParseError.prototype = new Error();
Diagram.ParseError = ParseError;
Diagram.parse = function(input) {
  parser.yy = new Diagram();
  parser.yy.parseError = function(message, hash) {
    throw new ParseError(message, hash);
  };
  var diagram = parser.parse(input);
  delete diagram.parseError;
  return diagram;
};
var DIAGRAM_MARGIN = 10;
var ACTOR_MARGIN = 10;
var ACTOR_PADDING = 10;
var SIGNAL_MARGIN = 5;
var SIGNAL_PADDING = 5;
var NOTE_MARGIN = 10;
var NOTE_PADDING = 5;
var NOTE_OVERLAP = 15;
var TITLE_MARGIN = 0;
var TITLE_PADDING = 5;
var SELF_SIGNAL_WIDTH = 20;
var PLACEMENT = Diagram.PLACEMENT;
var LINETYPE = Diagram.LINETYPE;
var ARROWTYPE = Diagram.ARROWTYPE;
var ALIGN_LEFT = 0;
var ALIGN_CENTER = 1;
function AssertException(message) {
  this.message = message;
}
AssertException.prototype.toString = function() {
  return "AssertException: " + this.message;
};
function assert(exp, message) {
  if (!exp) {
    throw new AssertException(message);
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
  };
}
Diagram.themes = {};
function registerTheme(name, theme) {
  Diagram.themes[name] = theme;
}
function getCenterX(box) {
  return box.x + box.width / 2;
}
function getCenterY(box) {
  return box.y + box.height / 2;
}
function clamp(x, min2, max2) {
  if (x < min2) {
    return min2;
  }
  if (x > max2) {
    return max2;
  }
  return x;
}
function wobble(x1, y1, x2, y2) {
  assert(_.all([x1, x2, y1, y2], _.isFinite), "x1,x2,y1,y2 must be numeric");
  var factor = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 25;
  var r1 = clamp(Math.random(), 0.2, 0.8);
  var r2 = clamp(Math.random(), 0.2, 0.8);
  var xfactor = Math.random() > 0.5 ? factor : -factor;
  var yfactor = Math.random() > 0.5 ? factor : -factor;
  var p1 = {
    x: (x2 - x1) * r1 + x1 + xfactor,
    y: (y2 - y1) * r1 + y1 + yfactor
  };
  var p2 = {
    x: (x2 - x1) * r2 + x1 - xfactor,
    y: (y2 - y1) * r2 + y1 - yfactor
  };
  return "C" + p1.x.toFixed(1) + "," + p1.y.toFixed(1) + // start control point
  " " + p2.x.toFixed(1) + "," + p2.y.toFixed(1) + // end control point
  " " + x2.toFixed(1) + "," + y2.toFixed(1);
}
function handRect(x, y, w, h) {
  assert(_.all([x, y, w, h], _.isFinite), "x, y, w, h must be numeric");
  return "M" + x + "," + y + wobble(x, y, x + w, y) + wobble(x + w, y, x + w, y + h) + wobble(x + w, y + h, x, y + h) + wobble(x, y + h, x, y);
}
function handLine(x1, y1, x2, y2) {
  assert(_.all([x1, x2, y1, y2], _.isFinite), "x1,x2,y1,y2 must be numeric");
  return "M" + x1.toFixed(1) + "," + y1.toFixed(1) + wobble(x1, y1, x2, y2);
}
var BaseTheme = function(diagram, options) {
  this.init(diagram, options);
};
_.extend(BaseTheme.prototype, {
  // Init called while creating the Theme
  init: function(diagram, options) {
    this.diagram = diagram;
    this.actorsHeight_ = 0;
    this.signalsHeight_ = 0;
    this.title_ = void 0;
  },
  setupPaper: function(container) {
  },
  draw: function(container) {
    this.setupPaper(container);
    this.layout();
    var titleHeight = this.title_ ? this.title_.height : 0;
    var y = DIAGRAM_MARGIN + titleHeight;
    this.drawTitle();
    this.drawActors(y);
    this.drawSignals(y + this.actorsHeight_);
  },
  layout: function() {
    var diagram = this.diagram;
    var font = this.font_;
    var actors = diagram.actors;
    var signals = diagram.signals;
    diagram.width = 0;
    diagram.height = 0;
    if (diagram.title) {
      var title = this.title_ = {};
      var bb = this.textBBox(diagram.title, font);
      title.textBB = bb;
      title.message = diagram.title;
      title.width = bb.width + (TITLE_PADDING + TITLE_MARGIN) * 2;
      title.height = bb.height + (TITLE_PADDING + TITLE_MARGIN) * 2;
      title.x = DIAGRAM_MARGIN;
      title.y = DIAGRAM_MARGIN;
      diagram.width += title.width;
      diagram.height += title.height;
    }
    _.each(
      actors,
      function(a) {
        var bb2 = this.textBBox(a.name, font);
        a.textBB = bb2;
        a.x = 0;
        a.y = 0;
        a.width = bb2.width + (ACTOR_PADDING + ACTOR_MARGIN) * 2;
        a.height = bb2.height + (ACTOR_PADDING + ACTOR_MARGIN) * 2;
        a.distances = [];
        a.paddingRight = 0;
        this.actorsHeight_ = Math.max(a.height, this.actorsHeight_);
      },
      this
    );
    function actorEnsureDistance(a, b, d) {
      assert(a < b, "a must be less than or equal to b");
      if (a < 0) {
        b = actors[b];
        b.x = Math.max(d - b.width / 2, b.x);
      } else if (b >= actors.length) {
        a = actors[a];
        a.paddingRight = Math.max(d, a.paddingRight);
      } else {
        a = actors[a];
        a.distances[b] = Math.max(d, a.distances[b] ? a.distances[b] : 0);
      }
    }
    _.each(
      signals,
      function(s) {
        var a;
        var b;
        var bb2 = this.textBBox(s.message, font);
        s.textBB = bb2;
        s.width = bb2.width;
        s.height = bb2.height;
        var extraWidth = 0;
        if (s.type == "Signal") {
          s.width += (SIGNAL_MARGIN + SIGNAL_PADDING) * 2;
          s.height += (SIGNAL_MARGIN + SIGNAL_PADDING) * 2;
          if (s.isSelf()) {
            a = s.actorA.index;
            b = a + 1;
            s.width += SELF_SIGNAL_WIDTH;
          } else {
            a = Math.min(s.actorA.index, s.actorB.index);
            b = Math.max(s.actorA.index, s.actorB.index);
          }
        } else if (s.type == "Note") {
          s.width += (NOTE_MARGIN + NOTE_PADDING) * 2;
          s.height += (NOTE_MARGIN + NOTE_PADDING) * 2;
          extraWidth = 2 * ACTOR_MARGIN;
          if (s.placement == PLACEMENT.LEFTOF) {
            b = s.actor.index;
            a = b - 1;
          } else if (s.placement == PLACEMENT.RIGHTOF) {
            a = s.actor.index;
            b = a + 1;
          } else if (s.placement == PLACEMENT.OVER && s.hasManyActors()) {
            a = Math.min(s.actor[0].index, s.actor[1].index);
            b = Math.max(s.actor[0].index, s.actor[1].index);
            extraWidth = -40;
          } else if (s.placement == PLACEMENT.OVER) {
            a = s.actor.index;
            actorEnsureDistance(a - 1, a, s.width / 2);
            actorEnsureDistance(a, a + 1, s.width / 2);
            this.signalsHeight_ += s.height;
            return;
          }
        } else {
          throw new Error("Unhandled signal type:" + s.type);
        }
        actorEnsureDistance(a, b, s.width + extraWidth);
        this.signalsHeight_ += s.height;
      },
      this
    );
    var actorsX = 0;
    _.each(
      actors,
      function(a) {
        a.x = Math.max(actorsX, a.x);
        _.each(a.distances, function(distance, b) {
          if (typeof distance == "undefined") {
            return;
          }
          b = actors[b];
          distance = Math.max(distance, a.width / 2, b.width / 2);
          b.x = Math.max(b.x, a.x + a.width / 2 + distance - b.width / 2);
        });
        actorsX = a.x + a.width + a.paddingRight;
      },
      this
    );
    diagram.width = Math.max(actorsX, diagram.width);
    diagram.width += 2 * DIAGRAM_MARGIN;
    diagram.height += 2 * DIAGRAM_MARGIN + 2 * this.actorsHeight_ + this.signalsHeight_;
    return this;
  },
  // TODO Instead of one textBBox function, create a function for each element type, e.g
  //      layout_title, layout_actor, etc that returns it's bounding box
  textBBox: function(text, font) {
  },
  drawTitle: function() {
    var title = this.title_;
    if (title) {
      this.drawTextBox(title, title.message, TITLE_MARGIN, TITLE_PADDING, this.font_, ALIGN_LEFT);
    }
  },
  drawActors: function(offsetY) {
    var y = offsetY;
    _.each(
      this.diagram.actors,
      function(a) {
        this.drawActor(a, y, this.actorsHeight_);
        this.drawActor(a, y + this.actorsHeight_ + this.signalsHeight_, this.actorsHeight_);
        var aX = getCenterX(a);
        this.drawLine(
          aX,
          y + this.actorsHeight_ - ACTOR_MARGIN,
          aX,
          y + this.actorsHeight_ + ACTOR_MARGIN + this.signalsHeight_
        );
      },
      this
    );
  },
  drawActor: function(actor, offsetY, height) {
    actor.y = offsetY;
    actor.height = height;
    this.drawTextBox(actor, actor.name, ACTOR_MARGIN, ACTOR_PADDING, this.font_, ALIGN_CENTER);
  },
  drawSignals: function(offsetY) {
    var y = offsetY;
    _.each(
      this.diagram.signals,
      function(s) {
        if (s.type == "Signal") {
          if (s.isSelf()) {
            this.drawSelfSignal(s, y);
          } else {
            this.drawSignal(s, y);
          }
        } else if (s.type == "Note") {
          this.drawNote(s, y);
        }
        y += s.height;
      },
      this
    );
  },
  drawSelfSignal: function(signal, offsetY) {
    assert(signal.isSelf(), "signal must be a self signal");
    var textBB = signal.textBB;
    var aX = getCenterX(signal.actorA);
    var x = aX + SELF_SIGNAL_WIDTH + SIGNAL_PADDING;
    var y = offsetY + SIGNAL_PADDING + signal.height / 2 + textBB.y;
    this.drawText(x, y, signal.message, this.font_, ALIGN_LEFT);
    var y1 = offsetY + SIGNAL_MARGIN + SIGNAL_PADDING;
    var y2 = y1 + signal.height - 2 * SIGNAL_MARGIN - SIGNAL_PADDING;
    this.drawLine(aX, y1, aX + SELF_SIGNAL_WIDTH, y1, signal.linetype);
    this.drawLine(aX + SELF_SIGNAL_WIDTH, y1, aX + SELF_SIGNAL_WIDTH, y2, signal.linetype);
    this.drawLine(aX + SELF_SIGNAL_WIDTH, y2, aX, y2, signal.linetype, signal.arrowtype);
  },
  drawSignal: function(signal, offsetY) {
    var aX = getCenterX(signal.actorA);
    var bX = getCenterX(signal.actorB);
    var x = (bX - aX) / 2 + aX;
    var y = offsetY + SIGNAL_MARGIN + 2 * SIGNAL_PADDING;
    this.drawText(x, y, signal.message, this.font_, ALIGN_CENTER);
    y = offsetY + signal.height - SIGNAL_MARGIN - SIGNAL_PADDING;
    this.drawLine(aX, y, bX, y, signal.linetype, signal.arrowtype);
  },
  drawNote: function(note, offsetY) {
    note.y = offsetY;
    var actorA = note.hasManyActors() ? note.actor[0] : note.actor;
    var aX = getCenterX(actorA);
    switch (note.placement) {
      case PLACEMENT.RIGHTOF:
        note.x = aX + ACTOR_MARGIN;
        break;
      case PLACEMENT.LEFTOF:
        note.x = aX - ACTOR_MARGIN - note.width;
        break;
      case PLACEMENT.OVER:
        if (note.hasManyActors()) {
          var bX = getCenterX(note.actor[1]);
          var overlap = NOTE_OVERLAP + NOTE_PADDING;
          note.x = Math.min(aX, bX) - overlap;
          note.width = Math.max(aX, bX) + overlap - note.x;
        } else {
          note.x = aX - note.width / 2;
        }
        break;
      default:
        throw new Error("Unhandled note placement: " + note.placement);
    }
    return this.drawTextBox(note, note.message, NOTE_MARGIN, NOTE_PADDING, this.font_, ALIGN_LEFT);
  },
  /**
   * Draw text surrounded by a box
   */
  drawTextBox: function(box, text, margin, padding, font, align) {
    var x = box.x + margin;
    var y = box.y + margin;
    var w = box.width - 2 * margin;
    var h = box.height - 2 * margin;
    this.drawRect(x, y, w, h);
    if (align == ALIGN_CENTER) {
      x = getCenterX(box);
      y = getCenterY(box);
    } else {
      x += padding;
      y += padding;
    }
    return this.drawText(x, y, text, font, align);
  }
});
if (typeof Snap != "undefined") {
  var xmlns = "http://www.w3.org/2000/svg";
  var LINE = {
    stroke: "#000000",
    "stroke-width": 2,
    // BUG TODO This gets set as a style, not as a attribute. Look at  eve.on("snap.util.attr"...
    fill: "none"
  };
  var RECT = {
    stroke: "#000000",
    "stroke-width": 2,
    fill: "#fff"
  };
  var LOADED_FONTS = {};
  var SnapTheme = function(diagram, options, resume) {
    _.defaults(options, {
      "css-class": "simple",
      "font-size": 16,
      "font-family": "Andale Mono, monospace"
    });
    this.init(diagram, options, resume);
  };
  _.extend(SnapTheme.prototype, BaseTheme.prototype, {
    init: function(diagram, options, resume) {
      BaseTheme.prototype.init.call(this, diagram);
      this.paper_ = void 0;
      this.cssClass_ = options["css-class"] || void 0;
      this.font_ = {
        "font-size": options["font-size"],
        "font-family": options["font-family"]
      };
      var a = this.arrowTypes_ = {};
      a[ARROWTYPE.FILLED] = "Block";
      a[ARROWTYPE.OPEN] = "Open";
      var l = this.lineTypes_ = {};
      l[LINETYPE.SOLID] = "";
      l[LINETYPE.DOTTED] = "6,2";
      var that = this;
      this.waitForFont(function() {
        resume(that);
      });
    },
    // Wait for loading of the font
    waitForFont: function(callback) {
      var fontFamily = this.font_["font-family"];
      if (typeof WebFont == "undefined") {
        throw new Error("WebFont is required (https://github.com/typekit/webfontloader).");
      }
      if (LOADED_FONTS[fontFamily]) {
        callback();
        return;
      }
      WebFont.load({
        custom: {
          families: [fontFamily]
          // TODO replace this with something that reads the css
        },
        classes: false,
        // No need to place classes on the DOM, just use JS Events
        active: function() {
          LOADED_FONTS[fontFamily] = true;
          callback();
        },
        inactive: function() {
          LOADED_FONTS[fontFamily] = true;
          callback();
        }
      });
    },
    addDescription: function(svg, description) {
      var desc = document.createElementNS(xmlns, "desc");
      desc.appendChild(document.createTextNode(description));
      svg.appendChild(desc);
    },
    setupPaper: function(container) {
      var svg = document.createElementNS(xmlns, "svg");
      container.appendChild(svg);
      this.addDescription(svg, this.diagram.title || "");
      this.paper_ = Snap(svg);
      this.paper_.addClass("sequence");
      if (this.cssClass_) {
        this.paper_.addClass(this.cssClass_);
      }
      this.beginGroup();
      var a = this.arrowMarkers_ = {};
      var arrow = this.paper_.path("M 0 0 L 5 2.5 L 0 5 z");
      a[ARROWTYPE.FILLED] = arrow.marker(0, 0, 5, 5, 5, 2.5).attr({ id: "markerArrowBlock" });
      arrow = this.paper_.path("M 9.6,8 1.92,16 0,13.7 5.76,8 0,2.286 1.92,0 9.6,8 z");
      a[ARROWTYPE.OPEN] = arrow.marker(0, 0, 9.6, 16, 9.6, 8).attr({ markerWidth: "4", id: "markerArrowOpen" });
    },
    layout: function() {
      BaseTheme.prototype.layout.call(this);
      this.paper_.attr({
        width: this.diagram.width + "px",
        height: this.diagram.height + "px"
      });
    },
    textBBox: function(text, font) {
      var t = this.createText(text, font);
      var bb = t.getBBox();
      t.remove();
      return bb;
    },
    // For each drawn element, push onto the stack, so it can be wrapped in a single outer element
    pushToStack: function(element) {
      this._stack.push(element);
      return element;
    },
    // Begin a group of elements
    beginGroup: function() {
      this._stack = [];
    },
    // Finishes the group, and returns the <group> element
    finishGroup: function() {
      var g2 = this.paper_.group.apply(this.paper_, this._stack);
      this.beginGroup();
      return g2;
    },
    createText: function(text, font) {
      text = _.invoke(text.split("\n"), "trim");
      var t = this.paper_.text(0, 0, text);
      t.attr(font || {});
      if (text.length > 1) {
        t.selectAll("tspan:nth-child(n+2)").attr({
          dy: "1.2em",
          x: 0
        });
      }
      return t;
    },
    drawLine: function(x1, y1, x2, y2, linetype, arrowhead) {
      var line = this.paper_.line(x1, y1, x2, y2).attr(LINE);
      if (linetype !== void 0) {
        line.attr("strokeDasharray", this.lineTypes_[linetype]);
      }
      if (arrowhead !== void 0) {
        line.attr("markerEnd", this.arrowMarkers_[arrowhead]);
      }
      return this.pushToStack(line);
    },
    drawRect: function(x, y, w, h) {
      var rect = this.paper_.rect(x, y, w, h).attr(RECT);
      return this.pushToStack(rect);
    },
    /**
     * Draws text with a optional white background
     * x,y (int) x,y top left point of the text, or the center of the text (depending on align param)
     * text (string) text to print
     * font (Object)
     * align (string) ALIGN_LEFT or ALIGN_CENTER
     */
    drawText: function(x, y, text, font, align) {
      var t = this.createText(text, font);
      var bb = t.getBBox();
      if (align == ALIGN_CENTER) {
        x = x - bb.width / 2;
        y = y - bb.height / 2;
      }
      t.attr({ x: x - bb.x, y: y - bb.y });
      t.selectAll("tspan").attr({ x });
      this.pushToStack(t);
      return t;
    },
    drawTitle: function() {
      this.beginGroup();
      BaseTheme.prototype.drawTitle.call(this);
      return this.finishGroup().addClass("title");
    },
    drawActor: function(actor, offsetY, height) {
      this.beginGroup();
      BaseTheme.prototype.drawActor.call(this, actor, offsetY, height);
      return this.finishGroup().addClass("actor");
    },
    drawSignal: function(signal, offsetY) {
      this.beginGroup();
      BaseTheme.prototype.drawSignal.call(this, signal, offsetY);
      return this.finishGroup().addClass("signal");
    },
    drawSelfSignal: function(signal, offsetY) {
      this.beginGroup();
      BaseTheme.prototype.drawSelfSignal.call(this, signal, offsetY);
      return this.finishGroup().addClass("signal");
    },
    drawNote: function(note, offsetY) {
      this.beginGroup();
      BaseTheme.prototype.drawNote.call(this, note, offsetY);
      return this.finishGroup().addClass("note");
    }
  });
  var SnapHandTheme = function(diagram, options, resume) {
    _.defaults(options, {
      "css-class": "hand",
      "font-size": 16,
      "font-family": "danielbd"
    });
    this.init(diagram, options, resume);
  };
  _.extend(SnapHandTheme.prototype, SnapTheme.prototype, {
    drawLine: function(x1, y1, x2, y2, linetype, arrowhead) {
      var line = this.paper_.path(handLine(x1, y1, x2, y2)).attr(LINE);
      if (linetype !== void 0) {
        line.attr("strokeDasharray", this.lineTypes_[linetype]);
      }
      if (arrowhead !== void 0) {
        line.attr("markerEnd", this.arrowMarkers_[arrowhead]);
      }
      return this.pushToStack(line);
    },
    drawRect: function(x, y, w, h) {
      var rect = this.paper_.path(handRect(x, y, w, h)).attr(RECT);
      return this.pushToStack(rect);
    }
  });
  registerTheme("snapSimple", SnapTheme);
  registerTheme("snapHand", SnapHandTheme);
}
if (typeof Raphael == "undefined" && typeof Snap == "undefined") {
  throw new Error("Raphael or Snap.svg is required to be included.");
}
if (_.isEmpty(Diagram.themes)) {
  throw new Error("No themes were registered. Please call registerTheme(...).");
}
Diagram.themes.hand = Diagram.themes.snapHand || Diagram.themes.raphaelHand;
Diagram.themes.simple = Diagram.themes.snapSimple || Diagram.themes.raphaelSimple;
Diagram.prototype.drawSVG = function(container, options) {
  var defaultOptions = {
    theme: "hand"
  };
  options = _.defaults(options || {}, defaultOptions);
  if (!(options.theme in Diagram.themes)) {
    throw new Error("Unsupported theme: " + options.theme);
  }
  var div = _.isString(container) ? document.getElementById(container) : container;
  if (div === null || !div.tagName) {
    throw new Error("Invalid container: " + container);
  }
  var Theme = Diagram.themes[options.theme];
  new Theme(this, options, function(drawing) {
    drawing.draw(div);
  });
};
export {
  Diagram as default
};
