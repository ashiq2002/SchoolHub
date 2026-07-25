import type { Metadata } from "next";
import { MessageCenter } from "@/features/communication/message-center";
export const metadata: Metadata = { title: "Messages" };
export default function MessagesPage() { return <MessageCenter />; }
