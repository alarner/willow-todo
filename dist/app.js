(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _RootComponent = require('./components/root/src/component');

var _RootComponent2 = _interopRequireWildcard(_RootComponent);

var root = new _RootComponent2['default']();

var ReactRoot = root.react;
React.render(React.createElement(ReactRoot, null), document.getElementById('app'));

// React.render(root.react.render(), document.getElementById('app'));

},{"./components/root/src/component":6}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _WillowComponent = require('../../../node_modules/willow/Component');

var _WillowComponent2 = _interopRequireWildcard(_WillowComponent);

var _errors = require('./errors');

var _errors2 = _interopRequireWildcard(_errors);

var _events = require('./events');

var _events2 = _interopRequireWildcard(_events);

var _models = require('./models');

var _models2 = _interopRequireWildcard(_models);

exports['default'] = React.createClass({
	displayName: 'component',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'input' },
			React.createElement('input', { type: 'text', ref: 'todoInput' }),
			React.createElement(
				'button',
				{ type: 'button' },
				'Add Todo'
			)
		);
	}
});

// export default class extends WillowComponent {
// 	constructor(settings) {
// 		super(settings);
// 		this.description = 'A component for entering new to-do items';
// 		this.route = '/';
// 		this.set('errors', errors);
// 		this.set('events', events);
// 		this.set('models', models);

// 		this.react =
// 	}
// };
module.exports = exports['default'];

},{"../../../node_modules/willow/Component":10,"./errors":3,"./events":4,"./models":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// BAD_STATE_OBJECT: {
// 	description: 'The state object that you specified caused an error.',
// 	status: -1
// }

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// navigate: {
// 	description: 'Triggered when a user wants to navigate to a new page.',
// 	handlers: {
// 		execute: {
// 			dependencies: [],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// Change the page
// 			}
// 		},
// 		postExecute: {
// 			dependencies: ['execute'],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// do other stuff
// 			}
// 		},
// 		track: {
// 			dependencies: [],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// track in GA
// 			}
// 		}
// 	}
// }

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// user: {
// 	test: 'test',
// 	test2: 'test'
// }

},{}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _WillowComponent2 = require('../../../node_modules/willow/Component');

var _WillowComponent3 = _interopRequireWildcard(_WillowComponent2);

var _InputComponent = require('../../input/src/component');

var _InputComponent2 = _interopRequireWildcard(_InputComponent);

var _errors = require('./errors');

var _errors2 = _interopRequireWildcard(_errors);

var _events = require('./events');

var _events2 = _interopRequireWildcard(_events);

var _models = require('./models');

var _models2 = _interopRequireWildcard(_models);

var _default = (function (_WillowComponent) {
	var _class = function _default(settings) {
		_classCallCheck(this, _class);

		_get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, settings);
		this.description = 'The root component for our to-do application.';
		this.route = '/';
		this.set('errors', _errors2['default']);
		this.set('events', _events2['default']);
		this.set('models', _models2['default']);

		this.react = React.createClass({
			displayName: 'react',

			render: function render() {
				return React.createElement(
					'div',
					{ className: 'commentBox' },
					React.createElement(_InputComponent2['default'], null)
				);
			}
		});
	};

	_inherits(_class, _WillowComponent);

	return _class;
})(_WillowComponent3['default']);

exports['default'] = _default;
;
module.exports = exports['default'];

},{"../../../node_modules/willow/Component":10,"../../input/src/component":2,"./errors":7,"./events":8,"./models":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// BAD_STATE_OBJECT: {
// 	description: 'The state object that you specified caused an error.',
// 	status: -1
// }

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// navigate: {
// 	description: 'Triggered when a user wants to navigate to a new page.',
// 	handlers: {
// 		execute: {
// 			dependencies: [],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// Change the page
// 			}
// 		},
// 		postExecute: {
// 			dependencies: ['execute'],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// do other stuff
// 			}
// 		},
// 		track: {
// 			dependencies: [],
// 			policies: [],
// 			run: function(e, resolve, reject) {
// 				// track in GA
// 			}
// 		}
// 	}
// }

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {};
module.exports = exports["default"];

// user: {
// 	test: 'test',
// 	test2: 'test'
// }

},{}],10:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});
var coreTypes = {
	errors: {
		EVENT_NOT_FOUND: {
			description: 'Could not find an event called {{ eventName }}.',
			status: 404
		},
		UNKNOWN_TYPE: {
			description: 'Could not set or register a type called {{ typeName }}.',
			status: 404
		}
	},
	events: {},
	models: {}
};
var internals = {
	errors: {},
	events: {},
	models: {}
};

var normalizeType = function normalizeType(type, singular) {
	type = type.toLowerCase();
	if (singular) type += 's';
	if (!internals[type]) {
		var exception = mergeObjs(coreErrors.UNKNOWN_TYPE, { params: { typeName: type } });
	}
	return type;
};

var mergeObjs = function mergeObjs(obj1, obj2) {
	var finalObj = {};
	for (var i in obj1) {
		finalObj[i] = obj1[i];
	}
	for (var i in obj2) {
		finalObj[i] = obj2[i];
	}
	return finalObj;
};

var component = function component(render) {
	return React.createClass({
		render: render
	});
};

var _default = (function () {
	var _class = function _default(settings) {
		_classCallCheck(this, _class);

		this.description = '';
		this.route = null;
		this.settings = settings;
	};

	_createClass(_class, [{
		key: 'set',

		// Sets all errors, models, or events
		value: function set(type, value) {
			type = normalizeType(type);
			internals[type] = mergeObjs(coreTypes[type], value);
		}
	}, {
		key: 'get',

		// Gets all errors, models, events, or a specific error, model, or event
		value: function get(type, key) {
			type = normalizeType(type);
			if (key) {
				return internals[type][key];
			}
			return internals[type];
		}
	}, {
		key: 'register',

		// Adds a new error, model, or event
		value: function register(type, key, value) {
			type = normalizeType(type, true);
			internals[type][key] = value;
		}
	}, {
		key: 'unregister',

		// Removes an error, model, or event
		value: function unregister(type, key) {
			type = normalizeType(type, true);
			delete internals[type][key];
		}
	}, {
		key: 'trigger',
		value: function trigger(eventName, data) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				if (!_this.events[eventName]) return reject(_this.error('EVENT_NOT_FOUND', { eventName: eventName }));
			});
		}
	}, {
		key: 'error',
		value: function error(name, params) {
			if (!this.errors[name]) {
				var errorObj = {
					description: 'Could not find an error called {{ name }}. Params = {{ params }}.',
					status: 404
				};
				return mergeObjs(errorObj, { params: { name: name, params: JSON.stringify(params) } });
			}

			return mergeObjs(this.errors[name], { params: params });
		}
	}]);

	return _class;
})();

exports['default'] = _default;
;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGFybmVyL1Byb2plY3RzL3dpbGxvdy10b2RvL2FwcC5qcyIsIi9ob21lL2FsYXJuZXIvUHJvamVjdHMvd2lsbG93LXRvZG8vY29tcG9uZW50cy9pbnB1dC9zcmMvY29tcG9uZW50LmpzIiwiL2hvbWUvYWxhcm5lci9Qcm9qZWN0cy93aWxsb3ctdG9kby9jb21wb25lbnRzL2lucHV0L3NyYy9lcnJvcnMuanMiLCIvaG9tZS9hbGFybmVyL1Byb2plY3RzL3dpbGxvdy10b2RvL2NvbXBvbmVudHMvaW5wdXQvc3JjL2V2ZW50cy5qcyIsIi9ob21lL2FsYXJuZXIvUHJvamVjdHMvd2lsbG93LXRvZG8vY29tcG9uZW50cy9pbnB1dC9zcmMvbW9kZWxzLmpzIiwiL2hvbWUvYWxhcm5lci9Qcm9qZWN0cy93aWxsb3ctdG9kby9jb21wb25lbnRzL3Jvb3Qvc3JjL2NvbXBvbmVudC5qcyIsIi9ob21lL2FsYXJuZXIvUHJvamVjdHMvd2lsbG93LXRvZG8vY29tcG9uZW50cy9yb290L3NyYy9lcnJvcnMuanMiLCIvaG9tZS9hbGFybmVyL1Byb2plY3RzL3dpbGxvdy10b2RvL2NvbXBvbmVudHMvcm9vdC9zcmMvZXZlbnRzLmpzIiwiL2hvbWUvYWxhcm5lci9Qcm9qZWN0cy93aWxsb3ctdG9kby9jb21wb25lbnRzL3Jvb3Qvc3JjL21vZGVscy5qcyIsIi9ob21lL2FsYXJuZXIvUHJvamVjdHMvd2lsbG93LXRvZG8vbm9kZV9tb2R1bGVzL3dpbGxvdy9Db21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzZCQ0EwQixpQ0FBaUM7Ozs7QUFFM0QsSUFBSSxJQUFJLEdBQUcsZ0NBQW1CLENBQUM7O0FBRy9CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FDVixv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QUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztHQUM3Qjs7Ozs7U0FHUyxvQkFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLE9BQUksR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFVBQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzVCOzs7U0FFTSxpQkFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFOzs7QUFDeEIsVUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdkMsUUFBRyxDQUFDLE1BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUN6QixPQUFPLE1BQU0sQ0FBQyxNQUFLLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFeEUsQ0FBQyxDQUFDO0dBQ0g7OztTQUVJLGVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtBQUNuQixPQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0QixRQUFJLFFBQVEsR0FBRztBQUNkLGdCQUFXLEVBQUUsbUVBQW1FO0FBQ2hGLFdBQU0sRUFBRSxHQUFHO0tBQ1gsQ0FBQztBQUNGLFdBQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkY7O0FBRUQsVUFBTyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0dBQ3hEOzs7Ozs7O0FBQ0QsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm9vdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcm9vdC9zcmMvY29tcG9uZW50JztcblxudmFyIHJvb3QgPSBuZXcgUm9vdENvbXBvbmVudCgpO1xuXG5cbnZhciBSZWFjdFJvb3QgPSByb290LnJlYWN0O1xuUmVhY3QucmVuZGVyKFxuICA8UmVhY3RSb290IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cbi8vIFJlYWN0LnJlbmRlcihyb290LnJlYWN0LnJlbmRlcigpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsImltcG9ydCBXaWxsb3dDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dpbGxvdy9Db21wb25lbnQnO1xuaW1wb3J0IGVycm9ycyBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBtb2RlbHMgZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwidG9kb0lucHV0XCIgLz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+QWRkIFRvZG88L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgV2lsbG93Q29tcG9uZW50IHtcbi8vIFx0Y29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbi8vIFx0XHRzdXBlcihzZXR0aW5ncyk7XG4vLyBcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICdBIGNvbXBvbmVudCBmb3IgZW50ZXJpbmcgbmV3IHRvLWRvIGl0ZW1zJztcbi8vIFx0XHR0aGlzLnJvdXRlID0gJy8nO1xuLy8gXHRcdHRoaXMuc2V0KCdlcnJvcnMnLCBlcnJvcnMpO1xuLy8gXHRcdHRoaXMuc2V0KCdldmVudHMnLCBldmVudHMpO1xuLy8gXHRcdHRoaXMuc2V0KCdtb2RlbHMnLCBtb2RlbHMpO1xuXG4vLyBcdFx0dGhpcy5yZWFjdCA9IFxuLy8gXHR9XG4vLyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHQvLyBCQURfU1RBVEVfT0JKRUNUOiB7XG5cdC8vIFx0ZGVzY3JpcHRpb246ICdUaGUgc3RhdGUgb2JqZWN0IHRoYXQgeW91IHNwZWNpZmllZCBjYXVzZWQgYW4gZXJyb3IuJyxcblx0Ly8gXHRzdGF0dXM6IC0xXG5cdC8vIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHQvLyBuYXZpZ2F0ZToge1xuXHQvLyBcdGRlc2NyaXB0aW9uOiAnVHJpZ2dlcmVkIHdoZW4gYSB1c2VyIHdhbnRzIHRvIG5hdmlnYXRlIHRvIGEgbmV3IHBhZ2UuJyxcblx0Ly8gXHRoYW5kbGVyczoge1xuXHQvLyBcdFx0ZXhlY3V0ZToge1xuXHQvLyBcdFx0XHRkZXBlbmRlbmNpZXM6IFtdLFxuXHQvLyBcdFx0XHRwb2xpY2llczogW10sXG5cdC8vIFx0XHRcdHJ1bjogZnVuY3Rpb24oZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdC8vIFx0XHRcdFx0Ly8gQ2hhbmdlIHRoZSBwYWdlXG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0sXG5cdC8vIFx0XHRwb3N0RXhlY3V0ZToge1xuXHQvLyBcdFx0XHRkZXBlbmRlbmNpZXM6IFsnZXhlY3V0ZSddLFxuXHQvLyBcdFx0XHRwb2xpY2llczogW10sXG5cdC8vIFx0XHRcdHJ1bjogZnVuY3Rpb24oZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdC8vIFx0XHRcdFx0Ly8gZG8gb3RoZXIgc3R1ZmZcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSxcblx0Ly8gXHRcdHRyYWNrOiB7XG5cdC8vIFx0XHRcdGRlcGVuZGVuY2llczogW10sXG5cdC8vIFx0XHRcdHBvbGljaWVzOiBbXSxcblx0Ly8gXHRcdFx0cnVuOiBmdW5jdGlvbihlLCByZXNvbHZlLCByZWplY3QpIHtcblx0Ly8gXHRcdFx0XHQvLyB0cmFjayBpbiBHQVxuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcblx0Ly8gdXNlcjoge1xuXHQvLyBcdHRlc3Q6ICd0ZXN0Jyxcblx0Ly8gXHR0ZXN0MjogJ3Rlc3QnXG5cdC8vIH1cbn07IiwiaW1wb3J0IFdpbGxvd0NvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2lsbG93L0NvbXBvbmVudCc7XG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSAnLi4vLi4vaW5wdXQvc3JjL2NvbXBvbmVudCc7XG5pbXBvcnQgZXJyb3JzIGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IG1vZGVscyBmcm9tICcuL21vZGVscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBXaWxsb3dDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuXHRcdHN1cGVyKHNldHRpbmdzKTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ1RoZSByb290IGNvbXBvbmVudCBmb3Igb3VyIHRvLWRvIGFwcGxpY2F0aW9uLic7XG5cdFx0dGhpcy5yb3V0ZSA9ICcvJztcblx0XHR0aGlzLnNldCgnZXJyb3JzJywgZXJyb3JzKTtcblx0XHR0aGlzLnNldCgnZXZlbnRzJywgZXZlbnRzKTtcblx0XHR0aGlzLnNldCgnbW9kZWxzJywgbW9kZWxzKTtcblxuXHRcdHRoaXMucmVhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudEJveFwiPlxuXHRcdFx0XHRcdFx0PElucHV0Q29tcG9uZW50IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdC8vIEJBRF9TVEFURV9PQkpFQ1Q6IHtcblx0Ly8gXHRkZXNjcmlwdGlvbjogJ1RoZSBzdGF0ZSBvYmplY3QgdGhhdCB5b3Ugc3BlY2lmaWVkIGNhdXNlZCBhbiBlcnJvci4nLFxuXHQvLyBcdHN0YXR1czogLTFcblx0Ly8gfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdC8vIG5hdmlnYXRlOiB7XG5cdC8vIFx0ZGVzY3JpcHRpb246ICdUcmlnZ2VyZWQgd2hlbiBhIHVzZXIgd2FudHMgdG8gbmF2aWdhdGUgdG8gYSBuZXcgcGFnZS4nLFxuXHQvLyBcdGhhbmRsZXJzOiB7XG5cdC8vIFx0XHRleGVjdXRlOiB7XG5cdC8vIFx0XHRcdGRlcGVuZGVuY2llczogW10sXG5cdC8vIFx0XHRcdHBvbGljaWVzOiBbXSxcblx0Ly8gXHRcdFx0cnVuOiBmdW5jdGlvbihlLCByZXNvbHZlLCByZWplY3QpIHtcblx0Ly8gXHRcdFx0XHQvLyBDaGFuZ2UgdGhlIHBhZ2Vcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSxcblx0Ly8gXHRcdHBvc3RFeGVjdXRlOiB7XG5cdC8vIFx0XHRcdGRlcGVuZGVuY2llczogWydleGVjdXRlJ10sXG5cdC8vIFx0XHRcdHBvbGljaWVzOiBbXSxcblx0Ly8gXHRcdFx0cnVuOiBmdW5jdGlvbihlLCByZXNvbHZlLCByZWplY3QpIHtcblx0Ly8gXHRcdFx0XHQvLyBkbyBvdGhlciBzdHVmZlxuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9LFxuXHQvLyBcdFx0dHJhY2s6IHtcblx0Ly8gXHRcdFx0ZGVwZW5kZW5jaWVzOiBbXSxcblx0Ly8gXHRcdFx0cG9saWNpZXM6IFtdLFxuXHQvLyBcdFx0XHRydW46IGZ1bmN0aW9uKGUsIHJlc29sdmUsIHJlamVjdCkge1xuXHQvLyBcdFx0XHRcdC8vIHRyYWNrIGluIEdBXG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHQvLyB1c2VyOiB7XG5cdC8vIFx0dGVzdDogJ3Rlc3QnLFxuXHQvLyBcdHRlc3QyOiAndGVzdCdcblx0Ly8gfVxufTsiLCJ2YXIgY29yZVR5cGVzID0ge1xuXHRlcnJvcnM6IHtcblx0XHRFVkVOVF9OT1RfRk9VTkQ6IHtcblx0XHRcdGRlc2NyaXB0aW9uOiAnQ291bGQgbm90IGZpbmQgYW4gZXZlbnQgY2FsbGVkIHt7IGV2ZW50TmFtZSB9fS4nLFxuXHRcdFx0c3RhdHVzOiA0MDRcblx0XHR9LFxuXHRcdFVOS05PV05fVFlQRToge1xuXHRcdFx0ZGVzY3JpcHRpb246ICdDb3VsZCBub3Qgc2V0IG9yIHJlZ2lzdGVyIGEgdHlwZSBjYWxsZWQge3sgdHlwZU5hbWUgfX0uJyxcblx0XHRcdHN0YXR1czogNDA0XG5cdFx0fVxuXHR9LFxuXHRldmVudHM6IHt9LFxuXHRtb2RlbHM6IHt9XG59O1xudmFyIGludGVybmFscyA9IHtcblx0ZXJyb3JzOiB7fSxcblx0ZXZlbnRzOiB7fSxcblx0bW9kZWxzOiB7fVxufTtcblxudmFyIG5vcm1hbGl6ZVR5cGUgPSBmdW5jdGlvbih0eXBlLCBzaW5ndWxhcikge1xuXHR0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXHRpZihzaW5ndWxhcikgdHlwZSArPSAncyc7XG5cdGlmKCFpbnRlcm5hbHNbdHlwZV0pIHtcblx0XHR2YXIgZXhjZXB0aW9uID0gbWVyZ2VPYmpzKGNvcmVFcnJvcnMuVU5LTk9XTl9UWVBFLCB7IHBhcmFtczogeyB0eXBlTmFtZTogdHlwZSB9IH0pO1xuXHR9XG5cdHJldHVybiB0eXBlO1xufTtcblxudmFyIG1lcmdlT2JqcyA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcblx0dmFyIGZpbmFsT2JqID0ge307XG5cdGZvcih2YXIgaSBpbiBvYmoxKSB7XG5cdFx0ZmluYWxPYmpbaV0gPSBvYmoxW2ldO1xuXHR9XG5cdGZvcih2YXIgaSBpbiBvYmoyKSB7XG5cdFx0ZmluYWxPYmpbaV0gPSBvYmoyW2ldO1xuXHR9XG5cdHJldHVybiBmaW5hbE9iajtcbn1cblxudmFyIGNvbXBvbmVudCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRcdHJlbmRlcjogcmVuZGVyXG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSAnJztcblx0XHR0aGlzLnJvdXRlID0gbnVsbDtcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdH1cblxuXHQvLyBTZXRzIGFsbCBlcnJvcnMsIG1vZGVscywgb3IgZXZlbnRzXG5cdHNldCh0eXBlLCB2YWx1ZSkge1xuXHRcdHR5cGUgPSBub3JtYWxpemVUeXBlKHR5cGUpO1xuXHRcdGludGVybmFsc1t0eXBlXSA9IG1lcmdlT2Jqcyhjb3JlVHlwZXNbdHlwZV0sIHZhbHVlKTtcblx0fVxuXG5cdC8vIEdldHMgYWxsIGVycm9ycywgbW9kZWxzLCBldmVudHMsIG9yIGEgc3BlY2lmaWMgZXJyb3IsIG1vZGVsLCBvciBldmVudFxuXHRnZXQodHlwZSwga2V5KSB7XG5cdFx0dHlwZSA9IG5vcm1hbGl6ZVR5cGUodHlwZSk7XG5cdFx0aWYoa2V5KSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxzW3R5cGVdW2tleV07XG5cdFx0fVxuXHRcdHJldHVybiBpbnRlcm5hbHNbdHlwZV07XG5cdH1cblxuXHQvLyBBZGRzIGEgbmV3IGVycm9yLCBtb2RlbCwgb3IgZXZlbnRcblx0cmVnaXN0ZXIodHlwZSwga2V5LCB2YWx1ZSkge1xuXHRcdHR5cGUgPSBub3JtYWxpemVUeXBlKHR5cGUsIHRydWUpO1xuXHRcdGludGVybmFsc1t0eXBlXVtrZXldID0gdmFsdWU7XG5cdH1cblxuXHQvLyBSZW1vdmVzIGFuIGVycm9yLCBtb2RlbCwgb3IgZXZlbnRcblx0dW5yZWdpc3Rlcih0eXBlLCBrZXkpIHtcblx0XHR0eXBlID0gbm9ybWFsaXplVHlwZSh0eXBlLCB0cnVlKTtcblx0XHRkZWxldGUgaW50ZXJuYWxzW3R5cGVdW2tleV07XG5cdH1cblxuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgZGF0YSkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRpZighdGhpcy5ldmVudHNbZXZlbnROYW1lXSlcblx0XHRcdFx0cmV0dXJuIHJlamVjdCh0aGlzLmVycm9yKCdFVkVOVF9OT1RfRk9VTkQnLCB7IGV2ZW50TmFtZTogZXZlbnROYW1lIH0pKTtcblxuXHRcdH0pO1xuXHR9XG5cblx0ZXJyb3IobmFtZSwgcGFyYW1zKSB7XG5cdFx0aWYoIXRoaXMuZXJyb3JzW25hbWVdKSB7XG5cdFx0XHR2YXIgZXJyb3JPYmogPSB7XG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnQ291bGQgbm90IGZpbmQgYW4gZXJyb3IgY2FsbGVkIHt7IG5hbWUgfX0uIFBhcmFtcyA9IHt7IHBhcmFtcyB9fS4nLFxuXHRcdFx0XHRzdGF0dXM6IDQwNFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBtZXJnZU9ianMoZXJyb3JPYmosIHsgcGFyYW1zOiB7IG5hbWU6IG5hbWUsIHBhcmFtczogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB9IH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZXJnZU9ianModGhpcy5lcnJvcnNbbmFtZV0sIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG5cdH1cbn07Il19
