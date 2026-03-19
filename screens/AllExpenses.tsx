import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../constans/dummyData';
import { ExpenseContext } from '../store/ExpensesContext';
    
export interface AllExpensesProps extends React.PropsWithChildren {

}

export const AllExpenses:  React.FC<AllExpensesProps> = (props) => {

    const expensesCtx = useContext(ExpenseContext);

    return (
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='All Expenses' fallbackText='No registered expenses found.'></ExpensesOutput>
    )
}