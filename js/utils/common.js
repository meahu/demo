// 获取 cookie
getCookie() {
  let cookie = document.cookie;
  let cookieObj = {};
  cookie.split(';').forEach(item => {
      if(item) {
          let arr = item.split('=');
          let key = arr[0].trim();
          let value = arr[1].trim();
          cookieObj[key] = value;
      }
  })
  return cookieObj;
}
