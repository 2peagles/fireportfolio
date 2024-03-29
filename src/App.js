import React  from 'react';
import { Nav } from './componets/Nav/Nav';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import { Skills } from './pages/Skills/Skills';
import { Chatbox } from './componets/Contact/Chatbox';

function App () {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
        <Nav/>
        <Chatbox />
        <div className='tscontainer'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // image:"radial-gradient(#007d7d, #000)"
            image:" radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
            // image:"linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
          },
          // fullScreen:{
          //   enable:false
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value:["004D4D", "051E56","309D9D","FFC44F","4263AE"]
              value:["fff"]
            },
            preset: "fire",
            // links: {
            //   color: "#ffffff",
            //   distance: 150,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Home className='yourdiv'/>
      </div>
      <Projects/>
      <Skills/>
    </div>
  );
}
 export default App;