export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Geometric shapes */}
      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-primary/10 rotate-45 animate-pulse-slow" />
      <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-accent/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
