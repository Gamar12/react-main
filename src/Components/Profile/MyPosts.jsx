import prof from "./Profile.module.css";
import React from "react";
import Post from "../Posts/Post/Post";
import PostForm from "../UI/Forms/PostForm";
import {reduxForm} from "redux-form";
import {createPost, deletePost} from "../../Redux/profilePageReducer";


const MyPosts = (props) => {

    let deletePost = (postID) => {
        props.deletePost(postID)
    }

    let viewPosts = props.postsProps.map((post, id) => (
        <Post key={post.id} id={post.id} name={post.descripton} likes={post.likes} img={post.avatar}
              deletePost={() => deletePost(post.id)}
        />));

    let handleDataForCreatePost = (dataForm) => {
        props.createPost(dataForm.description)
    }

    let ReduxProfileForm = reduxForm({form: 'createPost'})(PostForm)

    return (
        <div>
            My posts:
            <br/>
            <div className={prof.btns}>
                <ReduxProfileForm onSubmit={handleDataForCreatePost}/>
            </div>
            <div className={prof.pst_grd}>
                Posts:
                {viewPosts.length ? viewPosts : <div><h1>NO POSTS</h1></div> }
            </div>
        </div>
    )
}

export default MyPosts