import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    helperFunction(){
        this.props.posts[this.props.match.params.id];
    }

    onDeleteClick(){
        console.log("DELETed");
        const id = this.props.match.params.id;
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        });
    }

    render(){

        const {post} = this.props;
        //console.log(post);
        if(!post){
            return (<div>Loading...</div>);
        }

            return(
                <div>
                <Link to="/">Back To Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick = {this.onDeleteClick.bind(this)}
                >Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories}</h6>
                <p>{post.content}</p>
                </div>
            );
    }
}

function mapStateToProps({posts},ownProps){
    console.log(posts);
    return {post:posts};
    // return{post:posts[ownProps.match.params.id]}

}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
