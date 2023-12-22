import htmlsvg from "./SVG/html-5 logo.svg"
import csssvg from "./SVG/CSS logo.svg"
import jssvg from "./SVG/Javascript logo.svg"
import npmsvg from "./SVG/npm logo.svg"
import gitsvg from "./SVG/Git logo.svg"
import reactsvg from "./SVG/React logo.svg"
import vitesvg from "./SVG/vite logo.svg"
import tailwindsvg from "./SVG/tailwindcss-icon logo.svg"

function Cards() {

    return (
        <div className="flex flex-col px-20 pb-20 gap-6 font-customGR">
            <div className="lg:flex gap-6">
                <div className="flex flex-col gap-6 flex-1">
                    <div className="bg-colorcard rounded-lg border border-1 border-colorborder p-6">
                        <h2 className="text-3xl text-white pb-6 font-customG">Stack</h2>
                        <div className="flex gap-20">
                            <div className="flex flex-col gap-2">
                                <p><img src={htmlsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>HTML</p>
                                <p><img src={csssvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>CSS</p>
                                <p><img src={jssvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Javascript</p>
                                <p><img src={npmsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>npm</p>
                            </div>
                            <div className="flex flex-col gap-2">
                            <p><img src={gitsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Git</p>
                                <p><img src={reactsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>React</p>
                                <p><img src={vitesvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Vite</p>
                                <p><img src={tailwindsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Tailwind CSS</p> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-colorcard rounded-lg border border-1 border-colorborder p-6">
                    <h2 className="text-3xl text-white pb-6 font-customG">Expériences</h2>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3>Pianiste<a href="https://www.instagram.com/mangerlebiscuit/" className="pl-2 font-customG">@Le Biscuit</a></h3>
                            <h4>Depuis Avril 2022</h4>
                            <ul className="list-disc pl-8">
                                <li>Pianiste professionnel : concerts, résidences, répétitions</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Pianiste & Compositeur<a href="https://web.archive.org/web/20220418135427/https://spacedukes.com/" className="pl-2 font-customG">@Space Dukes</a></h3>
                            <h4>Depuis 2017</h4>
                            <ul className="list-disc pl-8">
                                <li>Pratique du piano: concerts, résidences, répétitions</li>
                                <li>Organisation des concerts</li>
                                <li>Démarchage des salles</li>
                                <li>Communication</li>
                                <li>Logistique</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Facteur<a href="https://www.laposte.fr/" className="pl-2 font-customG">@La Poste</a></h3>
                            <h4>Juin 2013 à Septembre 2013</h4>
                            <ul className="list-disc pl-8">
                                <li>Distribution du courrier sur la commune de Vincennes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-6 lg:mt-0 bg-colorcard rounded-lg border border-1 border-colorborder p-6 flex-1">
                    <h2 className="text-3xl text-white pb-6 font-customG">Projets</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            <div>
                                <h3>Tenzies</h3>
                                <h4>React</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/react-tenzies" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>Meme</h3>
                                <h4>React</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/react-meme" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>Airbnb clone</h3>
                                <h4>React</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/react-airbnb-clone" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>Static</h3>
                                <h4>React</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/react-static" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>Devinombre</h3>
                                <h4>JS</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/devinombre" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>Curriculum Vitae</h3>
                                <h4>React</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/Peptobiscotte.github.io" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3>JS Course</h3>
                                <h4>Javascript</h4>
                            </div>
                            <div className="flex items-center "><a href="https://github.com/Peptobiscotte/js-course" className="hover:underline underline-offset-4 font-customG">Voir projet</a></div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 bg-colorcard rounded-lg border border-1 border-colorborder p-6 flex-1">
                    <h2 className="text-3xl pb-6 font-customG">Formation</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>The Complete Javascript Course 2024<a href="https://www.udemy.com/course/the-complete-javascript-course/" className="pl-2 font-customG">@Udemy</a></h3>
                                <h4>2023</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Apprentissage du langage javascript, fondamentaux, OOP...</li>
                                    <li>Réalisation de projets en js Vanilla</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>Next.js 14 & React - The Complete Guide<a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" className="pl-2 font-customG">@Udemy</a></h3>
                                <h4>2023</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Utilisation avancée de React & apprentissage de Next.js</li>
                                    <li>Réalisation de projets multi-pages et back-end</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>Learn React, Learn Typescript<a href="https://scrimba.com/" className="pl-2 font-customG">@Scrimba</a></h3>
                                <h4>2023</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Formation au framework React, construction de multiples projets</li>
                                    <li>Apprentissage de Typescript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>Piano<a href="https://conservatoires.paris.fr/conservatoires/debussy" className="pl-2 font-customG">@Conservatoire Claude Debussy</a></h3>
                                <h4>Septembre 2017 à Juillet 2020</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Formation de pianiste professionnel en 3 ans</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                            <h3>Piano<span className="pl-2 font-customG">@CIM - École de jazz</span></h3>
                                <h4>Septembre 2014 à Juillet 2017</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Pratique de l'instrument</li>
                                    <li>Musicologie</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="bg-colorcard rounded-lg border border-1 border-colorborder p-6 flex flex-col">
                <h2 className="text-3xl text-white pb-6 font-customG">Intérêts</h2>
                <div className="flex flex-col gap-6">
                    <div>
                        <h3>🥘 Cuisine</h3>
                        <p>J'adore la cuisine. Je me documente souvent, pour avoir de l'inspiration et améliorer ma technique.</p>
                    </div>
                    <div>
                        <h3>🕹️ Jeux vidéo</h3>
                        <p>J'aime jouer aux jeux vidéo, parfois solo mais le plus souvent en multi-joueur.</p>
                    </div>
                    <div>
                        <h3>🎹 Musique</h3>
                        <p>La musique, notamment le piano mais pas que, fait bien évidemment aussi partie de mes passions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Cards