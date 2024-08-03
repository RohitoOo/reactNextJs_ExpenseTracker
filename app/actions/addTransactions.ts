"use server";
import { db } from "@/lib/db";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
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

  // Get Logged in User

  const { userId } = auth();

  console.log({ userId });

  // Check for User

  if (!userId) {
    return { error: "No User Found" };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId
          },
    });

    revalidatePath('/')

    return {
      data: transactionData,
    };
  } catch (error) {
    return {error : "Transaction Not Added"}
  }
}

export default addTransaction;
