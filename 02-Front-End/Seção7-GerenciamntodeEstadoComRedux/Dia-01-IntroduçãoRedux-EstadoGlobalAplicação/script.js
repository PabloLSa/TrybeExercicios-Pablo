import { legacy_createStore as createStore } from 'redux';
    import { composeWithDevTools } from '@redux-devtools/extension';
    const INITIAL_STATE = {
      colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
      index: 0,
    };
    const reducer = (state = INITIAL_STATE, { type }) => {
      switch (type) {
        case 'CHANGE_COLOR':
          return {
            ...state,
            index: state.index === 0 ? 1 : 0
          }

        default: state;
      }
    }
    const store = Redux.createStore(reducer,composeWithDevTools());
    const action = {
      type: 'CHANGE_COLOR',
      ...state
    };
    const previous = document.getElementById('previous');
    previous.addEventListener('click', () => {
      dispatch(action);
    })
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
      dispatch(action);
    })
    function createColor() {
      const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      let color = '#';
      const aleatorio = () => Math.floor(Math.random() * oneChar.length);
      for (let i = 0; i < 6; i += 1) {
          color += oneChar[aleatorio()];
      }
      return color;
  }