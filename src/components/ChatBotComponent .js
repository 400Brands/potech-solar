import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { TbMessageCircleHeart } from "react-icons/tb";

// Smooth slide-up animation
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Floating animation for the button
const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
`;

// Pulse animation for attention
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(182, 255, 91, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(182, 255, 91, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(182, 255, 91, 0);
  }
`;

// Main wrapper for the entire chatbot component
const ChatBotWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

// Floating action button to toggle chatbot
const FloatingButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #b6ff5b 0%, #8fd93a 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(182, 255, 91, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;

  /* Pulse effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 12px 35px rgba(182, 255, 91, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    color: #2d5016;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

// Container for the chatbot when opened
const ChatBotContainer = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: ;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: ${slideUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(182, 255, 91, 0.2);

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b6ff5b;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a3e653;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 450px;
    bottom: 75px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 400px;
    right: -10px;
  }
`;

// Header for the chatbot
const ChatHeader = styled.div`
  background: linear-gradient(135deg, #b6ff5b 0%, #8fd93a 100%);
  padding: 20px;
  color: #2d5016;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Close button in header
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  svg {
    color: #2d5016;
  }
`;

// Overlay for mobile to close chatbot when clicking outside
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;

  @media (min-width: 769px) {
    display: none;
  }
`;

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: "0",
      message: "Welcome to our POTECH AI Assistant! 🌞",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can I help you today?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "info", label: "Solar Panel Info", trigger: "3" },
        { value: "contact", label: "Contact Us", trigger: "4" },
        { value: "pricing", label: "Get Pricing", trigger: "5" },
      ],
    },
    {
      id: "3",
      message:
        "Solar panels can save you up to 100% of your electricity costs! Would you like to learn more?",
      trigger: "6",
    },
    {
      id: "4",
      message:
        "You can reach us at potechnologyltd@gmail.com or call us at (+234) 703 477 9547",
      trigger: "6",
    },
    {
      id: "5",
      message:
        "Our solar solutions start from $99/month. Would you like a free consultation?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: "yes", label: "Yes, tell me more", trigger: "7" },
        { value: "no", label: "No, thanks", trigger: "8" },
      ],
    },
    {
      id: "7",
      message:
        "Great! Our team will contact you within 24 hours. Thank you for your interest! 🌱",
      end: true,
    },
    {
      id: "8",
      message:
        "No problem! Feel free to reach out anytime. Have a great day! ☀️",
      end: true,
    },
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatBotWrapper>
        <FloatingButton onClick={toggleChatbot}>
          {isOpen ? (
            <p>
              <b>X</b>
            </p>
          ) : (
            <TbMessageCircleHeart size={24} weight="fill" />
          )}
        </FloatingButton>

        {isOpen && (
          <ChatBotContainer>
            <ChatHeader>
              Solar Assistant
              <CloseButton onClick={closeChatbot}>
                <p>
                  <b>X</b>
                </p>
              </CloseButton>
            </ChatHeader>
            <ChatBot
              steps={steps}
              headerTitle=""
              hideHeader={true}
              botAvatar="https://res.cloudinary.com/dgbreoalg/image/upload/v1748876551/PO_TECH_Logo_Colored_SVG_Favicon-01_onghai.svg"
              userAvatar="https://res.cloudinary.com/dgbreoalg/image/upload/v1746696017/consultant_bgaqe2.png"
              bubbleStyle={{
                background: "#b6ff5b",
                color: "#2d5016",
                fontSize: "14px",
              }}
              bubbleOptionStyle={{
                background: "#f8ffee",
                color: "#2d5016",
                border: "1px solid #b6ff5b",
              }}
              customStyle={{
                height: "420px",
                width: "100%",
              }}
            />
          </ChatBotContainer>
        )}
      </ChatBotWrapper>

      {isOpen && <Overlay onClick={closeChatbot} />}
    </>
  );
};

export default ChatBotComponent;
