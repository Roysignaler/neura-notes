"use client";

import React from "react";
import Document from "@/components/Document";

function DocumentPage({
  params: paramsPromise,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const [params, setParams] = React.useState<{ id: string } | null>(null);

  React.useEffect(() => {
    paramsPromise.then(setParams);
  }, [paramsPromise]);

  if (!params) return <div>Loading...</div>;

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={params.id} />
    </div>
  );
}

export default DocumentPage;
