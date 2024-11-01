export async function sendNativeTokens(toAddress: string, amount: string) {
    return {
        toAddress,
        amount,
        message: "Sent native tokens"
    }
}