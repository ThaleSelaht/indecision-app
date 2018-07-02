class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => ({visibility: !prevState.visibility}));
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.handleToggleVisibility}>
        {(this.state.visibility) ? 'Hide Details' : 'Show Details'}
        </button>
        {
          (this.state.visibility) && (
            <h2>I'm hidden by default</h2>
          )
        }
      </div>
    );
  }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
/* const appRoot = document.getElementById('app');

let visibilityToggler = false;
const toggleVisibility = () => {
  visibilityToggler = !visibilityToggler;
  renderToggler();
  return visibilityToggler;   
};

const renderToggler = () => {
  const app = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{ (visibilityToggler) ? "Hide details" : "Show details"} </button>
      { (visibilityToggler) && (
        <div><h2>I'm hidden by default</h2></div>
      )}      
    </div>
  );
  
  ReactDOM.render(app, appRoot);
}

renderToggler(); */