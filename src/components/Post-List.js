import React from 'react';
import PostLink from './Post-Link';
import { StaticQuery, graphql } from 'gatsby';

const PostList = ({ posts }) => (
    <>
        {posts.map( node => <PostLink key={node.fields.slug} {...node} /> )}
    </>
);

export default PostList;