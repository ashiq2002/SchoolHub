import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import type { ButtonHTMLAttributes } from "react";
import { IconButton } from "./icon-button";

type MoreActionsButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { label: string };

export function MoreActionsButton({ label, ...props }: MoreActionsButtonProps) {
  return <IconButton label={label} {...props}><DotsThree aria-hidden="true" size={20} weight="bold" /></IconButton>;
}
