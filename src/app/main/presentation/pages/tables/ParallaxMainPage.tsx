import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ParallaxStatePage1 from './ParallaxStatePage1'
import ParallaxStatePage2 from './ParallaxStatePage2'
import ParallaxStatePage3 from './ParallaxStatePage3'

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ParallaxMainPage() {
  const parallax = useRef<IParallax>(null!);
  return (
    // Color fondo de todo
    <div style={{ width: "100%", height: "100%", background: "rgb(240, 248, 255)" }}>
      {/** Cantidad de Scroll */}
      <Parallax ref={parallax} pages={3}>
        {/* PÀGINA TODAS */}
        {/* Fondo estrellado que cubre las 3 páginas completas */}
        {/* pero no esta por encima del bgc de los scroll */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxStatePage1 scroll={0} />
        <ParallaxStatePage2 scroll={1} />
        <ParallaxStatePage3 scroll={2} />
        
        {/* NAVEGACION */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        {/* Si estás en la página 1, haz clic para ir a la página 2 */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        {/* Si estás en la página 2, haz clic para volver a la página 0 */}
        <ParallaxLayer
          offset={2}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Parallax>
    </div>
  );
}
