"use client";

import addTransaction from "@/app/actions/addTransactions";
import {toast} from 'react-toastify';

const AddTransaction = () => {
    const clientAction = async (formData: FormData) => {
        // console.log(formData.get('text'), formData.get('amount'))

        const { data, error } = await addTransaction(formData);

        if (error) {
            toast.error(error)
        } else {
            // alert("Transaction Added");
            toast.success("Transaction Added")
            console.log(data)
        }

    }
    return (
        <>
            <h3>Add Transaction</h3>
            <form action={clientAction}>
                <div className="form-control">
                    <label htmlFor="text">
                        Text
                    </label>
                    <input type="text" id='text' name='text' placeholder="Enter Text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                        <input type="number" name='amount' id='amount' placeholder="Enter Amount..." step="0.01" />
                    </label>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;