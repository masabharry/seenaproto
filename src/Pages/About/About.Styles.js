import styled from "styled-components";

const PageWrapper = styled.div`
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
    padding: 7rem 2rem;
  margin: 5rem auto;

`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  max-width: 700px;
  margin: 1rem auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  width: 90%;
  margin: 0 auto;
   border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7f00ff;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const RoleCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const RoleType = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.7rem;
`;

const RoleDesc = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

const ApplyButton = styled.a`
  margin-top: 1rem;
  display: inline-block;
  background: #7f00ff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #6600cc;
  }
`;

const CTA = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid #7f00ff;
`;

export {
  PageWrapper,
  Hero,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  CardGrid,
  RoleCard,
  RoleTitle,
  RoleType,
  RoleDesc,
  ApplyButton,
  CTA,
}