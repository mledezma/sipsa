import { ReactNode } from 'react';
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header/>
      <main className="pt-[134px]">{children}</main>
      <Footer/>
    </div>
  );
}
