"use client";

import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Terminal from "./Terminal.jsx";

const TerminalLoading = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0
                pointer-events-none z-40 flex">
                    <Terminal />
                </div>
            </div>
        </AnimatePresence>
    );
};

export default TerminalLoading;
