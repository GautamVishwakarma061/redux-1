import { sadMomentsSelector } from "./selectors/mood-selectors";
import { useSelector } from "react-redux";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import SadInc from "./SadInc";

function SadTracker() {
  const sadMoments = useSelector(sadMomentsSelector);
  console.log("sad refreshed");
  return (
    <div className="bg-red-200 border rounded-md p-3 text-center">
      {sadMoments.map((m, index) => (
        <div key={index}>
          <>
            Sadness Intensity : {m.intensity}, when:{m.when.toISOString()}
          </>
        </div>
      ))}
      <RiEmotionUnhappyFill className="text-9xl text-yellow-500 mx-auto my-3" />
      <SadInc />
    </div>
  );
}

export default SadTracker;
