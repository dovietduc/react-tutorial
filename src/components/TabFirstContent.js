import { useEffect } from "react";

function TabFirstContent(props) {

    useEffect(() => {
        console.log('call api');
    }, []);

    return (
        <div className="tabcontent active">
            <p>
                <b>React</b> makes it painless to create interactive UIs. 
                Design simple views for each state in your application, 
                and React will efficiently update and render just the right 
                components when your data changes
            </p>
        </div>
         
    );
}

export default TabFirstContent;
