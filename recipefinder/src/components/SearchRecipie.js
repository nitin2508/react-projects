import React,{Component} from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {setRecipes} from '../actions'


 class SearchRecipie extends Component{

    constructor(){
        super();
        this.state = {
            ingredients:'',
            dish:''
        }
    }

    search(){
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
        fetch(url,{
            method:'GET'
        })
        .then(response=>response.json())
        .then(json=>this.props.setRecipes(json.results))
    }
    render(){
        return(
            <Form inline>
            <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>
            {' '}
            <FormControl onChange={(event)=>this.setState({ingredients:event.target.value})} type="text" placeholder="garlic,chicken"/>
            </FormGroup>
            {' '}
            <FormGroup>
            <ControlLabel>Dish</ControlLabel>
            {' '}
            <FormControl onChange = {(event)=>this.setState({dish:event.target.value})} type="text" placeholder="adobo"/>
            </FormGroup>
            <Button onClick ={()=>this.search()}>Submit</Button>
            </Form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({setRecipes},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchRecipie);
