import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";


let store = {
    profilePage: {
        imgDownload : 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif',
        updateTextPost: 'default text post',
        posts : [
            {descripton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', likes: 10},
            {descripton: 'Dicta eligendi ipsam iste quibusdam? Doloremque, perspiciatis tempora', likes: 20},
            {descripton: 'Elig Dicta eligendi ipsam iste quibusdam? Doloremque, perspiciatis tempora', likes: 30},
        ],
    },

    dialogPage: {
        dialogsArr: [
            {name: 'Roma', pathName: '/roma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
            {name: 'Igor', pathName: '/igor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
            {name: 'Marina', pathName: '/marina', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
            {name: 'Yanis', pathName: '/yanis', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
            {name: 'Kostya', pathName: '/kostya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},

        ],
        inputTextDialog: 'Default input text',
        messages: [
            {message: 'Hello world!!!'},
            {message: 'Hey bro'},
            {message: 'How are you ?'},

        ]
    },

    friendsTab: [
        {friendName: "Marina", id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
        {friendName: "Igor", id: 2, avatar: 'https://miro.medium.com/max/775/0*rZecOAy_WVr16810'},
        {friendName: "Yanis", id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBA3wB1AJEG0l-fnFhjG4khblYwtj9NNfIzZaLOfhjjDQiIcOM7wWOQ8gb-qTo7Nq1hY&usqp=CAU'}
    ],

    subscribe () {
        console.log('Not rendering function');
    },

    listenerAppRendering (observer)  {
        this.subscribe = observer;
    },

    dispatch(action) {
        this.profilePage = profilePageReducer(this.profilePage, action);
        this.dialogPage = dialogsPageReducer(this.dialogPage, action);
        this.subscribe();
    }
}

export default store;