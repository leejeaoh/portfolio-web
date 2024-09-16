import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi";

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import DynamicText from "@/components/Dynamictext"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              <span className="text-[36px] xl:text-[20px] tracking-tight"  style={{ letterSpacing: "-0.02em", wordSpacing: "-0.3em" }} >Hello, I am</span> <br/> 
              <span className="text-[40px] xl:text-[80px] relative top-[-35px] text-accent" style={{ letterSpacing: "-0.02em", wordSpacing: "-0.3em" }}>Jea Oh Lee</span>
            </h1>
            <div className="flex flex-col xl:flex-left order-3 mt-2 text-6xl relative top-[-20px] tracking-tight" style={{zIndex: 1}}>
              {/* Dynamic text component */}
              <DynamicText/>
            </div>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              > 
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border
                border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none xl:flex-right">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}

export default Home;