import React ,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost} from '../actions';

class PostsNew extends Component{

    renderField(field){
            const { meta:{touched,error}} = field;
            const className = `form-group ${field.meta.touched && field.meta.error?'has-danger':'' }`
        return(
        <div className={className}>
            <label>{field.label}</label>
            <input className="form-control" type="text" {...field.input}/>
            <div className = "text-help">{touched ?error:'' }</div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        })
    }

    render(){
        const {handleSubmit} = this.props;
        const btnStyle = {
            'marginLeft':'10px',
        }
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name="title" label="Title" component={this.renderField}/>
            <Field name="categories" label="Categories" component = {this.renderField}/>
            <Field name="content" label="Content" component = {this.renderField}/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/' style={btnStyle} className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = 'Enter a category';
    }
    if(!values.content){
        errors.content = 'Enter some content please.'
    }

    return errors;
}

export default reduxForm({
    form:'PostNewForm',
    validate
})(
    connect(null,{createPost})(PostsNew)
);
