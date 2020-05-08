import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default ({
    article,
    articleTimeout,
    img,
    children,
    onCloseArticle,
    data: {
        body = '',
        frontmatter: {
            title = 'No Title',
            date = new Date().toDateString()
        },
        fields: {
            slug,
            dir
        }
    }
}) => {
    // Get name of article from slug, e.g. "/article4/" -> "article4"
    let name = slug.replace('/', '');
    const { author } = useSiteMetadata()
    let close = (
      <div
        className="close"
        onClick={onCloseArticle}
      ></div>
    );

    let content = !children || children.length === 0 ?
                <MDXRenderer>{body}</MDXRenderer> :
                children
    return (
        <article
            id={name}
            className={`${article === name ? 'active' : ''} ${
                articleTimeout ? 'timeout' : ''
                }`}
            style={{ display: 'none' }}
        >
            <h1 >{title}</h1>
            <h4>By {author}</h4>
            <hr style={{ margin: '1rem 0' }}/>
            <span className="image main">
                <img src={img} alt="" />
            </span>
            {content}
            {close}
        </article>
    )
};