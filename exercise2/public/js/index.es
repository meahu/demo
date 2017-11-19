class PraiseButton{
	constructor (ele, num) {
		this.flag = 0; //稀释：0-可点击、1-不可点击
		this.ele = ele;
		this.num = num;
	}
	likes () {
		this.ele.click(() => {
			if (this.flag !== 0) return;
			this.flag = 1;
			var self = this;
			if (this.num < 10) {
				this.num++;
				this.ele.removeClass('disable');
				$('#add').addClass('active');
				setTimeout(function(){
					$('#add').removeClass('active');
				}, 500);
				axios.get('/index/update')
				.then(function(response){
					self.flag = 0;
					console.log(response);
				})
				.catch(function(error){
					self.flag = 0;
					console.log(error);
				});
			} else {
				this.num = 0;
				this.ele.addClass('disable');
			}
		})
	}
}

class Thumb extends PraiseButton{
	constructor(ele, num){
		super(ele, num);
	}
}

export default{Thumb}