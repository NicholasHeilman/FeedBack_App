class ExampleApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: 3,
      }
    }
  
    render() {
      return (
        <form className="form">
          <InputRange
            maxValue={5}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })}
            onChangeComplete={value => console.log(value)} />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <ExampleApp />,
    document.getElementById('app')
  );
  