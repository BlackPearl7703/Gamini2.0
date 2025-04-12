export default function Home() {
  return (
    <div className="bg-transparent min-h-screen py-10 px-4 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-green-800 mb-3">Welcome to Gamini 🚆</h1>
      <p className="text-gray-700 text-lg mb-8 max-w-2xl">
        Your one-stop platform for all things Indian Railways — track, plan, and explore with ease.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
        {[
          { title: "Instant Live Status", desc: "Real-time updates for any train across India." },
          { title: "Smart Route Planner", desc: "Know all halts, durations, and coach info before you go." },
          { title: "Secure PNR Lookup", desc: "Check your ticket status with confidence." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-6 border hover:border-green-400 transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Announcements */}
      <section className="w-full max-w-4xl text-left mb-16 bg-white/20 px-4 py-2 backdrop-blur-md rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 ">📢 Latest Railway Announcements</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🚨 Trains delayed in Northern Zone due to weather conditions.</li>
          <li>🆕 New Vande Bharat train launched between Bhopal and Jaipur.</li>
          <li>⚠️ Platform change alerts available for major stations soon!</li>
        </ul>
      </section>

      {/* Travel Tips */}
      <section className="w-full max-w-4xl text-left mb-16  bg-white/40 px-4 py-2  backdrop-blur-md rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">💡 Travel Tips for You</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Book in advance to avoid waitlist stress!</li>
          <li>2A and 3A classes are great for long journeys with comfort.</li>
          <li>Keep soft copies of your tickets and IDs handy.</li>
        </ul>
      </section>

      {/* Fun Facts */}
      <section className="w-full max-w-4xl text-left  bg-white/50 backdrop-blur-md px-4 py-2  rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">🚂 Did You Know?</h2>
        <p className="text-gray-700">
          The longest train journey in India is from Dibrugarh to Kanyakumari (Vivek Express) — it takes over 82 hours!
        </p>
      </section>
    </div>
  );
}
