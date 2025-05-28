

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate A Course Tutorial on following Detail With field Course Name, Description, Along with Chapter Name, about,Duration: Category :'Programing\",Topic:Python, Level:Basic,Duration:1 hours, NoOfChapter:5, in JSON format." },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"courseName\": \"Python Programming for Beginners\",\n  \"description\": \"This course introduces the fundamentals of Python programming, designed for absolute beginners with no prior coding experience. You'll learn the essential syntax, data types, control flow, functions, and basic programming concepts. By the end of the course, you'll be able to write simple Python programs and understand the core principles of this powerful language.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Introduction to Python\",\n      \"about\": \"This chapter covers the basics of Python, including its history, purpose, and why it's a popular choice for programming. You'll learn how to set up your development environment and write your first Python program.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Data Types and Variables\",\n      \"about\": \"This chapter introduces fundamental data types like integers, floats, strings, and booleans. You'll learn how to assign values to variables and perform basic operations on them.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow and Logic\",\n      \"about\": \"This chapter focuses on conditional statements (if-else) and loops (for and while). You'll learn how to control the flow of your programs based on different conditions.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Functions and Modules\",\n      \"about\": \"This chapter explores functions and modules in Python. You'll learn how to define and call your own functions, and how to import and use pre-built modules to extend your programming capabilities.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Practice Projects and Next Steps\",\n      \"about\": \"This final chapter will guide you through building a simple Python project to solidify your understanding. You'll also learn about resources for further learning and explore potential career paths in Python programming.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```" },
      ],
    },
  ],
});

export const GenerateChapterContent_Ai = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: 'user',
      parts: [
        {
          text: 'Explain the concept in Detail on Topic:blood presure, Chapter:Lifestyle Modifications: The Cornerstone of Management, in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) and If applicable, include a code example relevant to the explanation. Format it as a plain text string in the code field. DO NOT wrap it inside <pre>, <code>, or any other HTML tags. generate some MCQS based on the description having 1 questions and 4 options for each question.',
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `\`\`\`json
[
  {
    "title": "Lifestyle Modifications: The Cornerstone of Blood Pressure Management",
    "description": "Lifestyle modifications form the foundation of managing high blood pressure (hypertension). They are often the first line of defense and can be remarkably effective, sometimes even eliminating the need for medication. Even when medication is necessary, lifestyle changes can significantly improve its effectiveness and reduce the required dosage, minimizing potential side effects. These modifications encompass several key areas, including dietary changes, regular physical activity, weight management, smoking cessation, and moderation of alcohol consumption. The effectiveness of these changes depends on consistent adherence and long-term commitment.",
    "code": null,
    "MCQs": [
      {
        "question": "What is the primary role of lifestyle modifications in blood pressure management?",
        "options": [
          "They are only needed if medication doesn't work.",
          "They are a cosmetic change and don't impact blood pressure.",
          "They are the foundation of management, often the first line of defense, and improve medication effectiveness.",
          "They are exclusively for people who cannot afford medication."
        ],
        "answer": "They are the foundation of management, often the first line of defense, and improve medication effectiveness."
      }
    ]
  },
  {
    "title": "Dietary Changes: The DASH Diet and Sodium Reduction",
    "description": "Dietary changes are crucial. The Dietary Approaches to Stop Hypertension (DASH) diet is a scientifically proven eating plan for lowering blood pressure. It emphasizes fruits, vegetables, whole grains, low-fat dairy, lean meats, and limits saturated and trans fats, cholesterol, and added sugars. A critical component is reducing sodium (salt) intake. High sodium consumption leads to fluid retention, increasing blood volume and pressure. Aim to consume less than 2,300 milligrams of sodium per day, and ideally, less than 1,500 mg, especially if you have hypertension or are at risk. Reading food labels carefully, limiting processed foods, and using herbs and spices instead of salt are important strategies. Additionally, increasing potassium intake through fruits and vegetables can help counter the effects of sodium.",
    "code": null,
     "MCQs": [
      {
        "question": "Which dietary approach is specifically designed to lower blood pressure?",
        "options": [
          "The Keto Diet",
          "The Atkins Diet",
          "The DASH Diet",
          "The Mediterranean Diet"
        ],
        "answer": "The DASH Diet"
      }
    ]
  },
  {
    "title": "Regular Physical Activity: Cardiovascular and Aerobic Exercise",
    "description": "Regular physical activity is a powerful tool for lowering blood pressure and improving overall cardiovascular health. Aim for at least 150 minutes of moderate-intensity aerobic exercise (e.g., brisk walking, jogging, swimming) or 75 minutes of vigorous-intensity aerobic exercise (e.g., running) per week. Strength training exercises, done at least twice a week, can also contribute to blood pressure control. Exercise helps lower blood pressure by strengthening the heart, improving blood vessel function, and helping with weight management. It's essential to consult with your doctor before starting a new exercise program, especially if you have existing health conditions.",
    "code": null,
     "MCQs": [
      {
        "question": "What is the recommended minimum amount of moderate-intensity aerobic exercise per week for blood pressure management?",
        "options": [
          "30 minutes",
          "75 minutes",
          "150 minutes",
          "200 minutes"
        ],
        "answer": "150 minutes"
      }
    ]
  },
  {
    "title": "Weight Management: Achieving and Maintaining a Healthy Weight",
    "description": "Excess weight, particularly around the abdomen, is strongly linked to high blood pressure. Losing even a small amount of weight can significantly reduce blood pressure. The goal is to achieve and maintain a healthy weight, typically measured by Body Mass Index (BMI). A BMI between 18.5 and 24.9 is generally considered healthy. Weight loss is often achieved through a combination of dietary changes (as described with DASH) and regular physical activity. It is crucial to adopt sustainable lifestyle changes rather than relying on quick-fix solutions. Consulting with a healthcare professional or a registered dietitian can help develop a personalized weight management plan.",
    "code": null,
     "MCQs": [
      {
        "question": "What is the primary benefit of weight loss in relation to blood pressure?",
        "options": [
          "It reduces the need for medication.",
          "It reduces the blood volume.",
          "It lowers blood pressure.",
          "It improves heart rate."
        ],
        "answer": "It lowers blood pressure."
      }
    ]
  },
  {
    "title": "Smoking Cessation and Alcohol Moderation: Reducing Risk Factors",
    "description": "Smoking significantly increases blood pressure and damages blood vessels. Quitting smoking is one of the most beneficial changes a person can make for their health and blood pressure. Support groups, nicotine replacement therapy, and medication can assist in quitting. Excessive alcohol consumption can raise blood pressure. Moderation is key: for men, no more than two alcoholic drinks per day; for women, no more than one drink per day. A drink is defined as 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of liquor. If you don't drink alcohol, it's generally not recommended to start.",
    "code": null,
     "MCQs": [
      {
        "question": "What is the recommended maximum amount of alcohol consumption per day for men to help manage blood pressure?",
        "options": [
          "One drink",
          "Two drinks",
          "Three drinks",
          "It does not matter"
        ],
        "answer": "Two drinks"
      }
    ]
  },
  {
    "title": "Stress Management: Techniques for Reducing Stress",
    "description": "Chronic stress can contribute to elevated blood pressure. Managing stress through relaxation techniques is therefore helpful. Techniques include meditation, deep breathing exercises, yoga, and spending time in nature. Identifying and addressing the sources of stress in your life is also important. Seeking professional help from a therapist or counselor can provide additional support in managing stress and its impact on blood pressure.",
    "code": null,
     "MCQs": [
      {
        "question": "Which of the following is a stress management technique?",
        "options": [
          "High-intensity interval training",
          "Eating processed foods",
          "Meditation",
          "Smoking cigarettes"
        ],
        "answer": "Meditation"
      }
    ]
  }
]
\`\`\``,
        },
      ],
    }
  ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());