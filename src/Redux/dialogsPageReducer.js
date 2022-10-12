const CREATE_NEW_DIALOG = 'CREAT-NEW-DIALOG';
const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG';


let initialState = {
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
}
const dialogsPageReducer = (state = initialState, action) => {
    if (action.type === CREATE_NEW_DIALOG) {
        return  {
            ...state,
            messages: [...state.messages, action],
            inputTextDialog: state.inputTextDialog = ''
        }
    }
    return state
}

export const createNewDialogActionCreator = (newMessage) => {
    return {
        type: CREATE_NEW_DIALOG,
        message: newMessage.dialogtext
    }
}

export default dialogsPageReducer;