import React from "react";
import { Skeleton } from "@mui/material";
export default function ContactListSkeleton({ amount, height, styleHeight }) {
  const loadList = Array(amount).fill(1);
  return loadList.map((_, i) => (
    <div style={{ height: `${styleHeight}rem` }} key={i}>
      <Skeleton height={height} animation="wave" sx={{ bgcolor: "grey.200" }} />
    </div>
  ));
}
