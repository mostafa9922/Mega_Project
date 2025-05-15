import { useState, useRef, useEffect, useCallback } from "react";
import { NavMenu } from "./NavMenu";
import { SideBar } from "./SideBar";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FaMicrophone, FaPaperclip } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const InterView = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [voiceLoading, setVoiceLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const textareaRef = useRef(null);
  const messageEndRef = useRef(null);

  const AIData = {
    user_message: "",
    skills: [
      { skill_name: "C programming language", proficiency_level: "good" },
      { skill_name: "AVR interfacing", proficiency_level: "good" },
      { skill_name: "RTOS", proficiency_level: "good" },
      { skill_name: "ARM architecture", proficiency_level: "beginner" },
      { skill_name: "Software Testing", proficiency_level: "beginner" },
      { skill_name: "AUTOSAR", proficiency_level: "beginner" },
      { skill_name: "Functional Safety", proficiency_level: "beginner" },
      { skill_name: "Cyber Security", proficiency_level: "beginner" },
      { skill_name: "PCB Design", proficiency_level: "good" },
    ],
    work_experience: [
      {
        job_title: "Embedded software trainee",
        job_level: "intern",
        company: "National Telecommunication Institute (NTI)",
        start_year: 2023,
        start_month: "July",
        end_year: 2023,
        end_month: "October",
      },
      {
        job_title: "Hardware Team Head",
        job_level: "not_specified",
        company: "Robo-tech Team Alexandria University",
        start_year: 2020,
        start_month: "April",
        end_year: 2021,
        end_month: "July",
      },
    ],
    projects: [
      {
        project_name:
          "Smart Safety System For Vehicles (Graduation Project Mentored By Aﬀectiva)",
        description:
          "Implemented computer vision applications to maintain driver security. System has Jetson Nano for vision, STM32F103C8 for sensors and controls. Roles: USART communication, GSM module integration, door lock system, audio playback.",
      },
      {
        project_name: "Biometric Authentication System",
        description:
          "Developed fingerprint access control using ultrasonic sensor, EEPROM, and RTC for attendance tracking and authentication.",
      },
      {
        project_name: "Small OS Scheduler Using TIMER",
        description:
          "Blinked LEDs with different priorities triggered by timer and external interrupts.",
      },
      {
        project_name: "8-bit Micro-Processor , Alexandria University",
        description:
          "Designed 8-bit processor with program counter, instruction register, accumulator, and control unit with 17 instructions.",
      },
    ],
    chat_history: chatHistory,
  };

  // Add a new message to state safely with useCallback
  const addMessage = useCallback((text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);

    // Only add user or ai messages to chatHistory
    if (sender === "user" || sender === "ai") {
      setChatHistory((prev) => [
        ...prev,
        {
          role: sender === "ai" ? "model" : "user",
          parts: [{ text }],
        },
      ]);
    }
  }, []);

  // Send user input to AI API and handle response
  const simulateAIResponse = useCallback(
    async (userPrompt) => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_CHAT_BOT_API}`, {
          ...AIData,
          user_message: userPrompt,
        });
        addMessage(res.data, "ai");
      } catch (error) {
        const errorMessage =
          error.response?.data?.error || "An unexpected error occurred";
        toast.error(errorMessage);
      }
    },
    [AIData, addMessage]
  );

  // Handles user clicking a prompt card
  const handleCardClick = (prompt) => {
    addMessage(prompt, "user");
    simulateAIResponse(prompt);
  };

  // Handles send button or Enter key press
  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input, "user");
    simulateAIResponse(input);
    setInput("");
  };

  // Voice input recording and transcription
  const handleVoiceInput = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",
          });
          const audioFile = new File([audioBlob], "voice.wav", {
            type: "audio/wav",
          });
          const formData = new FormData();
          formData.append("audio", audioFile);

          setVoiceLoading(true);
          addMessage("Processing voice input...", "ai");

          try {
            const res = await axios.post(
              `${import.meta.env.VITE_TRANSCRIPTION_API}`,
              formData
            );
            setInput(res.data.transcription);
          } catch {
            toast.error("Failed to send audio.");
          } finally {
            setVoiceLoading(false);
          }
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch {
        toast.error("Failed to access microphone.");
      }
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    }
  };

  // Auto resize textarea on input change
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const examplePrompts = [
    "What are the best ways to introduce myself in an interview?",
    "How can I answer 'Tell me about yourself'?",
    "What are good questions to ask at the end of an interview?",
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu />
      <div className='flex flex-col lg:flex-row gap-6 p-4 lg:p-6 min-h-[88vh]'>
        <SideBar className='w-full lg:w-1/4' />
        <main className='flex-1 flex flex-col justify-between gap-6 w-full'>
          <header className='text-center'>
            <h1 className='text-[#549ACC] text-xl lg:text-2xl font-bold'>
              Ace Your Next Interview with Confidence!
            </h1>
            <p className='text-gray-500 text-sm lg:text-base'>
              Use one of the prompts below or type your own to begin.
            </p>
          </header>

          <section className='flex flex-wrap justify-center gap-4'>
            {examplePrompts.map((prompt, i) => (
              <Card
                key={i}
                className='w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:bg-gray-100 transition'
                onClick={() => handleCardClick(prompt)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handleCardClick(prompt);
                }}
                aria-label={`Prompt: ${prompt}`}>
                <CardBody>
                  <Typography className='text-sm'>{prompt}</Typography>
                </CardBody>
              </Card>
            ))}
          </section>

          {messages.length > 0 && (
            <section
              className='flex flex-col justify-between h-[400px] bg-white shadow-md rounded-lg p-4 overflow-y-auto'
              aria-live='polite'
              aria-relevant='additions'>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`my-2 max-w-[80%] p-3 rounded-lg break-words whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end text-right"
                      : "bg-gray-100 self-start"
                  }`}>
                  <p className='text-sm'>{msg.text}</p>
                </div>
              ))}
              <div ref={messageEndRef} />
            </section>
          )}

          {/* Input Section */}
          <form
            className='flex items-end gap-2 mt-4'
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}>
            <label
              htmlFor='file-upload'
              className='cursor-pointer text-gray-500 hover:text-blue-600'
              aria-label='Attach file'>
              <FaPaperclip size={18} />
            </label>
            <input id='file-upload' type='file' className='hidden' />

            <textarea
              ref={textareaRef}
              className='flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden'
              placeholder='Type your question...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={1}
              aria-label='Chat input'
            />

            <button
              type='button'
              className={`text-gray-500 hover:text-blue-600 ${
                isRecording ? "animate-pulse text-red-600" : ""
              }`}
              onClick={handleVoiceInput}
              aria-pressed={isRecording}
              aria-label={isRecording ? "Stop recording" : "Start voice input"}>
              <FaMicrophone size={18} />
            </button>

            <Button
              type='submit'
              color='blue'
              disabled={voiceLoading || !input.trim()}>
              Send
            </Button>
          </form>
        </main>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};
