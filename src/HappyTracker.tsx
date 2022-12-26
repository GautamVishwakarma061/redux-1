import { useSelector } from "react-redux";
import Happyinc from "./Happyinc";
import { RiEmotionHappyFill } from "react-icons/ri";
import { happyMomentsSelector } from "./selectors/mood-selectors";

function HappyTracker() {
  const happyMoments = useSelector(happyMomentsSelector);
  console.log("happyr refreshed");
  return (
    <div className="bg-gray-200 border rounded-md p-3">
      <span>
        {happyMoments.map((m, index) => (
          <div key={index}>
            <>
              Happiness Intensity : {m.intensity}, when:{m.when.toISOString()}
            </>
          </div>
        ))}
      </span>
      <RiEmotionHappyFill className="text-9xl text-yellow-500  my-3 mx-auto" />
      <Happyinc />
    </div>
  );
}

export default HappyTracker;
