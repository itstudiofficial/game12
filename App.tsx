
import React, { useState, useEffect } from 'react';
import { Page, User, Task, Transaction } from './types';
import { MOCK_TASKS } from './constants';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import WalletPage from './pages/WalletPage';
import ReferralPage from './pages/ReferralPage';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john@example.com',
    coins: 1250,
    walletBalance: 12.50,
    referralCode: 'ADSPREDIA777',
    referralCount: 15,
    joinDate: 'Oct 12, 2023'
  });

  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage(Page.DASHBOARD);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage(Page.LANDING);
  };

  const updateCoins = (amount: number) => {
    setUser(prev => ({
      ...prev,
      coins: prev.coins + amount,
      walletBalance: (prev.coins + amount) / 100
    }));
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      if (currentPage === Page.LOGIN || currentPage === Page.SIGNUP) {
        return <AuthPage type={currentPage === Page.LOGIN ? 'login' : 'signup'} onAuthSuccess={handleLogin} setPage={setCurrentPage} />;
      }
      return <LandingPage setPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case Page.DASHBOARD:
        return <Dashboard user={user} setPage={setCurrentPage} tasks={tasks} />;
      case Page.TASKS:
        return <TasksPage tasks={tasks} onCompleteTask={updateCoins} />;
      case Page.WALLET:
        return <WalletPage user={user} />;
      case Page.REFERRAL:
        return <ReferralPage user={user} />;
      case Page.PROFILE:
        return <ProfilePage user={user} onLogout={handleLogout} />;
      case Page.TERMS:
        return <LegalPage type="terms" onBack={() => setCurrentPage(Page.DASHBOARD)} />;
      case Page.PRIVACY:
        return <LegalPage type="privacy" onBack={() => setCurrentPage(Page.DASHBOARD)} />;
      default:
        return <Dashboard user={user} setPage={setCurrentPage} tasks={tasks} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {isLoggedIn && currentPage !== Page.LANDING && (
        <Navigation currentPage={currentPage} setPage={setCurrentPage} onLogout={handleLogout} />
      )}
      <main className={`flex-1 ${isLoggedIn ? 'pb-24 md:pb-0' : ''}`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
