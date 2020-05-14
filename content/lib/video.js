import React from 'react';
import ReactPlayer from 'react-player'

export default props => (
    <div class="video-wrapper">
        <ReactPlayer {...props} />
    </div>
);
