import React from 'react';
import { Text } from 'react-native';
    

export interface RecentExpensesProps extends React.PropsWithChildren {

}

export const RecentExpenses:  React.FC<RecentExpensesProps> = (props) => {
    return (
        <Text>All Expenses Screen</Text>
    )
}