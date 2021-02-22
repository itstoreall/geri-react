import React, { Component } from 'react';

class EventCounter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    isOpen: false
  };
  
  // в setState() переданы и деструктуризированы state и props
  handleIncrement = (e) => {
    this.setState(({ value }, { step }) => ({
      value: value + step,
    }));
  };

  handleDecrement = (e) => {
    this.setState(({ value }, { step }) => ({
      value: value - step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    const { button } = this.props.s;
    const { handleIncrement } = this;
    const { handleDecrement } = this;

    return (
      <div>
        <span>{value}{console.log(value)}</span>
        <button
          className={button}
          type="button"
          onClick={handleIncrement}>
          Increment by {step}
        </button>
        <button
          className={button}
          type="button"
          onClick={handleDecrement}>
          Decrement by {step}</button>
      </div>
    );
  }
}

export default EventCounter;

// ======== Второй вариант Counter

// import React, { Component } from 'react';

// class EventCounter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//     isOpen: false
//   };
  
//   handleIncrement = (e) => {
//     const { step } = this.props;
//     // const { value } = this.state;
    
//     this.setState(prevState => {
//       return {
//         value: prevState.value + step,
//       };
//     }, () => console.log('Incr'))
//   }

//   handleDecrement = (e) => {
//     const { step } = this.props;
//     // const { value } = this.state;

//     this.setState(prevState => {
//       return {
//         value: prevState.value - step,
//       }
//     }, () => console.log('Decr'));
//   }

//   // Измененние состояния без предидущего

//   // handleIncrement = (e) => {
//   //   console.log('Increment button was clicked!', e);
//   //   this.setState({
//   //     step: '2',
//   //   }, () => { console.log('this.state: ', this.state) });
//   // }

//   // handleDecrement = (e) => {
//   //   console.log('Increment button was clicked!', e);
//   //   this.setState({
//   //     step: '3',
//   //   }, () => { console.log('this.state: ', this.state) });
//   // }

//   render() {
//     const { step } = this.props;
//     const { value } = this.state;
//     const { button } = this.props.s;
//     const { handleIncrement } = this;
//     const { handleDecrement } = this;

//     return (
//       <div>
//         <span>{value}{console.log(value)}</span>
//         <button
//           className={button}
//           type="button"
//           onClick={handleIncrement}>
//           Increment by {step}
//         </button>
//         <button
//           className={button}
//           type="button"
//           onClick={handleDecrement}>
//           Decrement by {step}</button>
//       </div>
//     );
//   }
// }

// export default EventCounter;