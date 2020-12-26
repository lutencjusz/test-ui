/* eslint-disable prettier/prettier */
const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Tariff", setCategoryElements: "Tariff", isDragDisabled: true, category:"*", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-2": { id: "task-2", content: "SLA", setCategoryElements: "SLA", category:"*", isDragDisabled: true, attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-3": { id: "task-3", content: "Offer", setCategoryElements: "Offer", category:"*", isDragDisabled: true, attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-4": { id: "task-4", content: "Tariff: Element 4", category:"Tariff", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-5": { id: "task-5", content: "Tariff: Element 5", category:"Tariff", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-6": { id: "task-6", content: "Offer: Element 6", category:"Offer", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-7": { id: "task-7", content: "SLA: Element 7", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-8": { id: "task-8", content: "Offer: Element 8", category:"Offer", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-9": { id: "task-9", content: "SLA: Element 9", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-10": { id: "task-10", content: "SLA: Element 10", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        } },
        "task-11": { id: "task-11", content: "Other: Element 11", category:"Offer", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
        "task-12": { id: "task-12", content: "SLA: Element 12", category:"SLA", attributes: {
            quantity: 5, price: 10, type: "dowolny"
        }},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "Kategoria elementów",
            isDropDisabled: true,
            taskIds: ["task-1", "task-2", "task-3"],
        },
        "column-2": {
            id: "column-2",
            title: "Elementy do wyboru",
            isDropDisabled: true,
            taskIds: [ "task-4", "task-5", "task-6", "task-7", "task-8", "task-9", "task-10", "task-11", "task-12"],
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
