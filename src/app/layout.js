import "./globals.css";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export const metadata = {
  title: "WhiskerWisdom",
  description: "Fascinating cat facts with style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </body>
    </html>
  );
}
