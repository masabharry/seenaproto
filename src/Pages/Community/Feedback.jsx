import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FiUploadCloud, FiZap, FiUsers, FiTarget } from "react-icons/fi";

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #7f00ff;
  }
`;

const Subtitle = styled.p`
  color: #bbb;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 1rem auto;
`;

const Button = styled.button`
  display: inline-block;
  background: transparent;
  color: #7f00ff;
  padding: 0.75rem 1.5rem;
  border: 1px solid #7f00ff;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #7f00ff;
    color: white;
  }
  &.primary {
    background: #7f00ff;
    color: white;
    &:hover {
      background: #6600ff;
    }
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7f00ff;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Card = styled.div`
  background: #111;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #222;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
  }
`;

const CardTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDetail = styled.p`
  color: #aaa;
  font-size: 0.95rem;
`;

const Form = styled.form`
  background: #111;
  padding: 2rem;
  border-radius: 12px;
//   max-width: 600px;
width: 100%
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 6px;
  background: #1a1a1a;
  color: white;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  height: 120px;
  border: none;
  border-radius: 6px;
  background: #1a1a1a;
  color: white;
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const roadmap = [
    {
      title: "AI Progress Reports for Parents",
      description: "Automated summaries of student learning, sent weekly.",
    },
    {
      title: "Smart Timetables for Teachers",
      description: "AI-generated schedules based on performance and workload.",
    },
    {
      title: "Gamified Learning for Students",
      description: "Missions, badges, and rewards to boost daily engagement.",
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <PageWrapper>
      <Topbar />
      <Header />

      <Hero>
        <Title>Help Us Build the Future of Education</Title>
        <Subtitle>
          Your ideas will shape what our app becomes. Tell us what you'd love
          to see — and what would truly help your school.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🌱 Why Your Feedback Matters</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle><FiZap /> You're Early</CardTitle>
            <CardDetail>
              We're still building — your voice directly impacts what we launch.
            </CardDetail>
          </Card>
          <Card>
            <CardTitle><FiUsers /> You Represent Others</CardTitle>
            <CardDetail>
              If you’re a teacher, student, or school leader — your feedback helps us design better for everyone.
            </CardDetail>
          </Card>
          <Card>
            <CardTitle><FiTarget /> We Listen Fast</CardTitle>
            <CardDetail>
              We’re prioritizing features based on your real needs. Share your ideas, and we’ll get to work.
            </CardDetail>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>📝 Submit a Suggestion</SectionTitle>
        <Form>
          <Input
            name="title"
            placeholder="What feature or idea would you love?"
            value={formData.title}
            onChange={handleChange}
          />
          <Textarea
            name="description"
            placeholder="Describe how this would help you or your school..."
            value={formData.description}
            onChange={handleChange}
          />
          <Button type="submit">
            <FiUploadCloud /> Send Suggestion
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>🚧 What We're Working On</SectionTitle>
        <CardGrid>
          {roadmap.map((item, i) => (
            <Card key={i}>
              <CardTitle>{item.title}</CardTitle>
              <CardDetail>{item.description}</CardDetail>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* <Section>
        <div
          style={{
            background: "transparent",
            border: "1px solid #7f00ff",
            padding: "3rem 2rem",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#7f00ff" }}>
            Be Part of Our Early Access Group
          </h2>
          <p style={{ margin: "1rem auto", maxWidth: "600px" }}>
            Want to see features first and give feedback as we grow?
            Join our beta testing program — limited seats!
          </p>
          <Button className="primary">Join Early Access</Button>
        </div>
      </Section> */}

      <Footer />
    </PageWrapper>
  );
};

export default Feedback;
