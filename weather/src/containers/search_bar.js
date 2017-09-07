import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={term:''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    onInputChange(event){
                this.setState({term:event.target.value});
            }

    render(){
        return(<form onSubmit={this.onFormSubmit} className="input-group">
        <input  className="form-control" placeholder="Get a five day forcast in your city."
         onChange={this.onInputChange}
         value={this.state.term}
            />
         <span className="input-group-btn">
        <button type="submit" className="btn btn-secoundary">Submit</button>
        </span>
        </form>);
    }
}

function mapDispatchToProps(dispatch){
    console.log("received")
    console.log(dispatch)
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);