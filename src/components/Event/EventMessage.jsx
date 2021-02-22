import React, { Component, Fragment } from 'react';
import EventMessageBtn from './EventMessageBtn';

class EventMessage extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  updateMessage = e => {
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    const { s } = this.props;

    return (
      <Fragment>
        <span>{this.state.message}</span>
        <EventMessageBtn
          label="Change message"
          changeMessage={this.updateMessage}
          s={s} />
      </Fragment>
    );
  };
};

export default EventMessage;