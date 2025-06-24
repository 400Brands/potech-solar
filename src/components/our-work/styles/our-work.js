import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  background-color: var(--color-hover);
  padding: 60px 0;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
  @media (min-width: 2000px) {
    min-height: 40vh;
  }
`;

export const Inner = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: 109px;
  @media (max-width: 912px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
  .koko {
    width: 50%;
  }
`;

export const ImageHolder = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 100%),
    url(${({ src }) => src}) center / 100% 100% no-repeat;
  width: 100%;
  height: 450px;
  background-color: black;
`;

export const VideoHolder = styled.div`
  width: 100%;
  height: 450px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain; // Matches your image contain behavior
    background-color: black;
  }

  // Optional: Add gradient overlay like images
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      hsl(0, 0%, 0%) 100%
    );
    pointer-events: none;
  }
`;