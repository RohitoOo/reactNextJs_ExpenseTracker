"use server";

interface TransactionData {
    text: string;
    amount: number;
}

interface TrasactionResult {
    data?: TransactionData;
    error?: string;
}

async function addTransaction(formData: FormData): Promise<TrasactionResult> {
    const textValue = formData.get("text");
    const amountValue = formData.get("amount");

    // Check for input values

    if (!textValue || textValue === "" || !amountValue) {
        return {
            error: "Text / Amount is missing",
        };
    }

    const text: string = textValue.toString(); ///Ensure text is a string
    const amount: number = parseFloat(amountValue.toString()); ///Parse amount as number

    const transactionData : TransactionData = {
        text,
        amount 
    }

    return {
        data : transactionData
    }
}

export default addTransaction;
