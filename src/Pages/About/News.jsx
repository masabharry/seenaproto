import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const newsPosts = [
  {
    title: "SDS Completes First Pilot with Islamabad School",
    date: "June 10, 2025",
    excerpt: "Students and teachers from Rising Star School tested SDS modules for attendance and performance. Results were amazing!",
    link: "#",
  },
  {
    title: "AI in Education: What We’ve Learned So Far",
    date: "May 30, 2025",
    excerpt: "Fahad, our Head of AI, shares lessons from building SDS’s adaptive learning engine with real student data.",
    link: "#",
  },
  {
    title: "Interview with Founder Iqram Chuhan",
    date: "May 14, 2025",
    excerpt: "Discover why SDS is not just another school system, but a vision for social equity and tech-powered learning.",
    link: "#",
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const NewsTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.3rem;
`;

const NewsDate = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Excerpt = styled.p`
  color: #ccc;
  font-size: 0.9rem;
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #7f00ff;
  margin-top: 1rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CTA = styled.div`
  margin-top: 5rem;
  padding: 3rem 2rem;
  border-top: 1px solid #7f00ff;
  text-align: center;
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

const News = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>News & Views</Title>
        <Subtitle>
          Explore updates, learnings, and stories from the SDS journey — as we build the future of education together.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>📰 Latest Highlights</SectionTitle>
        <Grid>
          {newsPosts.map((post, i) => (
            <Card key={i}>
              <NewsDate>
                <FiCalendar /> {post.date}
              </NewsDate>
              <NewsTitle>{post.title}</NewsTitle>
              <Excerpt>{post.excerpt}</Excerpt>
              <ReadMore href={post.link}>
                Read more <FiArrowRight />
              </ReadMore>
            </Card>
          ))}
        </Grid>
      </Section>

      <CTA>
        <h2>Stay in the Loop</h2>
        <p style={{ margin: "1rem 0" }}>
          We're growing fast — subscribe to hear what’s next.
        </p>
        <Button href="#">Subscribe for Updates</Button>
      </CTA>

      <Footer />
    </PageWrapper>
  );
};

export default News;
