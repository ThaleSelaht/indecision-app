// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick =          this.handlePick.bind(this);
    this.handleAddOption =     this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handlePick() {
    let alertedOption = this.state.options[Math.floor(this.state.options.length * Math.random())];
    alert(alertedOption);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });    
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0 } 
                handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
};

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle &&<h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What shoudl I do? 
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>  
      <button onClick={props.handleDeleteOptions}>Remove All</button>      
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }        
    </div> 
  );
};

/* class Option extends React.Component {
  render() {  
    return (
      <li>{this.props.optionText}</li>

    );
  } 
} */

const Option = (props) => {
  return (
    <li>{props.optionText}</li>
  );
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) { 
    e.preventDefault();    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
       {this.state.error && <p>{this.state.error}</p> }    
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>   
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));