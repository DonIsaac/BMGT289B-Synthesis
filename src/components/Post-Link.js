import { Link } from "gatsby"
import React from "react"
import toName from '../util/getNameFromSluglike'
import Styled from "gatsby-plugin-styled-components"


const PostLink = ({
  excerpt,
  frontmatter: {
    title
  },
  fields: {
    slug
  }
}) => {
  let name = toName(slug)
  return (
    <div className="post-link">
      <a href={`#${name}`}>
        <h3 class="post-title">

          {title || slug}

        </h3>
        <div className="post-meta">
          <p className="excerpt">{excerpt}</p>
        </div>
      </a>
    </div>
  )
}
// const PostLink = props => <div>{props.frontmatter?.title || props.slug}</div>
// const PostLink = ({
//   excerpt,
//   frontmatter: {
//     title = 'No Title',
//     date
//   },
//   fields: {
//     slug
//   }
// }) => (
//     <div>
//       <Styled.h2
//         sx={{
//           mb: 1,
//         }}
//       >
//         <Styled.a
//           as={Link}
//           sx={{
//             textDecoration: `none`,
//           }}
//           to={slug}
//         >
//           {title || slug}
//         </Styled.a>
//       </Styled.h2>
//       <small>{date}</small>
//       <Styled.p>{excerpt}</Styled.p>
//     </div>
//   )

export default PostLink