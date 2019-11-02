// 获取几天后的时间
function getDateByNDay (nDay) {
    const d = new Date();
    d.setTime(d.getTime() + (nDay * 24 * 60 * 60 * 1000));
    return d.toGMTString();
}
