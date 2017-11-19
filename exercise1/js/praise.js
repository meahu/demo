class PraiseButton{
	constructor (ele, num) {
		this.ele = ele;
		this.num = num;
	}
	likes () {
		this.ele.click(() => {
			if (this.num < 10) {
				this.num++;
				this.ele.removeClass('disable');
				$('#add').addClass('active');
				setTimeout(function(){
					$('#add').removeClass('active');
				}, 500)
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