
import { Task, TaskCategory } from './types';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Subscribe to Ads Predia YT',
    description: 'Visit our official channel and subscribe.',
    reward: 50,
    category: TaskCategory.VIDEO,
    instructions: 'Click start, subscribe to the channel, take a screenshot, and upload here.',
    status: 'available'
  },
  {
    id: '2',
    title: 'Daily Website Visit',
    description: 'Browse our partner site for 60 seconds.',
    reward: 20,
    category: TaskCategory.WEBSITE,
    instructions: 'Visit the link, wait for the timer, and submit the secret code found at the bottom.',
    status: 'available'
  },
  {
    id: '3',
    title: 'Share Facebook Post',
    description: 'Help us grow on Facebook.',
    reward: 30,
    category: TaskCategory.SOCIAL,
    instructions: 'Share our latest post publicly and provide the post link.',
    status: 'available'
  },
  {
    id: '4',
    title: 'Lucky Wheel Spin',
    description: 'Test your luck and win coins.',
    reward: 100,
    category: TaskCategory.SPIN,
    instructions: 'Spin the wheel. You can spin once every 24 hours.',
    status: 'available'
  }
];

export const CONVERSION_RATE = 1000; // 1000 coins = $1
