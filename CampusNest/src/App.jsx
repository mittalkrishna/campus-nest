
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to CampusNest</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Find trusted student accommodation near your university — safe, affordable and convenient!
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
        Explore Rooms
      </button>
    </div>
  );
}
