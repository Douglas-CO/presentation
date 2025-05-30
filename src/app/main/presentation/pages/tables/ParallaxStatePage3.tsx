import { ParallaxLayer } from "@react-spring/parallax";

interface ParallaxStatePage {
  scroll: number;
}

export default function ParallaxMainPage({ scroll }: ParallaxStatePage) {
  return (
    <>
      {/* PÀGINA 2 */}
      {/* Color de fondo para la página 2 */}
      <ParallaxLayer
        offset={scroll}
        speed={1}
        style={{ backgroundColor: "rgb(173, 216, 230)" }}
      />
    </>
  );
}
