/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import SignalUpdateByRoute from '../sections/signal_update/SignalUpdateByRoute';
import AverageSignalTime from '../sections/Charts/AverageSignalTime';

const Home = () => {

    //   const scrollToAboutMe = useRef(null);
    //   const scrollToProjects = useRef(null);
    //   const scrollToContact = useRef(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(async () => {

            setLoading(false);
        }, 1000);

    }, []);

    return (
        <section className='card w-full'>

            <div>

                {loading &&
                    <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
                }

                {!loading &&
                    <div className='w-full'>
                        <SignalUpdateByRoute />
                        <AverageSignalTime />
                    </div>
                }
            </div>

        </section>
    );
}

export default Home;