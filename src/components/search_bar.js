import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">YouTube</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
              <div className="mdl-textfield mdl-js-textfield">
                <input
                  className="mdl-textfield__input"
                  style={styles.input}
                  type="text"
                  value= {this.state.term}
                  id="ipt_search"
                  onChange= {event => this.onInputChange(event.target.value)}/>
                <label className="mdl-textfield__label" style={styles.label} htmlFor="ipt_search">Search</label>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

const styles = {
  label: {
    color: '#FFFFFF'
  },
  input: {
    borderBottom: '1px solid #FFF'
  }
}

export default SearchBar;
