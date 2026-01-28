import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from '../components/UI/IconButtun';
import { GlobalStyles } from '../constans/styles';
import { Button } from '../components/UI/Button';
    

export interface ManageExpenseProps extends React.ComponentProps<any> {

}

export const ManageExpense:  React.FC<ManageExpenseProps> = ({route, navigation}) => {


    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, 
    [navigation, isEditing]);

    function deleteExpenseHandler() {
        console.log('Deleting expense...');
         navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
         navigation.goBack();
    }


    return <View style={styles.container}>
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

