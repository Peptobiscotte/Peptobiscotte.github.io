import idPic from "./idPic.png"
import gitHub from "./SVG/GithubLogo.svg"
import linkedIn from "./SVG/LinkedinLogo.svg"
import enveloppe from "./SVG/EnvelopeSimple.svg"
import phone from "./SVG/Phone.svg"
import mapPin from "./SVG/MapPin.svg"

function Hero() {

    return (
     <div className="font-customG">
        <div className="p-20 md:flex justify-between">
            <div className="flex gap-8">
            <div>
                <img src={idPic} alt="profile" className="hidden xl:block rounded-full h-40 border-2 border-colortext"/>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <h1 className="text-4xl">Maxime Monnier</h1>
                <h2 className="text-2xl font-customGR">Recherche d'une alternance en Développement Web</h2>
                <div className="flex gap-2 mt-1">
                    <a href="https://www.linkedin.com/in/maxime-monnier-09ba00280/"><img src={linkedIn} alt="linkedIn" className="h-10"/></a>
                    <a href="https://github.com/Peptobiscotte"><img src={gitHub} alt="gitHub" className="h-10"/></a>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-start pt-4 gap-4 text-2xl font-customGR">
                <a href="mailto:maxime.monnier@ik.me" className="text-blue-600 dark:text-blue-400 underline"><img src={enveloppe} alt="" className="hidden sm:inline pr-2"/>maxime.monnier@ik.me</a>
                <a href="tel:06-65-25-86-24" className="text-blue-600 dark:text-blue-400 underline"><img src={phone} alt="" className="hidden sm:inline pr-2"/>06.65.25.86.24</a>
                <p><img src={mapPin} alt="" className="inline pr-2"/>Vincennes</p>
                
            </div>
        </div>
     </div>
    )
  }
  
  export default Hero
  

                           