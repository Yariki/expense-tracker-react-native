import React from 'react';
import { Text } from 'react-native';
    

export interface AllExpensesProps extends React.PropsWithChildren {

}

export const AllExpenses:  React.FC<AllExpensesProps> = (props) => {

    return (
        <Text>All Expenses Screen</Text>
    )
}