import htmlsvg from "./SVG/html-5 logo.svg"
import csssvg from "./SVG/CSS logo.svg"
import jssvg from "./SVG/Javascript logo.svg"
import npmsvg from "./SVG/npm logo.svg"
import gitsvg from "./SVG/Git logo.svg"
import reactsvg from "./SVG/React logo.svg"
import vitesvg from "./SVG/vite logo.svg"
import tailwindsvg from "./SVG/tailwindcss-icon logo.svg"
import nextsvg from "./SVG/nextjs-fill-svgrepo-com.svg"
import typescriptsvg from './SVG/typescript-icon-svgrepo-com.svg'
import vueSvg from './SVG/vue-svgrepo-com.svg'
import pythonSvg from './SVG/python.svg'
import cSvg from './SVG/c.svg'
import goSvg from './SVG/go.svg'
import githubSvg from './SVG/githubLink.svg'
import githubSvgDark from './SVG/githubLinkDark.svg'
import webSvg from './SVG/web-svgrepo-com.svg'
import webSvgDark from './SVG/web-svgrepo-comDark.svg'

type DarkProps = {
    dark: string;
  };

function Cards({dark}: DarkProps) {

    return (
        <div className="flex flex-col p-8 md:px-20 md:pb-20 gap-6 font-customGR">
            <div className="lg:flex gap-6">
                <div className="flex flex-col gap-6 flex-1">
                    <div className="dark:bg-colorcard bg-colorcardLight rounded-lg border border-1 border-colorborder p-6">
                        <h2 className="text-3xl text-white pb-6 font-customG">Stack</h2>
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-2">
                                <p><img src={pythonSvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Python</p>
                                <p><img src={cSvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>C</p>
                                <p><img src={npmsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>npm</p>
                                <p><img src={reactsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>React</p>
                                <p><img src={vitesvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Vite</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p><img src={typescriptsvg} className="sm:block md:inline lg:block 2xl:inline pr-2"/>Typescript</p>
                                <p><img src={jssvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Javascript</p>
                                <p><img src={htmlsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>HTML</p>
                                <p><img src={csssvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>CSS</p>
                            <p><img src={gitsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Git</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p><img src={goSvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Go</p>
                                <p><img src={nextsvg} className="sm:block md:inline lg:block 2xl:inline pr-2"/>Next JS</p>
                                <p><img src={vueSvg} className="sm:block md:inline lg:block 2xl:inline pr-2"/>Vue.js</p>
                                <p><img src={tailwindsvg} alt="" className="sm:block md:inline lg:block 2xl:inline pr-2"/>Tailwind CSS</p> 
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-colorcard bg-colorcardLight rounded-lg border border-1 border-colorborder p-6">
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
                                <li>Pratique du piano : concerts, résidences, répétitions</li>
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
                <div className="mt-6 lg:mt-0 dark:bg-colorcard bg-colorcardLight rounded-lg border border-1 border-colorborder p-6 flex-1">
                    <h2 className="text-3xl text-white pb-6 font-customG">Projets</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">Agent-SWE - <span className="text-base">Autonomous AI coding agent </span></h3>
                                <h4 className="text-sm font-customGRI">python</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/Agent-SWE" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">Mock-Interview - <span className="text-base">Practice live coding</span></h3>
                                <h4 className="text-sm font-customGRI">typescript docker express react</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/Agent-SWE" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">RAG - <span className="text-base">Python-based RAG pipeline</span></h3>
                                <h4 className="text-sm font-customGRI">python</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/RAG" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">Decoding - <span className="text-base">LLM function calling system</span></h3>
                                <h4 className="text-sm font-customGRI">python</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/Constrained-Decoding" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">MUD - <span className="text-base">Text-based dungeon built in Go</span></h3>
                                <h4 className="text-sm font-customGRI">python</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/MUD" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">What's for dinner - <span className="text-base">AI cooking assistant</span></h3>
                                <h4 className="text-sm font-customGRI">nextjs react Gemini AI</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://whatsfordinner-ecru.vercel.app/" className="font-customG">{dark === 'dark' ? <img src={webSvgDark} className="h-8"/> : <img src={webSvg} className="h-8"/>}</a>
                                <a href="https://github.com/Peptobiscotte/ai-cooking" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">FriendsList - <span className="text-base">Your contact manager</span></h3>
                                <h4 className="text-sm font-customGRI">vue.js nuxt</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://friendslist-phi.vercel.app/" className="font-customG">{dark === 'dark' ? <img src={webSvgDark} className="h-8"/> : <img src={webSvg} className="h-8"/>}</a>
                                <a href="https://github.com/Peptobiscotte/friendslist" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-base">Coffi - <span className="text-base">Coworking made easy.</span></h3>
                                <h4 className="text-sm font-customGRI">nextjs typescript</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/Peptobiscotte/coffi" className="font-customG">{dark === 'dark' ? <img src={githubSvgDark} className="h-8"/> : <img src={githubSvg} className="h-8"/>}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 dark:bg-colorcard bg-colorcardLight rounded-lg border border-1 border-colorborder p-6 flex-1">
                    <h2 className="text-3xl pb-6 font-customG">Formation</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>42 School Paris</h3>
                                <h4>2026</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Programmation en Python et réalisation de projets</li>
                                    <li>Algorithmique et résolution de problèmes</li>
                                    <li>Développement de solutions agentiques</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>Vue - The Complete Guide
                                <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" className="pl-2 font-customG">@Udemy</a></h3>
                                <h4>2024</h4>
                            </div>
                            <div>
                                <ul className="list-disc pl-8">
                                    <li>Utilisation avancée de Vue</li>
                                    <li>Réalisation de projets</li>
                                    <li>Apprentissage de Nuxt</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h3>Next.js 14 & React - The Complete Guide<a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" className="pl-2 font-customG">@Udemy</a></h3>
                                <h4>2024</h4>
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
                                <h3>The Complete Javascript Course<a href="https://www.udemy.com/course/the-complete-javascript-course/" className="pl-2 font-customG">@Udemy</a></h3>
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
                                <h4>2017</h4>
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
                                <h4>2014</h4>
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
            <div className="dark:bg-colorcard bg-colorcardLight rounded-lg border border-1 border-colorborder p-6 flex flex-col">
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
