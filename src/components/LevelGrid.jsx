import LevelCard from "./LevelCard";

const LevelGrid = ({ levels }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
        {levels.map((level) => (
          <LevelCard
            key={level.level}
            level={level.level} 
            title={level.title}
            isLocked={level.isLocked}
            isCompleted={level.isCompleted}
            score={level.score}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelGrid; 