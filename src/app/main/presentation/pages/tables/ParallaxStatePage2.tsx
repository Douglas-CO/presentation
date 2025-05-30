import { ParallaxLayer } from "@react-spring/parallax";

interface ParallaxStatePage {
  scroll: number;
}

export default function ParallaxMainPage({ scroll }: ParallaxStatePage) {
  return (
    <>
      {/* PÀGINA 1 */}
      {/* Color de fondo para la página 1 */}
      <ParallaxLayer
        offset={scroll}
        speed={1}
        style={{ backgroundColor: "rgb(100, 149, 237)" }}
      />
      {/* Imagen de satélite que flota sobre la página 1.3 con efecto inverso (velocidad negativa) */}
      <ParallaxLayer
        offset={scroll +  0.3}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={
            "https://pm1.aminoapps.com/6538/169205685b1b9ef2371a61ce283b24f5cd3ec400_00.jpg"
          }
          style={{ width: "15%", marginLeft: "70%" }}
        />
      </ParallaxLayer>
    </>
  );
}
