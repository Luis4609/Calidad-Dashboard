import React from "react";
import { format } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

function Date() {
  return (<div>Date</div>);
}

export default Date;
