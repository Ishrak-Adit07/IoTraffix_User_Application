/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import LogoImage from "../../assets/images/Kat1NoBg.png";
import GradualText from "../../components/TextAnimations/GradualText";
import SignalStatusTable from "../../components/Tables/SignalStatusTable";

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const catchPhrase = "Adaptive Traffic Manager";

const SignalUpdateByRoute = ({ }) => {

    return (
        <div className="text-slate-200 px-4 w-full">
            <motion.div
                className="w-full py-4 flex flex-col items-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >

                <SignalStatusTable />

            </motion.div>
        </div>
    );
};

export default SignalUpdateByRoute;