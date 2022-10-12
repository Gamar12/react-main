import {getProfile} from "../api/api";
import post from "../Components/Posts/Post/Post";

const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    updateTextPost: 'default text post',
    posts: [
        {
            id: 1,
            descripton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            likes: 10,
            avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'
        },
        {
            id: 2,
            descripton: 'Dicta eligendi ipsam iste quibusdam? Doloremque, perspiciatis tempora',
            likes: 20,
            avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'
        },
        {
            id: 3,
            descripton: 'Elig Dicta eligendi ipsam iste quibusdam? Doloremque, perspiciatis tempora',
            likes: 30,
            avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif'
        },
    ],
    profileInfo: null,
    profileStatus: '',
}

const profilePageReducer = (state = initialState, action) => {
    if (action.type === CREATE_POST) {
        return {
            ...state,
            posts: [...state.posts, action]
        }
    }
    else if (action.type === UPDATE_TEXT_POST) {
        return {
            ...state,
            updateTextPost: action.updateTextPost,
            likes: action.likes
        }
    }
    else if (action.type === SET_USER_PROFILE_INFO) {
        return {
            ...state,
            profileInfo: action.profileInfo

        }
    }
    else if (action.type === SET_PROFILE_STATUS){
        return {
            ...state,
            profileStatus: action.statusUser
        }
    }
    else if (action.type === DELETE_POST){
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.postID)
        }
    }
    return state;
}

export const changeTextPost = (updtText) => {
    return {
        type: UPDATE_TEXT_POST,
        changeText: updtText,
    }
}

export const createPost = (descr) => {
    return {
        type: CREATE_POST,
        descripton: descr,
        likes: Math.floor(Math.random() * 10),
    }
}

export const deletePost = (postID) => {
    return {
        type: DELETE_POST,
        postID
    }
}

export const setUserProfileInfo = (profileInfo) => {
    return {
        type: SET_USER_PROFILE_INFO,
        profileInfo

    }
}

export const setProfileStatus = (statusUser) => {
    return {
        type: SET_PROFILE_STATUS,
        statusUser
    }
}

//Thunks:

export const getProfileInfo = (currentUserId) => (dispatch) => {
    getProfile.getUserProfileInfo(currentUserId)
        .then(data => {
            dispatch(setUserProfileInfo(data));
        })
}

export const getProfileStatus = (userId) => (dispatch) => {
    getProfile.getProfileStatus(userId)
        .then(data => {
            dispatch(setProfileStatus(data))
        })
}

export const setChangeProfileStatus = (changeStatus) => (dispatch) => {
    getProfile.setChangeProfile(changeStatus).then(data => {
        if (data.resultCode === 0) {
            dispatch(setProfileStatus(changeStatus))
        }
    })
}

// export const createPostThunk = () => {
//
// }
export default profilePageReducer;