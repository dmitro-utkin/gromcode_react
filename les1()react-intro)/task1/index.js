// <div class="greeting">Hello, React!</div>

// js_DOM
// const rootElement = document.querySelector('#root');
// const greetingElem = document.createElement('div');
// greetingElem.classList.add = 'gretting';
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

// React_DOM
const rootElement = document.querySelector('#root');
const greetingElem = React.createElement(
  'div',
  { className: 'gretting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);