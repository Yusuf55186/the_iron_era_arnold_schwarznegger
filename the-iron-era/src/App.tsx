;import { ChapterIntro } from "./ChapterIntro"
import { SpotLight } from "./components/Spotlight"
import { Header } from "./Header/Header"
import { Hero } from "./Hero"
import { EarlyYearsChapter } from "./EarlyYearsChapter"
import { IntroCurtain } from "./components/IntroCurtain"
export const App  = () => {
  return (
    <>
    <IntroCurtain />
    <Header />
  <Hero />
      <SpotLight />
      <ChapterIntro />
      <EarlyYearsChapter />
      
  </>
  
  
  )
}