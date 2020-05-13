import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import toName from '../util/getNameFromSluglike'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.handleArticleChange = this.handleArticleChange.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleHashChange = this.handleHashChange.bind(this)

  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
    this.timeoutId = setTimeout(() => {
      let name = toName(window.location.hash);
      this.setState({ loading: '' });

      if (name) {
        setTimeout(() => {
          this.handleOpenArticle(name)
        }, 550)
      }
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * 
   * @param {HashChangeEvent} e 
   */
  handleHashChange(e) {
    let article = toName(window.location.hash)
    this.handleArticleChange(article)
  }

  /**
   * 
   * @param {string | undefined} article 
   */
  handleArticleChange(article) {
    if (article == null)
      article = toName(window.location.hash)

    if (!article && this.state.article) {
      console.log(1)
      return this.handleCloseArticle()
    } else if (this.state.article === article) {
      console.log(2)
      return this.handleCloseArticle().then(() => this.handleOpenArticle(article))
    } else if (!this.state.article) {
      console.log(3)
      return this.handleOpenArticle(article)
    } else {
      console.log(4)
      return this.handleCloseArticle().then(() => this.handleOpenArticle(article))
    }
  }

  /**
   * 
   * @param {string} article 
   * @returns {Promise<void>}
   */
  handleOpenArticle(article) {
    return new Promise((resolve, reject) => {
      this.setState({
        isArticleVisible: true,
        article
      })

      setTimeout(() => {
        this.setState({
          timeout: true,
        })
      }, 325)

      setTimeout(() => {
        this.setState({
          articleTimeout: true,
        }, resolve);
      }, 350)
    })
  }

  /**
   * @returns {Promise<void>}
   */
  handleCloseArticle() {
    return new Promise((resolve, reject) => {
      this.setState({
        articleTimeout: false,
      })

      setTimeout(() => {
        this.setState({
          timeout: false
        })
      }, 325)

      setTimeout(() => {
        this.setState({
          isArticleVisible: false,
          article: ''
        });
        resolve()
      }, 350)
    })
  }


  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        window.location.hash = ''
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleArticleChange} timeout={this.state.timeout} data={this.props.data} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout} i
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              // onCloseClick={() => this.handleC}
              onBack={this.handleArticleChange}
              setWrapperRef={this.setWrapperRef}
              data={this.props.data}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
query GetPostList {
  allMdx(sort: {fields: [fields___slug], order: ASC}) {
    nodes {
      id
      excerpt(pruneLength: 150)
      body
      frontmatter {
        title
        linktext
      }
      fields {
        slug
        dir
      }
    }
  }
}
`;