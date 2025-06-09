import styled from "styled-components/macro";
import { keyframes } from "styled-components";

// Smooth bounce animation with multiple directions
const bounceFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    filter: drop-shadow(0 5px 15px rgba(182, 255, 91, 0.3));
  }
  25% {
    transform: translate(15px, -20px) rotate(2deg) scale(1.02);
    filter: drop-shadow(5px 10px 25px rgba(182, 255, 91, 0.4));
  }
  50% {
    transform: translate(25px, -35px) rotate(0deg) scale(1.05);
    filter: drop-shadow(10px 15px 35px rgba(182, 255, 91, 0.5));
  }
  75% {
    transform: translate(10px, -15px) rotate(-1deg) scale(1.02);
    filter: drop-shadow(5px 10px 25px rgba(182, 255, 91, 0.4));
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    filter: drop-shadow(0 5px 15px rgba(182, 255, 91, 0.3));
  }
`;

// Subtle glow pulse animation
const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(182, 255, 91, 0.2),
      0 0 40px rgba(182, 255, 91, 0.1),
      inset 0 0 20px rgba(182, 255, 91, 0.1);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(182, 255, 91, 0.3),
      0 0 60px rgba(182, 255, 91, 0.2),
      inset 0 0 30px rgba(182, 255, 91, 0.15);
  }
`;

// Shimmer effect for extra beauty
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Container = styled.section`
  min-height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Frame = styled.div`
  background: url("/images/banks/sea.png") center / contain no-repeat;
  width: 90%;
  height: 220px;

  /* Enhanced styling */
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Beautiful gradient overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(182, 255, 91, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(182, 255, 91, 0.15) 100%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  /* Shimmer effect overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(182, 255, 91, 0.3) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Main animations */
  animation: ${bounceFloat} 4s ease-in-out infinite,
    ${glowPulse} 2s ease-in-out infinite alternate;

  /* Hover effects */
  &:hover {
    transform: scale(1.05) translateY(-5px);

    &::after {
      opacity: 1;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 95%;
    height: 180px;
    border-radius: 15px;

    /* Reduced animation on mobile for performance */
    animation: ${bounceFloat} 6s ease-in-out infinite;
  }

  @media (max-width: 480px) {
    height: 150px;
    border-radius: 12px;
  }

  /* Accessibility - reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
