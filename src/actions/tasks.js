export const removeTask = ({id} = {}) => ({
    type: 'REMOVE_TASK',
    id
});

export function addTaskCreator(id, description, createdAt, finishedAt, spentTime) {
    return {
        type: 'ADD_TASK_CREATOR',
        payload: {
            id,
            description,
            createdAt,
            finishedAt,
            spentTime
        }
    };
}