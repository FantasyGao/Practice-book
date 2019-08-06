(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('moment'), require('lodash')) :
	typeof define === 'function' && define.amd ? define(['moment', 'lodash'], factory) :
	(global = global || self, factory(global.moment, global._));
}(this, function (moment, _) { 'use strict';

	moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
	_ = _ && _.hasOwnProperty('default') ? _['default'] : _;

	const prevDay = moment().subtract('days', 1).format('YYYY-MM-DD');
	console.log(prevDay);

	const obj = { name: '公众号: 全栈者',  description: 'good good study!' };

	console.log(_.get(obj, 'name'));

}));
