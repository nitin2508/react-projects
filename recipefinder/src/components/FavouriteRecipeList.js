import React , {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class FavouriteRecipeList extends Component{

    render(){
        return(
            <div> 
            <h4  className="link"><Link to='/'>Home</Link></h4>
            <h4>Favourite Recipes:</h4>
            {
            this.props.favouriteRecipe.map((recipe,index)=>{
                return <RecipeItem favoriteButton={false} key={index} recipe={recipe}/>
            })
        }
            </div>
        )

        }
    }

function mapStateToProps(state){
    console.log('state',state);
    return{
        favouriteRecipe:state.favouriteRecipe
    }
}

export default connect(mapStateToProps,null)(FavouriteRecipeList);
