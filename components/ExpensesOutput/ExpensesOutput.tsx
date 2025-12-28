import { StyleSheet, View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { Expense } from "../../models/Expense";
import { GlobalStyles } from "../../constans/styles";

export interface ExpensesOutputProps  extends React.ComponentProps<typeof View> {    
    expenses: Expense[];
    expensesPeriod: string;
}

export const ExpensesOutput:  React.FC<ExpensesOutputProps> = ({expenses, expensesPeriod}) => {

    return <View style={styles.container}>   
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        <ExpensesList expenses={expenses} />
    </View>
};


const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
});