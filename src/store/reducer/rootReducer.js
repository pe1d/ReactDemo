
const initState = {
    users: [
        { id: 1, name: 'Diep' },
        { id: 2, name: 'Name' },
        { id: 3, name: 'ABC' }
    ],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Delete_user':
            console.log(">>Run into delete user:", action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            };
        case 'Add_user':
            let id = Math.floor(Math.random() * 100001)
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }
}

export default rootReducer;