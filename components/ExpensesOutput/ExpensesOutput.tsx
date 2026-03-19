import { StyleSheet, View, Text } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { Expense } from "../../models/Expense";
import { GlobalStyles } from "../../constans/styles";

export interface ExpensesOutputProps  extends React.ComponentProps<typeof View> {    
    expenses: Expense[];
    expensesPeriod: string;
    fallbackText?: string;
}

export const ExpensesOutput:  React.FC<ExpensesOutputProps> = ({expenses, expensesPeriod, fallbackText}) => {

    let content = <Text style={styles.infoText}>{fallbackText ? fallbackText : `No expenses found for ${expensesPeriod}.`}</Text>;

    return <View style={styles.container}>   
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        {expenses.length === 0 ? content : <ExpensesList expenses={expenses} />}
    </View>
};


const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
});