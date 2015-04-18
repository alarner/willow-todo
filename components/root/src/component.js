import WillowComponent from '../../../node_modules/willow/Component';
import InputComponent from '../../input/src/component';
import errors from './errors';
import events from './events';
import models from './models';


export default class extends WillowComponent {
	constructor(settings) {
		super(settings);
		this.description = 'The root component for our to-do application.';
		this.route = '/';
		this.set('errors', errors);
		this.set('events', events);
		this.set('models', models);
	}

	render: function() {
		return (
			<div className="commentBox">
				<InputComponent />
			</div>
		);
	}
};
