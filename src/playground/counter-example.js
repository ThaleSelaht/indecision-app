class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.counter = props.counter;
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne(e) {
    this.counter++; 
    console.log(this.counter);
       
  }
  handleMinusOne(e) {
    this.counter--;
  }
  handleReset(e) {
    this.counter = 0;
  }
  render() {
    return (
      <div>
        <h1>Count: {this.counter}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter counter={0} />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();  
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();  
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();