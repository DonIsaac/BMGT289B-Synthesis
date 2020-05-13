import PropTypes from 'prop-types'
import React from 'react'
import Article from './Article'
import PostList from './Post-List'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'

export default ({data, onBack, ...props}) => (
  <div
    ref={props.setWrapperRef}
    id="main"
    style={props.timeout ? { display: 'flex' } : { display: 'none' }}
  >
    {data.allMdx.nodes.map(({ body, frontmatter, fields }) =>
      <Article
        body={body}
        title={frontmatter.title.trim()}
        slug={fields.slug}
        key={fields.slug}
        {...props}
      />)}
    <Article
      title={"I-Series and Reflection Questions"}
      slug={"/questions/"}
      onBack={onBack}
      {...props}
    >
      <PostList
        posts = {
          data.allMdx.nodes
            .filter(node => node.fields.dir === 'posts')
        }
      />
    </Article> 
  </div>
);
