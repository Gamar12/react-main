import profilePageReducer, {createPost, deletePost} from "./profilePageReducer";

let stateTest = {
    // Test data
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
}

it('after create post should be true length', function () {
    let action = createPost('New post test');
    // 2.action
    let newState = profilePageReducer(stateTest,action);
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].descripton).toBe('New post test')
    expect(newState.posts[3].descripton).not.toBe('Another text')

});

it('after delete post should be correct length', function () {
    let deleteAction = deletePost(2);
    let newState = profilePageReducer(stateTest, deleteAction);
    expect(newState.posts.length).toBe(2)
});

it('', function () {
    let deleteAction = deletePost(2);
    let newState = profilePageReducer(stateTest, deleteAction);
    expect(newState.posts.length).toBe(2)
});




