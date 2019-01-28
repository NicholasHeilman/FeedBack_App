// class ExampleApp extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         value: 3,
//       }
//     }

         //attempt at setting the input with a slider bar
        // this.handleFeelingChange = (input) => {
        //         if (input.value < 0) {
        //             input.target.value = 0;
        //             return input.target.value 
        //         }
        //         else if (input.value > 5) {
        //              input.target.value = 5;
        //              return input.target.value;
        //         } else {
        //         this.setState ({
        //             feeling: input.target.value
        //             })
                   
        //         }
        //         console.log(input.target.value);
        //     }
  
//     render() {
//       return (
//         <form className="form">
//           <InputRange
//             maxValue={5}
//             minValue={0}
//             value={this.state.value}
//             onChange={value => this.setState({ value })}
//             onChangeComplete={value => console.log(value)} />
//         </form>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <ExampleApp />,
//     document.getElementById('app')
//   );
  