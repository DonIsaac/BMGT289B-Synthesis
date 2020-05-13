import PropTypes from 'prop-types'
import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import toName from '../util/getNameFromSluglike'
import Separator from '../assets/svg/divider.svg'


const Header = ({ timeout, data, onArticleClick }) => {

  const { title, author, description } = useSiteMetadata()

  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-diamond"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>{title}</h1>
          <Separator className="separator" style={{ height: '2.5em', width: 'auto', color: 'white' }}/>
          <h2>{author}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
      <nav>
        <ul>
          {
            data.allMdx.nodes
              .filter(
                node => node.fields.dir === 'pages'
              )
              .map(({ fields, frontmatter: { title, linktext } }) => {
                // /article4/ => #article4/
                let page = toName(fields.slug)
                linktext = linktext ?? title
                return { page, linktext }
              })
              .map(({ page, linktext }) => (
                <li>
                  {/* <button onClick={() => onOpenArticle(page)} key={linktext}>{linktext}</button> */}
                  <a className="button" href={`#${page}`} key={linktext}>{linktext}</a>
                </li>
              ))
          }
          <li>
            <a className="button" href={`#questions/`}>I-Series</a>
          </li>
          {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li> */}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
