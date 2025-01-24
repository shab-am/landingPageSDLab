import { useNavigate } from 'react-router-dom';

const LevelCard = ({ level, title, isLocked, isCompleted, score }) => {
  const navigate = useNavigate();

  const getLevelColor = (level) => {
    const levelNum = Number(level);
    const colors = {
      1: 'bg-blue-50',
      2: 'bg-purple-50',
      3: 'bg-pink-50',
      4: 'bg-orange-50',
      5: 'bg-green-50',
    };
    return colors[levelNum] || 'bg-gray-50';
  };

  const handleStartLevel = () => {
    if (!isLocked) {
      navigate(`/level${level}`);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${getLevelColor(level)} w-[300px]`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-700">Level {level}</span>
          {isLocked && (
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
              🔒 Locked
            </span>
          )}
          {isCompleted && (
            <span className="bg-green-200 text-green-600 px-3 py-1 rounded-full text-sm">
              ✓ Completed
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        
        {score > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#4f46e5] h-2 rounded-full transition-all" 
              style={{ width: `${score}%` }}
            ></div>
          </div>
        )}
        
        <button
          onClick={handleStartLevel}
          className={`w-full py-2 px-4 rounded-md ${
            isLocked
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#4f46e5] hover:bg-[#4338ca] text-white'
          }`}
          disabled={isLocked}
        >
          {isLocked ? 'Complete Previous Levels' : 'Start Level'}
        </button>
      </div>
    </div>
  );
};

export default LevelCard;
