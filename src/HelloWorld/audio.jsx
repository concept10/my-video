import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import tune from "./tune.mp3";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import music from "./music.mp3";

export const MyComp: React.FC = () => {
  return <Audio src={tune} />;
};
 
export const MyComponent: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const audioData = useAudioData(music);
 
  if (!audioData) {
    return null;
  }
 
  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 16,
  }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 
  // Render a bar chart for each frequency, the higher the amplitude,
  // the longer the bar
  return (
    <div>
      <Audio src={music} />
      {visualization.map((v) => {
        return (
          <div
            style={{ width: 1000 * v, height: 15, backgroundColor: "blue" }}
          />
        );
      })}
    </div>
  );
};



// import { random } from "remotion";
// const MyComp: React.FC = () => {
//   // No need to use useState
//   const randomValues = new Array(10).fill(true).map((a, i) => {
//     return {
//       x: random(`x-${i}`),
//       y: random(`y-${i}`),
//     };
//   });
 
//   return <></>;
// };
