export default function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t mt-10 ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white"}`}
    >
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`max-w-6xl mx-auto p-6 text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      >
        © 2026 Kit Ocampo
      </div>
    </footer>
  );
}
