

// "use client";
// import { Button } from "@heroui/react";
// import Link from "next/link";
// import { FaRocket } from "react-icons/fa";
// const Hero = () => {
//     return (
//         <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-indigo-600/15 via-slate-950 to-slate-950 -z-10" />
//             <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

//             <div className="max-w-5xl text-center space-y-8">
//                 <div
//                     className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-400 text-xs font-semibold uppercase tracking-wider"
//                 >
//                     <FaRocket /> Introducing Ticketo v2.0
//                 </div>

//                 <h1
//                     className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
//                 >
//                     Discover Premium Events &{" "}
//                     <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
//                         Book Tickets
//                     </span>{" "}
//                     Seamlessly
//                 </h1>

//                 <p
//                     className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//                 >
//                     Ticketo links passionate organizers with eager attendees. Browse local festivals, grand music nights, elite business seminars, and everything in between.
//                 </p>

//                 <div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="flex flex-col sm:flex-row justify-center items-center gap-4"
//                 >
//                     <Link href="/events">
//                         <Button
//                             className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold h-14 px-8 text-md shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all w-full sm:w-auto"
//                             radius="full"
//                         >
//                             Explore Events
//                         </Button>
//                     </Link>
//                     <Link href="/">
//                         <Button
//                             variant="bordered"
//                             className="border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold h-14 px-8 text-md w-full sm:w-auto border-2"
//                             radius="full"
//                         >
//                             Create Organization
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


// components/Hero.jsx

// import { Button } from "@heroui/react";
// import Image from "next/image";

// export default function Hero() {
//     return (
//         <section className="relative min-h-screen overflow-hidden bg-[#030B25] text-white">
//             {/* Grid Background */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

//             {/* Purple Glow */}
//             <div className="absolute right-20 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

//             <div className="relative mx-auto max-w-7xl px-6 py-20">
//                 <div className="grid items-center gap-16 lg:grid-cols-2">
//                     {/* Left */}
//                     <div>
//                         <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
//                             ⭐ Curated Wisdom
//                         </div>

//                         <h1 className="font-serif text-5xl font-semibold leading-tight text-slate-200 md:text-7xl">
//                             Discover
//                             <br />
//                             Perspectives That
//                             <br />
//                             Resonate
//                         </h1>

//                         <p className="mt-8 max-w-lg text-lg text-slate-400">
//                             Browse a public library of life lessons shared by others. Mark
//                             your favorites, organize by theme, and accelerate your personal
//                             growth through shared experience.
//                         </p>

//                         <div className="mt-10 flex gap-4">
//                             <Button
//                                 radius="full"
//                                 size="lg"
//                                 className="bg-slate-200 text-slate-900"
//                             >
//                                 Explore Library →
//                             </Button>

//                             <Button
//                                 radius="full"
//                                 size="lg"
//                                 variant="bordered"
//                                 className="border-white/20 text-white"
//                             >
//                                 How it works
//                             </Button>
//                         </div>

//                         <div className="mt-16 grid grid-cols-3 border-t border-white/10 pt-8">
//                             <div>
//                                 <h3 className="text-3xl font-bold">10K+</h3>
//                                 <p className="text-sm text-slate-400">Active Learners</p>
//                             </div>

//                             <div>
//                                 <h3 className="text-3xl font-bold">5K+</h3>
//                                 <p className="text-sm text-slate-400">Lessons Shared</p>
//                             </div>

//                             <div>
//                                 <h3 className="text-3xl font-bold">98%</h3>
//                                 <p className="text-sm text-slate-400">Growth Rate</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right */}
//                     <div className="relative">
//                         <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
//                             <Image
//                                 src="/hero.jpg"
//                                 alt="Hero"
//                                 width={800}
//                                 height={700}
//                                 className="h-[650px] w-full object-cover"
//                             />

//                             {/* Rating */}
//                             <div className="absolute left-6 top-6 rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
//                                 <div className="flex items-center gap-3">
//                                     <div className="rounded-lg bg-purple-500 p-2">✨</div>
//                                     <div>
//                                         <h4 className="font-bold">4.9</h4>
//                                         <p className="text-xs text-gray-300">Rating</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Community */}
//                             <div className="absolute bottom-6 right-6 rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
//                                 <div className="flex -space-x-2">
//                                     {[1, 2, 3, 4].map((item) => (
//                                         <div
//                                             key={item}
//                                             className="h-10 w-10 rounded-full border-2 border-white bg-gray-500"
//                                         />
//                                     ))}
//                                 </div>

//                                 <p className="mt-2 text-sm">
//                                     Join <span className="font-semibold">10K+</span> learners
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-6 flex justify-center gap-3">
//                             <button className="h-12 w-12 rounded-full border border-white/10 bg-white/5">
//                                 ←
//                             </button>

//                             <button className="h-12 w-12 rounded-full border border-white/10 bg-white/5">
//                                 →
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import { Button } from "@heroui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { useRef } from "react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function Hero() {
//     const swiperRef = useRef(null);

//     const slides = [
//         "/images/slide1.jpg",
//         "/images/slide2.jpg",
//         "/images/slide3.jpg",
//     ];

//     return (
//         <section className="relative overflow-hidden bg-[#030B25] text-white">
//             {/* Grid Background */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

//             {/* Glow Effect */}
//             <div className="absolute right-20 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />

//             <div className="relative mx-auto max-w-7xl px-6 py-20">
//                 <div className="grid items-center gap-16 lg:grid-cols-2">
//                     {/* Left Content */}
//                     <div>
//                         <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
//                             ⭐ Curated Wisdom
//                         </div>

//                         <h1 className="font-serif text-5xl font-bold leading-tight text-slate-200 md:text-7xl">
//                             Discover
//                             <br />
//                             Perspectives That
//                             <br />
//                             Resonate
//                         </h1>

//                         <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-400">
//                             Browse a public library of life lessons shared by others. Mark
//                             your favorites, organize by theme, and accelerate your personal
//                             growth through shared experience.
//                         </p>

//                         <div className="mt-10 flex flex-wrap gap-4">
//                             <Button
//                                 radius="full"
//                                 size="lg"
//                                 className="bg-slate-200 font-medium text-slate-900"
//                             >
//                                 Explore Library →
//                             </Button>

//                             <Button
//                                 radius="full"
//                                 size="lg"
//                                 variant="bordered"
//                                 className="border-white/20 text-white"
//                             >
//                                 How it works
//                             </Button>
//                         </div>

//                         {/* Stats */}
//                         <div className="mt-16 border-t border-white/10 pt-8">
//                             <div className="grid grid-cols-3 gap-8">
//                                 <div>
//                                     <h3 className="text-3xl font-bold">10K+</h3>
//                                     <p className="text-sm text-slate-400">Active Learners</p>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-3xl font-bold">5K+</h3>
//                                     <p className="text-sm text-slate-400">Lessons Shared</p>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-3xl font-bold">98%</h3>
//                                     <p className="text-sm text-slate-400">Growth Rate</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Content */}
//                     <div className="relative">
//                         <Swiper
//                             modules={[Navigation, Autoplay]}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             autoplay={{
//                                 delay: 4000,
//                                 disableOnInteraction: false,
//                             }}
//                             loop={true}
//                             className="rounded-[32px]"
//                         >
//                             {slides.map((image, index) => (
//                                 <SwiperSlide key={index}>
//                                     <div className="relative overflow-hidden rounded-[32px] border border-white/10">
//                                         <img
//                                             src={image}
//                                             alt={`slide-${index}`}
//                                             className="h-[650px] w-full object-cover"
//                                         />

//                                         {/* Rating Card */}
//                                         <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="rounded-xl bg-violet-500 p-2">
//                                                     ✨
//                                                 </div>

//                                                 <div>
//                                                     <h4 className="font-bold">4.9</h4>
//                                                     <p className="text-xs text-slate-300">Rating</p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Users Card */}
//                                         <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
//                                             <div className="flex -space-x-2">
//                                                 <div className="h-10 w-10 rounded-full border-2 border-white bg-red-400"></div>
//                                                 <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-400"></div>
//                                                 <div className="h-10 w-10 rounded-full border-2 border-white bg-green-400"></div>
//                                                 <div className="h-10 w-10 rounded-full border-2 border-white bg-yellow-400"></div>
//                                             </div>

//                                             <p className="mt-3 text-sm">
//                                                 Join <span className="font-semibold">10K+</span>{" "}
//                                                 learners
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* Custom Navigation */}
//                         <div className="mt-6 flex justify-center gap-4">
//                             <button
//                                 onClick={() => swiperRef.current?.slidePrev()}
//                                 className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur transition hover:bg-white/20"
//                             >
//                                 ←
//                             </button>

//                             <button
//                                 onClick={() => swiperRef.current?.slideNext()}
//                                 className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur transition hover:bg-white/20"
//                             >
//                                 →
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
    const slides = [
        {
            title: "Discover Perspectives That Resonate",
            description:
                "Browse a public library of life lessons shared by others.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
        },
        {
            title: "Learn From Real Experiences",
            description:
                "Explore stories, insights, and wisdom from people worldwide.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        },
        {
            title: "Accelerate Your Personal Growth",
            description:
                "Save lessons, organize knowledge, and grow every day.",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
        },
    ];

    return (
        <section className="bg-[#030817]">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative min-h-screen overflow-hidden text-white">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Content */}
                            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
                                <div className="max-w-3xl">
                                    <span className="rounded-full border border-white/20 px-4 py-2 text-sm backdrop-blur">
                                        ⭐ Curated Wisdom
                                    </span>

                                    <h1 className="mt-6 text-5xl font-bold md:text-7xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 max-w-xl text-lg text-gray-300">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8 flex gap-4">
                                        <Button
                                            size="lg"
                                            radius="full"
                                            className="bg-white text-black"
                                        >
                                            Explore Library
                                        </Button>

                                        <Button
                                            size="lg"
                                            radius="full"
                                            variant="bordered"
                                            className="border-white text-white"
                                        >
                                            Learn More
                                        </Button>
                                    </div>

                                    <div className="mt-12 flex gap-10">
                                        <div>
                                            <h3 className="text-3xl font-bold">10K+</h3>
                                            <p className="text-gray-400">Users</p>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold">5K+</h3>
                                            <p className="text-gray-400">Lessons</p>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold">98%</h3>
                                            <p className="text-gray-400">Growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}