import React from 'react';
import PropTypes from 'prop-types';

class Folder extends React.Component {
	render() {
		return (
			<div>
				Folder: {this.props.name}
			</div>
		);
	}
}

Folder.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired, 
};

export default Folder;