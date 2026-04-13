import { Box, VStack, HStack, Text, Heading, Button, ButtonText, ScrollView, Pressable } from "@gluestack-ui/themed";
import { storage } from "../services/storage";
import { useCallback, useState } from "react";
import { BalanceCard } from "./components/BalanceCard";
import { ListView } from "./components/listView";
import { useFocusEffect } from "expo-router";

export default function Home() {

	const [expenses, setExpenses] = useState<{ amount: number, description: string }[]>([]);
	const [incomes, setIncomes] = useState<{ amount: number, description: string }[]>([]);

	useFocusEffect(
		useCallback(() => {
			const fetchData = async () => {
				const exps = await storage.getExpenses();
				const incs = await storage.getIncomes();
				setExpenses(exps);
				setIncomes(incs);
			};

			fetchData();
		}, [])
	);

	const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
	const totalIncomes = incomes.reduce((acc, income) => acc + income.amount, 0);
	const total = (totalIncomes - totalExpenses);
	const totalCalculated = total > 0 ? total : 0;
	const handleDeleteExpense = async (id: number) => {
		await storage.deleteExpense(id);
		await storage.deleteIncome(id);
		const expenses = await storage.getExpenses();
		const incomes = await storage.getIncomes();
		setExpenses(expenses);
		setIncomes(incomes);
	}

	return (
		<ListView
			data={[...expenses, ...incomes]}
			onDelete={handleDeleteExpense}
			header={
				<BalanceCard
					totalCalculated={totalCalculated}
					totalExpenses={totalExpenses}
					totalIncomes={totalIncomes}
				/>
			}
		/>
	);
}