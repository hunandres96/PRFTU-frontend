import React, { Component } from 'react'
import { Toast, ToastHeader, ToastBody } from 'react-bootstrap'

export default class StudentToast extends Component {
  render() {
    const toastCss = {
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: '1',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
      <div style={this.props.children.show ? toastCss : null}>
        <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
          <ToastHeader className={"bg-success text-white"} closeButton={false}>
            <strong className="mr-auto"></strong>
          </ToastHeader>
          <ToastBody>
            {this.props.children.message}
          </ToastBody>
        </Toast>
      </div>
    )
  }
}
