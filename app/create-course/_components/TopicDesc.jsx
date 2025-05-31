'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserInputContext } from '@/app/_context/UserInputContext';
import { Mic } from 'lucide-react';

const TopicDesc = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          handleInputChange('topic', transcript);
        };

        recognition.onend = () => setListening(false);
        recognition.onerror = () => setListening(false);

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const handleVoiceInput = () => {
    if (recognitionRef.current) {
      if (!listening) {
        setListening(true);
        recognitionRef.current.start();
      } else {
        recognitionRef.current.stop();
        setListening(false);
      }
    }
  };

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-20 mt-5 lg:mx-44">
      {/* topic input */}
      <div className="mt-5">
        <label className="text-text1 mb-3">
          Write the topic for which you want to generate a course (e.g., Python, Yoga):
        </label>
        <div className="relative flex items-center mt-3">
          <Input
            placeholder="Topic"
            value={userCourseInput?.topic || ''}
            onChange={(e) => handleInputChange('topic', e.target.value)}
            className="h-14 text-xl border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] pr-12"
             />

        </div>
      </div>

      {/* description textarea */}
      <div className="mt-5">
        <label htmlFor="" className="text-text1 mb-3">
          Tell us more about your course, what you want to include in the course:
        </label>
        <Textarea
          placeholder="About your course"
          value={userCourseInput?.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="h-24 text-xl border border-[#25D366] text-text1 shadow-lg shadow-[#25D366] bg-[#1E2A33] mt-3"
        />
      </div>
    </div>
  );
};

export default TopicDesc;
