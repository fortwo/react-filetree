import React from 'react';
import PropTypes from 'prop-types';

import DefaultFileIcon from '../assets/file.png';

class File extends React.Component {
	constructor(props) {
		super(props);

		this.triggerAction = this.triggerAction.bind(this);
	}

	triggerAction() {
		if (this.props.action) {
			const file = {
				id: this.props.id,
				name: this.props.name,
			};

			this.props.action(file);
		}
	}

	render() {
		return (
			<div style={{ cursor: 'pointer' }} onClick={this.triggerAction}>
				<img src={this.props.icon}  style={{ height: '16px' }} />
				<span style={{ padding: '0 0 0 8px' }}>{this.props.name}</span>
			</div>
		);
	}
}

File.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	icon: PropTypes.string,
	action: PropTypes.func, 
};

File.defaultProps = {
	icon: DefaultFileIcon,
}

export default File;