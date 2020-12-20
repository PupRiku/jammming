import React from 'react';

class TrackPreview extends React.Component {

    render() {
        return (
            <div>
                {this.props.preview ? (
                    <div>
                        <p>Track Preview</p>
                        <audio controls>
                            <source src={this.props.preview} type="audio/mp3"></source>
                            Audio Not Supported
                        </audio>
                    </div>
                ) : <p>Preview Unavailable</p>}
            </div>
        )
    }
}

export default TrackPreview;