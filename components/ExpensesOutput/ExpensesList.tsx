import { View, Text, FlatList } from "react-native";
import { DUMMY_EXPENSES } from "../../constans/dummyData";
import { Expense } from "../../models/Expense";
import { StyleSheet } from "react-native";
import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export interface ExpensesListProps  extends React.ComponentProps<typeof View> {
    expenses: Expense[];
}

function  renderExpenseItem(itemData: {item: Expense}) {
    return <ExpenseItem expense={itemData.item}></ExpenseItem>
}

export const ExpensesList:  React.FC<ExpensesListProps> = ({expenses}) => {

    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
};

const styles =  StyleSheet.create({

});