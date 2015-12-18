var React = require('react');
var Button = require('./button');
var ListItem = require('./listItem');

module.exports = React.createClass({
  getInitialState: function(){
      return {open:false};
  },

  handleButtonClick: function(){
    this.setState({
      open: !this.state.open
    });
  },

  handleItemClick: function(item){
    this.setState({
      open: false,
      selectedItemTitle: item
    })
  },

  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem
        itemName={item}
        className={this.state.selectedItemTitle === item ? "active":""}
        handleItemClick={this.handleItemClick}
      />
  }.bind(this));

    return <div className="dropdown">
      <Button
        handleButtonClick={this.handleButtonClick}
        className="btn btn-default"
        title={this.state.selectedItemTitle || this.props.title}
        subtitleClassName="caret"
        subtitleValue=""
      />

      <ul
        className={"dropdown-menu" + (this.state.open? " show":"")}>
        {list}
      </ul>
    </div>
  }
});
