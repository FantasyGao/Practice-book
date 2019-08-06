System.register('system', ['moment', 'lodash'], function () {
	'use strict';
	var moment, _;
	return {
		setters: [function (module) {
			moment = module.default;
		}, function (module) {
			_ = module.default;
		}],
		execute: function () {

			const prevDay = moment().subtract('days', 1).format('YYYY-MM-DD');
			console.log(prevDay);

			const obj = { name: '公众号: 全栈者',  description: 'good good study!' };

			console.log(_.get(obj, 'name'));

		}
	};
});
