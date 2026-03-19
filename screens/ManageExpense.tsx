import React, { useContext, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { IconButton } from '../components/UI/IconButtun';
import { GlobalStyles } from '../constans/styles';
import { Button } from '../components/UI/Button';
import { ExpenseContext } from '../store/ExpensesContext';
    

export interface ManageExpenseProps extends React.ComponentProps<any> {

}

export const ManageExpense:  React.FC<ManageExpenseProps> = ({route, navigation}) => {


    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;
    const expenseCtx = useContext(ExpenseContext);

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

    function confirmHandler() {
        if(isEditing) {
            expenseCtx.updateExpense(expenseId,{
                description: 'Test !!',
                amount: 19.99,
                date: new Date('2026-03-15')
            });
        }else {
            expenseCtx.addExpense({
                description: 'Test',
                amount: 19.99,
                date: new Date('2026-03-15')
            });
        }

         navigation.goBack();
    }


    return <View style={styles.container}>
        <TextInput />

        <View style={styles.buttons}>
            <Button style={styles.button} onPress={cancelHandler} mode='flat'>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler} >{isEditing ? 'Update' : 'Add'}</Button>
        </View>
        
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8

    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,  
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

