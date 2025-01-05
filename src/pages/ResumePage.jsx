import { Avatar, Link } from "@nextui-org/react"
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import ProgressApp from "../components/ProgressApp";
import NavbarApp from "../components/NavbarApp";


const Resume = () => {
    return (
        <div className="bg-gray-100">
            <NavbarApp />
            <div className="mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <Avatar className="w-20 h-20 text-large mb-4" src="../src/assets/a.jpg" />
                                <h1 className="text-xl text-center font-bold mb-4">Adek Rahmat Kurniawan</h1>
                                <p className="text-gray-700 text-center">Front End Developer</p>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">PROFILE</span>
                                <div className="flex flex-col text-sm">
                                    <span className="font-bold">Address :</span>
                                    <span className="mb-2">Bumi Agung Permai Blok N5 No. 2</span>
                                    <span className="font-bold">Place and Date of Birth :</span>
                                    <span className="mb-2">Serang, 26 Nov 1995</span>
                                    <span className="font-bold">Phone Number :</span>
                                    <span className="mb-2">0878-8612-6767</span>
                                    <span className="font-bold">Email :</span>
                                    <span className="mb-2">adeeerk@gmail.com</span>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                <ul className="text-sm">
                                    <li className="flex justify-between">JavaScript
                                    <span>75%</span></li>
                                        <ProgressApp value={75} />
                                    <li className="flex justify-between">React Js<span>80%</span></li>
                                        <ProgressApp value={85} />
                                    <li className="flex justify-between">HTML<span>70%</span></li>
                                        <ProgressApp value={70} />
                                    <li className="flex justify-between">React Js<span>75%</span></li>
                                        <ProgressApp value={75} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-700">I am an individual with diverse work experience in marketing, operations, and finance. Currently, I am transitioning my career into the IT field, focusing on enhancing my programming skills and developing web-based applications.
                            To support this transition, I have participated in various training programs, both offline and online, and completed an intensive bootcamp at Enigma. During the bootcamp, I successfully developed and finalized a capstone project called Ternakin, a web-based e-commerce application. This application is designed to connect farmers with landowners for land leasing, offering an innovative solution for resource management in the livestock industry.
                            I am highly dedicated to continuous learning and growth in programming. With my diverse background and experience in completing real-world projects, I am ready to contribute as an IT professional and create impactful technological solutions.</p>
                            <hr className="my-6 border-t border-gray-300" />
                            <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                            <div className="flex justify-center items-center gap-6 my-6">
                                <Link isExternal color="foreground" className="hover:text-blue-700" href="https://facebook.com/conegraber"><FaFacebook /></Link>
                                <Link isExternal color="foreground" className="hover:text-blue-700" href="https://instagram.com/adeeerk__"><PiInstagramLogoFill />
                                </Link>
                                <Link isExternal color="foreground" className="hover:text-blue-700" href="https://github.com/ARAKU-BoyZ"><FaGithub />
                                </Link>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <div className="mb-6">
                                <div className="flex flex-col flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Marketing Executive</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at PT Yamaha Putera Moto</span>
                                        <span className="text-gray-700">Jun 2013 - Des 2013</span>
                                    </p>
                                </div>
                                <p className="mt-2">Responsible for designing and implementing strategies, managing promotions, and building relationships with dealers and customers. Focuses on achieving sales targets and market research.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex flex-col flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Helper</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at Depot Saribanon</span>
                                        <span className="text-gray-700">Feb 2024 - Okt 2014</span>
                                    </p>
                                </div>
                                <p className="mt-2">Responsible for assisting with food preparation, maintaining kitchen cleanliness, organizing equipment, and supporting food presentation. They also help manage food stock and clean up after meals. This position requires the ability to work in a team and attention to cleanliness.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex flex-col flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Debt Collector</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at PT Federal Int'l Finance</span>
                                        <span className="text-gray-700">Mar 2015 - Jan 2017</span>
                                    </p>
                                </div>
                                <p className="mt-2">Responsible for collecting overdue payments, negotiating with debtors, and recording transactions. They also monitor unpaid debts, resolve disputes, and work with the finance or legal team. Strong communication, negotiation skills, and target-oriented are required.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex flex-col flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Production Operator</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at PT Mayora Indah Tbk</span>
                                        <span className="text-gray-700">Jan 2018 - Aug 2018</span>
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
                                        <span className="text-gray-700 mr-2">at Enigma Camp Bootcamp</span>
                                        <span className="text-gray-700">Okt 2024 - Des 2024</span>
                                    </p>
                                </div>
                                <p className="mt-2">This platform aims to connect farmers who struggle to access land with landowners who have land available for rent. Equipped with training features, livestock insurance services, and IoT technology integration, this platform helps improve efficiency and sustainability in livestock farming.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume