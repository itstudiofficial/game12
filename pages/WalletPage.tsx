
import React, { useState } from 'react';
import { User, Transaction } from '../types';

interface WalletPageProps {
  user: User;
}

const WalletPage: React.FC<WalletPageProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'withdraw' | 'history'>('withdraw');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawMethod, setWithdrawMethod] = useState('');

  const transactions: Transaction[] = [
    { id: 'T1', type: 'earning', amount: 50, method: 'Task #1', status: 'success', date: '2023-11-20' },
    { id: 'T2', type: 'withdrawal', amount: 5.0, method: 'Binance', status: 'pending', date: '2023-11-18' },
    { id: 'T3', type: 'earning', amount: 100, method: 'Task #4', status: 'success', date: '2023-11-15' },
  ];

  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* Wallet Header */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-slate-400 mb-2 font-medium">Available Balance</p>
            <h1 className="text-4xl md:text-6xl font-extrabold">${user.walletBalance.toFixed(2)}</h1>
            <p className="text-blue-400 mt-2 font-bold">{user.coins} Total Coins</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 md:min-w-[200px]">
            <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Conversion Rate</p>
            <p className="text-lg font-bold">1000 Coins = $1.00</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-8">
        <button 
          onClick={() => setActiveTab('withdraw')}
          className={`px-8 py-4 font-bold transition-all ${activeTab === 'withdraw' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
        >
          Withdraw
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          className={`px-8 py-4 font-bold transition-all ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
        >
          History
        </button>
      </div>

      {activeTab === 'withdraw' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Withdrawal Form */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Request Payout</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Withdrawal Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Binance', 'Payeer', 'JazzCash', 'EasyPaisa'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setWithdrawMethod(method)}
                      className={`p-4 rounded-2xl border text-sm font-bold transition-all ${
                        withdrawMethod === method ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 border-slate-100 text-slate-600'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Amount ($)</label>
                <input 
                  type="number" 
                  placeholder="Min $5.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-blue-600"
                />
              </div>
              <div className="bg-yellow-50 p-4 rounded-2xl text-xs text-yellow-700 flex gap-3">
                 <i className="fa-solid fa-circle-info mt-1"></i>
                 <p>Processing time takes 24-48 hours. Please ensure your withdrawal details are correct.</p>
              </div>
              <button 
                type="button" 
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-100 disabled:opacity-50"
                disabled={!withdrawMethod || !withdrawAmount}
              >
                Withdraw Funds
              </button>
            </form>
          </div>

          {/* Wallet Summary */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
               <h3 className="text-blue-900 font-bold mb-4">Payout Requirements</h3>
               <ul className="space-y-4">
                 {[
                   { label: 'Minimum Withdrawal', val: '$5.00' },
                   { label: 'Fee', val: '2%' },
                   { label: 'Verified Account', val: 'Required' }
                 ].map((item, i) => (
                   <li key={i} className="flex justify-between text-sm">
                     <span className="text-blue-700/70 font-medium">{item.label}</span>
                     <span className="text-blue-900 font-bold">{item.val}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">#{t.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 capitalize">{t.type}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">
                    {t.type === 'earning' ? '+' : '-'}${t.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      t.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WalletPage;
