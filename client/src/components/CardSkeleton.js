import React from "react";

import ContactListSkeleton from "./ContactListSkeleton";

export default function CardSkeleton() {
  return (
    <>
      <div id="card-skeleton">
        <ContactListSkeleton amount={4} height={80} />
      </div>
    </>
  );
}
