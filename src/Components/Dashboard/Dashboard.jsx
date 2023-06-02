import EndRight from "./EndRight/EndRight";
import Funnel from "./Funnel/Funnel";
import Scorecards from "./Scorecards/Scorecards";
import Statistics from "./Statistics/Statistics";

const Dashboard = () => {
    return (
        <div className="w-full gap-3 grid grid-cols-4 grid-rows-4 h-[90vh]">
            <Scorecards></Scorecards>
            <Scorecards></Scorecards>
            <Scorecards></Scorecards>
            <EndRight ></EndRight>
            <Statistics ></Statistics>
            <Funnel ></Funnel>
            
        </div>
    );
};

export default Dashboard;