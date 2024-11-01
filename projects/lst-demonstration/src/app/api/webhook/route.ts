import { burnTokens } from "@/app/lib/burnTokens";
import { mintTokens } from "@/app/lib/mintTokens";
import { sendNativeTokens } from "@/app/lib/sendNativeTokens";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    const fromAddress = data.fromAddress;
    const toAddress = data.toAddress;
    const amount = data.amount;
    const type = "received_native_sol";

    if (type === "received_native_sol") {
        const data = await mintTokens(fromAddress, amount);
        return NextResponse.json({
            message: "ok",
            data
        })
    } else {
        const burn = await burnTokens(amount);
        const send = await sendNativeTokens(toAddress, amount);
        return NextResponse.json({
            message: "ok",
            burn,
            send
        })
    }
}
