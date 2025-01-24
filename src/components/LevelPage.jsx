import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LevelPage = ({ levelNumber }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a saved score for this level
    const savedScore = localStorage.getItem(`level${levelNumber}Score`);
    if (savedScore) {
      // Send the initial state to parent
      window.parent.postMessage({
        type: 'LEVEL_UPDATE',
        level: levelNumber,
        score: parseInt(savedScore),
        completed: parseInt(savedScore) === 100
      }, '*');
    }
  }, [levelNumber]);

  return (
    <div className="relative w-full h-screen">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-10 bg-[#2b7a78] text-white px-4 py-2.5 rounded-md hover:bg-[#20565e] transition-colors duration-300 text-base"
      >
        ← Back to Home
      </button>
      <iframe 
        src={`/level${levelNumber}.html`}
        className="w-full h-full border-none"
        title={`Level ${levelNumber}`}
      />
    </div>
  );
};

export default LevelPage;
