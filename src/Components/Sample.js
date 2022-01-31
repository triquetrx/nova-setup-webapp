import React, { Component } from 'react';

export class Sample extends Component {
  render() {
    let cleft=0;
    let xTrans= 'translate('+cleft+'px, 0px)';

    var Move={
        transform: xTrans

    };
    return (<div className="indicator" style={Move} id="indicator"></div>);
  }
}

export default Sample;
