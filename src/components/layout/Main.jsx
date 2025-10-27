function Main({ children }) {
  return (
    <main 
      id="main-content"
      className="flex-1 w-full"
      role="main"
      aria-label="Main content"
    >
      {children}
    </main>
  );
}

export default Main;