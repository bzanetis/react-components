
var app = document.getElementById('app');

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      <GroceryList list={['coffee', 'cigarettes', 'a healthier lifestyle']}/>
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    //'state' is just an object literal
    this.state = {

      hovered: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    })
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['kale', 'cucumbers']} />, document.getElementById('app'));


