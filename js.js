let _data_ = "_data_", _style_ = "color: red";

/*
# _datatype_ (typeof(_data_), typeof _data_)
[1] - string
[2] - number (intger, float, double, hex)                                           ===> "" equal to `false`, can writed as `1_000_000` or `1e6`
[3] - boolean
[4] - object (array, dictionary)
[5] - undefined                                                                     ===> equal to `false`, if (_nameVar_ undefined)
[6] - null                                                                          ===> equal to `false`
[7] - NaN                                                                           ===> concatination of string and number

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
[1] - ++_number_                                                                    ===> pre
[2] - _number_++                                                                    ===> post
# _decreamentOperator_
[1] - --_number_                                                                    ===> pre
[2] - _number_--                                                                    ===> post

# _comparisonOperator_
[1] - >
[2] - <
[3] - >=
[4] - <=
[5] - ==
[6] - !=
[7] - ===                                                                           ===> value and type
[8] - !==                                                                           ===> value and type

# _logicalOperator_
[1] - !
[2] - &&
[3] - ||
[4] - &
[5] - |

_data_ _nullishCoalescingOperator_ _data_                                           ===> if the first data is (undefined or null or 0) return the second data
[1] - ??
[2] - ||
*/
/*
_keywordVar_ _nameVar_ = _dataValue_
_nameVar_ _assignmentOperator_ _dataValue_
_elementID_                                                                         ===> created automatically

# _keywordVar_
[1] - var                                                                           ===> √ redeclared, √ revalue, X get err if didn't initialize, √ window scope
[2] - let                                                                           ===> X redeclared, √ revalue, √ get err if didn't initialize, X window scope
[3] - const                                                                         ===> X redeclared, X revalue, √ get err if didn't initialize, X window scope

`_data_ ${_nameVar_} ...`                                                           ===> _templateLitral_
*/
/*
# _string_._builtinString_
[1] - repeat(_intNumber_)
[2] - charAt(_intNumber_)
[3] - length
[4] - trim()
[5] - toUpperCase()
[6] - toLowercase()
[7] - indexOf(_string_, _intNumberIndex_)                                           ===> _intNumberIndex_ by default is 0, if not found return -1
[8] - lastIndexOf(_string_, _intNumberIndex_)                                       ===> _intNumberIndex_ by default is 0, if not found return -1
[9] - slice(_intNumberStart_, _intNumberEnd_)                                       ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ can be with negative value
[10] - split(_stringSeparator_, _intNumberLimit_)                                   ===> _intNumberLimit_ by default is infinity
[11] - substring(_intNumberStart_, _intNumberEnd_)                                  ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ and _intNumberEnd_ can be swaped
[12] - substr(_intNumberStart_, _intNumberLength_)                                  ===> _intNumberLength_ by default is total length, _intNumberStart_ can be with negative value
[13] - include(_string_, _intNumberLength_)                                         ===> _intNumberLength_ by default is total length
[14] - startsWith(_string_, _intNumberStart_)                                       ===> _intNumberStart_ by default is 0
[15] - endsWith(_string_, _intNumberLength_)                                        ===> _intNumberLength_ by default is total length
# _builtinString__string_
[1] - +                                                                             ===> to convert string to number
[2] - -                                                                             ===> to convert string to number
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
[6] - toFixed(_intNumber_)                                                          ===> to string, not return `NaN`, round `10.65 => 10.7`

# _builtinNumber_
[1] - pareseInt(_string_)
[2] - pareseFloat(_string_)
[3] - Number.isInteger(_data_)
[4] - Number.isNaN(_data_)
[5] - Math.round(_number_)
[6] - Math.ceil(_number_)
[7] - Math.floor(_number_)
[8] - Math.trunc(_number_)                                                          ===> remove floating point
[9] - Math.max(_number_, ...)
[10] - Math.min(_number_, ...)
[11] - Math.pow(_number_, _number_)
[12] - Math.random()

# _builtinBoolean_
[1] - Boolean(_data_)
*/
/*
# _array_._builtinArray_
[1] - length
[2] - indexOf(_array_, _intNumberIndex_)                                            ===> _intNumberIndex_ by default is 0, if not found return -1
[3] - lastIndexOf(_array_, _intNumberIndex_)                                        ===> _intNumberIndex_ by default is 0, if not found return -1
[4] - slice(_intNumberStart_, _intNumberEnd_)                                       ===> by default _intNumberEnd_ is to end and not include _intNumberEnd_, _intNumberStart_ can be with negative value
[5] - splice(_intNumberStart_, _intNumberRemoved_, _dataAdded_, ...)
[6] - unshift(_data_)                                                               ===> in the begain
[7] - push(_data_)
[8] - shift()                                                                       ===> to remove the first element
[9] - pop()                                                                         ===> to remove the last element
[10] - indexOf(_data_, _intNumberStart_)                                            ===> _intNumberStart_ by default is 0, if not found is -1
[11] - lastIndexOf(_data_, _intNumberStart_)                                        ===> _intNumberStart_ by default is 0, _intNumberStart_ is negative, if not found is -1
[12] - includes(_data_, _intNumberStart_)                                           ===> return 1, _intNumberStart_ by default is 0
[13] - sort()
[14] - reverse()
[15] - concat(_data_, ...)
[16] - join(_stringSeparator_)                                                      ===> to string
# _array__builtinArray_
[1] - [_intNumber_]
# _builtinArray_
[1] - Array.isArray(_data_)
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
switch (_expressionVar_) {                                                          ===> must be identical
    case _data_:
    ...
        _statement_;
        ...
        break;
    ...
    default:
        _statement_;
        ...
        break;                                                                      ===> put this if used in the first of switch condition
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
do {                                                                                ===> do the block of code before check condition
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
    return _data_;
};
_funcName_(_argData_, ...);

# _anonymousFunction_
_keywordVar_ _nameFunVar_ = function (_argName_, ..., ..._argNameArray_) {
    _statement_;
    ...
    return _data_;
};
_nameFunVar_(_argData_, ...);

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
console.log(_data_ + "%c_data_ ...", ..., _style_, ...);
console.error(_data_);
console.table([_data_, ...]);
*/

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// http://es6-features.org/#Constants
// https://leetcode.com/
// https://babeljs.io/