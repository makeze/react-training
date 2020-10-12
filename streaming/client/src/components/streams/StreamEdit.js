import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from "../../actions";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        console.log(this.props);
        return <div>Stream Show</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return {stream: state.streams[streamId]};
};

export default connect(mapStateToProps, {fetchStream})(StreamEdit);