import {connect} from 'react-redux';
import Immutable from 'immutable';
import React, {Component} from 'react';





export default class BlogList extends Component {

        renderBlogList(){
            let {blogs} = this.props;
            let imblogs = this.props.blogs;
            blogs = blogs.toJS();
            console.log("Imutable Blogs: " + imblogs)
            
            console.log('Mutable Blogs: ' + blogs)
            // console.log ("Render Blog List")
            // console.log("Blogs: " + blogs)
            // console.log("Type:  " + typeof(blogs))
            // console.log("length: " + blogs.length)
            // blogs = blogs[0].blogs
            // console.log(blogs.length)
            if (blogs.length != 0) {
                blogs = blogs[0].blogs
                // console.log(blogs.length)
                // return (<h1>No Blogs</h1>)
                return blogs.map((bl, idx) => { return(<div key={idx}><h1>{bl.title}</h1><h2>{bl.author}</h2><h2>{bl.body}</h2><h2>{bl.date}</h2></div>)})
            }
            // else {
            // return blogs.map((blog, idx) => {
            //     return (
            //         <div key={idx} className="blogtitle">
            //         <h1>{blog.title}</h1>
            //         </div>
            //     );
            // })}

        }

        renderBlog(bl) {
            console.log(bl.blogs.title);

        }
    
    

    render() {

        console.log("Main Blog Render Called")
        return(

            <div className="blogmaster">
                {this.renderBlogList()}
            </div>
            
        );
    }
}

