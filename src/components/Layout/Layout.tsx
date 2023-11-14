import './Layout.css';
import Header from "../Header/Header";
import { Fragment } from 'react';

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Fragment>
        {props.children}
      </Fragment>
      
    </>
  );
}

export default Layout;