import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </QueryClientProvider>
    </AppProvider>
  );
};
export default App;
