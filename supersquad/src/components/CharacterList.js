import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addCharacterById from '../actions'

 class CharacterList extends Component{
    render(){
        return (<div>
            <h4>Character List</h4>
            <ul className="list-group">{this.props.characters.map(character=>{
                return (<li className="list-group-item" key={character.id}>
                    <div className="list-item">{character.name}</div>
                    <div className="list-item right-button" onClick={()=>this.props.addCharacterById(character.id)}>+</div>
                    </li>)
            })}</ul>
            </div>)
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        characters:state.characters
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);
