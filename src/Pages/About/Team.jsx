import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FiLinkedin, FiUsers } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const team = [
  {
    name: "Mr. Iqram Chuhan",
    role: "Founder & Visionary",
    image: "https://via.placeholder.com/300x160",
    bio: "The mind behind SDS. Iqram’s mission is to create accessible, AI-powered education for everyone.",
    linkedin: "#",
  },
  {
    name: "Dr. Fahad Malik",
    role: "Head of AI & Research",
    image: "https://via.placeholder.com/300x160",
    bio: "Dr. Fahad Malik leads the AI engine, blending smart algorithms with real-world classroom insights.",
    linkedin: "#",
  },
  {
    name: "Areeba Ahmad",
    role: "Lead Developer & UI/UX Designer",
    image: "https://via.placeholder.com/300x160",
    bio: "Areeba turns ideas into elegant, usable systems across AI, front-end, and smart school design.",
    linkedin: "#",
  },
  {
    name: "Muhammad Masab",
    role: "Developer & All-round Executor",
    image: "https://via.placeholder.com/300x160",
    bio: "Masab is hands-on with every part of SDS — dev, testing, feedback, and building community-first.",
    linkedin: "#",
  },
];



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

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.3rem;
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #7f00ff;
`;

const Bio = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0.8rem 0;
`;

const LinkedIn = styled.a`
  color: #7f00ff;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: white;
  }
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 4rem;
  border-top: 1px solid #7f00ff;
  padding-top: 3rem;
`;

const Button = styled.a`
  background: #7f00ff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #6600cc;
  }
`;

const Team = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Meet the Team</Title>
        <Subtitle>
          A passionate group of educators, builders, and visionaries on a mission to reimagine education.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>👩‍💻 Core Team</SectionTitle>
        <Grid>
          {team.map((member, i) => (
            <Card key={i}>
              {/* <Avatar src={member.image} alt={member.name} /> */}
              <FaUser height={200} width={200}/>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <Bio>{member.bio}</Bio>
              <LinkedIn href={member.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin />
              </LinkedIn>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* <CTA>
        <h2>Want to Join Us?</h2>
        <p style={{ margin: "1rem 0" }}>
          We're always looking for passionate people. Check out open roles or share your interest.
        </p>
        <Button href="/about/join">View Careers</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default Team;
