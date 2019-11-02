获取小数部分
```
/**
* 获取小数部分
* @param value Number String
* @return string 小数部分，不含小数点
*/
function getDecimal(value) {
    value = value + '';
    let index = value.indexOf('.');
    return value.substr(index + 1);
}
```

格式化千分符
```
/**
* 格式化千分符
* @describe 只处理了非小数部分的千分符，小数后原样显示
* @param value Number String
* @return string
*/
function millimeterFormat(value) {
    var reg=/\d{1,3}(?=(\d{3})+$)/g;   
    let decimal = getDecimal(value);
    value = parseInt(value);
    return (value + '').replace(reg, '$&,') + '.' + decimal;  
}
···
