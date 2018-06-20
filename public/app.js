"use strict";

var appRoot = document.getElementById('app');

var visibilityToggler = true;
var toggleVisibility = function toggleVisibility() {
  visibilityToggler = !visibilityToggler;
  renderToggler();
  return visibilityToggler;
};

var renderToggler = function renderToggler() {
  var app = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibilityToggler ? "Show details" : "Hide details",
      " "
    ),
    React.createElement(
      "h2",
      { hidden: visibilityToggler },
      "I'm hidden by default"
    )
  );

  ReactDOM.render(app, appRoot);
};

renderToggler();
