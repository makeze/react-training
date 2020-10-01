import React from 'react';
import Accordion from "./components/Accordion";

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
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
};