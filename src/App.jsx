import { Header } from "./components/header";
import { Hero } from "./components/hero";


const App = () => {
  return (
    <div className="bg-slate-950">
      <Header />
      <main className="container mx-auto flex justify-center items-center pt-10">
        <Hero />
      </main>
    </div>
  )
}

export default App;