import { Skeleton } from "@mui/material";
import React from "react";
import ContactListSkeleton from "./ContactListSkeleton";

export default function DetailCardSkeleton() {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image" style={{ padding: "0" }}>
          <Skeleton
            variant="ractangular"
            animation="wave"
            height={280}
            sx={{ bgcolor: "grey.300" }}
          />
        </div>
        <div className="content">
          <ContactListSkeleton amount={3} height={25} />
        </div>
      </div>
    </div>
  );
}
