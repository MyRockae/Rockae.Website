import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import NavBlog from '../components/NavBlog';

const BlogContainer = styled.div`
  padding: 2rem;
  padding-top: calc(60px + 2rem); // navbar height + padding
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
`;

const BlogSubtitle = styled.p`
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#2563eb' : '#4a5568'};
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2563eb;
    transform: scaleX(${props => props.active ? '1' : '0'});
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const BlogPost = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  ${BlogPost}:hover & {
    color: #2563eb;
  }
`;

const PostDate = styled.span`
  font-size: 0.875rem;
  color: #718096;
`;

const NoResults = styled.div`
  text-align: center;
  color: #718096;
  padding: 2rem 0;
`;

const Blog = () => {
  const categories = [
    'Writing',
    'AI Applications',
    'AI Detection Tools',
    'AI In Education',
    'AI Tools',
    'AI Tools For Education',
    'AI Tools In E'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const getFilteredPosts = () => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter(post => 
      post.categories && post.categories.includes(activeCategory)
    );
  };

  const filteredPosts = getFilteredPosts();

  return (
    <>
      <NavBlog />
      <BlogContainer>
        <BlogHeader>
          <BlogTitle>Rockae Blog</BlogTitle>
          <BlogSubtitle>
            Insights on education from the Rockae community
          </BlogSubtitle>
        </BlogHeader>
        <CategoryNav>
          {categories.map((category) => (
            <CategoryLink 
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryLink>
          ))}
        </CategoryNav>
        <BlogList>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPost key={post.id} to={`/blog/${post.id}`}>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.date}</PostDate>
              </BlogPost>
            ))
          ) : (
            <NoResults>No posts found in this category</NoResults>
          )}
        </BlogList>
      </BlogContainer>
    </>
  );
};

export default Blog; 