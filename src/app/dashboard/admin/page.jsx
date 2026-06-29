// import React from 'react';

// const AdminPage = () => {
//     return (
//         <div>
//             hi, admin page
//         </div>
//     );
// };

// export default AdminPage;

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

export default function AdminPage() {
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
                {/* <Card className="p-5 mb-6">
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
                </Card> */}

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