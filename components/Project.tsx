
export function Project({ project } : { project: any }) {
  const { title , description, technologies, slug } = project.fields;
  const { content } = description;

  return (
    <div className="w-full h-full border-2 border-black p-4 mb-4 flex">
        <h2>{title}</h2>
        <p>Technologies: {technologies.join(', ')}</p>
        <a href={`/projects/${slug}`}>View Project</a>
    </div>
  );
}