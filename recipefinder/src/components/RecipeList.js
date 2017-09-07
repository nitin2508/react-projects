import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class RecipeList extends Component {
    render () {
        return (<div>
            <h4 className="link"><Link to="/favourites">Favourites</Link></h4>
            {this.props.recipes.map((recipe,index)=>{
            return (<RecipeItem favoriteButton={true}  recipe ={recipe} key={recipe.href}>{recipe.title}</RecipeItem>)
                })}
        </div>)
    }
}

function mapStateToProps(state){
    return {recipes:state.recipes};
}

export default connect (mapStateToProps,null)(RecipeList);
