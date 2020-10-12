import React from 'react';
import {connect} from 'react-redux';

class StreamEdit extends React.Component {
    render(){
        return <div>Stream Show</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return {stream: state.streams[streamId]};
};

export default connect(mapStateToProps)(StreamEdit);