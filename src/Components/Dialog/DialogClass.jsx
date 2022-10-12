// import React from 'react';
// import dl from './Dialog.module.css'
// import {NavLink} from "react-router-dom";
//
// class DialogClass extends React.Component{
//     constructor(props) {
//         super(props);
//         this.refNew = React.createRef();
//     }
//
//     messages = () => {
//         debugger;
//         return <div>{this.props.storeMessages}</div>
//     }
//
//     dialogsUser = () => {
//
//     }
//
//     listenerChangeDialogText = () => {
//         debugger;
//         let changeText = this.refNew.current.value;
//         this.props.changeDialogText(changeText);
//     }
//
//     createNewDialog()  {
//         debugger;
//         let newMessage = this.refNew.current;
//         this.props.createNewDialog(newMessage);
//     }
//
//     render() {
//         return (<div className={dl.dialogs}>
//                 <div className={dl.dialogsItems}>
//                     {this.dialogsUser}
//                 </div>
//                 <div className={dl.messages}>
//                     <div>
//                     <textarea
//                         onChange={this.listenerChangeDialogText}
//                         value={this.props.inputTextDialog}
//                         ref={this.refNew}
//                     ></textarea>
//                     </div>
//                     <div className={dl.btn}>
//                         <button onClick={this.createNewDialog}>New Message</button>
//                     </div>
//                     {this.messages()}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default DialogClass;