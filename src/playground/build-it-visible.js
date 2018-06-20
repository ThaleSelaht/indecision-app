
const appRoot = document.getElementById('app');

let visibilityToggler = true;
const toggleVisibility = () => {
  visibilityToggler = !visibilityToggler;
  renderToggler();
  return visibilityToggler;   
};

const renderToggler = () => {
  const app = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{ (visibilityToggler) ? "Show details" : "Hide details"} </button>
      <h2 hidden={visibilityToggler}>I'm hidden by default</h2>
    </div>
  );
  
  ReactDOM.render(app, appRoot);
}

renderToggler();