const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Element 1' },
        'task-2': { id: 'task-2', content: 'Element 2' },
        'task-3': { id: 'task-3', content: 'Element 3' },
        'task-4': { id: 'task-4', content: 'Element 4' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Elementy do wyboru',
            taskIds: ['task-1', 'task-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'Dodatkowe elementy',
            taskIds: ['task-3', 'task-4']
        },
        'column-3': {
            id: 'column-3',
            title: 'Elementy wybrane',
            taskIds: []
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData