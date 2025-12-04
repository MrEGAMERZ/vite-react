
// ============================================
// FILE: src/components/ProjectCard.tsx
// ============================================
interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ title, subtitle, description, technologies, link, github }: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
      <h3 className="text-2xl font-bold mb-2 text-slate-300">{title}</h3>
      <p className="text-slate-400 text-sm font-semibold mb-4">{subtitle}</p>
      <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map(tech => (
          <span key={tech} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full text-sm border border-zinc-700">
            {tech}
          </span>
        ))}
      </div>
      
      {(link || github) && (
        <div className="flex gap-3 mt-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" 
               className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors">
              View Project
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" 
               className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors">
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
