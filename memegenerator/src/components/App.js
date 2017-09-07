import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import Memeitem from './Memeitem';
import {Form,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import MyMemes from './MyMemes';

 class App extends Component{
    constructor(){
        super();
        this.state={
            memeLimit:10,
            text0:'',
            text1:''
        }
    }
    render(){
        return(<div>
                    <h2><u>Welcome To Meme Generator</u></h2>
                    <MyMemes/>
                    <h4><i>Write Some Text</i></h4>
                    <Form inline>
                    <FormGroup>
                    <ControlLabel>Top</ControlLabel>
                    { ' '}
                    <FormControl onChange={event=>this.setState({text0:event.target.value})} type="text"></FormControl>
                    </FormGroup>
                    { ' '}
                    <FormGroup>
                    <ControlLabel>Bottom</ControlLabel>
                    { ' '}
                    <FormControl onChange={event=>this.setState({text1:event.target.value})} type="text"></FormControl>
                    </FormGroup>
                    </Form>
                    {
                        this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
                            return (<Memeitem key={index} text0={this.state.text0} text1={this.state.text1} meme={meme}/>)
                        })
                    }

                <div className="meme-button"
                onClick={()=>this.setState({memeLimit:this.state.memeLimit+10})}>Load 10 more memes...</div>
                </div>)
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,null)(App);
