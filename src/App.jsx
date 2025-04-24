import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Technology from "@/components/technology"
import InstantFeedback from "@/components/instant-feedback"
import Showcases from "@/components/showcases"
import Product from "@/components/product"
import Services from "@/components/services"
import Resources from "@/components/resources"
import Training from "@/components/training"
import About from "@/components/about"
import Contact from "@/components/contact"
import Careers from "@/components/careers"
import Hire from "@/components/hire"
import ScrollToTop from "@/components/scroll-to-top"
import Testimonials from "@/components/testimonials"
import Affiliations from "@/components/Affiliations"
import GetStarted from './components/GetStarted'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Showcases />
                <Technology />
                <GetStarted />
                {/* <Features /> */}
                <Affiliations />
                <Testimonials />
                {/* <InstantFeedback /> */}
              </>
            } />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/hire" element={<Hire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

