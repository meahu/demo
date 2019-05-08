<script>
	// 简易订阅者和发布者
	function subscriberAndDeliver() {
		this.subscriber = [];

		this.addSubscriber = function (cb) {
			this.subscriber.push(cb)
		}

		this.deliver = function () {
			this.subscriber.forEach((fn) => {
				fn();
			})
		}
	}

	let sd = new subscriberAndDeliver()

	// 订阅
	sd.addSubscriber(() => {
		console.log(`${new Date().getTime()} 订阅1`)
	})

	sd.addSubscriber(() => {
		console.log(`${new Date().getTime()} 订阅2`)
	})

	// 发布
	sd.deliver()
</script>
