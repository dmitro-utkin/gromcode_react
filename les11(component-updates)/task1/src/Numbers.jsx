import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (
  //     this.props.number === nextProps.number &&
  //     this.props.title === nextProps.title
  //   ) {
  //     return false;
  //   }

  //   return true;
  // }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: "Some number",
};

export default Numbers;

// властивості порівнюються тільки на верхньом рівні
// якщо, наприклад, компонент приймає у властивості якийсь об'єкт:
// userData = {name: 'John', age: 30}
// то, якщо хтось змінить властивості об'єкта, то PureComponent не змінить цю властивість
