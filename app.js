// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <ul>
//     <GroceryListItem list={['kale', 'coffe', 'lara bars']}/>
//     </ul>
//   </div>

// );




// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.item}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.item.map(item =>
//       <GroceryListItem item={item} />
//     )}
//   </ul>
// );

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
      done: false,
      hovered: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontStyle: this.state.hovered ? 'bold' : 'none'
    };

    return (
      <li style={style} onHover={this.onListItemHover.bound(this)} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>

    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
)

// var onListItemClick = (event) => {
//   console.log('I got clicked');
// }

ReactDOM.render(<App />, app);
// ReactDOM.render(<Coffee />, list);
// ReactDOM.render(<App />, list);


 


// ReactDOM.render(<GroceryList />, document.getElementById("app"));
