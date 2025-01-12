import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()

    const buttonClick = () => {
        navigate('/about')
    }

    const handleChat = () => {
        window.location.href = "https://wa.me/6287886126767"
    }

    return (
        <div className="w-full h-screen bg-black overflow-x-hidden">
            <div className="w-full mx-auto relative h-screen bg-cover bg-center bg-no-repeat sm:aspect-video"
            style={{
                backgroundImage: 'url(../src/assets/a.jpg)',
            }}>
                <div className="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-30 w-[15%] h-[20%] gradiant rounded-full blur-3xl"
                style={{
                    background: 'linear-gradient(95deg, #059DFF 15%, #6549D5 45%, #E33FA1 75%, #FB5343 100%)',
                    backgroundSize: '200% 100%',
                    backgroundPosition: '95%'
                }}></div>
                <div className="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-10 w-[50%] h-full my-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
                <div className="w-[80%] mx-auto h-full flex justify-between items-center">
                    <div className="h-ful xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2 justify-center">
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">Hi, My name is</h1>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold"
                        style={{
                            background: 'linear-gradient(95deg, #059DFF 15%, #6549D5 45%, #E33FA1 75%, #FB5343 100%)',
                            backgroundSize: '200% 100%',
                            backgroundPosition: '95%',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Adek Rahmat Kurniawan</h1>
                        <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2">I’m a web developer just starting my journey to create innovative and engaging web solutions. With a passion for learning and growing, I focus on mastering the latest technologies to build user-friendly and responsive websites. Explore my projects here, and if you’re interested in collaborating or discussing further, feel free to reach out!</p>
                        <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
                            <Button className="md:px-8 px-4 md:py-4 md:text-xl text-lg font-semibold rounded-md cursor-pointer"
                            style={{
                                background: 'linear-gradient(95deg, #059DFF 15%, #6549D5 45%, #E33FA1 75%, #FB5343 100%)'
                            }}
                            onPress={handleChat}>Click For Hire Me</Button>
                            <Button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2 rounded-md cursor"
                            onPress={buttonClick}>About Me</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage