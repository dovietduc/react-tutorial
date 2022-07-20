import TabFirstContent from "./TabFirstContent";
import TabSecondContent from "./TabSecondContent";
import TabThirdContent from "./TabThirthContent";
import TabFourContent from "./TabFourContent";

function TabContent(props) {

    const {active} = props;

    const showActiveContent = () => {
        
        if(active === 'mercury') {
            return (
                <TabFirstContent/>
            );
        } else if(active === 'venus') {
            return (
                <TabSecondContent/>
            );
        } else if(active === 'earth') {
            return <TabThirdContent />
        } else if(active === 'mars') {
            return <TabFourContent />
        }
    }

    const checkActiveTab = (idTab) => {
        let classTab = 'none ';
        if (idTab === active) {
            classTab += 'active';
        }
        return classTab;
    };


    return (
        <div className="content">
            { showActiveContent() }
        </div>
    );

  
}
export default TabContent;
