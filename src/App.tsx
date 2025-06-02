
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Article pages
import ReactBeginnerGuide from "./pages/articles/ReactBeginnerGuide";
import JavaScriptES6Features from "./pages/articles/JavaScriptES6Features";
import BuildingPortfolio from "./pages/articles/BuildingPortfolio";
import CSSGridVsFlexbox from "./pages/articles/CSSGridVsFlexbox";
import PythonWebDevelopment from "./pages/articles/PythonWebDevelopment";
import LatinaSuccessStory from "./pages/articles/LatinaSuccessStory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Article routes */}
          <Route path="/articles/getting-started-with-react-a-beginners-journey" element={<ReactBeginnerGuide />} />
          <Route path="/articles/javascript-es6-features-every-developer-should-know" element={<JavaScriptES6Features />} />
          <Route path="/articles/building-your-first-portfolio-website" element={<BuildingPortfolio />} />
          <Route path="/articles/css-grid-vs-flexbox-when-to-use-what" element={<CSSGridVsFlexbox />} />
          <Route path="/articles/introduction-to-python-for-web-development" element={<PythonWebDevelopment />} />
          <Route path="/articles/breaking-into-tech-a-latinas-success-story" element={<LatinaSuccessStory />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
