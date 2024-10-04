/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import CustomizedLabelLineChart from "../../components/Charts/CustomizedLabelLineChart";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AverageSignalTime = () => {
  return (
    <div className="layoutSection pb-4 mt-40 align-center items-center justify-center w-full">
      <h1 className="text-red-700 text-4xl text-center">Average Signal-times Today</h1>
      <div>
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center w-full"
      >

        <motion.div
          className="w-full lg:w-3/4 py-4 lg:p-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="">
            <CustomizedLabelLineChart headerText={""} />
          </div>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default AverageSignalTime;