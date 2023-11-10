"use client";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";


interface ActionsTooltipProps{
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left",
    allign?: "start" | "center" | "end"
}