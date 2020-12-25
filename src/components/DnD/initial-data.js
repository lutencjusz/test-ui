/* eslint-disable prettier/prettier */
const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Element 1", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-2": { id: "task-2", content: "SLA", category:"Tariff", isDragDisabled: true, attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-3": { id: "task-3", content: "Element 3", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-4": { id: "task-4", content: "Element 4", category:"Tariff", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-5": { id: "task-5", content: "Element 5", category:"Tariff", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-6": { id: "task-6", content: "Element 6", category:"Offer", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-7": { id: "task-7", content: "Element 7", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "Elementy do wyboru",
            isDropDisabled: true,
            taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
        },
        "column-2": {
            id: "column-2",
            title: "Dodatkowe elementy",
            isDropDisabled: true,
            taskIds: ["task-6", "task-7"],
        },
        "column-3": {
            id: "column-3",
            title: "Elementy wybrane",
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3"],
    categoryFilter: "Tariff"
};

export default initialData;
