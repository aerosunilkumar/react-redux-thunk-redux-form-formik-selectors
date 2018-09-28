export const getPostsSelector = state => {
    return state.dashboardData.posts;
}

export const getIsLoadingSelector = state => {
    return state.dashboardData.isLoading;
}

export const getPostsErrorSelector = state => {
    return state.dashboardData.postsError;
}