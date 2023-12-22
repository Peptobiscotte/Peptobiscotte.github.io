import tailwind from "./tailwindcss.svg"
import tailwindWhite from "./tailwindcssWhite.svg"

function Footer() {
    return (
        <div className="bg-gray-50 h-32 flex justify-center dark:bg-zinc-700">
            <div className="flex justify-center items-center dark:text-white">
                <p>Made with</p>
                <img src={tailwind} alt="tailwindcss" className="h-6 mx-1 dark:hidden"/>
                <img src={tailwindWhite} alt="tailwindWhite" className="hidden dark:block h-6 mx-1"/>
                <p>by Maxime Monnier</p>
            </div>
        </div>
    )
}

export default Footer