export const Header = () => {
    const navLinks = ["Home","GymBro's","Trophies","Mindset"]
    return (
        <header className="px-12 md:px-16 py-6  absolute top-0 left-0 z-30 w-full min-h-[50px] grid grid-cols-[1fr_auto_1fr]">
                      <a href="#home" className="font-iron-display text-2xl font-bold tracking-wide text-iron-accent">IRON ERA</a>

       <nav>

        <ul className="flex uppercase font-iron-body gap-iron-6">
          {navLinks.map((link,index) => {
            return (
                <li key={index}>
<a
className="text-gray-400 hover:text-white transition-colors duration-200"
 href={`#${link.toLowerCase()}`}>{link}</a>                    </li>
            )
          })}
            
        </ul>
       </nav>
       <div>

       </div>
       </header>
    )
}