import React, { useContext, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { IconButton } from '../components/UI/IconButtun';
import { GlobalStyles } from '../constans/styles';
import { ExpenseContext } from '../store/ExpensesContext';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';
import { Expense } from '../models/Expense';
    

export interface ManageExpenseProps extends React.ComponentProps<any> {

}

export const ManageExpense:  React.FC<ManageExpenseProps> = ({route, navigation}) => {


    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;
    const expenseCtx = useContext(ExpenseContext);

    const expense = expenseCtx.expenses.find((expense) => expense.id === expenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, 
    [navigation, isEditing]);

    function deleteExpenseHandler() {
        console.log('Deleting expense...');
        expenseCtx.deleteExpense(expenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(data: Expense) {
        if(isEditing) {
            expenseCtx.updateExpense(expenseId,data);
        }else {
            expenseCtx.addExpense(data);
        }

         navigation.goBack();
    }


    return <View style={styles.container}>
        
        <ExpenseForm 
            buttonTitle={isEditing ? 'Update' : 'Add'} 
            onCancel={cancelHandler} 
            onSubmit={confirmHandler}
            defaultValues={expense} 
        />
        
        {isEditing ? 
        <View style={styles.deleteContainer}>
            <IconButton 
                name="trash" 
                size={24} 
                color={GlobalStyles.colors.error500} 
                onPress={deleteExpenseHandler} /> 
        </View>
        : null}
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,  
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

