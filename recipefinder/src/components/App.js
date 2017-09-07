import React ,{Component} from 'react';
import SearchRecipie from './SearchRecipie'
import '../styles/index.css'
import RecipeList from './RecipeList';
import FavouriteRecipeList from './FavouriteRecipeList';
import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(<div>
            <h2>Recipe Finder</h2>
            <SearchRecipie/>
            <RecipeList/>
            </div>)
    }
}

export default App;
