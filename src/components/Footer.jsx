export default function Footer() {
    return (
      <footer className="bg-stone-500 text-gray-300 py-10 px-6  w-screen ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + Name */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="./assets/logo.png" alt="Train Logo" className="h-10 " />
              <span className="text-xl font-bold text-white">Gamini</span>
            </div>
            <p className="mt-4 text-sm ">
            Making journey memorable with every ride.
            </p>
          </div>
  
          {/* Quick buttons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick buttons</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/trains" className="hover:text-white">Trains</a></li>
              <li><a href="/schedules" className="hover:text-white">Schedules</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <p className="text-sm">Email: support@gamini.com</p>
            <p className="text-sm">Phone: +1 (800) 123-TRAIN</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} TrainTracker. All rights reserved.
        </div>
      </footer>
    );
  }
  