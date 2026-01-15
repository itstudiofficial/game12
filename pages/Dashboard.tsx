
import React from 'react';
import { User, Task, Page } from '../types';

interface DashboardProps {
  user: User;
  tasks: Task[];
  setPage: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, tasks, setPage }) => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Hello, {user.name}! 👋</h1>
          <p className="text-slate-500">Check your progress and new tasks today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full border border-yellow-100 flex items-center gap-2">
            <i className="fa-solid fa-coins"></i>
            <span className="font-bold">{user.coins} Coins</span>
          </div>
          <button 
            onClick={() => setPage(Page.WALLET)}
            className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Balance', val: `$${user.walletBalance.toFixed(2)}`, icon: 'fa-wallet', color: 'bg-blue-50 text-blue-600' },
          { label: 'Available Tasks', val: tasks.filter(t => t.status === 'available').length, icon: 'fa-tasks', color: 'bg-purple-50 text-purple-600' },
          { label: 'Referrals', val: user.referralCount, icon: 'fa-users', color: 'bg-green-50 text-green-600' },
          { label: 'Pending Payout', val: '$0.00', icon: 'fa-clock-rotate-left', color: 'bg-orange-50 text-orange-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${stat.color}`}>
              <i className={`fa-solid ${stat.icon}`}></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              <p className="text-xl font-extrabold text-slate-800">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Available High-Reward Tasks</h2>
            <button 
              onClick={() => setPage(Page.TASKS)}
              className="text-sm text-blue-600 font-semibold"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 text-xl">
                  <i className={`fa-solid ${task.category === 'YouTube Tasks' ? 'fa-play' : 'fa-link'}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm">{task.title}</h3>
                  <p className="text-xs text-slate-400">{task.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-bold text-sm">+{task.reward} C</p>
                  <button 
                    onClick={() => setPage(Page.TASKS)}
                    className="text-[10px] bg-slate-50 px-2 py-1 rounded-md mt-1"
                  >
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Mini Components */}
        <div className="space-y-6">
          {/* Daily Reward */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl shadow-blue-200">
            <h3 className="font-bold mb-2">Daily Check-in</h3>
            <p className="text-xs text-blue-100 mb-4">Claim your free daily coins to stay consistent!</p>
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <div key={d} className={`min-w-[40px] h-14 rounded-xl border flex flex-col items-center justify-center text-[10px] ${d === 1 ? 'bg-white text-blue-600 border-white' : 'border-blue-400 opacity-60'}`}>
                  <span>Day {d}</span>
                  <span className="font-bold">+10</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg active:scale-95 transition-all">
              Claim Now
            </button>
          </div>

          {/* Referral Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Refer & Earn</h3>
            <p className="text-xs text-slate-400 mb-4">Earn 10% lifetime commission from your referrals.</p>
            <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 flex items-center justify-between mb-4">
              <code className="text-sm font-bold text-slate-600 uppercase">{user.referralCode}</code>
              <button className="text-blue-600"><i className="fa-solid fa-copy"></i></button>
            </div>
            <button 
              onClick={() => setPage(Page.REFERRAL)}
              className="w-full py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all"
            >
              Manage Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
