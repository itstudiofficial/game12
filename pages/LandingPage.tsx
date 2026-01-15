
import React from 'react';
import { Page } from '../types';

interface LandingPageProps {
  setPage: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="text-xl font-bold text-slate-800">Ads Predia</span>
        </div>
        <button 
          onClick={() => setPage(Page.LOGIN)}
          className="text-blue-600 font-semibold"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Turn Your Free Time Into <span className="text-blue-600 underline">Earnings</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto md:mx-0">
            Complete simple tasks like watching videos, visiting websites, and following social media to earn real rewards. Join the fastest growing micro-task community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setPage(Page.SIGNUP)}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              Start Earning Now
            </button>
            <button className="bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-100 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md relative">
          <div className="absolute -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -top-10 -right-10 opacity-50"></div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 transform rotate-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400">Task Completed</p>
                <p className="font-bold text-slate-800">Watch YouTube Video</p>
              </div>
              <div className="ml-auto bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-bold">
                +50 Coins
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-50 rounded-full w-full"></div>
              <div className="h-4 bg-slate-50 rounded-full w-3/4"></div>
              <div className="h-4 bg-slate-50 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Ads Predia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Easy Tasks', icon: 'fa-wand-magic-sparkles', desc: 'Social follows, clicks, and short surveys.' },
              { title: 'Fast Payouts', icon: 'fa-bolt', desc: 'Withdraw to Binance, Payeer, or local banks instantly.' },
              { title: 'Referral Bonus', icon: 'fa-users-line', desc: 'Invite friends and earn 10% of their life-time earnings.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-blue-200 shadow-lg">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
