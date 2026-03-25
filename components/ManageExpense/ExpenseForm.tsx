import { View, StyleSheet, Text } from "react-native"
import { Input } from "./Input"
import { useState } from "react"
import { Button } from "../UI/Button";
import { Expense } from "../../models/Expense";
import { getFormattedDate } from "../../utils/date";

export interface ExpenseFormProps {
    buttonTitle: string;
    onCancel: () => void;
    onSubmit: (expenseData: Expense) => void;
    defaultValues?: Expense;
}

export interface InputState<T> {
    value: T;
    isValid: boolean;
}

export interface  ExpenseFormState {
    amount: InputState<string>;
    date: InputState<string>;
    description: InputState<string>;
}

export const ExpenseForm : React.FC<ExpenseFormProps>  = (props: ExpenseFormProps) => {

    const [formState, setFormState] = useState<ExpenseFormState>({
        amount: { value: props.defaultValues ? props.defaultValues.amount.toString() : '', isValid: true },
        date: { value: props.defaultValues ? getFormattedDate(props.defaultValues.date) : '', isValid: true },
        description: { value: props.defaultValues ? props.defaultValues.description : '', isValid: true }
    });

    const validators = {
        amount: (value: string) => !isNaN(+value) && +value > 0,
        date: (value: string) => !isNaN(new Date(value).getTime()),
        description: (value: string) => value.trim().length > 0
    }


    function inputChangeHandler(inputIdentifier: keyof ExpenseFormState, enteredValue: string) {
        console.log(enteredValue);
        setFormState((curState) => {
            return {
                ...curState,
                [inputIdentifier]: { value: enteredValue, isValid: validators[inputIdentifier](enteredValue) }
            }
        });
    }

    function submitHandler() {
        const expenseData: Expense = {
            amount: +formState.amount.value,
            date: new Date(formState.date.value),
            description: formState.description.value,
            id: ''
        }

        const amountIsValid = validators.amount(formState.amount.value);
        const dateIsValid = validators.date(formState.date.value);
        const descriptionIsValid = validators.description(formState.description.value);

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setFormState((curState) => {
                return {
                    amount: { value: curState.amount.value, isValid: amountIsValid },
                    date: { value: curState.date.value, isValid: dateIsValid },
                    description: { value: curState.description.value, isValid: descriptionIsValid }
                }
            }
            );
            return;
        }

        props.onSubmit(expenseData);
    }


    const formIsInvalid = !formState.amount.isValid || !formState.date.isValid || !formState.description.isValid;

    return <View>
        <View style={styles.inputRow}>
            <Input 
                style={styles.rowInput}
                invalid={!formState.amount.isValid}
                label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: (text) => inputChangeHandler('amount', text),
                    value: formState.amount.value
            }} />
            <Input 
                style={styles.rowInput}
                invalid={!formState.date.isValid}

                label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: (text) => inputChangeHandler('date', text),
                    value: formState.date.value
            }} />

        </View>
        <Input label="Description" 
                invalid={!formState.description.isValid}
                textInputConfig={{
                multiline: true,
                autoCorrect: true,
                autoCapitalize: 'sentences',
                onChangeText: (text) => inputChangeHandler('description', text),
                value: formState.description.value
        }} />
        {
            formIsInvalid
            && <Text style={styles.errorStyle}>Invalid input values - please check your entered data!</Text>
        }
        <View style={styles.buttons}>
            <Button style={styles.button} onPress={props.onCancel} mode='flat'>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler} >{props.buttonTitle}</Button>
        </View>
    </View>
}


const styles = StyleSheet.create({
    inputRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    form: {
        paddingTop: 40,
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
    errorStyle: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 8
    }
})