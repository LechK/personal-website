import styled from "styled-components";

export const Main = styled.div`
  background-color: ${({ theme }) => theme.sidebar};
  max-width: 920px;
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${({ theme }) => theme.medium}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Photo = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 7px double black;
  width: 300px;
  height: 300px;
  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 250px;
    height: 250px;
  }
`;

export const Text = styled.div`
  padding: 0 2em;
  max-width: 380px;
  @media (max-width: ${({ theme }) => theme.medium}) {
    padding: 0;
  }
`;

export const Motto = styled.h3`
  color: rgb(235, 199, 0);
  font-size: smaller;
  @media (max-width: ${({ theme }) => theme.medium}) {
    text-align: center;
  }
`;

export const Info = styled.p`
  color: black;
  font-weight: lighter;
  @media (max-width: ${({ theme }) => theme.medium}) {
    text-align: center;
  }
`;
