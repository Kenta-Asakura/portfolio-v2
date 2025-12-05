function ChevronIcon({ className = '' }) {
  return (
    <svg 
      className={`w-4 h-4 flex-shrink-0 ${className}`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  );
}

export default ChevronIcon;