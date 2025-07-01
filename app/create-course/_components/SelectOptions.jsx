'use client'
import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext'

const languageOptions = [
  "English", "Hindi", "Kannada", "Tamil", "Telugu",
  "Spanish", "Chinese", "Japanese", "Urdu"
];

const SelectOptions = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return (
    <div className='px-10 md:px-20 lg:px-44'>
      <div className="grid grid-cols-2 gap-10">

        {/* Difficulty Level */}
        <div>
          <label className='text-sm text-text1 bg-[#1E2A33] mb-2'>Difficulty Level</label>
          <Select
            defaultValue={userCourseInput?.level}
            onValueChange={(value) => handleInputChange('level', value)}
          >
            <SelectTrigger className='border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className='border-[#25D366] border bg-[#1E2A33] text-text1'>
              <SelectItem value="Beginer">Beginer</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div>
          <label className='text-sm text-text1 mb-2'>Course Duration</label>
          <Select
            defaultValue={userCourseInput?.duration}
            onValueChange={(value) => handleInputChange('duration', value)}
          >
            <SelectTrigger className='border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className='border-[#25D366] border bg-[#1E2A33] text-text1'>
              <SelectItem value="1 hour">1 hour</SelectItem>
              <SelectItem value="2 hours">2 hours</SelectItem>
              <SelectItem value="more than 3 hours">more than 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ✅ Language Selection (Replaces Display Video) */}
        <div>
          <label className='text-sm text-text1 mb-2'>Course Language</label>
          <Select
            defaultValue={userCourseInput?.language}
            onValueChange={(value) => handleInputChange('language', value)}
          >
            <SelectTrigger className='border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className='border-[#25D366] border bg-[#1E2A33] text-text1'>
              {languageOptions.map((lang, idx) => (
                <SelectItem key={idx} value={lang}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters */}
        <div>
          <label className='text-sm mb-3 text-text1'>Number of Chapters</label>
          <Input
            type="number"
            className='border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'
            defaultValue={userCourseInput?.noOfChapter}
            placeholder='5, 10, 15...'
            onChange={(event) => handleInputChange('noOfChapter', event.target.value)}
          />
        </div>

      </div>
    </div>
  );
};

export default SelectOptions;
