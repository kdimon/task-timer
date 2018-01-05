const tasksReducerDefaultState = [];

export default (state = tasksReducerDefaultState, action) => {
    switch(action.type) {
        case 'REMOVE_TASK':
            return state.filter(({id}) => id !== action.id);
        case 'ADD_TASK_CREATOR':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};