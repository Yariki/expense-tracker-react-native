import { View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

export interface ExpensesOutputProps  extends React.ComponentProps<typeof View> {    
    expenses: any[];
    expensesPeriod: string;
    fallbackText: string;
}

export const ExpensesOutput:  React.FC<ExpensesOutputProps> = ({expenses, expensesPeriod}) => {

    return <View>   
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        <ExpensesList />
    </View>
};
