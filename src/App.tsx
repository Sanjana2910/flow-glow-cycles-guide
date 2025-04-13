
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MythsFacts from "./pages/MythsFacts";
import Predictions from "./pages/Predictions";
import DietChart from "./pages/DietChart";
import Menopause from "./pages/Menopause";
import ForMen from "./pages/ForMen";
import EcoProducts from "./pages/EcoProducts";
import MentalHealth from "./pages/MentalHealth";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/myths-facts" element={<MythsFacts />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/diet-chart" element={<DietChart />} />
          <Route path="/menopause" element={<Menopause />} />
          <Route path="/for-men" element={<ForMen />} />
          <Route path="/eco-products" element={<EcoProducts />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
