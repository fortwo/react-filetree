import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { File } from '../src/File';

const file = {
  id: '1',
  name: 'file',
};

describe('src/File', () => {
  it('contains id and name props', () => {
    const node = shallow(
      <File 
        id={file.id}
        name={file.name}
      />
    );
    expect(node.instance().props.id).to.be.a('string');
    expect(node.instance().props.id).to.equals('1');
    expect(node.instance().props.name).to.be.a('string');
    expect(node.instance().props.name).to.equals('file');
  });

  it('contains action property and simulate click event', () => {
    const onButtonClick = sinon.spy();
    const node = shallow(<File action={onButtonClick} />);
    node.simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});