import React, {useState} from 'react';
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const options = [
    {
        title: "Roses are pretty",
        value: "roses"
    },
    {
        title: "Chamomile is healthy",
        value: "chamomile"
    },
    {
        title: "Dandelion is fun",
        value: "dandelion"
    }];
const items = [
    {
        title: "maksudik",
        origin: "russian republic, dagestan, kaspiysk"
    },
    {
        title: "roma",
        origin: "republic of belarus, minsk"
    },
    {
        title: "artem",
        origin: "republic of belarus, minsk"
    },
    {
        title: "sergei",
        origin: "lithuania, ignalinos rajonas, visaginas"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Pick a flower"
                    options={options}
                    onSelectedChange={setSelected}
                    selected={selected}
                />
            </Route>
        </div>
    )
};