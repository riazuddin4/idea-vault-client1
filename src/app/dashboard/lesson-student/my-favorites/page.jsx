"use client"

import { authClient } from '@/lib/auth-client';
import { fetchFavorites } from '@/lib/courses/data';
import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';


const MyFavoritesPage = ({ user }) => {

    const [myFavorites, setMyFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = authClient.useSession();

    console.log("Session in MyFavoritesPage:", session);
    useEffect(() => {
        const getFavorites = async () => {
            console.log("Fetching favorites for email:", user);
            if (session?.user?.email) {
                setLoading(true);
                const favorites = await fetchFavorites(session?.user?.email);
                setMyFavorites(favorites);
                setLoading(false);
            }
        };
        getFavorites();
    }, [session?.user?.email]);


    return (
        <div className="min-h-screen ">
            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6">My Favorites</h2>

                {loading ? (
                    <p className="text-center text-gray-500">Loading your favorites...</p>
                ) : myFavorites.length === 0 ? (
                    <p className="text-center text-gray-500">No favorites found.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {myFavorites.map((favorite) => (
                            <div
                                key={favorite._id}
                                className="w-[800px] mx-auto p-4 border border-gray-200 rounded-lg shadow-sm"
                            >
                                <h3 className="text-lg font-semibold ">
                                    {favorite.title}
                                </h3>
                                <p className=" mt-1">{favorite.comment}</p>
                                <span className="text-sm  mt-2 block">
                                    {new Date(favorite.time).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyFavoritesPage;