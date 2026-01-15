
import React from 'react';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-6"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back to Dashboard</span>
      </button>

      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate max-w-none">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6 capitalize">
          {type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
        </h1>
        
        <p className="text-slate-500 mb-8">Last Updated: November 24, 2023</p>

        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-800">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed">
            Welcome to Ads Predia. These terms govern your use of our platform. By accessing or using Ads Predia, you agree to be bound by these terms. We provide a marketplace for micro-tasks where users can earn rewards.
          </p>

          <h2 className="text-xl font-bold text-slate-800">2. User Conduct</h2>
          <p className="text-slate-600 leading-relaxed">
            Users must provide accurate information. Fraudulent activities, including but not limited to using bots, multiple accounts, or submitting fake proof of task completion, will result in immediate permanent suspension without payout.
          </p>

          <h2 className="text-xl font-bold text-slate-800">3. Payments & Withdrawals</h2>
          <p className="text-slate-600 leading-relaxed">
            Earnings are calculated in Coins. Coins can be converted to your local currency or USDT at our current rate. We reserve the right to verify all tasks before finalizing payment. Minimum withdrawal threshold must be met.
          </p>

          <h2 className="text-xl font-bold text-slate-800">4. Privacy & Data</h2>
          <p className="text-slate-600 leading-relaxed">
            We value your privacy. Your data is encrypted and used solely for platform functionality and reward verification. We do not sell your personal information to third parties.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
