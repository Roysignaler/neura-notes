// src/app/doc/[id]/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import RoomProvider from "../../../components/RoomProvider";

function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // Define params as a Promise
}) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => setId(resolvedParams.id));
  }, [params]);

  if (!id) return null; // Optionally, add a loading state here

  return (
    <>
      <SignedIn>
        <RoomProvider roomId={id}>{children}</RoomProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default DocLayout;
