import React, { useReducer } from 'react';
import Counter from '../counter/Counter';
import './ToggleHide.scss';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return (state = !state);
    default:
      throw new Error();
  }
}

const ToggleHide = () => {
  const [state, dispatch] = useReducer(reducer, false);

  const onToggle = () => dispatch({ type: 'toggle' });

  return (
    <div className="toggle-hide">
      <button className="toggle-hide__btn" onClick={onToggle}>
        Toggle Hide
      </button>
      <div className={`toggle-hide__content ${state ? '' : 'hide'}`}>
        <Counter />
      </div>
    </div>
  );
};

export default ToggleHide;
