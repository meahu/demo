const url = require('url');
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const spiderTarget = 'https://maoyan.com/query'
const app = express();

app.use('/', (req, res) => {
	const kw = url.parse(req.url, true).query.kw;

	request(`${spiderTarget}?kw=${kw}`, (err, response, body) => {
		if (!err && response.statusCode === 200) {
			let result = [];
			// 抓回来的数据
			const $ = cheerio.load(body);
			// 关键数据
			const movieArr = $('dd', '.movie-list');

			// 解析关键数据
			for (let i = 0; i < movieArr.length; i++) {
				let link = $(movieArr[i]).find($('.movie-item a'));
				let uri = link[0].attribs.href;
				let imgSrc = link[0].children[1].children[3].attribs['data-src']
				let title = $(movieArr[i]).find($('.movie-item-title')).attr('title');
				let subtitle = $(movieArr[i]).find($('.movie-item-subtitle')).text();
				let value = $(movieArr[i]).find($('.channel-detail-orange .integer')).text() + $(movieArr[i]).find($('.channel-detail-orange .fraction')).text();
				let type = $(movieArr[i]).find($('.movie-item-cat')).text()
				let pub = $(movieArr[i]).find($('.movie-item-pub')).text()

				result.push({
					uri: uri,
					imgSrc: imgSrc,
					title: title,
					subtitle: subtitle,
					value: value,
					type: type,
					pub: pub
				})
			}
			res.send(result);
		} else {
			res.send([]);
		}
	})
});

app.listen(3001);
