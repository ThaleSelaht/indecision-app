class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['Thing One', 'Thing Two', 'Thing Four'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOptions />
      </div>
    );
  }
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
};

class Action extends React.Component {
  handlePick(){    
    alert('handlePick');
  }
  render() {
    return (
      <div>
      <button onClick={this.handlePick}>What shoudl I do? </button>
      </div>
    );
  }
};

class Options extends React.Component {
  constructor(props) {
    super(props);
    //Binding the this pointer to the right context
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options); 
    //alert('handleRemoveAll');
  }
  render() {
    return (
      <div>  
        <button onClick={this.handleRemoveAll}>Remove All</button>      
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }        
      </div>      
    );
  }
};

class Option extends React.Component {
  render() {  
    return (
      <li>{this.props.optionText}</li>

    );
  } 
}

class AddOptions extends React.Component {
  handleAddOption(e) { 
    e.preventDefault();    
    const option = e.target.elements.option.value.trim();
    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>   
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));