"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TerminalLoading = ({ onFinish }) => {
    const pathname = usePathname();
    const [text, setText] = useState("");
    const [loadingText, setLoadingText] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    //dynamic text based on route
    const getTerminalText = (path) => {
        switch (path) {
            case "/":
                return ' "Welcome to Jay\'s Portfolio"';
            case "/contact":
                return ' "Accessing contact"';
            case "/work":
                return ' "Accessing work"';
            case "/services":
                return ' "Accessing services"';
            case "/resume":
                return ' "Accesing Resume"';
            default:
                return ' "Accessing page"';
        }
    };

    const getLoadingMessage = (path) => {
        switch (path) {
            case "/":
                return "loading to My portfolio...";
            case "/contact":
                return "loading contact...";
            case "/work":
                return "loading work...";
            case "/services":
                return "loading services...";
            case "/resume":
                return "loading Resume...";
            default:
                return "loading page...";
        }
    };

    const terminalText = getTerminalText(pathname);
    const loadingMessage = getLoadingMessage(pathname);
    const typingSpeed = 50;

    //typing effect for the terminal message
    useEffect(() => {
        let currentText = "";
        const interval = setInterval(() => {
            currentText = terminalText.slice(0, currentText.length + 1);
            setText(currentText);
            if (currentText === terminalText) {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [pathname]);

    //typing effect for the loading message
    useEffect(() => {
        let loadingTimeout;
        if (text === terminalText) {
            let currentLoading = "";
            loadingTimeout = setInterval(() => {
                currentLoading = loadingMessage.slice(0, currentLoading.length + 1);
                setLoadingText(currentLoading);
                if (currentLoading === loadingMessage) {
                    clearInterval(loadingTimeout);
                    setTimeout(() => {
                        setIsVisible(false); //trigger exit animation after 1-second delay
                        if (onFinish) {
                            onFinish();
                        }
                    }, 1000);
                }
            }, typingSpeed);
        }
        return () => clearInterval(loadingTimeout);
    }, [text, pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="w-full h-screen bg-black text-green-500 font-mono flex items-center justify-center p-4"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="text-yellow-500">std::</span>
                            <span className="text-blue-400">cout</span>
                            <span className="text-white"> &lt;&lt; </span>
                            <span className="text-green-500">{text}</span>;
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="mt-4"
                        >
                            <span className="text-gray-400">{loadingText}</span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalLoading;
