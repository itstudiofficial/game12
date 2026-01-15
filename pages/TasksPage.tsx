
import React, { useState } from 'react';
import { Task, TaskCategory } from '../types';

interface TasksPageProps {
  tasks: Task[];
  onCompleteTask: (reward: number) => void;
}

const TasksPage: React.FC<TasksPageProps> = ({ tasks, onCompleteTask }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [submissionProof, setSubmissionProof] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['All', ...Object.values(TaskCategory)];

  const filteredTasks = activeCategory === 'All' 
    ? tasks 
    : tasks.filter(t => t.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      onCompleteTask(selectedTask.reward);
      setIsSubmitting(false);
      setSelectedTask(null);
      setSubmissionProof('');
      alert('Proof submitted successfully! Coins added after verification (Simulation: Added instantly).');
    }, 1500);
  };

  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Explore Tasks</h1>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-slate-500 border border-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <div 
            key={task.id} 
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {task.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-600 font-bold">
                <i className="fa-solid fa-coins"></i>
                <span>{task.reward}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
              {task.title}
            </h3>
            <p className="text-sm text-slate-500 mb-6 line-clamp-2">
              {task.description}
            </p>
            <button 
              onClick={() => setSelectedTask(task)}
              className="w-full py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              View Task
            </button>
          </div>
        ))}
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">Task Details</h2>
              <button onClick={() => setSelectedTask(null)} className="text-white/80 hover:text-white">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                   <i className={`fa-solid ${selectedTask.category === 'Spin & Earn' ? 'fa-dice' : 'fa-link'}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{selectedTask.title}</h3>
                  <span className="text-sm text-slate-400">Reward: {selectedTask.reward} Coins</span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl mb-6">
                <h4 className="text-sm font-bold text-slate-700 mb-2">Instructions:</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {selectedTask.instructions}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {selectedTask.category !== 'Spin & Earn' ? (
                  <>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Upload Proof (Screenshot/Link)</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Paste URL or text proof here"
                        value={submissionProof}
                        onChange={(e) => setSubmissionProof(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button 
                        type="button" 
                        className="flex-1 py-4 border border-blue-600 text-blue-600 font-bold rounded-2xl"
                        onClick={() => window.open('https://google.com', '_blank')}
                      >
                        Start Task
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-[2] py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Proof'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="mb-6">
                       <i className="fa-solid fa-clover text-6xl text-blue-600 spin-animation"></i>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => {
                        setIsSubmitting(true);
                        setTimeout(() => {
                           onCompleteTask(100);
                           setIsSubmitting(false);
                           setSelectedTask(null);
                           alert('You won 100 coins!');
                        }, 2000);
                      }}
                      className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg"
                    >
                      {isSubmitting ? 'Spinning...' : 'Spin the Wheel'}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
