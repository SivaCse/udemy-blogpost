import React, {Component, PropTypes} from 'react';
import {reduxForm } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component{
    // defining an object on this class
    // whenever a new instance of the object is created
    // React will look at all this components parents and look for a piece on context called router
    // which in this case is ./index.js <Router>
    static contextTypes={
        router:PropTypes.object
    }

    // since using this, have to bind it below
    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
            // post created, promise returned,  navigate to index
                console.log('route to /...');
                this.context.router.push('/');
            });
    }

    render(){

        const { fields:{title, categories, content}, handleSubmit } = this.props;
        // same as...
        //const handleSubmit = this.props.handleSubmit;
        //const title = this.props.fields.title;


        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <h3>Create a new post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}  >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div classNema="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}  >
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div classNema="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}  >
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div classNema="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }

}


function validate(values){
  const errors = {};

  if(!values.title){
      errors.title = 'enter a username';
  }
  if(!values.categories){errors.categories = 'enter a category';
  }
  if(!values.content){
      errors.content = 'enter content';
  }
  return errors;
}

// connect(mapStateToProps, mapDispatchToProps)
// reduxForm(form config,mapStateToProps, mapDispatchToProps)
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],
    validate: validate
}, null ,{ createPost })(PostsNew);