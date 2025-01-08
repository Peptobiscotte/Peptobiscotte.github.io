import idPic from "./maxpp.png"
import gitHub from "./SVG/GithubLogo.svg"
import gitHubDark from "./SVG/GithubLogoDark.svg"
import linkedIn from "./SVG/LinkedinLogo.svg"
import linkedInDark from "./SVG/LinkedinLogoDark.svg"
import enveloppe from "./SVG/EnvelopeSimple.svg"
import enveloppeDark from "./SVG/EnvelopeSimpleDark.svg"
import phone from "./SVG/Phone.svg"
import phoneDark from "./SVG/PhoneDark.svg"
import mapPin from "./SVG/MapPin.svg"
import mapPinDark from "./SVG/MapPinDark.svg"
import { useEffect, useState } from "react"
import "@theme-toggles/react/css/DarkInner.css"
import { DarkInner } from "@theme-toggles/react"
import resumeSvg from "./SVG/download.svg"
import resumeDark from "./SVG/downloadDark.svg"


function Hero() {
    const [ dark, setDark ] = useState('')

    function toggleTheme() {
        document.documentElement.classList.toggle('dark')
        if(dark === ''){
            setDark('dark')
        } else {
            setDark('')
        }
    }

    const cvURL = 'https://mycoffibucket.s3.eu-west-3.amazonaws.com/Maxime-Monnier-CV+vf.pdf'

    const [pdfBlobUrl, setPdfBlobUrl] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchPdf = async () => {
            try {
              const response = await fetch(cvURL, {
                method: 'GET',          
                    });
              if (!response.ok) {
                  console.log(response)
    
                throw new Error('Erreur lors du téléchargement du PDF');
              }
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              setPdfBlobUrl(url);
            } catch (error) {
             throw new Error;
            }
        }
        fetchPdf()
    }, [cvURL])
    

    return (
     <div className="font-customG text-colortextLight dark:text-colortext">
        <div className="flex justify-end pt-10 pr-10">
            <DarkInner placeholder='true' duration={750} onToggle={toggleTheme}/>
        </div>
        <div className="p-8 md:p-20 md:pt-16 md:flex justify-between">
            <div className="md:flex gap-8">
            <div>
                <img src={idPic} alt="profile" className="hidden xl:block rounded-full h-40 border-2 border-colortext"/>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <h1 className="text-4xl">Maxime Monnier</h1>
                <h2 className="text-2xl font-customGR">Recherche d'une alternance en Développement Web</h2>
                <div className="flex gap-2 mt-1 pb-4 md:pb-0">
                    <a href="https://www.linkedin.com/in/maxime-monnier-09ba00280/">{dark === 'dark' ? <img src={linkedInDark} alt="linkedIn" className="h-10"/> : <img src={linkedIn} alt="linkedIn" className="h-10"/>}</a>
                    <a href="https://github.com/Peptobiscotte">{dark === 'dark' ? <img src={gitHubDark} alt="gitHub" className="h-10"/> : <img src={gitHub} alt="gitHub" className="h-10"/>}</a>
                    <a href={pdfBlobUrl} download='Maxime-Monnier-CV' target="_blank">{dark === 'dark' ? <img src={resumeDark} alt="gitHub" className="h-10"/> : <img src={resumeSvg} alt="gitHub" className="h-10"/>}</a>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-start pt-4 gap-4 text-2xl font-customGR">
                <a href="mailto:maxime.monnier@ik.me" className="underline">{dark === 'dark' ? <img src={enveloppeDark} alt="" className="inline pr-2"/> : <img src={enveloppe} alt="" className="inline pr-2"/>}maxime.monnier@ik.me</a>
                <a href="tel:06-65-25-86-24" className="text-blue-600 dark:text-blue-400 underline">{dark === 'dark' ? <img src={phoneDark} alt="" className="inline pr-2"/> : <img src={phone} alt="" className="inline pr-2"/>}06.65.25.86.24</a>
                <p>{dark === 'dark' ? <img src={mapPinDark} alt="" className="inline pr-2"/> : <img src={mapPin} alt="" className="inline pr-2"/>}Vincennes</p>
                
            </div>
        </div>
     </div>
    )
  }
  
  export default Hero
  

                           