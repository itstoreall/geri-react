import React, { Component, Fragment } from 'react';

class MyReactToggle extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(stete => ({
      visible: !this.state.visible
    }));
  };

  render() {
    const { visible } = this.state;
    const { button } = this.props.s;

    return (
      <Fragment>
        <span>{visible && 0}</span>
        <button className={button} onClick={this.toggle}>{visible ? 'Скрыть' : 'Показать'}</button>
      </Fragment>
    );
  }
}

export default MyReactToggle;

// ========== Второй вариант Toggle

// import React, { Component, Fragment } from 'react';

// class MyReactToggle extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }))
//   }

//   render() {
//     const { visible } = this.state;
//     const { button } = this.props.s;

//     return (
//       <Fragment>
//         <span>{visible && 0}</span>
//         <button className={button} onClick={this.toggle}>{visible ? 'Скрыть' : 'Показать'}</button>

//         {/* Toggle при ховере */}
//         {/* <button className={button} onMouseOver={this.toggle}>{visible ? 'Скрыть' : 'Показать'}</button> */}
//       </Fragment>
//     );
//   }
// }

// export default MyReactToggle;