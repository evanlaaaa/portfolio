import { NavBar } from "./navBar";
import { useRouter } from 'next/router';


const index: React.FC<any> = ({children}) => {
  const { asPath, pathname } = useRouter();

  return (
    <>
      {asPath != '/barter' && <NavBar />}
      {children}
    </>
  );
}

export default index;