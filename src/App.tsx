import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  try {
    return (
      <div style={{ background: 'blue', color: 'white', padding: '20px', minHeight: '100vh' }}>
        <h1>Basic Test - Production Check</h1>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="light">
              <TooltipProvider>
                <HashRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </HashRouter>
              </TooltipProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ background: 'red', color: 'white', padding: '20px', minHeight: '100vh' }}>
        <h1>App Error:</h1>
        <pre>{String(error)}</pre>
      </div>
    );
  }
};

export default App;
