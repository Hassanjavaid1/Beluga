import dynamic from "next/dynamic";
import loadingAnimation from "../../../public/loadingAnimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Loader() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <Lottie animationData={loadingAnimation} />
      </div>
    </>
  );
}

export default Loader;
