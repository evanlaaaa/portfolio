import { NavBar } from "./navBar";
import { useRouter } from 'next/router';


const index = ({children} : {children: any}) => {
  const router = useRouter();
  let { asPath } = router;

  return (
    <>
      {asPath != '/barter' && <NavBar />}
      {children}
    </>
  );
}

export default index;