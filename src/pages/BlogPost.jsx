import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import NavBlog from '../components/NavBlog';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #4a5568;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #2d3748;
  }

  &::before {
    content: '←';
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }
`;

const BlogPostContainer = styled.div`
  padding: 2rem;
  padding-top: calc(60px + 2rem); // navbar height + padding
  max-width: 800px;
  margin: 0 auto;
`;

const PostHeader = styled.div`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1.5rem;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AuthorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 500;
  color: #1a202c;
`;

const AuthorBio = styled.span`
  color: #718096;
  font-size: 0.875rem;
`;

const PostContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #2d3748;

  p {
    margin-bottom: 1.5rem;
  }
`;

const CTASection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const CTALogo = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CTAText = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #1a202c;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: #2d3748;
  }
`;

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <>
        <NavBlog />
        <BlogPostContainer>
          <BackLink to="/blog">← Back to Blog</BackLink>
          <PostHeader>
            <PostTitle>Post Not Found</PostTitle>
          </PostHeader>
        </BlogPostContainer>
      </>
    );
  }

  return (
    <>
      <NavBlog />
      <BlogPostContainer>
        <BackLink to="/blog">Back to Blog</BackLink>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <AuthorSection>
            <AuthorImage src={post.author.image || "https://via.placeholder.com/48"} alt={post.author.name} />
            <AuthorInfo>
              <AuthorName>{post.author.name}</AuthorName>
              <AuthorBio>{post.author.bio}</AuthorBio>
            </AuthorInfo>
          </AuthorSection>
        </PostHeader>
        <PostContent>
          <p>{post.content}</p>
        </PostContent>
        <CTASection>
          <CTATitle>Try Rockae: AI for school, research and test prep.</CTATitle>
          <CTAText>
          Rockae is the AI assistant students trust. It carefully studies your lectures, textbooks, readings,
            homework and tests to give you specific answers that guaranteed to be more accurate.
          </CTAText>
          <CTAButton href="/">Access for Free</CTAButton>
        </CTASection>
      </BlogPostContainer>
    </>
  );
};

export default BlogPost; 