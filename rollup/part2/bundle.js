'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var moment = _interopDefault(require('moment'));
var _ = _interopDefault(require('lodash'));

const prevDay = moment().subtract('days', 1).format('YYYY-MM-DD');
console.log(prevDay);

const obj = { name: '公众号: 全栈者',  description: 'good good study!' };

console.log(_.get(obj, 'name'));
