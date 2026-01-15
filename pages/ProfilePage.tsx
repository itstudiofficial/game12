
import React from 'react';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout }) => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>

      {/* Profile Header */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="w-32 h-32 rounded-full bg-blue-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative group">
          <img src={`https://picsum.photos/seed/${user.name}/200`} alt="avatar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all cursor-pointer">
            <i className="fa-solid fa-camera text-white text-xl"></i>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <h2 className="text-2xl font-black text-slate-800">{user.name}</h2>
          <p className="text-slate-500">{user.email}</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold">VIP MEMBER</span>
            <span className="bg-slate-50 text-slate-500 px-4 py-1 rounded-full text-xs font-bold">JOINED {user.joinDate.toUpperCase()}</span>
          </div>
        </div>
        <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all">
          Edit Profile
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 font-bold text-slate-700">General Settings</div>
          <div className="divide-y divide-slate-50">
            {[
              { label: 'Security & Password', icon: 'fa-shield-halved' },
              { label: 'Notification Preferences', icon: 'fa-bell' },
              { label: 'Payment Methods', icon: 'fa-credit-card' },
              { label: 'Activity Logs', icon: 'fa-clock-rotate-left' },
            ].map((item, i) => (
              <button key={i} className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span className="font-semibold text-slate-600">{item.label}</span>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-300 text-sm"></i>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full py-6 bg-red-50 text-red-600 font-bold rounded-[2rem] hover:bg-red-100 transition-all flex items-center justify-center gap-3"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          Logout from Ads Predia
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
