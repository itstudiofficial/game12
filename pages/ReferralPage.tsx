
import React from 'react';
import { User } from '../types';

interface ReferralPageProps {
  user: User;
}

const ReferralPage: React.FC<ReferralPageProps> = ({ user }) => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-10">
      {/* Referral Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Refer Friends, <br/>Earn <span className="text-yellow-400">Unlimited</span></h1>
          <p className="text-blue-100 text-lg">You get 10% commission on every task your referral completes, for life!</p>
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex-1 border border-white/20 flex items-center justify-between">
                <span className="font-mono text-lg font-bold tracking-widest">{user.referralCode}</span>
                <button className="text-white hover:text-yellow-400 transition-colors">
                  <i className="fa-solid fa-copy"></i>
                </button>
             </div>
             <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all">
               Invite Now
             </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
           <div className="relative">
             <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <i className="fa-solid fa-users-viewfinder text-7xl"></i>
             </div>
             <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-900">
               10%
             </div>
           </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Total Team Members', val: user.referralCount, icon: 'fa-users', color: 'bg-blue-50 text-blue-600' },
           { label: 'Active Today', val: '8', icon: 'fa-user-check', color: 'bg-green-50 text-green-600' },
           { label: 'Total Team Earnings', val: '$142.50', icon: 'fa-sack-dollar', color: 'bg-yellow-50 text-yellow-600' },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${stat.color}`}>
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <p className="text-2xl font-black text-slate-800">{stat.val}</p>
              </div>
           </div>
         ))}
      </div>

      {/* Referral Table */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">Recent Referrals</h2>
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">User</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Joined Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Total Earned</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Your Bonus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Alice Smith', date: 'Oct 14, 2023', earned: '$12.50', bonus: '$1.25' },
                { name: 'Robert Fox', date: 'Oct 15, 2023', earned: '$8.20', bonus: '$0.82' },
                { name: 'Jenny Wilson', date: 'Oct 18, 2023', earned: '$45.00', bonus: '$4.50' },
              ].map((ref, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                        {ref.name[0]}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{ref.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{ref.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-800">{ref.earned}</td>
                  <td className="px-6 py-4 text-sm font-bold text-green-600">+{ref.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
