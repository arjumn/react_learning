var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: "Make a selection",
  items: ['Gerrard', 'Lampard', "scholes"]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.getElementById('target'));
