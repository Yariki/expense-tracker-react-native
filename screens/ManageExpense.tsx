import React from 'react';
import { Text } from 'react-native';
    

export interface ManageExpenseProps extends React.PropsWithChildren {

}

export const ManageExpense:  React.FC<ManageExpenseProps> = (props) => {
    return (
        <Text>All Expenses Screen</Text>
    )
}