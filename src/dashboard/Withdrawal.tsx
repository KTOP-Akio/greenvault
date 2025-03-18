import React from 'react';
import WithdrawalBankCard from '../components/dashboard/withdrawal/WithdrawalBankCard';
import WithdrawalCryptoCard from '../components/dashboard/withdrawal/WithdrawalCryptoCard';

const Withdrawal = () => {
  return (
    <div className='flex gap-12 w-full justify-center pb-12'>
      <WithdrawalBankCard />
      <WithdrawalCryptoCard />
    </div>
  );
};

export default Withdrawal; 