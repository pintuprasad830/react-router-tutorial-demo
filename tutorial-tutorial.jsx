

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { TutorialHome } from "./tutorial-home";

import { JavaTutorial } from "./java-tutorial";

import { ReactTutorial } from "./react-tutorial";

import { WeatherDashboard } from "../components/weather/weather-dashboard";



export function TutorialIndex(){

    return(

        <div className="container-fluid">

            <BrowserRouter>

            <header className="p-2 m-2 text-center border border-1">

                <span className="fs-3 fw-bold">Tutorial Index</span>

                <nav className="d-flex mt-2 justify-content-center">

                    <span> <Link to="/">Home</Link> </span>

                    <span className="mx-5"><Link to="java">Java</Link></span>

                    <span><Link to="react">React</Link></span>

                    <span className="mx-5"> <Link to="weather">Weather</Link> </span>

                </nav>

            </header>

            <section className="mt-4">

                <Routes>

                     <Route path="/" element={<TutorialHome />} />

                     <Route path="java" element={<JavaTutorial />} />

                     <Route path="react" element={<ReactTutorial />} />

                     <Route path="weather" element={<WeatherDashboard />} />

                     <Route path="*" element={<div><code className="text-danger">404 : Requested Path Not Found</code></div>} />

                </Routes>

            </section>

            

            </BrowserRouter>

        </div>

    )

}
