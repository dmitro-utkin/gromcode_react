import React, { Component } from 'react';
import Spinner from './Spinner';

const withDataLoader = (url) => (WrappedComponent) => {
  return class DataLoaderHOC extends Component {
    state = {
      data: null,
      isLoading: true,
    };

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => console.error(error));
    }

    render() {
      const { isLoading, data } = this.state;

      return isLoading ? <Spinner /> : <WrappedComponent data={data} />;
    }
  };
};

export { withDataLoader };
