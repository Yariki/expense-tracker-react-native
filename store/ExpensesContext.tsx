import { createContext, useReducer } from "react";
import { Expense } from "../models/Expense";
import { DUMMY_EXPENSES } from "../constans/dummyData";



export interface ExpensesContextObj {
    expenses: Expense[];
    addExpense: (expenseData: Omit<Expense, 'id'>) => void;
    deleteExpense: (id: string) => void;
    updateExpense: (id: string, expenseData: Omit<Expense, 'id'>) => void;
}

export interface ExpenseAction {
    type: 'ADD' | 'UPDATE' | 'DELETE';
    payload: any;
}

export const ExpenseContext = createContext<ExpensesContextObj>({
    expenses: [],
    addExpense: () => {},
    deleteExpense: () => {},
    updateExpense: () => {}
});

function expensesReducer(state: Expense[], action: ExpenseAction) {
    switch(action.type) {
        case 'ADD':
            const newExpense: Expense = {
                id: new Date().toString() + Math.random().toString(),
                ...action.payload
            };
            return [newExpense, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data};
            return [...state.slice(0, updatableExpenseIndex), updatedItem, ...state.slice(updatableExpenseIndex + 1)];
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload );
    }
    return state;
}

export const ExpensesContextProvider = ({children}: {children: React.ReactNode}) => {


    const [expensesState, dispatch] = useReducer<Expense[], ExpenseAction>(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expense: Omit<Expense, 'id'>) {
        dispatch({type: 'ADD', payload: expense});
    }

    function updateExpense(id: string, expense: Omit<Expense, 'id'>) {
        dispatch({type: 'UPDATE', payload: {id, data:{...expense}}});
    }

    function deleteExpense(id: string) {
        dispatch({type: 'DELETE', payload: id});
    }

    return (
        <ExpenseContext.Provider value={{
            expenses: expensesState,
            addExpense: addExpense,
            deleteExpense: deleteExpense,
            updateExpense: updateExpense
        }}>
            {children}
        </ExpenseContext.Provider>
    );
};
