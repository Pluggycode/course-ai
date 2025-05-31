'use client';

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { SpeakerLoudIcon } from '@radix-ui/react-icons';
import Vapi from "@vapi-ai/web";
import Image from 'next/image';


const opts = {
  height: '390',
  width: '640',
  playerVars: { autoplay: 0 },
};

const languageOptions = ['python', 'javascript', 'c', 'cpp', 'java', 'r'];

const ChapterContent = ({ chapter, content, chapterIndex, onMark, marked }) => {
  const [language, setLanguage] = useState('python');
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [userCodeMap, setUserCodeMap] = useState({});
  const [userAnswers, setUserAnswers] = useState({});





  const runCode = async (code) => {
    setIsRunning(true);
    setOutput('Running...');
    try {
      const res = await fetch('/api/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code }),
      });

      const data = await res.json();
      setOutput(res.ok ? data.output : data.error || 'Error running code.');
    } catch (err) {
      setOutput('Error: Could not reach server.');
    }
    setIsRunning(false);
  };


  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

  const startCall = (index, title, description) => {
    if (!title && description) return;

    setSpeakingIndex(index); // Mark which item is speaking
    setIsSpeaking(true);

    vapi.start({
      name: "Magna AI",
      firstMessage:
        'I am Magna AI, let me explain about ' +
        title +
        ', and here is the description: ' +
        description,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer", // Use a better voice here
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: title + description,
          },
        ],
      },
    });

    setTimeout(() => {
      setSpeakingIndex(null); // Stop speaking after 20s
      setIsSpeaking(false);
    }, 30000);
  };








  return (

    <div className="p-10 bg-[#121B22]">
      {isSpeaking && (
        <div className="fixed bottom-6 right-6 bg-[#1E2A33] text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
          <span className="animate-pulse w-3 h-3 bg-green-400 rounded-full"></span>
          <span>Magna AI is speaking... please wait...</span>
        </div>
      )}
    
      <h2 className="font-medium text-2xl text-text1 mt-3">{chapter?.chapterName}</h2>
      <h2 className="text-gray-500">{chapter?.about}</h2>

      <div className="flex justify-center my-6">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>

      <div>
        {content?.content?.map((item, index) => (
          <div key={index} className="p-5 bg-[#1E2A33] mb-5 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-lg text-[#25D366]">{item.title}</h2>
              {speakingIndex === index ? (
                <Image src="/volume.gif" width={40} height={40} alt="Speaking" className='rounded-full' />
              ) : (
                <Button onClick={() => startCall(index, item.title, item.description)}>
                  <SpeakerLoudIcon />
                </Button>
              )}



            </div>

            <ReactMarkdown className="text-text1 mt-2">{item.description}</ReactMarkdown>
            {item.MCQs && item.MCQs.map((mcq, mcqIndex) => (
                  <div key={mcqIndex} className="mt-4 bg-[#2A3B47] p-4 rounded-lg text-white">
                    <p className="mb-2 font-semibold">{mcq.question}</p>
                    <div className="space-y-2">
                      {mcq.options.map((option, optionIndex) => {
                        const isCorrect = mcq.answer === option;
                        const isSelected = userAnswers[`${index}-${mcqIndex}`] === option;
                        return (
                          <button
                            key={optionIndex}
                            className={`block w-full text-left px-4 py-2 rounded border 
                                ${isSelected ? (isCorrect ? 'bg-green-600 border-green-500' : 'bg-red-600 border-red-500')
                                : 'bg-[#1E2A33] border-gray-600 hover:bg-[#2c3f4d]'}`}
                            onClick={() => {
                              setUserAnswers((prev) => ({
                                ...prev,
                                [`${index}-${mcqIndex}`]: option,
                              }));
                            }}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {userAnswers[`${index}-${mcqIndex}`] && (
                      <p className="mt-2 text-sm italic">
                        {userAnswers[`${index}-${mcqIndex}`] === mcq.answer
                          ? '✅ Correct!'
                          : `❌ Incorrect. Correct answer: ${mcq.answer}`}
                      </p>
                    )}
                  </div>
                ))}

            {item?.code  && (
              <div className="mt-4">
                <label className="text-sm text-white mb-2 block">Select Language</label>
                <select
                  className="mb-4 p-2 rounded bg-[#1E2A33] text-white border border-gray-600"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {languageOptions.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>

                <Editor
                  height="300px"
                  language={language}
                  value={userCodeMap[index] ?? item.code}
                  theme="vs-dark"
                  onChange={(value) => {
                    setUserCodeMap((prev) => ({
                      ...prev,
                      [index]: value,
                    }));
                  }}
                />


                <Button
                  onClick={() => runCode(userCodeMap[index] ?? item.code)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4"
                  disabled={isRunning}
                >
                  {isRunning ? 'Running...' : 'Run Code'}
                </Button>


                <div className="mt-3 bg-gray-900 text-white p-3 rounded">
                  <strong>Output:</strong>
                  <pre className="whitespace-pre-wrap mt-2">{output}</pre>
                </div>
              </div>

            )}
          </div>
        ))}
      </div>
    </div >
  );
};

export default ChapterContent;
