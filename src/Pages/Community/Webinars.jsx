import React from "react";
import styled from "styled-components";
import {
  FiCalendar,
  FiVideo,
  FiUser,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const webinars = [
  {
    title: "Future of AI in Education",
    date: "July 10, 2025",
    speaker: "Dr. Ayesha Noor",
    link: "#",
  },
  {
    title: "Empowering Teachers with Smart Tools",
    date: "July 18, 2025",
    speaker: "Sir Faizan Mehmood",
    link: "#",
  },
  {
    title: "School Leadership in the AI Era",
    date: "July 22, 2025",
    speaker: "Mrs. Zubaida Khan",
    link: "#",
  },
];

const pastWebinars = [
  {
    title: "Gamified Learning for Students",
    link: "#",
    thumbnail: "https://via.placeholder.com/300x180?text=Replay+1",
  },
  {
    title: "Building Digital Classrooms",
    link: "#",
    thumbnail: "https://via.placeholder.com/300x180?text=Replay+2",
  },
  {
    title: "Parents & AI Progress Reports",
    link: "#",
    thumbnail: "https://via.placeholder.com/300x180?text=Replay+3",
  },
];

const cities = ["Islamabad", "Lahore", "Karachi", "Faisalabad"];

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  // margin-bottom: 4rem;
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

const Button = styled.a`
  display: inline-block;
  background: transparent;
  color: #7f00ff;
  padding: 0.75rem 1.5rem;
  border: 1px solid #7f00ff;
  border-radius: 8px;
  margin-top: 1rem;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background: #7f00ff;
    color: white;
  }
    // primary button
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
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  &:hover {
    transform: translateY(-8px);
  }
`;

const WebinarTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
`;

const Detail = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.8rem;
`;

const MeetupCard = styled.div`
  background: #1a1a1a;
  padding: 1.2rem;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    background: #7f00ff;
  }
`;

const CTA = styled.div`
  background: transparent;
  color: #7f00ff;
  border: 1px solid #7f00ff;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: #7f00ff;
    color: white;
  }

`;

const Webinars = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Live Webinars & Community Meetups</Title>
        <Subtitle>
          Join AI-powered discussions, learn from experts, and connect with
          educators across the region.
        </Subtitle>
        {/* <Button href="#">Join Next Webinar</Button> */}
      </Hero>

      <Section>
        <SectionTitle>📅 Upcoming Events</SectionTitle>
        <CardGrid>
          {webinars.map((event, i) => (
            <Card key={i}>
              <WebinarTitle>{event.title}</WebinarTitle>
              <Detail>
                <FiCalendar /> {event.date}
              </Detail>
              <Detail>
                <FiUser /> Hosted by {event.speaker}
              </Detail>
              <Button href={event.link}>Register</Button>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>🎯 Why Join Our Webinars?</SectionTitle>
        <CardGrid>
          <Card>
            <WebinarTitle>💡 Learn from Experts</WebinarTitle>
            <p>Gain real-world insights from top educators and AI leaders.</p>
          </Card>
          <Card>
            <WebinarTitle>🤝 Network with Peers</WebinarTitle>
            <p>Connect with like-minded teachers, principals, and parents.</p>
          </Card>
          <Card>
            <WebinarTitle>🛠️ Get Practical Tools</WebinarTitle>
            <p>
              Download resources, templates, and walkthroughs for classroom
              success.
            </p>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>📺 Past Webinars (Replay)</SectionTitle>
        <CardGrid>
          {pastWebinars.map((web, i) => (
            <Card key={i}>
              <Thumbnail src={web.thumbnail} alt={web.title} />
              <WebinarTitle>{web.title}</WebinarTitle>
              <Button href={web.link}>Watch Replay</Button>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>📍 Meetups Near You</SectionTitle>
        <CardGrid>
          {cities.map((city, i) => (
            <MeetupCard key={i}>
              <FiMapPin size={20} /> {city}
            </MeetupCard>
          ))}
        </CardGrid>
      </Section>

      {/* <Section>
        <CTA>
          <h2>Be Part of the Change in Education</h2>
          <p style={{ margin: "1rem 0" }}>
            Join our AI-powered community and start transforming learning at
            your school.
          </p>
          <Button href="/community">Join the Community</Button>
        </CTA>
      </Section> */}
      <Footer />
    </PageWrapper>
  );
};

export default Webinars;
