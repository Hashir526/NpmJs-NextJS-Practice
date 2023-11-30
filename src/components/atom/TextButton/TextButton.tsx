import React from "react";

const Button = ({
  href,
  TextUnderline,
  Text,
}: {
  href: string;
  TextUnderline: string;
  Text: string;
}) => {
  return (
    <a href={`${href}`} className={`${TextUnderline}`}>
      {Text}
    </a>
  );
};

export default Button;
