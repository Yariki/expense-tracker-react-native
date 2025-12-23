import React from 'react';
import { Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
    
import { DUMMY_EXPENSES } from '../constans/dummyData';

export interface RecentExpensesProps extends React.PropsWithChildren {

}

export const RecentExpenses:  React.FC<RecentExpensesProps> = (props) => {
    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Last 7 days' ></ExpensesOutput>
    )
}