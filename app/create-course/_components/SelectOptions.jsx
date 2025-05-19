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


const SelectOptions = () => {
    const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
    const handleInputChange=(fieldName,value) =>{

        setUserCourseInput(prev=>({
          ...prev,
          [fieldName]:value
        }))
      }


    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className="grid grid-cols-2 gap-10">
               <div className="">
                <label htmlFor="" className='text-sm text-text1 bg-[#1E2A33] mb-2'>Difficulty Level</label>
               <Select 
                defaultValue={userCourseInput?.level}
               onValueChange={(value) => handleInputChange('level',value)} className=' border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33]'>
                    <SelectTrigger className=' border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className='border-[#25D366] border  bg-[#1E2A33] text-text1'>
                        <SelectItem value="Beginer">Beginer</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advance">Advance</SelectItem>
                    </SelectContent>
                </Select>
               </div>
               <div className="">
                <label htmlFor="" className='text-sm text-text1 mb-2'>Course Duration</label>
               <Select 
               defaultValue={userCourseInput?.duration}
               onValueChange={(value) => handleInputChange('duration',value)}>
                    <SelectTrigger className=' border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className='border-[#25D366] border  bg-[#1E2A33] text-text1'>
                        <SelectItem value="1 hour" >1 hour</SelectItem>
                        <SelectItem value="I2 hours" >2 hours</SelectItem>
                        <SelectItem value="more than 3 hours">more than 3 hours</SelectItem>
                    </SelectContent>
                </Select>
               </div>
               <div className="">
                <label htmlFor="" className='text-sm text-text1 mb-2'>Display Video</label>
               <Select 
               defaultValue={userCourseInput?.displayVideo}
               onValueChange={(value) => handleInputChange('displayVideo',value)}>
                    <SelectTrigger className=' border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className='border-[#25D366] border  bg-[#1E2A33] text-text1'>
                        <SelectItem value="Yes" >Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </SelectContent> 
                </Select>
               </div>
               <div className="">
                <label htmlFor="" className='text-sm mb-3 text-text1'>Number of chapter</label>
               <Input type="number" className=' border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-2'
               defaultValue={userCourseInput?.noOfChapter} placeholder='5, 10, 15...'
               onChange={(event) => handleInputChange('noOfChapter',event.target.value)}></Input>
               </div>



            </div>
        </div>
    )
}

export default SelectOptions