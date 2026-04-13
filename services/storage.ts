import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = '@foundly_expenses';
const INCOMES_KEY = '@foundly_incomes';

export const storage = {
    saveExpenses: async (expenses: any[]) => {
        try {
            const jsonValue = JSON.stringify(expenses);
            await AsyncStorage.setItem(EXPENSES_KEY, jsonValue);
        } catch (e) {
            console.error("Error guardando gastos", e);
        }
    },

    getExpenses: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(EXPENSES_KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error("Error obteniendo gastos", e);
            return [];
        }
    },
    deleteExpense: async (id: number) => {
        try {
            const jsonValue = await AsyncStorage.getItem(EXPENSES_KEY);
            const expenses = jsonValue != null ? JSON.parse(jsonValue) : [];
            const filteredExpenses = expenses.filter((expense) => expense.id !== id);
            await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(filteredExpenses));
        } catch (e) {
            console.error("Error eliminando gasto", e);
        }
    },
    getIncomes: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(INCOMES_KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error("Error obteniendo ingresos", e);
            return [];
        }
    },
    saveIncomes: async (incomes: any[]) => {
        try {
            const jsonValue = JSON.stringify(incomes);
            await AsyncStorage.setItem(INCOMES_KEY, jsonValue);
        } catch (e) {
            console.error("Error obteniendo ingresos", e);
            return [];
        }
    },
    deleteIncome: async (id: number) => {
        try {
            const jsonValue = await AsyncStorage.getItem(INCOMES_KEY);
            const incomes = jsonValue != null ? JSON.parse(jsonValue) : [];
            const filteredIncomes = incomes.filter((income) => income.id !== id);
            await AsyncStorage.setItem(INCOMES_KEY, JSON.stringify(filteredIncomes));
        } catch (e) {
            console.error("Error eliminando gasto", e);
        }
    },
};