import React from 'react';
//const SearchBar = () => {
  //  return (
    //    <input />
   // )
//}
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {term: ''}
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
        this.props.onSearch(event.target.value);
    }
    render() {
        return(
            <div className="search-bar">
            <input value= {this.state.term}  onChange = {event => this.onInputChange(event)}/>
            
            </div>
        )
    }
}
export default SearchBar;