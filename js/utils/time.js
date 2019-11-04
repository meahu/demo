// 获取几天后的时间
function getDateByNDay (nDay) {
    const d = new Date();
    d.setTime(d.getTime() + (nDay * 24 * 60 * 60 * 1000));
    return d.toGMTString();
}

// 时间转时间戳
function date2timestamp(date) {
   let dd = new Date(date);
   return dd.getTime();
}

