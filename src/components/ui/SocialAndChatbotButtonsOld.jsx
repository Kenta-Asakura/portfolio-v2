 <div className="space-y-3 flex flex-col items-center">
    {/* Social Links Button */}
    <label 
    htmlFor="social-links-toggle"
    className="d-btn d-btn-circle d-swap d-swap-rotate max-lg:hidden"
    aria-expanded={showSocialLinks} 
    aria-controls="social-links-section"
    aria-label="Toggle social links" 
    title="Connect with me"
    onClick={() => setShowSocialLinks((prev) => !prev)}
    >
    {/* this hidden checkbox controls the state */}
    <input
        type="checkbox" 
        checked={showSocialLinks}
        onChange={(e) => setShowSocialLinks(e.target.checked)}
        aria-hidden="true"
        tabIndex={-1}
    />

    {/* Social Links Icon */}
    <svg
        className="d-swap-off w-6 h-6 transition-transform mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>

    {/* close icon */}
    <svg
        className="d-swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512">
        <polygon
        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
    </label>

    {/* Chatbot Button */}
    <button
    onClick={() => {
        // TODO: Implement chatbot functionality
        console.log('Chatbot clicked');
    }}
    className="
        flex items-center justify-center
        mx-auto p-3 rounded-full
        bg-primary hover:bg-primary/90
        text-primary-content
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    aria-label="Open chatbot"
    title="Chat with me"
    >
    {/* Chatbot Icon */}
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
    </svg>
    </button>
</div>