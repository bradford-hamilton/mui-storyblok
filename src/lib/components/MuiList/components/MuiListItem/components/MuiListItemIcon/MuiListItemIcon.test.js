import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiListItemIcon from './MuiListItemIcon';

function setup() {
  const props = {
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiListItemIcon {...props} />);
  return { comp, props };
}

describe('<MuiListItemIcon />', () => {
  it('renders MuiListItemIcon', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListItemIcon {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
