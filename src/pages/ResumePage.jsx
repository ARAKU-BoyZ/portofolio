import { Avatar, Link } from "@nextui-org/react"
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import ProgressApp from "../components/ProgressApp";
import Layout from "./layout/Layout";


const ResumePage = () => {
    return (
        <Layout pageName="Resume">
            <div className="mx-auto flex flex-1 flex-col gap-6 lg:flex-row px-4 py-8">
                <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md mb-6 lg:mb-0">
                    <div className="flex flex-col items-center">
                        <Avatar className="w-20 h-20 text-large mb-4" src="../src/assets/a.jpg" />
                        <h1 className="font-bold text-xl">Adek Rahmat Kurniawan</h1>
                        <h5 className="font-semibold text-md">Front End Developer</h5>
                    </div>
                    <hr className="my-6 border-t border-gray-300" />
                    <div>
                        <span className="flex justify-center text-lg font-semibold">PROFILE</span>
                        <div className="flex flex-col text-sm mt-4">
                             <span className="font-bold">Address :</span>
                             <span className="mb-2">Bumi Agung Permai Blok N5 No. 2</span>
                             <span className="font-bold">Place and Date of Birth :</span>
                             <span className="mb-2">Serang, 26 Nov 1995</span>
                             <span className="font-bold">Phone Number :</span>
                             <span className="mb-2">0878-8612-6767</span>
                             <span className="font-bold">Email :</span>
                             <span className="mb-2">adeeerk@gmail.com</span>
                        </div>
                    <hr className="my-6 border-t border-gray-300" />
                    <div className="flex flex-col">
                        <span className="flex justify-center text-lg font-semibold">Skills</span>
                        <ul className="text-sm">
                            <li className="flex justify-between">JavaScript
                            <span>75%</span></li>
                                <ProgressApp value={75} />
                            <li className="flex justify-between">React Js<span>80%</span></li>
                                <ProgressApp value={85} />
                            <li className="flex justify-between">HTML<span>70%</span></li>
                                <ProgressApp value={70} />
                            <li className="flex justify-between">PHP<span>75%</span></li>
                                <ProgressApp value={75} />
                        </ul>
                    </div>
                    </div>
                </aside>
                {/* main */}
                <main className="flex-1 bg-white p-6 shadow-md rounded-lg lg:ml-6">
                    <div>
                        <h1 className="text-center font-bold text-xl">About Me</h1>
                        <p>I am an individual with diverse work experience in marketing, operations, and finance. Currently, I am transitioning my career into the IT field, focusing on enhancing my programming skills and developing web-based applications. To support this transition, I have participated in various training programs, both offline and online, and completed an intensive bootcamp at Enigma. During the bootcamp, I successfully developed and finalized a capstone project called Ternakin Aplication, a web-based e-commerce application. This application is designed to connect farmers with landowners for land leasing, offering an innovative solution for resource management in the livestock industry. I am highly dedicated to continuous learning and growth in programming. With my diverse background and experience in completing real-world projects, I am ready to contribute as an IT professional and create impactful technological solutions.</p>
                        <hr className="my-6 border-t border-gray-300" />
                        <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                        <div className="flex justify-center items-center gap-8 my-4">
                            <Link isExternal color="foreground" className="hover:text-blue-700" href="https://facebook.com/conegraber"><FaFacebook /></Link>
                            <Link isExternal color="foreground" className="hover:text-blue-700" href="https://instagram.com/adeeerk__"><PiInstagramLogoFill /></Link>
                            <Link isExternal color="foreground" className="hover:text-blue-700" href="https://github.com/ARAKU-BoyZ"><FaGithub /></Link>
                        </div>
                        <hr className="my-6 border-t border-gray-300" />
                        <h2 className="text-xl items-center text-center font-bold mt-6 mb-4">Experience</h2>
                        <div className="mb-6">
                            <div className="flex flex-col flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Marketing Executive</span>
                                <p className="break-words">
                                    <span className="text-gray-700 mr-2 break-words lg:break-normal">at PT Yamaha Putera Motor</span>
                                    <br />
                                    <span className="text-gray-700 truncate sm:overflow-clip sm:whitespace-nowrap md:overflow-visible md:whitespace-normal break-words lg:break-normal">Jun 2013 - Des 2013</span>
                                </p>
                            </div>
                            <p className="mt-2">Responsible for designing and implementing strategies, managing promotions, and building relationships with dealers and customers. Focuses on achieving sales targets and market research.</p>
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-col flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Helper Cook</span>
                                <p className="break-words">
                                    <span className="text-gray-700 mr-2 break-words lg:break-normal">at Depot Saribanon</span>
                                    <br />
                                    <span className="text-gray-700 truncate sm:overflow-clip sm:whitespace-nowrap md:overflow-visible md:whitespace-normal break-words lg:break-normal">Feb 2014 - Des 2014</span>
                                </p>
                            </div>
                            <p className="mt-2">Responsible for assisting with food preparation, maintaining kitchen cleanliness, organizing equipment, and supporting food presentation. They also help manage food stock and clean up after meals. This position requires the ability to work in a team and attention to cleanliness.</p>
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-col flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Debt Collector</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at Mega Auto Finance & Federal Int'l Finance</span>
                                    <br />
                                    <span className="text-gray-700 truncate sm:overflow-clip sm:whitespace-nowrap md:overflow-visible md:whitespace-normal break-words lg:break-normal">Des 2014 - Jan 2015 & Mar 2015 - Jan 2017</span>
                                </p>
                            </div>
                            <p className="mt-2">Responsible for collecting overdue payments, negotiating with debtors, and recording transactions. They also monitor unpaid debts, resolve disputes, and work with the finance or legal team. Strong communication, negotiation skills, and target-oriented are required.</p>
                        </div>
                        <div className="mb-6">
                            <div className="flex flex-col flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Operator Produksi</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at PT Mayora Indah Tbk</span>
                                    <br />
                                    <span className="text-gray-700 truncate sm:overflow-clip sm:whitespace-nowrap md:overflow-visible md:whitespace-normal break-words lg:break-normal">Jan 2018 - Aug 2018</span>
                                </p>
                            </div>
                            <p className="mt-2">Responsible for collecting overdue payments, negotiating with debtors, and recording transactions. They also monitor unpaid debts, resolve disputes, and work with the finance or legal team. Strong communication, negotiation skills, and target-oriented are required.</p>
                        </div>
                        <hr className="my-6 border-t border-gray-300" />
                        <h2 className="text-xl font-bold mt-6 mb-4">Portofolio</h2>
                        <div className="mb-6">
                            <div className="flex flex-col flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Ternakin Web App</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at Enigma Bootcamp</span>
                                    <br />
                                    <span className="text-gray-700 truncate sm:overflow-clip sm:whitespace-nowrap md:overflow-visible md:whitespace-normal break-words lg:break-normal">Okt 2024 - Des 2024</span>
                                </p>
                            </div>
                            <p className="mt-2">This platform aims to connect farmers who struggle to access land with landowners who have land available for rent. Equipped with training features, livestock insurance services, and IoT technology integration, this platform helps improve efficiency and sustainability in livestock farming.</p>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default ResumePage