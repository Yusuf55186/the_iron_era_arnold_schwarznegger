;import { ChapterIntro } from "./ChapterIntro"
import { SpotLight } from "./components/Spotlight"
import { Header } from "./Header/Header"
import { Hero } from "./Hero"
import { EarlyYearsChapter } from "./EarlyYearsChapter"
import { IntroCurtain } from "./components/IntroCurtain"
import { TheFirstSpark } from "./TheFirstSpark"
import { TheRise } from "./TheRise"
import { SceneTransition } from "./Transition"

export const App  = () => {
  return (
    <>
    <IntroCurtain />
    <Header />
  <Hero />
      <SpotLight />
      <SceneTransition>
      <ChapterIntro />
      </SceneTransition>
      <EarlyYearsChapter />
      <SceneTransition>
      <TheFirstSpark />
      </SceneTransition>
      <TheRise />
  </>
  
  
  )
}