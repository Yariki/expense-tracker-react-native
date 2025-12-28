import { View, Text, FlatList } from "react-native";
import { DUMMY_EXPENSES } from "../../constans/dummyData";
import { Expense } from "../../models/Expense";

export interface ExpensesListProps  extends React.ComponentProps<typeof View> {
    expenses: Expense[];
}

function  renderExpenseItem(itemData: {item: Expense}) {
    return <Text>{itemData.item.description}</Text>
}

export const ExpensesList:  React.FC<ExpensesListProps> = ({expenses}) => {

    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
};