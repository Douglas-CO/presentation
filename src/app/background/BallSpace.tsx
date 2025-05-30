import Spline from '@splinetool/react-spline';

interface BallSpaceProps {
  style?: React.CSSProperties;
}

export default function BallSpace({ style }: BallSpaceProps) {
  return (
    <div className="spline-scene">
      <Spline style={style} scene="https://prod.spline.design/1KZl3UuI6ygID6eW/scene.splinecode" />
    </div>
  );
}
