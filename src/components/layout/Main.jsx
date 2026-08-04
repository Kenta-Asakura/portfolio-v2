function Main({ children }) {
  return (
    <main id="main-content" className="w-full flex-1" role="main" aria-label="Main content">
      {children}
    </main>
  );
}

export default Main;
