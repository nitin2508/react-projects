import React,{Component} from 'react';
import {favouriteRecipe} from '../actions';
import {connect} from 'react-redux';

class RecipeItem extends Component{

    constructor(){
        super();
        this.state ={
            favorite:false
        }

    }
    favorite(recipe){
        this.props.favouriteRecipe(recipe);
        this.setState({favorite:true});
    }

    render(){
        let {recipe} = this.props;
        return (
            <div className="recipe-item">

            {
                this.props.favoriteButton?
                        this.state.favorite?<div className="star">&#9733;</div>:<div className="star" onClick={()=>this.favorite(recipe)}>&#9734;</div>
                    :<div></div>
            }


            <div className="recipe-text">
                <a  href={recipe.href}>
                <h4 >{this.props.recipe.title}</h4>
                </a>
                <p>{recipe.ingredients}</p>
            </div>
                <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title}/>
            </div>
            )
    }
}

export default connect(null,{favouriteRecipe})(RecipeItem);
