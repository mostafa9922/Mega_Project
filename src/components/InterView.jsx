import { useState, useRef, useEffect } from "react";
import { NavMenu } from "./NavMenu";
import { SideBar } from "./SideBar";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FaMicrophone, FaPaperclip } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

export const InterView = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const messageEndRef = useRef(null); // For scrolling to the bottom

  const handleCardClick = (prompt) => {
    addMessage(prompt, "user");
    simulateAIResponse(prompt);
  };

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input, "user");
    simulateAIResponse(input);
    setInput("");
  };

  const simulateAIResponse = (userPrompt) => {
    const response = `This is a simulated answer to: "${userPrompt}"`;
    setTimeout(() => addMessage(response, "ai"), 800);
  };

  const examplePrompts = [
    "What are the best ways to introduce myself in an interview?",
    "How can I answer 'Tell me about yourself'?",
    "What are good questions to ask at the end of an interview?",
  ];

  // Auto resize the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px"; // set to scroll height
    }
  }, [input]);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleVoiceInput = () => {
    // Simple voice input using Web Speech API
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      toast.error("Error recognizing voice. Please try again.");
    };
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu />
      <div className='flex flex-col lg:flex-row gap-6 p-4 lg:p-6 min-h-[88vh]'>
        <SideBar className='w-full lg:w-1/4' />
        <div className='flex-1 flex flex-col justify-between gap-6 w-full'>
          <div className='text-center'>
            <p className='text-[#549ACC] text-xl lg:text-2xl font-bold'>
              Ace Your Next Interview with Confidence!
            </p>
            <p className='text-gray-500 text-sm lg:text-base'>
              Use one of the prompts below or type your own to begin.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            {examplePrompts.map((prompt, index) => (
              <Card
                key={index}
                className='w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:bg-gray-100 transition'
                onClick={() => handleCardClick(prompt)}>
                <CardBody>
                  <Typography className='text-sm'>{prompt}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>

          {messages.length > 0 && (
            <div className='flex flex-col justify-between h-[400px] bg-white shadow-md rounded-lg p-4 overflow-y-auto'>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`my-2 max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end text-right"
                      : "bg-gray-100 self-start"
                  }`}>
                  <p className='text-sm'>{msg.text}</p>
                </div>
              ))}
              <div ref={messageEndRef} /> {/* Scroll reference */}
            </div>
          )}

          {/* Input Section */}
          <div className='flex items-end gap-2 mt-4'>
            {/* File Upload */}
            <label className='cursor-pointer text-gray-500 hover:text-blue-600'>
              <FaPaperclip size={18} />
              <input type='file' className='hidden' />
            </label>

            {/* Auto-growing Textarea */}
            <textarea
              ref={textareaRef}
              className='flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden'
              placeholder='Type your question...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleSend())
              }
            />

            {/* Voice Input */}
            <button
              className='text-gray-500 hover:text-blue-600'
              onClick={handleVoiceInput}>
              <FaMicrophone size={18} />
            </button>

            <Button onClick={handleSend} color='blue'>
              Send
            </Button>
          </div>
        </div>
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
