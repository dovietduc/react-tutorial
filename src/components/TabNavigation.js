import TabNavItem from "./TabNavItem";

function TabNavigation(props) {

    const {active, onHandleActiveTab} = props;

    return (
        <div className="tabs">

            <TabNavItem id="mercury" onHandleActiveTab={onHandleActiveTab} active={active}>
                Reactjs
            </TabNavItem>
            <TabNavItem id="venus" onHandleActiveTab={onHandleActiveTab} active={active}>
                Vuejs
            </TabNavItem>
            <TabNavItem id="earth" onHandleActiveTab={onHandleActiveTab} active={active}>
                Angular
            </TabNavItem>
            <TabNavItem id="mars" onHandleActiveTab={onHandleActiveTab} active={active}>
                Svelte
            </TabNavItem>
            
        </div>
    );
}

export default TabNavigation;
