/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/images/Kat1NoBg.png";

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const catchPhrase = "Adaptive Traffic Manager";

const SignalUpdateByRoute = ({ }) => {
    //   const navigate = useNavigate();

    return (
        <div className="text-slate-200 px-4 lg:px-20 lg:py-40">
            <motion.div
                variants={gridSquareVariants}
                className="flex flex-wrap items-center lg:justify-start"
            >
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-20">
                        <div className="flex flex-wrap items-center justify-center mb-6 lg:mb-10">
                            <h1 className="text-6xl sm:text-4xl font-thin text-blue-400 tracking-tight lg:text-6xl xl:text-8xl lg:ml-2">
                                Io
                                <span className="text-blue-700">Traffix</span>
                            </h1>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 via-purple-400 to-blue-400 bg-clip-text text-2xl sm:text-2xl tracking-tight text-transparent lg:text-3xl xl:text-4xl lg:ml-2">
                            <GradualText text={catchPhrase} />
                        </div>
                        <div className="flex items-center justify-center gap-5 mt-5 sm:mt-10 w-full lg:justify-start"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 py-4 flex flex-col items-center lg:justify-start text-right gap-10 lg:gap-20"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    {false && (
                        <div className="flex justify-center max-w-xl">
                            {/* <a href="https://www.facebook.com/ishrak.adit"> */}
                            {false && (
                                <img
                                    src={LogoImage}
                                    alt="Ishrak Adit"
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                />
                            )}
                            {/* </a> */}
                        </div>
                    )}

                    <div className="bg-blue-200 rounded-xl shadow-md flex flex-col pb-4 pr-4 sm:ml-4 md:ml-10">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-slate-200 p-4 rounded-lg shadow-md w-full">
                            <div>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-200 rounded-xl shadow-md flex flex-col pb-4 pr-4 sm:ml-10 lg:ml-20">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-slate-200 p-4 rounded-lg shadow-md w-full">
                            <div>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                                <p>Harry did you put your name in the goblet of fire?</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignalUpdateByRoute;