import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component{
    // defining an object on this class
    // whenever a new instance of the object is created
    // React will look at all this components parents and look for a piece on context called router
    // which in this case is ./index.js <Router>
    static contextTypes={
        router:PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.post.id)
            .then(() => {
                // post created, promise returned,  navigate to index
                this.context.router.push('/');
            });
    }

    render(){
        const {post} = this.props;

        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>

                <Link to="">back to Index </Link>
                <button
                    onClick={this.onDeleteClick.bind(this)}
                    className="btn btn-danger pull-xs-right">Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>

            </div>
        );
    }
}

function mapStateToProps(state){
    return {post: state.posts.post};
}
//function mapDispatchToProps(dispatch){
//    return bindActionCreators({fetchPost}, dispatch);
//}
//export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

//export default connect(mapStateToProps, {fetchPost: fetchPost})(PostsShow);
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
