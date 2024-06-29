// <div class="greeting">
//    <div class+="greeting__title">Hello, world!</div>
//    <div class+="greeting__text">I\'m learning React</div>
// </div>

// js_DOM
// const rootElement = document.querySelector('#root');

// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add = 'greeting';

// const titleElem = document.createElement('div');
// titleElem.textContent = 'Hello, world!';
// titleElem.classList.add = 'greeting__title';

// const gretingTextElem = document.createElement('div');
// gretingTextElem.textContent = 'I\'m learning React';
// gretingTextElem.classList.add = 'greeting__text';

// wrapperElem.append(titleElem, gretingTextElem);
// rootElement.append(wrapperElem);

// React_DOM
const rootElement = document.querySelector('#root');

const element = React.createElement(
  "div", 
  { className: "gretting" }, 
  React.createElement(
    "div", 
    { className: "gretting__title" }, 
    "Hello, world!"),
  React.createElement(
    "div",
    { className: "gretting__text" },
    "I'm learning React"
  ),
);

ReactDOM.render(element, rootElement);
