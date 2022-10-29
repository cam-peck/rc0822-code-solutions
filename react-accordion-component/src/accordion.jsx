import React from 'react';

export default class Accordion extends React.Component {
  render() {
    return (
      <div>
        <EntryItems entries={entries}/>
      </div>
    );
  }
}

class EntryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: null
    };
    this.handleListChange = this.handleListChange.bind(this);
  }

  handleListChange(itemId) {
    this.setState({
      openTab: itemId
    });
  }

  render() {
    const entries = this.props.entries;
    const listItems = entries.map(entry => <ListItem key={entry.title.toString()} value={entry} onListChange={this.handleListChange} currentTab={this.state.openTab}/>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.textContent === this.props.currentTab) { // catch case where user reclicks tab
      this.props.onListChange(null);
    } else {
      this.props.onListChange(event.target.textContent);
    }

  }

  render() {
    const currentTab = this.props.currentTab;
    let isActive = 'inactive';
    if (this.props.value.title === currentTab) {
      isActive = 'active';
    } else {
      isActive = 'inactive';
    }
    return (
      <div>
        <h2 onClick={this.handleChange}>{this.props.value.title}</h2>
        <p className={`entry-text entry-${isActive}`}>{this.props.value.text}</p>
      </div>
    );
  }
}

const entries = [
  { title: 'Hypertext Markup Language', text: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ipsam laudantium illum natus saepe fuga, nesciunt esse, deserunt illo magnam molestias minus aperiam voluptas praesentium incidunt vitae recusandae quos?' },
  { title: 'Cascading Style Sheets', text: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ipsam laudantium illum natus saepe fuga, nesciunt esse, deserunt illo magnam molestias minus aperiam voluptas praesentium incidunt vitae recusandae quos?' },
  { title: 'JavaScript', text: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ipsam laudantium illum natus saepe fuga, nesciunt esse, deserunt illo magnam molestias minus aperiam voluptas praesentium incidunt vitae recusandae quos?' },
  { title: 'Node', text: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ipsam laudantium illum natus saepe fuga, nesciunt esse, deserunt illo magnam molestias minus aperiam voluptas praesentium incidunt vitae recusandae quos?' },
  { title: 'React', text: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ipsam laudantium illum natus saepe fuga, nesciunt esse, deserunt illo magnam molestias minus aperiam voluptas praesentium incidunt vitae recusandae quos?' }
];
