import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import {useState} from 'react';

function Tab() {

    const [activeTab, setActiveTab] = useState('mercury');

    const handleActiveTab = (idTab) => {
        setActiveTab(idTab);
    }


    return (
        <>
            <div className="container">
                <div id="tabs" className="tabs-container">
                    <TabNavigation active={activeTab} onHandleActiveTab={handleActiveTab}/>  
                    <TabContent active={activeTab}/>          
                </div>
            
            </div>
        
        </>
    )
}

export default Tab;