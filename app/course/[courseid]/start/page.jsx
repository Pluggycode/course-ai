'use client'
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/Schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard'
import ChapterContent from './_components/ChapterContent'
import { and } from 'drizzle-orm'

const CourseStart = ({ params }) => {
    const [course,setCourse] = useState([]);
    const [selectedChapter,setSelectedChapter] = useState();
    const [chapterContent,setChapterContent] = useState();

    useEffect(() => {
     GetCourse();
    }, [])

    const GetCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseId, params?.courseid));
        setCourse(result[0]);
        getSelectedChapterContent(0);
    }
    const getSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters).where(and(eq(Chapters?.chapterId,chapterId),eq(Chapters.courseId,course?.courseId)));
        setChapterContent(result[0]);
         console.log(result);

    }

    return (
        <div>
            {/* chapterlist sidebar */}
            <div className=" fixed md:w-64 hidden md:block max-h-screen border-r shadow-sm overflow-y-auto bg-[#0B141A] p-4">
                <h2 className='font-md text-lg p-5 text-text1 rounded-md'>{course?.courseOutput?.courseName}</h2>
                <div className="border-primary border">
                    {course?.courseOutput?.chapters.map((chapter,index)=>(
                        <div key={index} className={`cursor-pointer  mt-3 bg-[#1E2A33] rounded-lg mb-3 ${selectedChapter?.chapterName == chapter?.chapterName && "border-[#25D366] border bg-[#0a2f18] rounded-lg"}`} 
                        onClick={() => {setSelectedChapter(chapter);
                            getSelectedChapterContent(index) }}>
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>
            {/* content div */}
            <div className="md:ml-64">
                    <ChapterContent chapter={selectedChapter} content={chapterContent}/>
            </div>
        </div>
    )
}

export default CourseStart
