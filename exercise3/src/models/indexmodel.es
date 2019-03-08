import rpA from 'request-promise'
class indexModel{
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const options = {
			uri: 'http://localhost/praise.php',
			method: 'GET'
		}
		return new Promise((resolve, reject)=>{
			rpA(options).then(function(result){
				console.log(result);
				const info = JSON.parse(result);
				if (info) {
					resolve({data:info.result});
				} else {
					reject({});
				}
			})
		})
	}
}

export default indexModel