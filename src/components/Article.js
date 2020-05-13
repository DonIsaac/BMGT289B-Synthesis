import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import toName from '../util/getNameFromSluglike'

const goBack = () => { window.history.back();  }
// const goBack = cb => { window.history.back() }
const ArticleNav = () => (
    <span class="article-nav">
        <a onClick={goBack} className="back"></a>
        <a href="#" className="close" />
    </span>
)
const Article = ({
    article,
    articleTimeout,
    img,
    children,
    onCloseClick,
    onBack,
    body = '',
    title = 'No Title',
    slug = '/noslug/'
}) => {
    // Get name of article from slug, e.g. "/article4/" -> "article4/"
    let name = toName(slug)
    const { author } = useSiteMetadata()
    // let close = (
    //   <div
    //     className="close"
    //     onClick={onCloseClick}
    //   ></div>
    // );

    // Render the children if there are any, otherwise render the markdown passed via the props
    let content = !children || children.length === 0
                ? <MDXRenderer>{body}</MDXRenderer>
                : children
    ;
    let imgContent = !!img
                ? <span className="image main"> <img src={img} alt="" /> </span>
                : null
    return (
        <article
            id={name}
            className={`${article === name ? 'active' : ''} ${
                articleTimeout ? 'timeout' : ''
                }`}
            style={{ display: 'none' }}
        >
            <h1 >{title}</h1>
            <h4 style={{ opacity: 0.75 }}>{author}</h4>
            <hr style={{ margin: '1rem 0' }}/>
			<div className="article-content">
            {imgContent}
            {content}
			</div>
            <ArticleNav onBack={onBack} />

        </article>
    )
};

Article.propTypes = {
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    img: PropTypes.object,
    children: PropTypes.element,
    onCloseArticle: PropTypes.func,
    body: PropTypes.string,    // body from MDX GraphQL query
    title: PropTypes.string,
    slug: PropTypes.string     // file name as a path, e.g. /filename/
};

export default Article;
