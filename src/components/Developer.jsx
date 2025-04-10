export default function DeveloperSection() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Developer Info
          </h2>
  
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> Prince Koshti
            </p>
  
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:aman@example.com" className="text-blue-600 hover:underline">
                prince@example.com
              </a>
            </p>
  
            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/BlackPearl7703"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/prince
              </a>
            </p>
  
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/not-found"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/prince-koshti
              </a>
            </p>
  
            <p>
              <span className="font-semibold">About:</span> I’m a passionate web developer
              who loves building responsive, fast, and user-friendly interfaces. I built
              this train info site to help users easily access Indian railway data.
            </p>
          </div>
        </div>
      </div>
    );
  }
  