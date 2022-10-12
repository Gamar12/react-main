import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const EMPTY_USERS = 'EMPTY_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ELEMENT_FOR_PAGE = 'SET_TOTAL_ELEMENT_FOR_PAGE';
const SLICE_PAGES = 'SLICE_PAGES';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const FOLLOWING_USER = 'FOLLOWING_USER';

let initialUsers = {
    users: [],
    currentPage: 1,
    pageSizeElement: 3,
    totalElementForPage: 0,
    slicePages: [],
    isFetching: false,
    isFollowing: []
}


const usersPageReducer = (state = initialUsers, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user
            })

        }
    }

    if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user
            })

        }
    }

    if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    }

    if (action.type === EMPTY_USERS) {
        return  {
            ...state,
            users : []
        }
    }

    if (action.type === SET_CURRENT_PAGE) {
        return  {
            ...state,
            currentPage: action.currentPage
        }
    }

    if (action.type === SET_TOTAL_ELEMENT_FOR_PAGE) {
        return  {
            ...state,
            totalElementForPage: action.totalElement
        }
    }

    if (action.type === SLICE_PAGES) {
        return  {
            ...state,
            totalElementForPage: action.slicePages
        }
    }

    if (action.type === CHANGE_FETCHING) {
        return {
            ...state,
            isFetching: action.statusFetch
        }
    }

    if (action.type === FOLLOWING_USER) {
        return {
            ...state,
            isFollowing: action.statusFollow
                ? [...state.isFollowing, action.userId]
                : state.isFollowing.filter(id => id !== action.userId)
        }
    }



    return state
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const hiddenUsers = () => {
    return {
        type: EMPTY_USERS
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsers = (totalElement) => {
    return {
        type: SET_TOTAL_ELEMENT_FOR_PAGE,
        totalElement

    }
}

export const slicePagesManyUsers = (slicePages) => {
    return {
        type: SLICE_PAGES,
        slicePages

    }
}

export const changeIsFetchingForPreLoader = (statusFetch) => {
    return {
        type: CHANGE_FETCHING,
        statusFetch

    }
}

export const followingUser = (statusFollow, userId) => {
    return {
        type: FOLLOWING_USER,
        statusFollow,
        userId

    }
}

//Thunks

export const getUsersThunk = (currentPage,pageSizeElement) => (dispatch) => {
    dispatch(changeIsFetchingForPreLoader(true))
    usersAPI.getUsersAPI(currentPage, pageSizeElement)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
            if (data.totalCount > 10) {
                dispatch(slicePagesManyUsers(30));
            }
            dispatch(changeIsFetchingForPreLoader(false))
        })
}

export const changePage = (currentPage, pageSizeElement) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsersAPI(currentPage,pageSizeElement)
        .then(data => {
            dispatch(setUsers(data.items));
        })
}

export const followUserThunk = (userId) => (dispatch) => {
    dispatch(followingUser(true, userId));
    usersAPI.followUserAPI(userId)
        .then(data => {
        if (data.resultCode === 0 ) {
            dispatch(follow(userId));
        }
            dispatch(followingUser(false, userId));
    }).catch(err => {
        console.log(err);
    })
}

export const unFollowUserThunk = (userId) => (dispatch) => {
    dispatch(followingUser(true, userId));
    usersAPI.unFollowUserAPI(userId)
        .then(data => {
            if (data.resultCode === 0 ) {
                dispatch(unFollow(userId));
            }
            dispatch(followingUser(false, userId));
        }).catch(err => {
        console.log(err);
    })
}


export default usersPageReducer;