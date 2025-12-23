import { View, Text } from "react-native";

export interface ExpensesSummaryProps  extends React.ComponentProps<typeof View> {
    expenses: any[];
    expensesPeriod: string;
}

export const ExpensesSummary:  React.FC<ExpensesSummaryProps> = ({expenses, expensesPeriod}) => {

    const sum = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);

    return <View>
        <Text>{expensesPeriod}</Text>
        <Text>${sum.toFixed(2)}</Text>
    </View>
};