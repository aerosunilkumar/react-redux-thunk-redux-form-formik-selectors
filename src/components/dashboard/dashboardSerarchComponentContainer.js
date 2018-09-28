import { connect } from "react-redux";
import dashboardSerarchComponent from "./dashboardSerarchComponent.js";
import { fetchPosts } from "./dashboardActions";

const mapStateToProps = (state,ownProps) => ({
    isLoading: ownProps.isLoading,
    posts: ownProps.posts,
    postsError: ownProps.postsError
});

const mapDispatchToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(
    dashboardSerarchComponent
);
