import { View, Text, FlatList } from "react-native";

export interface ExpensesListProps  extends React.ComponentProps<typeof View> {
}

export const ExpensesList:  React.FC<ExpensesListProps> = () => {

    return <FlatList data={[]} renderItem={() => <Text>Item</Text>} />
};