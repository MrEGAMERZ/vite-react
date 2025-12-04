
// ============================================
// FILE: src/components/SkillSection.tsx
// ============================================
interface SkillSectionProps {
  title: string;
  skills: string[];
  type?: 'grid' | 'list';
}

export function SkillSection({ title, skills, type = 'grid' }: SkillSectionProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
      <h3 className="text-3xl font-bold text-slate-300 mb-6">{title}</h3>
      {type === 'grid' ? (
        <div className="grid grid-cols-2 gap-3">
          {skills.map(skill => (
            <div key={skill} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-center hover:bg-zinc-800 transition-colors">
              <span className="text-zinc-300 font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3 text-zinc-300">
          {skills.map(skill => (
            <li key={skill} className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">▹</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
