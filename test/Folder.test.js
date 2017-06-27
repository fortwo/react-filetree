import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import { TreeNode } from '../src/TreeNode';
import { Folder } from '../src/Folder';

const singleEmptyFolder = [{
  name: 'Empty folder',
  children: [],
}];

describe('src/Folder', () => {
  it('contains name property', () => {
    const node = shallow(
      <Folder
        name={'folder'}
      />
    );

    expect(node.instance().props.name).to.be.a('string');
    expect(node.instance().props.name).to.equals('folder');
  });

  it('test', () => {
    const node = mount(
      <TreeNode 
        name={singleEmptyFolder[0].name}
        children={singleEmptyFolder[0].children} 
      />
    );

    expect(node.state().open).to.equal(true);
    const FolderNode = node.find(Folder);
    expect(FolderNode.props().open).to.be.a('boolean');
    expect(FolderNode.props().open).to.equal(true);
    expect(FolderNode.props().toggleFolder).to.be.a('function');
    FolderNode.simulate('click');
    expect(FolderNode.props().open).to.equal(false);
  });
});