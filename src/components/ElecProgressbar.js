import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ElecProgressbar = ({ value }) => {
  return (
    <div className="elecProgressbar">
      <CircularProgressbar
        value={value.totalPower}
        text={`${value.totalPower}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#FF6D28",
          textColor: "#222",
          pathColor: "#222",
          trailColor: "transparent"
        })}
      />
    </div>
  );
};
export default ElecProgressbar;
