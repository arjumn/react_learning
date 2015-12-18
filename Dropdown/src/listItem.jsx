var React = require('react');

module.exports = React.createClass({
  handleItemClick: function(){
    this.props.handleItemClick(this.props.itemName);
  },
  render: function(){
    return <li
      className={this.props.className}
      onClick={this.handleItemClick}>
      <a>{this.props.itemName}</a>
    </li>
  }
});
