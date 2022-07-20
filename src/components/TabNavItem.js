import React from 'react';

const TabNavItem = (props) => {
    const { id, active, onHandleActiveTab } = props;

    const checkActiveTab = (idTab) => {
        let classTab = 'tab ';
        if (idTab === active) {
            classTab += 'active';
        }
        return classTab;
    };

    const handleActiveTab = (idTab) => {
        onHandleActiveTab(idTab);
    };
    
    return (
        <a
            className={checkActiveTab(id)}
            onClick={() => handleActiveTab(id)}
        >
            {props.children}
        </a>
    );
};

export default TabNavItem;
