// import Link from "next/link";
// import { FaTicketAlt, FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/5 bg-slate-950/80 pt-16 pb-12 mt-auto">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
//         <div className="space-y-4">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="bg-gradient-to-tr from-pink-500 to-indigo-500 p-2 rounded-lg text-white">
//               <FaTicketAlt className="text-lg" />
//             </div>
//             <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-pink-500 bg-clip-text text-transparent">
//               Digital Life
//             </span>
//           </Link>
//           <p className="text-slate-400 text-sm leading-relaxed">
//             Preserve and share your life's greatest lessons with a global community of learners and educators.
//           </p>
//           <div className="flex gap-4 text-slate-400">
//             <a href="#" className="hover:text-pink-500 transition-colors"><FaFacebook size={18} /></a>
//             <a href="#" className="hover:text-pink-500 transition-colors"><FaTwitter size={18} /></a>
//             <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={18} /></a>
//             <a href="#" className="hover:text-pink-500 transition-colors"><FaGithub size={18} /></a>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Discover Events</h3>
//           <ul className="space-y-2 text-slate-400 text-sm">
//             <li><Link href="/events?category=Music" className="hover:text-white transition-colors">Music Festivals</Link></li>
//             <li><Link href="/events?category=Tech" className="hover:text-white transition-colors">Tech Conferences</Link></li>
//             <li><Link href="/events?category=Sports" className="hover:text-white transition-colors">Sports Matches</Link></li>
//             <li><Link href="/events?category=Arts" className="hover:text-white transition-colors">Art Exhibitions</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">For Organizers</h3>
//           <ul className="space-y-2 text-slate-400 text-sm">
//             <li><Link href="/register?role=organizer" className="hover:text-white transition-colors">Create Organization</Link></li>
//             <li><Link href="/login" className="hover:text-white transition-colors">Host an Event</Link></li>
//             <li><Link href="/login" className="hover:text-white transition-colors">Premium Packages</Link></li>
//             <li><a href="#" className="hover:text-white transition-colors">Pricing & Fees</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
//           <ul className="space-y-2 text-slate-400 text-sm">
//             <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//             <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//             <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs">
//         <p>&copy; {new Date().getFullYear()} Ticketo Inc. All rights reserved. Developed by Antigravity AI.</p>
//       </div>
//     </footer>
//   );
// }

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#030817] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:65px_65px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-bold">
              {/* <span className="text-slate-300">Sage</span> */}
              <span className="ml-2 text-purple-400">Digital Life</span>
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              Preserve and share your life's greatest lessons with a global
              community of learners and educators.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              <a className="rounded-xl bg-sky-500 p-3">
                <FaTwitter />
              </a>

              <a className="rounded-xl bg-pink-600 p-3">
                <FaInstagram />
              </a>

              <a className="rounded-xl bg-blue-600 p-3">
                <FaLinkedinIn />
              </a>

              <a className="rounded-xl bg-red-600 p-3">
                <FaYoutube />
              </a>

              <a className="rounded-xl bg-slate-700 p-3">
                <SiPeerlist />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="mb-3 font-semibold">
                Subscribe to our newsletter
              </h4>

              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                />

                <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-fuchsia-400">
              Platform
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Lessons</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-cyan-400">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-purple-400">
              Legal
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Settings</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 LessonVault, Inc. All rights reserved.</p>

          <div className="flex gap-6">
            <span>🌐 English</span>
            <span className="flex justify-center items-center gap-0.5"><FaLocationDot />  Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}