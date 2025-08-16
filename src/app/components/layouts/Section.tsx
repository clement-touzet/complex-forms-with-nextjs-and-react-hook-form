import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Section = ({ children }: Props) => {
  return <div className="py-8 w-2xl">{children}</div>;
};

export default Section;
