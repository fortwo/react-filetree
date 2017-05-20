import React from 'react';
import PropTypes from 'prop-types';

class File extends React.Component {
	render() {
		return (
			<div>
				File: {this.props.name}
			</div>
		);
	}
}

File.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired, 
};

export default File;