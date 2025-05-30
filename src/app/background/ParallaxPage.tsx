import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ParallaxPage() {
  const parallax = useRef<IParallax>(null!);
  return (
    // Color fondo de todo
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
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

        {/* PÀGINA 0 */}
        {/* Color de fondo para la página 0 */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "grey" }}
        />

        {/* PÀGINA 1 */}
        {/* Color de fondo para la página 1 */}
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        {/* Imagen de satélite que flota sobre la página 1.3 con efecto inverso (velocidad negativa) */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={'https://pm1.aminoapps.com/6538/169205685b1b9ef2371a61ce283b24f5cd3ec400_00.jpg'}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        {/* PÀGINA 2 */}
        {/* Color de fondo para la página 2 */}
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

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
