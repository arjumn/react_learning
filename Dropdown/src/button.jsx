var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <button
      className={this.props.className}
      onClick={this.props.handleButtonClick}>
      {this.props.title}
      <span
        style={{marginLeft:'5px'}}
        className={this.props.subtitleClassName}>
        {this.props.subtitleValue}
      </span>
    </button>
  }
});
