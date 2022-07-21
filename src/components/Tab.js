import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import {useState} from 'react';

function Tab() {

    const [activeTab, setActiveTab] = useState('react');

    const handleClickActiveTab = (idTab) => {
        setActiveTab(idTab);
    }

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

