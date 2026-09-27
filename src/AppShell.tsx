import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteSeo from "./components/RouteSeo";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import GalleryPage from "./pages/GalleryPage";
import InquiryPage from "./pages/InquiryPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import { LANDING_PAGES } from "./content/landing-pages";

const queryClient = new QueryClient();

/**
 * Providers, layout and routes, without a router. The browser wraps this in a
 * BrowserRouter (App.tsx); the build-time prerender wraps it in a StaticRouter
 * (entry-server.tsx), so both produce identical markup.
 */
const AppShell = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouteSeo />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              {LANDING_PAGES.map((page) => (
                <Route key={page.path} path={page.path} element={<LandingPage content={page} />} />
              ))}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/inquiry" element={<InquiryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppShell;
