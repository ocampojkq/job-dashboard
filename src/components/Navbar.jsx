export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Job Dashboard</h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Categories
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
