import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions'

class Blog extends Component {
    componentDidMount() {
        // jsonPlaceholder API
        this.props.fetchPosts();
    }
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="blog-post" key={post.id}>
                    <h3>{post.title.charAt(0).toUpperCase()+post.title.substr(1,5)}</h3>
                    <h4>{post.title}</h4>
                    <div>{post.body}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="col md-3"></div>
                <div className="col md-6">
                    {console.log(this.props.posts)}
                {this.renderList()}
                </div>
                <div className="col md-3"></div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(Blog);