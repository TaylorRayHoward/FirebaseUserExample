import React, { Component } from 'react';

export default class SimpleBox extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              <div className="card-title text-center">
                <h3>{title}</h3>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
