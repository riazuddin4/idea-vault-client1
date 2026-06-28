export default function LessonsGrid({
    lessons,
    userIsPremium,
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lessons.map((lesson) => {
                const showLockedState =
                    lesson.visibility === "Private" && !userIsPremium;

                return (
                    <div key={lesson._id}>
                        {showLockedState ? (
                            <div>
                                <h2>🔒 Premium Lesson</h2>
                                <button>Upgrade</button>
                            </div>
                        ) : (
                            <div>
                                <h2>{lesson.LessonTitle}</h2>
                                <p>{lesson.DetailedDescription}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}