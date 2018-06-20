
const appRoot = document.getElementById('app');

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

renderToggler();