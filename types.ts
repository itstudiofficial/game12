
export enum TaskCategory {
  SOCIAL = 'Social Media',
  WEBSITE = 'Website Visit',
  SPIN = 'Spin & Earn',
  APP = 'App Engagement',
  VIDEO = 'YouTube Tasks'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  category: TaskCategory;
  instructions: string;
  status: 'available' | 'pending' | 'completed';
}

export interface User {
  name: string;
  email: string;
  coins: number;
  walletBalance: number;
  referralCode: string;
  referralCount: number;
  joinDate: string;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'earning';
  amount: number;
  method: string;
  status: 'pending' | 'success' | 'failed';
  date: string;
}

export enum Page {
  LANDING = 'landing',
  LOGIN = 'login',
  SIGNUP = 'signup',
  DASHBOARD = 'dashboard',
  TASKS = 'tasks',
  WALLET = 'wallet',
  REFERRAL = 'referral',
  PROFILE = 'profile',
  TERMS = 'terms',
  PRIVACY = 'privacy'
}
