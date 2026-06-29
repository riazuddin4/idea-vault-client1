// import React from 'react';

// const LessonPage = () => {
//     return (
//         <div>
//             lesson creator page
//         </div>
//     );
// };

// export default LessonPage;


// "use client";

// import { Card, Button, Dropdown, Label } from "@heroui/react";
// import {
//     BookOpen,
//     Heart,
//     Activity,
//     Plus,
//     ChevronDown,
//     User,
//     Feather,
// } from "lucide-react";
// import { useState } from "react";

// const stats = [
//     {
//         icon: BookOpen,
//         value: 0,
//         label: "LESSONS CREATED",
//         sub: "Contributions to the archive",
//     },
//     {
//         icon: Heart,
//         value: 0,
//         label: "WISDOM SAVED",
//         sub: "Favorites collected",
//     },
//     {
//         icon: Activity,
//         value: 0,
//         label: "IMPACT (LIKES)",
//         sub: "Community appreciations",
//     },
// ];

// const quickActions = [
//     { icon: Plus, label: "Create New Lesson" },
//     { icon: Heart, label: "View Favorites" },
//     { icon: User, label: "Profile" },
// ];

// export default function LessonPage() {
//     const [user, setUser] = useState(null);
//     const today = new Date().toLocaleDateString("en-US", {
//         weekday: "long",
//         month: "long",
//         day: "numeric",
//     });

//     return (
//         <div className="min-h-screen bg-[#f0eeea] px-6 py-8 font-sans">
//             <div className="max-w-5xl mx-auto">

//                 {/* Header */}
//                 <div className="flex items-start justify-between mb-8">
//                     <div>
//                         <h1 className="text-3xl font-bold text-[#1a1a1a] tracking-tight">
//                             Welcome back, {user?.name}
//                         </h1>
//                         <p className="text-sm text-[#6b6b6b] mt-1">
//                             "Knowledge speaks, but wisdom listens." Here is your journey so far.
//                         </p>
//                     </div>
//                     <span className="text-xs font-semibold text-[#6b6b6b] tracking-widest uppercase mt-2">
//                         {today.toUpperCase()}
//                     </span>
//                 </div>

//                 {/* Stats Row */}
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                     {stats.map(({ icon: Icon, value, label, sub }) => (
//                         <Card key={label} className="bg-white rounded-2xl border-none shadow-none">
//                             <Card.Content className="p-5">
//                                 <div className="w-9 h-9 rounded-lg bg-[#f5f4f0] flex items-center justify-center mb-4">
//                                     <Icon size={18} className="text-[#4a4a4a]" strokeWidth={1.5} />
//                                 </div>
//                                 <p className="text-4xl font-bold text-[#1a1a1a] leading-none mb-2">
//                                     {value}
//                                 </p>
//                                 <p className="text-[10px] font-semibold tracking-widest text-[#4a4a4a] uppercase mb-0.5">
//                                     {label}
//                                 </p>
//                                 <p className="text-xs text-[#9a9a9a]">{sub}</p>
//                             </Card.Content>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Middle Row: Contribution Insight + Quick Actions */}
//                 <div className="grid grid-cols-[1fr_300px] gap-4 mb-6">

//                     {/* Contribution Insight */}
//                     <Card className="bg-white rounded-2xl border-none shadow-none">
//                         <Card.Content className="p-5">
//                             <div className="flex items-center justify-between mb-6">
//                                 <h2 className="text-base font-semibold text-[#1a1a1a]">
//                                     Contribution Insight
//                                 </h2>
//                                 <Dropdown>
//                                     <Button
//                                         size="sm"
//                                         variant="outline"
//                                         className="text-xs text-[#4a4a4a] border-[#ddd] rounded-lg h-7 min-w-0 px-3 gap-1"
//                                     >
//                                         This Week
//                                         <ChevronDown size={14} />
//                                     </Button>
//                                     <Dropdown.Popover>
//                                         <Dropdown.Menu>
//                                             <Dropdown.Item id="week" textValue="This Week">
//                                                 <Label>This Week</Label>
//                                             </Dropdown.Item>
//                                             <Dropdown.Item id="month" textValue="This Month">
//                                                 <Label>This Month</Label>
//                                             </Dropdown.Item>
//                                             <Dropdown.Item id="year" textValue="This Year">
//                                                 <Label>This Year</Label>
//                                             </Dropdown.Item>
//                                         </Dropdown.Menu>
//                                     </Dropdown.Popover>
//                                 </Dropdown>
//                             </div>

//                             {/* Empty chart state */}
//                             <div className="flex flex-col items-center justify-center py-10 text-center">
//                                 <Activity size={28} className="text-[#d0d0d0] mb-3" strokeWidth={1.5} />
//                                 <p className="text-sm text-[#b0b0b0]">
//                                     Not enough data to display trends yet.
//                                 </p>
//                             </div>
//                         </Card.Content>
//                     </Card>

//                     {/* Quick Actions */}
//                     <Card
//                         className="rounded-2xl border-none shadow-none"
//                         style={{ backgroundColor: "#2c3830" }}
//                     >
//                         <Card.Content className="p-5">
//                             <h2 className="text-base font-semibold text-white mb-4">
//                                 Quick Actions
//                             </h2>
//                             <div className="flex flex-col gap-2">
//                                 {quickActions.map(({ icon: Icon, label }) => (
//                                     <button
//                                         key={label}
//                                         className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-[#38463e] hover:bg-[#3f5047] transition-colors text-white text-sm font-medium text-left"
//                                     >
//                                         <span className="w-6 h-6 rounded-full bg-[#4a5e55] flex items-center justify-center flex-shrink-0">
//                                             <Icon size={13} strokeWidth={1.8} />
//                                         </span>
//                                         {label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </Card.Content>
//                     </Card>
//                 </div>

//                 {/* Bottom Row: Recently Added + Quote */}
//                 <div className="grid grid-cols-[1fr_300px] gap-4">

//                     {/* Recently Added */}
//                     <div>
//                         <div className="flex items-center justify-between mb-3">
//                             <h2 className="text-base font-semibold text-[#1a1a1a]">
//                                 Recently Added
//                             </h2>
//                             <button className="text-xs font-semibold text-[#4a4a4a] tracking-wide hover:text-[#1a1a1a] transition-colors">
//                                 VIEW ALL →
//                             </button>
//                         </div>
//                         <Card className="bg-white rounded-2xl border-none shadow-none">
//                             <Card.Content className="py-10 flex items-center justify-center">
//                                 <p className="text-sm text-[#b0b0b0]">No lessons added yet.</p>
//                             </Card.Content>
//                         </Card>
//                     </div>

//                     {/* Quote Card */}
//                     <Card
//                         className="rounded-2xl border-none shadow-none self-end"
//                         style={{ backgroundColor: "#e8e5dc" }}
//                     >
//                         <Card.Content className="p-5">
//                             <Feather size={18} className="text-[#8a7e6a] mb-3" strokeWidth={1.5} />
//                             <p className="text-[15px] font-medium text-[#2a2a2a] leading-snug italic mb-4">
//                                 "The only true wisdom is in knowing you know nothing."
//                             </p>
//                             <p className="text-[10px] font-bold tracking-widest text-[#8a7e6a] uppercase">
//                                 — SOCRATES
//                             </p>
//                         </Card.Content>
//                     </Card>
//                 </div>

//             </div>
//         </div>
//     );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Card, Button, Dropdown, Label } from "@heroui/react";
// import {
//     BookOpen,
//     Heart,
//     Activity,
//     Plus,
//     ChevronDown,
//     User,
//     Feather,
// } from "lucide-react";

// export default function LessonPage() {
//     const [user, setUser] = useState({
//         name: "Guest",
//     });

//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");

//         ```
// if (storedUser) {
//   try {
//     setUser(JSON.parse(storedUser));
//   } catch (error) {
//     console.error("Invalid user data:", error);
//   }
// }
// ```

//     }, []);

//     return (<div> <h1 className="text-3xl font-bold">
//         Welcome back, {session?.user?.name || "Guest"} </h1> </div>
//     );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Card } from "@heroui/react";
// import {
//     BookOpen,
//     Heart,
//     Activity,
//     Plus,
//     User,
//     Feather,
// } from "lucide-react";

// const stats = [
//     {
//         icon: BookOpen,
//         value: 0,
//         label: "LESSONS CREATED",
//         sub: "Contributions to the archive",
//     },
//     {
//         icon: Heart,
//         value: 0,
//         label: "WISDOM SAVED",
//         sub: "Favorites collected",
//     },
//     {
//         icon: Activity,
//         value: 0,
//         label: "IMPACT (LIKES)",
//         sub: "Community appreciations",
//     },
// ];

// const quickActions = [
//     { icon: Plus, label: "Create New Lesson" },
//     { icon: Heart, label: "View Favorites" },
//     { icon: User, label: "Profile" },
// ];

// export default function LessonPage() {
//     const [user, setUser] = useState({
//         name: "Guest",
//     });

//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");


// if (storedUser) {
//   try {
//     setUser(JSON.parse(storedUser));
//   } catch (error) {
//     console.error("Invalid user data:", error);
//   }
// }


//     }, []);

//     const today = new Date().toLocaleDateString("en-US", {
//         weekday: "long",
//         month: "long",
//         day: "numeric",
//     });

//     return (<div className="min-h-screen bg-[#f0eeea] px-6 py-8"> <div className="max-w-5xl mx-auto">


//         {/* Header */}
//         <div className="flex justify-between mb-8">
//             <div>
//                 <h1 className="text-3xl font-bold">
//                     Welcome back, {user?.name || "Guest"}
//                 </h1>

//                 <p className="text-sm text-gray-500 mt-1">
//                     "Knowledge speaks, but wisdom listens."
//                 </p>
//             </div>

//             <span className="text-xs font-semibold">
//                 {today.toUpperCase()}
//             </span>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//             {stats.map(({ icon: Icon, value, label, sub }) => (
//                 <Card key={label} className="p-5">
//                     <Icon size={20} />
//                     <p className="text-4xl font-bold mt-3">{value}</p>
//                     <p className="text-xs font-semibold mt-2">{label}</p>
//                     <p className="text-xs text-gray-500">{sub}</p>
//                 </Card>
//             ))}
//         </div>

//         {/* Quick Actions */}
//         <Card className="p-5 mb-6">
//             <h2 className="font-semibold mb-4">Quick Actions</h2>

//             <div className="flex flex-col gap-2">
//                 {quickActions.map(({ icon: Icon, label }) => (
//                     <button
//                         key={label}
//                         className="flex items-center gap-2 p-3 rounded-lg bg-gray-100"
//                     >
//                         <Icon size={16} />
//                         {label}
//                     </button>
//                 ))}
//             </div>
//         </Card>

//         {/* Empty State */}
//         <Card className="p-8 text-center">
//             <Feather size={24} className="mx-auto mb-3" />

//             <p className="italic">
//                 "The only true wisdom is in knowing you know nothing."
//             </p>

//             <p className="text-xs mt-2">— SOCRATES</p>
//         </Card>

//     </div>
//     </div>


// );
// }


"use client";

import { useEffect, useState } from "react";
import { Card } from "@heroui/react";
import {
    BookOpen,
    Heart,
    Activity,
    Plus,
    User,
    Feather,
} from "lucide-react";
import { getDashboard } from "@/lib/courses/data";

// import { getDashboard } from "@/lib/action/dashboard";

export default function LessonPage() {
    const [user, setUser] = useState({
        name: "Guest",
        email: "",
    });

    const [stats, setStats] = useState([
        {
            icon: BookOpen,
            value: 0,
            label: "LESSONS CREATED",
            sub: "Contributions to the archive",
        },
        {
            icon: Heart,
            value: 0,
            label: "WISDOM SAVED",
            sub: "Favorites collected",
        },
        {
            icon: Activity,
            value: 0,
            label: "IMPACT (LIKES)",
            sub: "Community appreciations",
        },
    ]);

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const storedUser = localStorage.getItem("user");

                if (!storedUser) return;

                const currentUser = JSON.parse(storedUser);

                setUser(currentUser);

                const data = await getDashboard(currentUser.email);

                setStats([
                    {
                        icon: BookOpen,
                        value: data.lessonsCreated || 0,
                        label: "LESSONS CREATED",
                        sub: "Contributions to the archive",
                    },
                    {
                        icon: Heart,
                        value: data.wisdomSaved || 0,
                        label: "WISDOM SAVED",
                        sub: "Favorites collected",
                    },
                    {
                        icon: Activity,
                        value: data.impact || 0,
                        label: "IMPACT (LIKES)",
                        sub: "Community appreciations",
                    },
                ]);
            } catch (error) {
                console.error(error);
            }
        };

        loadDashboard();
    }, []);

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    const quickActions = [
        {
            icon: Plus,
            label: "Create New Lesson",
        },
        {
            icon: Heart,
            label: "View Favorites",
        },
        {
            icon: User,
            label: "Profile",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f0eeea] px-6 py-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Welcome back, {user.name}
                        </h1>

                        <p className="text-gray-500 mt-2">
                            "Knowledge speaks, but wisdom listens."
                        </p>
                    </div>

                    <span className="text-sm font-semibold">
                        {today.toUpperCase()}
                    </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                    {stats.map(({ icon: Icon, value, label, sub }) => (
                        <Card key={label} className="p-5">
                            <Icon size={22} />

                            <h2 className="text-4xl font-bold mt-3">{value}</h2>

                            <p className="text-sm font-semibold mt-3">
                                {label}
                            </p>

                            <p className="text-xs text-gray-500">
                                {sub}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* Quick Actions */}
                <Card className="p-5 mb-6">
                    <h2 className="font-semibold mb-4">
                        Quick Actions
                    </h2>

                    <div className="flex flex-col gap-3">
                        {quickActions.map(({ icon: Icon, label }) => (
                            <button
                                key={label}
                                className="flex items-center gap-3 rounded-lg bg-gray-100 p-3 hover:bg-gray-200 transition"
                            >
                                <Icon size={18} />
                                {label}
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Quote */}
                <Card className="p-8 text-center">
                    <Feather
                        size={28}
                        className="mx-auto mb-4"
                    />

                    <p className="italic text-lg">
                        "The only true wisdom is in knowing you know nothing."
                    </p>

                    <p className="text-xs mt-3 text-gray-500">
                        — SOCRATES
                    </p>
                </Card>
            </div>
        </div>
    );
}