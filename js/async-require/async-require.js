module.exports = async function(url) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      type: 'get',
      url: url,
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      }
    });
  });
};
