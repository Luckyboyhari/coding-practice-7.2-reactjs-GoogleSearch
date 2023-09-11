// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-con">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div className="bg-con1">
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                value={searchInput}
                onChange={this.onClickInput}
              />
            </div>
            <ul className="suggestion-list">
              {filteredSuggestionList.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  key={each.id}
                  clickArrow={this.clickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
