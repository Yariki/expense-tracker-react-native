import { View, Text, FlatList } from "react-native";
import { DUMMY_EXPENSES } from "../../constans/dummyData";

export interface ExpensesListProps  extends React.ComponentProps<typeof View> {
}

export const ExpensesList:  React.FC<ExpensesListProps> = () => {

    return <FlatList data={[]} renderItem={() => <Text>Item</Text>} />
};