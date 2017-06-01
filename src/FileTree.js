import React from 'react';
import PropTypes from 'prop-types';

import { TreeNode } from './TreeNode';

class FileTree extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((data) => {
          return (
            <TreeNode
              key={data.id}
              id={data.id}
              name={data.name}
              icon={data.icon}
              children={data.children}
              action={data.action}
            />
          );
        })}
      </div>
    );
  }
}

FileTree.propTypes = {
  data: PropTypes.array.isRequired,
};

export {
  FileTree,
};