import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            &copy; 2020 Donald Isaac. Page Template: <a href="https://html5up.net">HTML5 UP</a>.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
