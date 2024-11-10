// components/DocLayoutClient.tsx
"use client"; // This tells Next.js that this component should only run on the client

import React, { useEffect } from "react";
import { auth } from "@clerk/nextjs/server";
import RoomProvider from "../components/RoomProvider";

function DocLayoutClient({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    auth.protect(); // Run the authentication check only on the client
  }, []);

  return <RoomProvider roomId={roomId}>{children}</RoomProvider>;
}

export default DocLayoutClient;
