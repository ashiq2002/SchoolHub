import type { Metadata } from "next";
import { HelpCenter } from "@/features/support/help-center";
export const metadata:Metadata={title:"Help center"};
export default function HelpPage(){return <HelpCenter/>}
