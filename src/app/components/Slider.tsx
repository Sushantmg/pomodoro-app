import React from "react";
import MuiSlider from "@mui/material/Slider";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  checkpoints: number[];
  value: number;
  onChange: (value: number) => void;
  useCheckpoints?: boolean; // Optional toggle for checkpoint snapping
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  checkpoints,
  value,
  onChange,
  useCheckpoints = false, // default to snapping by step
}) => {
  // Create marks every `step` minutes
  const marks = [];
  for (let i = min; i <= max; i += step) {
    marks.push({ value: i, label: i % 10 === 0 ? `${i}m` : "" });
  }

  // Snap to nearest step (e.g. 5 min)
  const snapToStep = (val: number) => {
    return Math.round(val / step) * step;
  };

  // Snap to nearest checkpoint (optional)
  const snapToCheckpoint = (val: number) => {
    let closest = checkpoints[0];
    let minDiff = Math.abs(val - closest);
    for (const cp of checkpoints) {
      const diff = Math.abs(val - cp);
      if (diff < minDiff) {
        minDiff = diff;
        closest = cp;
      }
    }
    return closest;
  };

  // Handle slider value change
  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      const snapped = useCheckpoints
        ? snapToCheckpoint(newValue)
        : snapToStep(newValue);
      onChange(snapped);
    }
  };

  return (
    <MuiSlider
      value={value}
      min={min}
      max={max}
      step={step}
      marks={marks}
      onChange={handleChange}
      aria-label="Timer length slider"
      valueLabelDisplay="auto"
      sx={{
        color: "#ffd17d",
        height: 8,
        "& .MuiSlider-thumb": {
          height: 20,
          width: 20,
          backgroundImage: `url('/navbar/sliderpaw.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "2px solid white",
          "&:hover": {
            boxShadow: "0 0 0 8px rgba(255, 209, 125, 0.16)",
          },
        },
        "& .MuiSlider-track": {
          border: "none",
          backgroundColor: "#ffd17d",
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#e0e0e0",
        },
        "& .MuiSlider-mark": {
          backgroundColor: "#9e9e9e",
          height: 2,
          width: 2,
          marginTop: -2,
        },
        "& .MuiSlider-markLabel": {
          color: "#b0b0a2",
          fontSize: "0.75rem",
          fontFamily: "monospace",
        },
      }}
    />
  );
};

export default Slider;
