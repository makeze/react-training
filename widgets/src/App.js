import React from 'react';
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
/*const options = [
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
    }];*/
/*const items = [
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
];*/

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search/>*/}
{/*            <Dropdown
                options={options}
                onSelectedChange={setSelected}
                selected={selected}
            />*/}
            <Translate/>
        </div>
    )
};