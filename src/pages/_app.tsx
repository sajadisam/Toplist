import { AppProps } from "next/app";
import "@/styles/globals.scss"
import "@/styles/tailwind.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="pattern">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
