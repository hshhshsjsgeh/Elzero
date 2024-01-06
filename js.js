let _data_ = "_data_", _style_ = "color: red";

/*
# _datatype_ (typeof(_data_), typeof _data_)
[1] - string
[2] - number (intger, float, double, hex)                                                           ===> "" equal to `false`, can writed as `1_000_000` or `1e6`
[3] - boolean
[4] - object (array, dictionary)                                                                    ===> {_propertyName_: _data_OR_Method_, ..., "_propertyName_": _data_OR_Method_, ...}
[5] - undefined                                                                                     ===> equal to `false`, if (_nameVar_ undefined)
[6] - null                                                                                          ===> equal to `false`
[7] - NaN                                                                                           ===> concatination of string and number

# _escapeCharacter_
[1] - \\
[2] - \'
[3] - \"
[4] - \n
[5] - \

# _arithmeticOperator_
[1] - +
[2] - -
[3] - *
[4] - /
[5] - %
[6] - **

# _assignmentOperator_
[1] - +=
[2] - -=
[3] - -=
[4] - /=

# _increamentOperator_
[1] - ++_number_                                                                                    ===> pre
[2] - _number_++                                                                                    ===> post
# _decreamentOperator_
[1] - --_number_                                                                                    ===> pre
[2] - _number_--                                                                                    ===> post

# _comparisonOperator_
[1] - >
[2] - <
[3] - >=
[4] - <=
[5] - ==
[6] - !=
[7] - ===                                                                                           ===> value and type
[8] - !==                                                                                           ===> value and type

# _logicalOperator_
[1] - !
[2] - &&
[3] - ||
[4] - &
[5] - |

_data_ _nullishCoalescingOperator_ _data_                                                           ===> if the first data is (undefined or null or 0) return the second data
[1] - ??
[2] - ||

# _event_
[1] - contextmenu
[2] - click
*/
/*
_keywordVar_ _nameVar_ = _dataValue_

_keywordVar_ [_nameVar_OR_Nothing_, ...] = _objectArray_                                            ===> destructuring
_keywordVar_ {_nameVar_OR_Nothing_: _newNameVar_OR_Nothing_ = _defualtData_, ...} = _object_        ===> destructuring

_nameVar_ _assignmentOperator_ _dataValue_
_elementID_                                                                                         ===> created automatically

# _keywordVar_
[1] - var                                                                                           ===> √ redeclared, √ revalue, X get err if didn't initialize, √ window scope
[2] - let                                                                                           ===> X redeclared, √ revalue, √ get err if didn't initialize, X window scope, to set local scope
[3] - const                                                                                         ===> X redeclared, X revalue, √ get err if didn't initialize, X window scope

# _dataValue_
[1] - _data_
[2] - new _datatype_(_object_)
    [1] - Set
    [2] - WeakSet

`_data_ ${_nameVar_} ...`                                                                           ===> _templateLitral_
*/
/*
# _string_._builtinString_
[1] - repeat(_intNumber_)
[2] - charAt(_intNumber_)
[3] - length
[4] - trim()
[5] - toUpperCase()
[6] - toLowercase()
[7] - indexOf(_string_, _intNumberIndex_)                                                           ===> _intNumberIndex_ by default is 0, if not found return -1
[8] - lastIndexOf(_string_, _intNumberIndex_)                                                       ===> _intNumberIndex_ by default is 0, if not found return -1
[9] - slice(_intNumberStart_, _intNumberEnd_)                                                       ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ can be with negative value
[10] - split(_stringSeparator_, _intNumberLimit_)                                                   ===> _intNumberLimit_ by default is infinity
[11] - substring(_intNumberStart_, _intNumberEnd_)                                                  ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ and _intNumberEnd_ can be swaped
[12] - substr(_intNumberStart_, _intNumberLength_)                                                  ===> _intNumberLength_ by default is total length, _intNumberStart_ can be with negative value
[13] - include(_string_, _intNumberLength_)                                                         ===> _intNumberLength_ by default is total length
[14] - startsWith(_string_, _intNumberStart_)                                                       ===> _intNumberStart_ by default is 0
[15] - endsWith(_string_, _intNumberLength_)                                                        ===> _intNumberLength_ by default is total length
# _builtinString__string_
[1] - +                                                                                             ===> to convert string to number
[2] - -                                                                                             ===> to convert string to number
# _builtinString_
[1] - Number(_string_)
# _string__builtinString_
[1] - [_intNumber_]
*/
/*
# _number_._builtinNumber_
[1] - MAX_SAFE_INTEGER
[2] - MIN_SAFE_INTEGER
[3] - MAX_VALUE
[4] - MIN_VALUE
[5] - toString()
[6] - toFixed(_intNumber_)                                                                          ===> to string, not return `NaN`, round `10.65 => 10.7`

# _builtinNumber_
[1] - pareseInt(_string_)
[2] - pareseFloat(_string_)
[3] - Number.isInteger(_data_)
[4] - Number.isNaN(_data_)
[5] - Math.round(_number_)
[6] - Math.ceil(_number_)
[7] - Math.floor(_number_)
[8] - Math.trunc(_number_)                                                                          ===> remove floating point
[9] - Math.max(_number_, ...)
[10] - Math.min(_number_, ...)
[11] - Math.pow(_number_, _number_)
[12] - Math.random()
[13] - Math.PI

# _builtinBoolean_
[1] - Boolean(_data_)
*/
/*
# _array_._builtinArray_
[1] - length
[2] - indexOf(_array_, _intNumberIndex_)                                                            ===> _intNumberIndex_ by default is 0, if not found return -1
[3] - lastIndexOf(_array_, _intNumberIndex_)                                                        ===> _intNumberIndex_ by default is 0, if not found return -1
[4] - slice(_intNumberStart_, _intNumberEnd_)                                                       ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ can be with negative value
[5] - splice(_intNumberStart_, _intNumberRemoved_, _dataAdded_, ...)
[6] - unshift(_data_)                                                                               ===> in the begain
[7] - push(_data_)
[8] - shift()                                                                                       ===> to remove the first element
[9] - pop()                                                                                         ===> to remove the last element
[10] - indexOf(_data_, _intNumberStart_)                                                            ===> _intNumberStart_ by default is 0, if not found is -1
[11] - lastIndexOf(_data_, _intNumberStart_)                                                        ===> _intNumberStart_ by default is 0, _intNumberStart_ is negative, if not found is -1
[12] - includes(_data_, _intNumberStart_)                                                           ===> return 1, _intNumberStart_ by default is 0
[13] - sort()
[14] - reverse()
[15] - concat(_data_, ...)
[16] - join(_stringSeparator_)                                                                      ===> to string

# _higherOrderFunction_
[1] - map((element, index, array) => _data_, _thisData_)                                            ===> will get data as array, _thisData_ returned in function with `this`
[2] - forEach((element, index, array) => _statement_, _thisData_)                                   ===> will get data as array, _thisData_ returned in function with `this`, will not return data
[2] - filter((element, index, array) => _boolean_, _thisData_)                                      ===> will get data as array, _thisData_ returned in function with `this`, if _data_OR_Boolean_ equal to `false` will `continue`
[3] - reduce((accumelator, current, index, array) => _data_, _initData_)                            ===> to collect the `accumelator` and `current` and _initData_
# _array__builtinArray_
[1] - [_intNumber_]
# _builtinArray_
[1] - Array.isArray(_data_)
[2] - Array.prototype.slice.call(_htmlCollection_)
*/
/*
# _builtinObject_
[1] - _object_._propertyName_                                                                       ===> to access and edit
[2] - _object_["_propertyName_"]                                                                    ===> to access and edit
[3] - new Object()                                                                                  ===> to create new object
[4] - Object.create(_object_)                                                                       ===> to create new object, but showed in `_proto_` property
[4] - Object.assign(_object_, ...)                                                                  ===> to create new object, but showed in `_proto_` property
[5] - this                                                                                          ===> to access the parent object
*/
/*
# _objectSet_.builtinSet_                                                                           ===> can't access children
[1] - size
[2] - add()
[3] - delete(_data_)                                                                                ===> return `false` if not found
[4] - clear()
[5] - has(_data_)
[6] - keys()
[7] - values()
[8] - next()
[9] - value
*/
/*
# _objectWeakSet_.builtinWeakSet_                                                                   ===> can't access children
[1] - add()
[2] - delete(_data_)                                                                                ===> return `false` if not found
[3] - clear()
[4] - has(_data_)
*/
/*
# _proCondition_
if (_statementOperator_) {
    _statement_;
    ...
} else if (_statementOperator_) {
    _statement_;
    ...
} ... else {
    _statement_;
    ...
};

# _simpleCondition_
_statementOperator_ ? _statement_ : _statementOperator_ ? _statement_ : ...;
*/
/*
# _switchCondition_
switch (_expressionVar_) {                                                                          ===> must be identical
    case _data_:
    ...
        _statement_;
        ...
        break;
    ...
    default:
        _statement_;
        ...
        break;                                                                                      ===> put this if used in the first of switch condition
}
*/
/*
# _standardForLoop_
_forLoopName_: for (_varInit_; _statementOperator_; _statementAssignmentStep_) {
    _statement_;
    ...
    _sequenceControl_;
};

# _advancedForLoop_
_varInit_
_forLoopName_: for (;;) {
    _statement_;
    ...
    if (_statementOperator_) {
        break;
    };
    _statementAssignmentStep_;
    _sequenceControl_;
};

# _standardWhileLoop_
while (_statementOperator_) {
    _statement_;
    ...
    _statementAssignmentStep_;
    _sequenceControl_;
}

# _doWhileLoop_
do {                                                                                                ===> do the block of code before check condition
    _statement_;
    ...
    _statementAssignmentStep_;
    _sequenceControl_;
} while (_statementOperator_)

# _sequenceControl_
[1] - break
[2] - continue
[3] - break _forLoopName_
[4] - continue _forLoopName_
[5] - _nothing_
*/
/*
# _statndardFunction_
function _funcName_(_argName_ = _argValue_, ..., ..._argNameArray_) {
    _statement_;
    ...
    return _data_OR_This_;
};
_funcName_(_argVar_: _argData_, ...);

# _anonymousFunction_
_keywordVar_ _nameFunVar_ = function (_argName_, ..., ..._argNameArray_) {
    _statement_;
    ...
    return _data_OR_This_;
};
_nameFunVar_(_argVar_: _argData_, ...);

# _arrowFunction_
(_argName_, ..., ..._argNameArray_) => _data;

(_argName_, ..., ..._argNameArray_) => {
    _statement_;
    ...
    return _data_;
}
*/
/*
clear()
typeof(_data_)
typeof _data_
window.alert(_data_);
document.write(_data_);
window.console.log(_data_ + "%c_data_ ...", ..., _style_, ...);
window.console.error(_data_);
window.console.table([_data_, ...]);
"use strict";                                                                                       ===> not with block of code, not with function has default prameters
*/

/*
document._elementObject_._attribute_

# _elementObject_
[1] - getElementById("_elementId_")
[2] - getElementsByTagName("_elementTag")
[3] - getElementsByClassName("_elementClass_")
[4] - querySelector("#_elementId_ ._elementClass_ _elementTag_ ...")
[5] - querySelectorAll("#_elementId_ ._elementClass_ _elementTag_ ...")
[6] - title
[7] - body
[8] - forms
[9] - _elementName_                                                                                 ===> <input name="_elementName_"/>
[10] - links
[11] - styleSheets[_intIndex_].rules[_intIndex_].style._cssStyle_

# _attribute_
[1] - value                                                                                         ===> input
[2] - href                                                                                          ===> a
[3] - innerHTML
[4] - textContent
[5] - innerText
[6] - src                                                                                           ===> img
[7] - alt                                                                                           ===> img
[8] - title                                                                                         ===> img
[9] - id
[10] - className
[11] - getAttribute("_attributeName_")
[12] - setAttribute("_attributeName_", "_value_")
[13] - attributes
[14] - hasAttribute("_attributeName")
[15] - hasAttributes()
[16] - removeAttribute("_attributeName_")
[17] - createAttribute("_attributeName_")
[18] - setAttributeNode(_attributeCreated_)
[19] - createElement("_elementTag_")
[20] - createTextNode("_date_")
[21] - createComment("_data_")
[22] - appendChild(_data_)
[23] - children
[24] - childNodes
[25] - firstChild
[26] - firstElementChild
[27] - lasthild
[28] - lastElementChild
[29] - onclick = _function_
[30] - oncontextmenu = _function_
[31] - onmouseenter = _function_
[32] - onmouseleave = _function_
[33] - onload = _function_
[34] - onscroll = _function_
[35] - onresize = _function_
[36] - onfocus = _function_
[37] - onblur = _function_
[38] - onsubmit = _function_
    [1] - function (event) {
        ...
        event.preventDefault();                                                                     ===> to prevent default action of the element as `a` will prevent go to link
        event.clientX;
        event.clientY;
    }
[39] - click
[40] - focus
[41] - blur
[42] - classList._action_
    [1] - length
    [2] - contains("_elementClass_")
    [3] - item(_intIndex_)
    [4] - add("_elementClass_")
    [5] - remove("_elementClass_")
    [6] - toggle("_elementClass_")
[43] - style._cssStyle_
    [1] - _cssProperty_
    [2] - cssText
    [3] - removeProperty("_propertyName_")
    [4] - setProperty("_propertyName_", "_value_", ...)
[44] - before(_data_)                                                                               ===> element
[45] - after(_data_)                                                                                ===> element
[46] - append(_data_)                                                                               ===> element
[47] - prepend(_data_)                                                                              ===> element
[48] - remove()                                                                                     ===> element
[49] - nextSibling
[50] - nextElementSibling
[51] - previousSibling
[52] - previousElementSibling
[53] - parentElement
[54] - cloneNode(_boolWithAttribute_)
[55] - addEventListener("_event_", _function_)                                                      ===> can add more than one function, can created with undefined element, the bessssst
    [1] - function (event) {
        ...
        event.target._attribute_;
        event.preventDefault();                                                                     ===> to prevent default action of the element as `a` will prevent go to link
        event.clientX;
        event.clientY;
    }
*/

/*
window._browserObject_

# _browserObject_
[1] - alert(_data_)
[2] - confirm(_data_)                                                                               ===> yes or no, added to variable
[3] - prompt(_data_, _data_)                                                                        ===> to get data, added to variable, second _data_ is default input
[4] - setTimeout(_function_, _intTimeMillisecond_, _arguments_, ...)                                ===> if add function without ()
[5] - clearTimeout(_settimeoutFunctionVar_)
[4] - setInterval(_function_, _intTimeMillisecond_, _arguments_, ...)                               ===> if add function without ()
[5] - clearInterval(_settimeoutFunctionVar_)
[6] - location._parameter_                                                                          ===> _parameter_ can be set with equalize
    [1] - href
    [2] - host
    [3] - hostname
    [4] - protocol
    [5] - hash
    [6] - reload()
    [7] - replace("_url_")                                                                          ===> to edit history of visited websites
    [8] - assign("_ur_")                                                                            ===> to edit history of visited websites
[7] - close()
[8] - open("_url_", "__target_", "_feature_")                                                       ===> __target_ as _self and _blank, _feature_ as "width=_int_,height=_int_,top=_int_,bottom=_int_,right=_int_,left=_int_"
[9] - history._parameter_
    [1] - length
    [2] - back()
    [3] - forward()
    [4] - go(_intStep_)                                                                             ===> _intStep_ can be negative
[10] - stop()
[11] - print()
[12] - focus()
[13] - scrollTo(_x_, _y_, "_behavior_")
       scroll(_x_, _y_, "_behavior_")                                                               ===> not supported
    [1] - smooth
[14] - scrollBy(_x_, _y_)                                                                           ===> to scroll after scroll
[15] - pageXOffset
[16] - pageYOffset
[17] - scrollX
[18] - scrollY
[19] - localStorage._localstorageFunction_
    [1] - setItem("_localstorageProperty_", _data_)
    [2] - getItem("_localstorageProperty_")
    [3] - _localstorageProperty_
    [4] - ["_localstorageProperty_"]
    [5] - removeItem("_localstorageProperty_")
    [6] - clear()
    [7] - key(_intIndex_)
[19] - sessionStorage._localstorageFunction_
    [1] - setItem("_localstorageProperty_", _data_)
    [2] - getItem("_localstorageProperty_")
    [3] - _localstorageProperty_
    [4] - ["_localstorageProperty_"]
    [5] - removeItem("_localstorageProperty_")
    [6] - clear()
    [7] - key(_intIndex_)
*/

/*
_canvasElement_.getContext("2d")._canvasStyleFuncton_;
[1] - fillStyle = "_color_"
[2] - globalAlpha = _intToOne_
[2] - createLinearGradient(_x1_, _y1_, _x2_, _y2_)
      addColorStop(_index_, _color_)
[3] - shadowColor = _color_
      shadowBlur = _int_
      shadowOffsetX = _int_
      shadowOffsetY = _int_
[3] - createPattern(_imageElement_, "_intRepeat_")                                                  ===> in a variable
    [1] - repeat
    [2] - no-repeat
    [3] - repeat-x
    [4] - repeat-y
[4] - scale(_x_, _y_)                                                                               ===> and scale points
[5] - translate(_xAdded_, _yAdded_)
[4] - fillRect(_x_, _y_, _w_, _h_)
      clearRect(_x_, _y_, _w_, _h_)
[5] - strokeStyle = _color_
[6] - lineWidth = _int_
[7] - strokeRect(_x_, _y_, _w_, _h_)
[8] - font = "_fontStyle_"
[9] - textAlign = "_align_"
    [1] - start
    [2] - end
    [3] - left
    [4] - right
[9] - fillText("_string_", _x_, _y_)
[10] - strokeText("_string_", _x_, _y_)
[11] - beginPath()
[12] - moveTo(_x_, _y_)                                                                             ===> start
[13] - lineTo(_x_, _y_)
       ...
[14] - arc(_x_, _y_, _radius_, _startAngleRad_, _endAngleRad_, _boolAntiClockWise)                  ===> 1 rad = Math.PI
[15] - closePath()
[16] - stroke()
[17] - fill()
[18] - save()
[19] - restore()
*/

document.body

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// http://es6-features.org/#Constants
// https://leetcode.com/
// https://babeljs.io/


let canvas = Array.prototype.slice.call(document.getElementsByClassName("logo-cnvs")).map(e => e.getContext("2d")),
    circle = 2 * Math.PI;
for (let i = 1; i < 20; i++) {
    canvas.map(e => e.fillRect(0, 50 * i, 1000, 1));
    canvas.map(e => e.fillRect(50 * i, 0, 1, 1000));
};
canvas.map(e => e.beginPath());
canvas.map(e => e.lineWidth = 50);
canvas.map(e => e.arc(1.5 * 50, 1.5 * 50, 1 * 50, (90/360) * circle, (330/360) * circle));
canvas.map(e => e.arc(4.5 * 50, 6.5 * 50, 1 * 50, (-30/360) * circle, (210/360) * circle));
canvas.map(e => e.arc(7.5 * 50, 1.5 * 50, 1 * 50, (-150/360) * circle, (90/360) * circle));
canvas.map(e => e.closePath());
canvas.map(e => e.stroke());