import EndRight from "./EndRight/EndRight";
import Funnel from "./Funnel/Funnel";
import Scorecards from "./Scorecards/Scorecards";
import Statistics from "./Statistics/Statistics";

const Dashboard = () => {
    return (
        <div className="w-full gap-3 grid grid-cols-4 grid-rows-4 h-[90vh]">
            <Scorecards
            name={'Convertion Rate'}
            growth= '30%'
             growthPercents = '20.5%'
              isIncrease = {false}
            
            ></Scorecards>
            <Scorecards
             name={'UpSell Take Rate '}
             growth= '20%'
              growthPercents = '34.5%'
               isIncrease = {true}
             
            ></Scorecards>
            <Scorecards
             name='Average Order Value'
             growth= '40%'
              growthPercents = '$850.3'
               isIncrease = {true}
             
            ></Scorecards>
            <EndRight ></EndRight>
            <Statistics ></Statistics>
            <Funnel ></Funnel>
            
        </div>
    );
};

export default Dashboard;