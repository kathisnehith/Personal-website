export function ActionButtons() {
  return (
    <div className="flex items-center gap-3 pl-4">
      <a 
        href="https://drive.google.com/file/d/1s9hYGu2h1LIK1h8Z_bc7kdkcyHXbbcD5/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-button"
      >
        Resume
      </a>
      <a 
        href="https://www.linkedin.com/in/snehithreddykathi/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-button"
      >
        LinkedIn
      </a>
      <a 
        href="https://public.tableau.com/app/profile/snehith.reddy.kathi/vizzes" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden hover:scale-110 transition-transform"
      >
        <img 
          src="/tableau_icon.png" 
          alt="Add" 
          className="w-full h-full object-cover"
        />
      </a>
      <a 
        href="https://github.com/kathisnehith" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden hover:scale-110 transition-transform"
      >
        <img 
          src="/githublogo.png" 
          alt="Camera" 
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}
