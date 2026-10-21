;import { ChapterIntro } from "./ChapterIntro"
import { SpotLight } from "./components/Spotlight"
import { Header } from "./Header/Header"
import { Hero } from "./Hero"
export const App  = () => {
  return (
    <>
    
    <Header />
  <Hero />
      <SpotLight />
      <ChapterIntro />
  </>
  
  )
}