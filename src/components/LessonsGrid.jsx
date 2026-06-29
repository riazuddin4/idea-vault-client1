// export default function LessonsGrid({ course, userIsPremium}) =>{
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {lessons.map((course) => {
//                 const showLockedState =
//                     course.visibility === "Private" && !userIsPremium;

import { Chip } from "@heroui/react";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SaveButton from "./SaveButton";

//                 return (
//                     <div key={course._id}>
//                         {showLockedState ? (
//                             <div>
//                                 <h2>🔒 Premium Lesson</h2>
//                                 <button>Upgrade</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <h2>{course.LessonTitle}</h2>
//                                 <p>{course.DetailedDescription}</p>
//                             </div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

export default function LessonsGrid({ course, userIsPremium }) {
    const showLockedState =
        course?.visibility === "Private" && userIsPremium !== 'pro';
        const { _id, ImageURL, LessonTitle, EstimatedBudget, Category } = course;
        console.log(userIsPremium, "userIsPremium")

    return (
        <div className="border rounded-xl p-5 shadow-md">
            {showLockedState ? (
                <div className="text-center space-y-4">
                    <h2 className="text-xl font-bold">🔒 Premium Lesson</h2>
                    <p className="text-gray-500">
                        Upgrade to Premium to access this lesson.
                    </p>

                    {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Upgrade
                    </button> */}
                    <Link
                        href="/pricing"
                        className="inline-flex items-center rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-600"
                    >
                        🔒 UPGRADE
                    </Link>
                </div>
            ) : (
                // <div className="space-y-3">
                //     <img
                //         src={course.ImageURL}
                //         alt={course.LessonTitle}
                //         className="w-full h-48 object-cover rounded-lg"
                //     />

                //     <h2 className="text-xl font-semibold">
                //         {course.LessonTitle}
                //     </h2>

                //     <p className="text-gray-600 line-clamp-3">
                //         {course.DetailedDescription}
                //     </p>

                //     <span className="text-sm text-blue-600">
                //         {course.Category}
                //     </span>
                // </div>
                <div>
                    <div
                        className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <div className="relative aspect-16/10 overflow-hidden">
                            <Image src={ImageURL || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}

                                alt="Course Image"
                                height={400}
                                width={640}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-3 right-3">
                                <Chip
                                    size="sm"
                                    color="primary"
                                    variant="solid"
                                    className="font-bold text-[10px] uppercase"
                                >
                                    {Category}
                                </Chip>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col grow space-y-3">
                            <Link href={`/ideas/${_id}`}>
                                <h4 className="font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {LessonTitle}
                                </h4>
                            </Link>
                            <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                                    <Users className="w-3 h-3" />
                                    <span>0</span>
                                </div>
                                <SaveButton course={course} />
                                <span className="font-black text-blue-600">{EstimatedBudget}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}