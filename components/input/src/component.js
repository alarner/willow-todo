import WillowComponent from '../../../node_modules/willow/Component';
import errors from './errors';
import events from './events';
import models from './models';

export default React.createClass({
	render: function() {
		return (
			<div className="input">
				<input type="text" ref="todoInput" />
				<button type="button">Add Todo</button>
			</div>
		);
	}
});


export default class extends WillowComponent {
	constructor(settings) {
		super(settings);
		this.description = 'A component for entering new to-do items';
		this.route = '/';
		this.set('errors', errors);
		this.set('events', events);
		this.set('models', models);

		this.react = 
	}
};
