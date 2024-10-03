"use client";

import { useStore } from "@/zustand/store";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const presetColors = [
  "#FBF7F4",
  "#201D24", // Dark gray (Midnight)
  "#5C5B57", // Graphite (Space Gray)
  "#E1F8DC", // Muted gray (Slate)
  "#9BB5CE", // Deep blue (Pacific Blue)
  "#F9E5C9", // Dark gold (Golden Yellow)
  "#505F4E", // Dark green (Emerald Green)
  "#A50011", // Deep red (Crimson)
  "#B8AFE6", // Muted purple (Deep Purple)
];

const CustomizePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    activePart,
    tempColors,
    changeColor,
    changeTempColor,
    setActivePart,
  } = useStore();
  const [customColors, setCustomColors] = useState({
    headband: [],
    cushions: [],
    speakerCups: [],
    slider: [],
  });

  const handleColorChange = (part, color) => {
    changeColor(color, part);
    changeTempColor(color, part);
  };

  const handleTempColorChange = (part, color) => {
    changeTempColor(color, part);
  };

  const handleSelectColor = (part) => {
    const newColor = tempColors[part];
    if (
      !presetColors.includes(newColor) &&
      !customColors[part]?.includes(newColor)
    ) {
      setCustomColors((prevCustomColors) => ({
        ...prevCustomColors,
        [part]: [...(prevCustomColors[part] || []), newColor].slice(-5), // Keep only the last 5 custom colors
      }));
    }
    changeColor(newColor, part);
    setActivePart(null);
  };

  const ColorPicker = ({ part, label }) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {presetColors.map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(part, color)}
          />
        ))}
        {customColors[part]?.map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(part, color)}
          />
        ))}
        <button
          className="w-8 h-8 rounded-full border text-main-light  border-gray-300 focus:outline-none focus:ring-2 focus:ring-main-light bg-transparent text-xl font-bold flex items-center justify-center"
          onClick={() => setActivePart(activePart === part ? null : part)}
        >
          +
        </button>
      </div>
      {activePart === part && (
        <div className="mt-2">
          <HexColorPicker
            color={tempColors[part]}
            onChange={(color) => handleTempColorChange(part, color)}
          />
          <button
            className="mt-2 px-4 py-2 bg-main-light text-main-dark rounded font-bold hover:bg-main-dark hover:text-main-light focus:outline-none focus:ring-2 focus:ring-main-light focus:ring-opacity-50"
            onClick={() => handleSelectColor(part)}
          >
            Select
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="absolute top-0 right-0 w-full bg-black/30 md:w-[30vw] h-full hidden md:block mx-auto px-4 py-8 overflow-y-scroll">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Customize Your Headphones
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full">
            <ColorPicker part="headband" label="Headband Color" />
            <ColorPicker part="headpad" label="Headpad Color" />
            <ColorPicker part="cushions" label="Cushions Color" />
            <ColorPicker part="innerCushions" label="Inner Cushions Color" />
            <ColorPicker part="speakerCups" label="Speaker Cups Color" />
            <ColorPicker part="slider" label="Slider Color" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden ${
          isOpen ? "bg-black/30 h-screen shadow-lg" : "bg-transparent h-[30px]"
        }  fixed top-0 block w-full 
          mx-auto px-4 py-8 z-50`}
      >
        <div className="w-full md:hidden flex items-center z-100 justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-main-light focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Customize Your Headphones
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full">
                <ColorPicker part="headband" label="Headband Color" />
                <ColorPicker part="headpad" label="Headpad Color" />
                <ColorPicker part="cushions" label="Cushions Color" />
                <ColorPicker
                  part="innerCushions"
                  label="Inner Cushions Color"
                />
                <ColorPicker part="speakerCups" label="Speaker Cups Color" />
                <ColorPicker part="slider" label="Slider Color" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomizePanel;
