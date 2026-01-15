
import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage, onLogout }) => {
  const navItems = [
    { id: Page.DASHBOARD, label: 'Home', icon: 'fa-house' },
    { id: Page.TASKS, label: 'Tasks', icon: 'fa-list-check' },
    { id: Page.WALLET, label: 'Wallet', icon: 'fa-wallet' },
    { id: Page.REFERRAL, label: 'Team', icon: 'fa-users' },
    { id: Page.PROFILE, label: 'Profile', icon: 'fa-user' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center py-3 md:hidden z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex flex-col items-center gap-1 ${
              currentPage === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-lg`}></i>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0 left-0 p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="text-xl font-bold text-slate-800">Ads Predia</span>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentPage === item.id
                  ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
           <button 
            onClick={() => setPage(Page.TERMS)}
            className="text-left px-4 py-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Terms & Conditions
          </button>
          <button 
            onClick={() => setPage(Page.PRIVACY)}
            className="text-left px-4 py-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"
          >
            <i className="fa-solid fa-right-from-bracket w-5"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
