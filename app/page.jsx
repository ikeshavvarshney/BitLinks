import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-slate-800 text-white font-sans min-h-screen">

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between py-20">

        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Bitlinks</h1>
          <p className="text-slate-300 text-lg sm:text-xl">
            Shorten your URLs, track clicks, and manage your links with ease. Secure, fast, and reliable.
          </p>
          <Link href="/try-now">
            <div className="inline-block px-8 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition transform">
              Try Now
            </div>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/network.png" // replace with your image path
            width={400}
            height={300}
            alt="Bitlinks App"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Feature Card 1 */}
          <div className="bg-slate-700 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-lg">
            <div className="text-cyan-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Shorten URLs</h3>
            <p className="text-slate-300">Create clean, short links that are easy to share and remember.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-slate-700 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-lg">
            <div className="text-cyan-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-slate-300">Track click rates and get insights about your audience in real-time.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-slate-700 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-lg">
            <div className="text-cyan-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {/* Left chain segment */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
                {/* Right chain segment */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Links</h3>
            <p className="text-slate-300">Ensure all your links are safe and protected from spam or malicious content.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 mt-20 text-center text-slate-400">
        &copy; {new Date().getFullYear()} Bitlinks. All rights reserved.
      </footer>

    </div>
  );
}
