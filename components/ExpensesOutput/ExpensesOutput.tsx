import { View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { Expense } from "../../models/Expense";

export interface ExpensesOutputProps  extends React.ComponentProps<typeof View> {    
    expenses: Expense[];
    expensesPeriod: string;
}

export const ExpensesOutput:  React.FC<ExpensesOutputProps> = ({expenses, expensesPeriod}) => {

    return <View>   
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        <ExpensesList expenses={expenses} />
    </View>
};
