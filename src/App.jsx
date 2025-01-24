import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelGrid from './components/LevelGrid';
import LevelPage from './components/LevelPage';
import { useState, useEffect } from 'react';

function App() {
  const [levels, setLevels] = useState([
    { level: 1, title: "Array representation of BST", isLocked: false, isCompleted: false, points: 0, maxPoints: 100 },
    { level: 2, title: "Traversing the BST", isLocked: true, isCompleted: false, points: 0, maxPoints: 100 },
    { level: 3, title: "Insertion of nodes in BST", isLocked: true, isCompleted: false, points: 0, maxPoints: 100 },
    { level: 4, title: "Deletion of nodes in BST", isLocked: true, isCompleted: false, points: 0, maxPoints: 100 },
  ]);

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event) => {
      if (event.data.type === 'LEVEL_UPDATE') {
        const { level, score, completed } = event.data;
        
        setLevels(prevLevels => {
          const newLevels = [...prevLevels];
          const levelIndex = level - 1;
          
          // Update the completed level
          newLevels[levelIndex] = {
            ...newLevels[levelIndex],
            points: score,
            isCompleted: completed
          };
          
          // Unlock the next level if this level is completed
          if (completed && levelIndex < newLevels.length - 1) {
            newLevels[levelIndex + 1] = {
              ...newLevels[levelIndex + 1],
              isLocked: false
            };
          }
          
          return newLevels;
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Calculate total possible points
  const totalPossiblePoints = levels.reduce((sum, level) => sum + level.maxPoints, 0);
  // Calculate current total points
  const totalPoints = levels.reduce((sum, level) => sum + level.points, 0);
  
  // Calculate completion stats
  const completedLevels = levels.filter(level => level.isCompleted).length;
  const completionPercentage = (completedLevels / levels.length) * 100;

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4f46e5] mb-8">
                {totalPoints === totalPossiblePoints ? (
                  <>
                    🎉 Congratulations! 🎉
                    <p className="text-2xl mt-4 text-gray-700">
                      You've mastered all the Binary Search Tree concepts!
                    </p>
                  </>
                ) : (
                  "Welcome to Tree Data Structures"
                )}
              </h1>

              <div className="space-y-8 mb-8">
                {/* Score Section */}
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-xl font-semibold">Total Points</p>
                      <p className="text-sm text-gray-600">Complete levels to earn points</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#4f46e5]">{totalPoints}</p>
                      <p className="text-sm text-gray-600">out of {totalPossiblePoints} possible points</p>
                    </div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-xl font-semibold">Course Progress</p>
                      <p className="text-sm text-gray-600">Track your learning journey</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#4f46e5]">{completedLevels}/{levels.length}</p>
                      <p className="text-sm text-gray-600">Levels Completed</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5">
                    <div 
                      className="bg-[#4f46e5] h-5 rounded-full transition-all" 
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-gray-600">
                    {Math.round(completionPercentage)}% Complete
                  </p>
                </div>
              </div>

              {/* Level Cards Grid */}
              <div className="bg-gray-50 rounded-lg p-6">
                <LevelGrid levels={levels} />
              </div>
            </div>
          </div>
        } />
        <Route path="/level1" element={<LevelPage levelNumber={1} />} />
        <Route path="/level2" element={<LevelPage levelNumber={2} />} />
        <Route path="/level3" element={<LevelPage levelNumber={3} />} />
        <Route path="/level4" element={<LevelPage levelNumber={4} />} />
      </Routes>
    </Router>
  );
}

export default App;
