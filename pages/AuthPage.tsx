
import React, { useState } from 'react';
import { Page } from '../types';

interface AuthPageProps {
  type: 'login' | 'signup';
  onAuthSuccess: () => void;
  setPage: (page: Page) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ type, onAuthSuccess, setPage }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-8 text-white text-center">
          <div 
            onClick={() => setPage(Page.LANDING)}
            className="flex items-center justify-center gap-2 mb-4 cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <span className="text-2xl font-bold">Ads Predia</span>
          </div>
          <p className="text-blue-100">
            {type === 'login' ? 'Welcome back, enter your details.' : 'Create your account to start earning.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {type === 'signup' && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g., John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
            />
          </div>

          {type === 'login' && (
            <div className="flex justify-end">
              <button type="button" className="text-sm text-blue-600 hover:underline">Forgot password?</button>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : (type === 'login' ? 'Login' : 'Sign Up')}
          </button>

          <div className="text-center text-sm text-slate-500">
            {type === 'login' ? (
              <p>Don't have an account? <button type="button" onClick={() => setPage(Page.SIGNUP)} className="text-blue-600 font-bold">Sign Up</button></p>
            ) : (
              <p>Already have an account? <button type="button" onClick={() => setPage(Page.LOGIN)} className="text-blue-600 font-bold">Login</button></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
