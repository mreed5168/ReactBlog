import React, {Component, PropTypes} from 'react'
var Link = require("react-router").Link;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import * as _ from 'lodash';



//import the actions 
import * as Actions from '../store/blogs/actions.js';
//import database helpers
import API from '../utils/API_Helpers/API';
//import the table for showing forecatst
import BlogList from '../components/blogList';




const mapDispatchToProps = {
fetchBlogs: Actions.fetchBlogs
}


const mapStateToProps = (state, ownProps) => ({
  blogs: state.getIn(['blogs','blogs'])
  // auth: state.getIn(['auth', 'auth'])
})


//Using decorator for connect 
@connect(mapStateToProps,mapDispatchToProps)
 export default class Main extends Component{
  constructor (props){
    super(props);
    this.state = {
      blogtitle: '',
      blogbody: '',
      name: '',
    isAuthorized: true };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.gimmeBlogList = this.gimmeBlogList.bind(this);
    this.renderPostInputBox = this.renderPostInputBox.bind(this);
  }

  componentWillMount() {
    this.props.fetchBlogs();
  }

  onFormSubmit(e) {
    e.preventDefault();
    API.postSaved(this.state.blogtitle, this.state.blogbody, this.state.name);
    this.setState({ blogtitle: '', blogbody: ''});
  }

  // Simple and elegant way of gathering an input change and setting the state with its id and value 
  onChange(event) {
    this.setState({[event.target.id] :event.target.value,});
  }

  gimmeBlogList() {
   let allBlogs = this.props.blogs;
    if (allBlogs.length === 0) {
      return (<h1>No Blog Posts</h1>)
    }
    else
      {
      return (<BlogList blogs={allBlogs}/>)
       }
    }

    renderPostInputBox(){
      const { isAuthorized } = this.state;
      if (isAuthorized) {
        return (
          <div className="jumbotron">
          <h3 className="text-center">Enter Your New Blog Post</h3>
          <form onSubmit = {this.onFormSubmit}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">
                      <h4 className="text-center"><strong>Blog Title</strong></h4>
                        <input className="noSpin"
                          value= {this.state.blogtitle}
                          onChange = {this.onChange}
                          className="form-control"
                          id="blogtitle"
                          placeholder="Enter Your Blog Title Here"
                          required
                        />
                    </div>

                    <div className="col-xs-6">
                      <h4 className="text-center"><strong>Blog Body</strong></h4>
                        <input
                          value= {this.state.blogbody}
                          onChange = {this.onChange}
                          className="form-control"
                          id="blogbody"
                          placeholder="What would you like to blog about?"
                          required
                        />
                    </div>
                  </div>
                  <br />
            <div className="row">  
              <div className="col-xs-12 text-center">
                 <button className="btn btn-primary" type="submit">Post</button>
              </div>
            </div>
            </div>
          </form>
        </div>
        )
      }
      else return (
        <h1>Sorry Not Authorized</h1>
      )
    }



  render() {
    // console.log("main rendered")
    return (
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Your Blog Site</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  
                  <li><Link to="/searches">Login</Link></li>

                </ul>
              </div>
            </div>
          </nav>

          <div>
            {this.renderPostInputBox()}

          </div>
          
          {/* <div className="row mainTableRow"> */}
          <div className="row">

            <div className="col-xs-12">
              {this.gimmeBlogList()}
            </div>
          </div>


          <div>
            <footer>
              <hr />
              <p className="pull-right">
                <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built by Michael Reed
              </p>
          </footer>

        </div>
      </div>
    </div>
    );
  }
};

