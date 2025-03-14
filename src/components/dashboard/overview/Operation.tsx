import React from "react";

interface OperationProps {
    operations: {
        name: string;
        date: string;
        amount: number;
    }[];
}

const Operation = ({ operations }: OperationProps) => {
    return (
        <div className="bg-white dark:bg-[#1C382E] rounded-[17px] shadow w-[395px] p-[24px]">
            <p className="text-xl font-bold mt-[12px] mb-4">Recent operations</p>
            <div className="flex flex-col gap-4">
                {operations.map((operation, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <p className="text-[18px]">{operation.name}</p>
                            <p className="text-[14px]">{operation.date}</p>
                        </div>
                        <p className="text-[18px]">{operation.name === "Deposit" ? "+" : "-"} ${operation.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Operation;