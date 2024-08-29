import React, { useState, useEffect } from "react";

import { GrUserWorker } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { BsPersonStanding } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { MdRestorePage } from "react-icons/md";
import { FaHospital } from "react-icons/fa";

function Content() {
    const [randomnum, setRandomnum] = useState(0);

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 31); // Generates a random number between 0 and 30
        setRandomnum(randomValue);
    }, []); // Empty dependency array to run only once when the component mounts

    return (
        <main>
            <div className="conntent">
                <h3>Student Management</h3>
            </div>
            <div className="cards">
                <div className="Regular" style={{ backgroundColor: "red" }}>
                    <GrUserWorker className="icon-card" />
                    <span>{randomnum + 1}</span><br /><br />
                    <p>Regular Student</p>
                </div>
                <div className="Regular" style={{ background: "#0b7639" }}>
                    <IoMdContacts className="icon-card" />
                    <span>{randomnum}</span><br /><br />
                    <p>Remidial Student</p>
                </div>
                <div className="Regular" style={{ background: "#0a3071" }}>
                    <BsPersonStanding className="icon-card" />
                    <span>{randomnum + 5}</span><br /><br />
                    <p>impaid Student</p>
                </div>
            </div>
            <h4 className="head">Memu</h4>
            <div className="Section">
                <div className="seccontain">
                    <BsPersonFill className="secall" />
                    <p>Regular Management</p>
                </div>
                <div className="seccontain">
                    <FaBook className="secall" />
                    <p>Examination </p>
                </div>
                <div className="seccontain">
                    <GrUserWorker className="secall" />
                    <p>Club Management</p>
                </div>
                <div className="seccontain">
                    <FaBookOpenReader className="secall" />
                    <p>Class Management</p>
                </div>
                <div className="seccontain">
                    <AiTwotoneMail className="secall" />
                    <p>SMA/Mail</p>
                </div>
                <div className="seccontain">
                    <MdRestorePage className="secall" />
                    <p>Attendance</p>
                </div>
                <div></div>
                <div className="seccontain">
                    <FaHospital className="secall" />
                    <p>Hospital</p>
                </div>
            </div>
        </main>
    );
}

export default Content;
