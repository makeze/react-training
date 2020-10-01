import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        console.log('Title clicked', index);
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"/>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.origin}</p>
                </div>
            </React.Fragment>
        )});

    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>;
};

export default Accordion;