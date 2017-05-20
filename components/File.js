import React from 'react';
import PropTypes from 'prop-types';

import DefaultFileIcon from '../assets/file.png';

class File extends React.Component {
	render() {
		return (
			<div style={{ cursor: 'pointer' }}>
				<img src={this.props.icon}  style={{ height: '16px' }} />
				<span style={{ padding: '0 0 0 8px' }}>{this.props.name}</span>
			</div>
		);
	}
}

File.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string, 
};

File.defaultProps = {
	icon: DefaultFileIcon,
}

export default File;