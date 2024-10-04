/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from "framer-motion";
import GradualText from "../../components/TextAnimations/GradualText";

const intersectionsData = [
  {
    name: "Khilgaon",
    busy: true,
    lastSignal: "Busy",
    signalDuration: "Busy",
    nextSignal: "Busy",
  },
  {
    name: "Rajarbag",
    busy: false,
    lastSignal: "14:25",
    signalDuration: "1m 30s",
    nextSignal: "14:30",
  },
  {
    name: "Polton",
    busy: false,
    lastSignal: "14:20",
    signalDuration: "1m",
    nextSignal: "14:25",
  },
  {
    name: "Shahbagh",
    busy: true,
    lastSignal: "Busy",
    signalDuration: "Busy",
    nextSignal: "Busy",
  },
  {
    name: "TSC",
    busy: false,
    lastSignal: "14:18",
    signalDuration: "1m",
    nextSignal: "14:23",
  },
];

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const catchPhrase = "Traffic Status by Intersection";

const SignalStatusTable = () => {
  return (
    <div className="text-slate-200 px-4 w-full">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-col items-center w-full"
      >
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >

          <h1 className='text-4xl text-slate-700 text-center my-10'>Average Signal Time at Intersections</h1>

          {/* Intersection Table */}
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-blue-300 text-slate-700 text-center rounded-lg">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="py-4 px-6">Intersection</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Last Signal</th>
                  <th className="py-4 px-6">Signal Duration</th>
                  <th className="py-4 px-6">Next Signal</th>
                </tr>
              </thead>
              <tbody>
                {intersectionsData.map((intersection, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"
                    } hover:bg-blue-400 text-lg`}
                  >
                    <td className="py-3 px-5">{intersection.name}</td>
                    <td
                      className={`py-3 px-5 ${
                        intersection.busy
                          ? "text-red-600 font-semibold"
                          : "text-green-600 font-semibold"
                      }`}
                    >
                      {intersection.busy ? "Busy" : "Free"}
                    </td>
                    <td className="py-3 px-5">{intersection.lastSignal}</td>
                    <td className="py-3 px-5">{intersection.signalDuration}</td>
                    <td className="py-3 px-5">{intersection.nextSignal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignalStatusTable;