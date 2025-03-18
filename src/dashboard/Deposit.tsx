import React from 'react';
import DepositBankCard from '../components/dashboard/deposit/DepositBankCard';
import DepositCryptoCard from '../components/dashboard/deposit/DepositCryptoCard';

const Deposit = () => {
  return (
    <div className='flex gap-12 w-full'>
      <DepositBankCard />
      <DepositCryptoCard />
    </div>
  );
};

export default Deposit; 