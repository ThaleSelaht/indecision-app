console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two ']
}

const template = (
    <div>
    <h1>{app.title}</h1>
    {(app.subtitle) && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Option 1</li>  
      <li>Option 2</li>
    </ol>  
    </div>
);
const user = {
  name: 'Thales',
  age: 28,
  location: 'Cubatão' 
};
function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;  
  }  
}
const templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {user.age >= 18 && <p>Age: {user.age} </p>}
      {getLocation(user.location)}
    </div> 
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
