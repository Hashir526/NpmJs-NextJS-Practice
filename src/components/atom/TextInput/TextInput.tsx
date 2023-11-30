import React from "react";

const TextInput = ({
  DivYAxisPadding,
  TextInputName,
  InputType,
  PlaceHolder,
  InputClassType,
  InputBorder,
  Width,
  InputBackgroundColor,
  SideText,
  SideTextWidth,
  SideTextSize,
}: {
  DivYAxisPadding?: string;
  TextInputName: string;
  InputType: string;
  PlaceHolder?: string;
  InputClassType: string;
  InputBorder?: string;
  Width: string;
  InputBackgroundColor?: string;
  SideText?: string;
  SideTextWidth?: string;
  SideTextSize?: string;
}) => {
  return (
    <div className={`${DivYAxisPadding}`}>
      <p className="font-bold">{TextInputName}</p>
      <input
        type={`${InputType}`}
        placeholder={`${PlaceHolder}`}
        className={`${InputClassType} ${InputBorder} ${Width} ${InputBackgroundColor}`}
      />
      <p className={`${SideTextWidth} ${SideTextSize}`}>{SideText}</p>
    </div>
  );
};

export default TextInput;
