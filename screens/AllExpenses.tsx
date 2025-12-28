import React from 'react';
import { Text } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../constans/dummyData';
    
export interface AllExpensesProps extends React.PropsWithChildren {

}

export const AllExpenses:  React.FC<AllExpensesProps> = (props) => {

    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='All Expenses' ></ExpensesOutput>
    )
}