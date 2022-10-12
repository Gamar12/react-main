import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '217c4e73-62f4-4340-97ba-d726742f5007'
    }
});

export const usersAPI = {
    getUsersAPI: (currentPage, pageSizeElement) => {
        return instance.get(`users?page=${currentPage}&count=${pageSizeElement}`).then(resp => {
            return resp.data
        })
    },

    unFollowUserAPI: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    followUserAPI: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const getProfile = {
    getUserProfileInfo: (currentUserId) => {
        return instance.get(`profile/${currentUserId}`).then(response => response.data)
    },

    getProfileStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
            .catch(err => err)
    },

    setChangeProfile(status) {
        return instance.put('profile/status', {
            status
        }).then(resp => {
            return resp.data
        })
    }
}

export const authorized = {
    authorizedUser: () => {
        return instance.get('auth/me')
            .then(resp => resp.data)
    },
    login: (data) => {
        let {email, password, rememberMe} = data
        return instance.post('auth/login', {
            email, password, rememberMe
        }).then(resp => {
            return resp.data
        })
    },
    logout: () => {
        return instance.delete('auth/login',).then(resp => {
            return resp.data
        })
    }
}
