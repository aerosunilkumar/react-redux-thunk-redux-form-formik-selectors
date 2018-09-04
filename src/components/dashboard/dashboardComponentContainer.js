import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/dashboard/index'
import PropTypes from 'prop-types';
import {getPostsSelector} from './Selector';
//CCSR

class DashboardComponentContainer extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }


    render() {
        debugger;
        const postItems = this.props.Posts.map(post => (
            <div key={post.id}>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        ));

        return (
            <div>
                Dashboard
                {postItems}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    Posts: getPostsSelector(state)
})

const mapDispatchToProps = {
    fetchPosts
}

DashboardComponentContainer.proptypes = {
    Posts: PropTypes.array,
    fetchPosts: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponentContainer);