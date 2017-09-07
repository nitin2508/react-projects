import React,{Component} from 'react';
import {connect} from 'react-redux';

class SquadStats extends Component{
    strength(){
        let strength = 0;
        this.props.heroes.forEach(elem => {
            strength = strength+elem.strength;
        });
        return strength;
    }
    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(elem => {
            intelligence = intelligence+elem.intelligence;
        });
        return intelligence;
    }
    speed(){
        let speed = 0;
        this.props.heroes.forEach(elem => {
            speed = speed+elem.speed;
        });
        return speed;
    }
    render(){
            return( <div>
            <h4>Squad Stats</h4>
            <ul>
            <li className="list-group-item">
            <b>Overall Strength:</b> {this.strength()}
            </li>
            <li className="list-group-item">
            <b>Overall Intelligence:</b> {this.intelligence()}
            </li>
            <li className="list-group-item">
            <b>Overall Speed:</b> {this.speed()}
            </li>
            </ul>
            </div>
        )
        }
}

function mapStateToProps(state){
    return{
        heroes:state.heroes
    }
}

export default connect(mapStateToProps)(SquadStats);
