export function ActionButtons() {
  return (
    <div className="flex items-center gap-3 pl-4">
      <a 
        href="https://example.com/resume" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-button"
      >
        Resume
      </a>
      <a 
        href="https://linkedin.com/in/example" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-button"
      >
        LinkedIn
      </a>
      <a 
        href="https://example.com/profile1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden hover:scale-110 transition-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=50&h=50&auto=format&fit=crop" 
          alt="Add" 
          className="w-full h-full object-cover"
        />
      </a>
      <a 
        href="https://example.com/profile2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden hover:scale-110 transition-transform"
      >
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=50&h=50&auto=format&fit=crop" 
          alt="Camera" 
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}