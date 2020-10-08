import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/create" exact component={StreamCreate} />
                        <Route path="/streams/show" exact component={StreamShow} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                    </div>

                </BrowserRouter>
            </div>
        )
    }
}

export default App;