// "use client";

// import { useState, useEffect } from "react";

// const SaveButton = ({ postId }) => {
//   const [saved, setSaved] = useState(false);

//   useEffect(() => {
//     const savedPosts =
//       JSON.parse(localStorage.getItem("savedPosts")) || [];

//     setSaved(savedPosts.includes(postId));
//   }, [postId]);

//   const handleSave = () => {
//     const savedPosts =
//       JSON.parse(localStorage.getItem("savedPosts")) || [];

//     if (savedPosts.includes(postId)) {
//       const updated = savedPosts.filter(id => id !== postId);
//       localStorage.setItem("savedPosts", JSON.stringify(updated));
//       setSaved(false);
//     } else {
//       savedPosts.push(postId);
//       localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
//       setSaved(true);
//     }
//   };

//   return (
//     <button
//       onClick={handleSave}
//       className="px-3 py-1 rounded bg-blue-600 text-white"
//     >
//       {saved ? "Saved" : "Save"}
//     </button>
//   );
// };

// export default SaveButton;

//11111111

// "use client";

// import { useState } from "react";
// import { createFavoritesIdeas } from "@/lib/courses/action";
// import { useSession } from "@/lib/auth-client";

// const SaveButton = ({ postId }) => {
//     const { _id, IdeaTitle, email } = postId;
//     const [saved, setSaved] = useState(false);
//     const { data: session } = useSession();

//     const handleSave = async () => {

//         const userEmail = session?.user?.email || "anonymous@domain.com";
//         try {
//             const formData = new FormData();

//             formData.append("postId", _id);
//             formData.append("title", IdeaTitle);
//             formData.append("email", userEmail);

//             const result = await createFavoritesIdeas(formData);

//             if (result?.insertedId) {
//                 setSaved(true);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <button
//             onClick={handleSave}
//             className="px-3 py-1 rounded bg-blue-600 text-white"
//         >
//             {saved ? "Saved" : "Save"}
//         </button>
//     );
// };

// export default SaveButton;

//1111111111111


// "use client";

// import { useState } from 'react';
// import { createCommentIdeas } from '@/lib/courses/action';
// import { useRouter } from 'next/navigation';
// import { useSession } from '@/lib/auth-client';
// import { DeleteAlertComment } from './DeleteAlertComment';
// import { EditCommentModal } from './EditCommentModal';

// export default function CommentForm({ ideas }) {
//     const [comment, setComment] = useState('');
//     const [commentsList, setCommentsList] = useState([]);

//     const { data: session } = useSession();
//     const router = useRouter();

//     const handleComment = async (e) => {
//         e.preventDefault();
//         if (!comment.trim()) return;

//         const form = e.target;
//         const formData = new FormData(form);

//         const userEmail = session?.user?.email || "anonymous@domain.com";
//         const userName = session?.user?.name || "Anonymous User";
//         const dynamicTitle = ideas?.IdeaTitle || "Untitled Course";
//         const now = new Date();
//         const autoTime = now.toLocaleString();

//         formData.append("email", userEmail);
//         formData.append("name", userName);
//         formData.append("title", dynamicTitle);
//         formData.append("time", autoTime);
//         formData.append("comment", comment);

//         try {
//             const commentsData = await createFavoritesIdeas(formData);

//             if (commentsData?.insertedId) {
//                 const newCommentObj = {
//                     _id: commentsData.insertedId,
//                     id: commentsData.insertedId,
//                     title: dynamicTitle,
//                     time: autoTime,
//                     text: comment,
//                     email: userEmail,
//                     name: userName,
//                 };

//                 setCommentsList((prev) => [...prev, newCommentObj]);
//                 setComment('');
//                 form.reset();
//             }
//         } catch (error) {
//             console.error("Failed to post comment:", error);
//         }
//     };

//     return (
//         <div className="w-full max-w-md bg-gray-400 rounded-xl p-4">
//             {/* <h2 className="text-sm font-semibold text-black mb-2">
//                 Comments ({commentsList.length})
//             </h2>
//             <h2 className="text-lg font-bold text-black mb-2">Write a Comment</h2> */}

//             <form onSubmit={handleComment}>
//                 {/* <textarea
//                     name="comment"
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     className="w-full h-24 rounded border border-gray-500 bg-gray-300 p-2 text-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
//                     placeholder="Type your comment..."
//                 /> */}
//                 <button
//                     type="submit"
//                    // className="bg-indigo-900 hover:bg-indigo-800 disabled:opacity-50 text-white text-sm px-4 py-1.5 rounded transition-colors mt-2"
//                 >
//                     Post
//                 </button>
//             </form>

//             {/* {commentsList.length > 0 && (
//                 <div className="mt-4 space-y-2 border-t border-gray-500 pt-3">
//                     {commentsList.map((c) => (
//                         <div key={c.id} className="flex justify-between bg-gray-300 p-2 rounded text-sm text-black">
//                             <div>
//                                 <p className="font-semibold text-xs text-gray-700">{c.name}</p>
//                                 <p className="font-semibold text-xs text-gray-700">{c.email}</p>
//                                 <p className="mt-1">{c.text}</p>
//                             </div>

//                             <div className="flex gap-2 mt-2">
//                                 <DeleteAlertComment comment={c} ideaId={ideas._id} />
//                                 <EditCommentModal comment={c} ideaId={ideas._id} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )} */}
//         </div>
//     );
// }


"use client";

import { useState, useEffect } from "react";
import { favIdea } from "@/lib/courses/action";
import { useSession } from "@/lib/auth-client";

const SaveButton = ({ course }) => {
    const { _id, favByUsers = [] } = course;

    const { data: session, isPending } = useSession();

    const [saved, setSaved] = useState(false);

    // Set initial saved state once session is available
    useEffect(() => {
        if (session?.user?.email || !isPending) {
            setSaved(favByUsers.includes(session.user.email));
        }
    }, [session, favByUsers]);
    console.log({saved, favByUsers, course})
    const handleSave = async () => {
        if (isPending || !session?.user?.email) return;
        console.log("Hello")
        try {
            const result = await favIdea(_id, {
                userEmail: session.user.email,
            });
            console.log(result)
            if (result.success) {
                setSaved(result.isFavorite);
            }
        } catch (error) {
            console.error(error);
        }
    };


    if (isPending){
        return <p>Loging ...</p>
    }
    return (
        <button
            onClick={handleSave}
            className={`px-3 py-1 rounded text-white ${saved ? "bg-green-600" : "bg-blue-600"
                }`}
        >
            {saved ? "Saved" : "Save"}
        </button>
    );
};

export default SaveButton;