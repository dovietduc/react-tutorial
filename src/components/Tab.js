import {useState, useEffect} from 'react';

import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";



let i = 0;

const currentState = {current: ''};

function Tab() {
    i++;

    const [activeTab, setActiveTab] = useState('react');

    const handleClickActiveTab = (idTab) => {
        setActiveTab(idTab);
    }

    useEffect(() => {


        // luôn luôn chạy khi click sang tab khác và lần đầu render

        console.group();

        console.log('state before change', currentState.current);
        currentState.current = activeTab;
        console.log('state after change', currentState.current);
        console.groupEnd();


    }, [activeTab])

    return (
        <div className="container">
            <div id="tabs" className="tabs-container">

                <TabNavigation 
                    onHandleClickTab={handleClickActiveTab}
                    active={activeTab}
                />

                <TabContent active={activeTab}/>
           

            </div>
        </div>
    );
}

export default Tab;

// 1. data truyen tu con len
// 2. thay doi state o trong tab cha theo gia tri con truyen len khi click

// useEffect

