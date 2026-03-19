import { Expense } from "../models/Expense";

export const DUMMY_EXPENSES :  Expense[] = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-01-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-06-20')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-06-21')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2025-12-22')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2025-12-21')
    },
    {
        id: 'e6',
        description: 'A carpet',
        amount: 99.99,
        date: new Date('2025-12-23')
    },
    {
        id: 'e7',
        description: 'Something',
        amount: 99.99,
        date: new Date('2026-01-27')
    },
    {
        id: 'e8',
        description: 'Something else',
        amount: 99.99,
        date: new Date('2026-03-04')
    },
    {
        id: 'e9',
        description: 'Something else 1',
        amount: 100,
        date: new Date('2026-03-12')
    },
    {
        id: 'e10',
        description: 'Something else 2',
        amount: 199.99,
        date: new Date('2026-03-14')
    },
    {
        id: 'e11',
        description: 'Something else 3',
        amount: 299.99,
        date: new Date('2026-03-16')
    }
];