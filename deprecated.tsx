import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [state, setState] = useState(initialState);

  componentWillReceiveProps(nextProps) {
    // Some code here...
  }

  componentWillUpdate(nextProps, nextState) {
    // Some code here...
  }

  render() {
    return <div>Hello World</div>;
  }
}
