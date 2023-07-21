import React from "react";

const page = ({ props }: { props: any }) => {
  console.log(props);
  return <div>page {props}</div>;
};

export default page;
