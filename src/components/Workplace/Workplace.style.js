import styled from "styled-components";

export const Sectioner = styled.div`
  width: 920px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
`;

export const Logo = styled.img`
  object-fit: contain;
  margin: 0 1em;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  border: 3px solid #eee;
`;

export const CompanySection = styled.div`
  padding: 1em;
  margin: 0 1em;
`;

export const Company = styled.h3`
  color: ${({ theme }) => theme.blue};
  margin: 0;
`;

export const Position = styled.h4`
  color: ${({ theme }) => theme.green};
  margin: 0.5em 0;
`;

export const City = styled.h4`
  color: #555;
  margin: 0.5em 0;
`;

export const Info = styled.p`
  color: black;
  font-weight: lighter;
`;
