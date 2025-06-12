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
  width: 100%;
  height: 450px;
  position: relative; /* Needed for absolute positioning of the image and gradient */
  overflow: hidden; /* Hide anything that overflows if object-fit is used with 'cover' */
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Or 'fill', 'cover', 'scale-down', 'none' */
  display: block; /* Removes extra space below image if it's inline */
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 100%);
`;