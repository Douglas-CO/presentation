import { ParallaxLayer } from "@react-spring/parallax";

interface ParallaxStatePage {
    scroll: number,
}

export default function ParallaxMainPage({scroll}: ParallaxStatePage) {
return (
    <>
      {/* PÀGINA 0 */}
      {/* Color de fondo para la página 0 */}
      <ParallaxLayer offset={scroll} speed={1} style={{ backgroundColor: "rgb(0, 102, 204)" }} />
    </>
  );
}
