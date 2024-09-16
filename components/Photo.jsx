"use client";

import {animate, motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return(
        <div className="w-full h-full relative">
            <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1, 
                    transition:{ delay:2, duration: 0.4, ease: "easeIn"}
                    }}
                >
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1, 
                        transition:{ delay:2.4, duration: 0.4, ease: "easeInOut"}
                    }}
                className="w-[398px] h-[398px] xl:w-[648px] xl:h-[648px]">
                    <Image src="/assets/photo.png" priority quality={100} fill
                    alt="" className="object-contain"/>
                </motion.div>
            </motion.div>

        </div>
    );
}

export default Photo;