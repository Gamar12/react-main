
let navBarPage = {
    friendsTab: [
        {friendName: "Marina", id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JLcsW7kph3TOvsEzB_iH8VHFRHV3fJw-pw&usqp=CAU'},
        {friendName: "Igor", id: 2, avatar: 'https://miro.medium.com/max/775/0*rZecOAy_WVr16810'},
        {friendName: "Yanis", id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBA3wB1AJEG0l-fnFhjG4khblYwtj9NNfIzZaLOfhjjDQiIcOM7wWOQ8gb-qTo7Nq1hY&usqp=CAU'}
    ],
}

const navBarPageReducer = (state = navBarPage, action) => {
    return state
}

export default navBarPageReducer;