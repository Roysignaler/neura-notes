import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "../../../firebase-admin";

export async function POST(req: NextRequest) {
    auth.protect();

    const { sessionClaims } = await auth();
    if (!sessionClaims) {
        return NextResponse.json({ message: "Session claims are missing" }, { status: 401 });
    }

    const { room } = await req.json();

    // Ensure email, fullName, and image exist before proceeding
    const email = sessionClaims.email;
    const fullName = sessionClaims.fullName || "Anonymous"; // Default value if undefined
    const avatar = sessionClaims.image || ""; // Default value or handle accordingly

    if (!email) {
        return NextResponse.json({ message: "Email is missing from session claims" }, { status: 400 });
    }

    const session = liveblocks.prepareSession(email, {
        userInfo: {
            name: fullName,
            email,
            avatar,
        },
    });

    const usersInRoom = await adminDb
        .collectionGroup("rooms")
        .where("userId", "==", email)
        .get();

    const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

    if (userInRoom?.exists) {
        session.allow(room, session.FULL_ACCESS);
        const { body, status } = await session.authorize();

        console.log("You are authorized");

        return new Response(body, { status });
    } else {
        return NextResponse.json(
            { message: "You are not allowed in this room" },
            { status: 403 }
        );
    }
}
