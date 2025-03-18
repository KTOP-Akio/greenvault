import React from 'react';
import DepositBankCard from '../components/dashboard/deposit/DepositBankCard';
import DepositCryptoCard from '../components/dashboard/deposit/DepositCryptoCard';

const Deposit = () => {
  return (
    <div className='flex gap-12 w-full justify-center pb-12'>
      <DepositBankCard />
      <DepositCryptoCard />
    </div>
  );
};

export default Deposit; 