import { View, Text, StyleSheet } from "react-native";
import { Expense } from "../../models/Expense";
import { GlobalStyles } from "../../constans/styles";

export interface ExpensesSummaryProps  extends React.ComponentProps<typeof View> {
    expenses: Expense[];
    expensesPeriod: string;
}

export const ExpensesSummary:  React.FC<ExpensesSummaryProps> = ({expenses, expensesPeriod}) => {

    const sum = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);

    return <View style={styles.container}>
        <Text style={styles.periodText}>{expensesPeriod}</Text>
        <Text style={styles.sumText}>${sum.toFixed(2)}</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    periodText: {
        fontSize: 12,   
        color: GlobalStyles.colors.primary400,

    },
    sumText: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500,
    }
});