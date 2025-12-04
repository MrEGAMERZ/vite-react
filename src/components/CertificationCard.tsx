
// ============================================
// FILE: src/components/CertificationCard.tsx
// ============================================
interface CertificationCardProps {
  title: string;
  organization: string;
  year: string;
  icon: string;
  link?: string;
}

export function CertificationCard({ title, organization, year, icon, link }: CertificationCardProps) {
  const CardContent = () => (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{icon}</div>
        <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">{year}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm">{organization}</p>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="block bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all group">
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all group">
      <CardContent />
    </div>
  );
}
