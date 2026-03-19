import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
    
import { DUMMY_EXPENSES } from '../constans/dummyData';
import { ExpenseContext } from '../store/ExpensesContext';

export interface RecentExpensesProps extends React.PropsWithChildren {

}

export const RecentExpenses:  React.FC<RecentExpensesProps> = (props) => {

    const expensesCtx = useContext(ExpenseContext);

    const today = new Date();
    const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  
    const expenses7DaysAgo = expensesCtx.expenses.filter((expense) => {
        return expense.date >= date7DaysAgo;
    });

    return (
        <ExpensesOutput expenses={expenses7DaysAgo} expensesPeriod='Last 7 days' fallbackText='No expenses registered for the last 7 days.'></ExpensesOutput>
    )
}