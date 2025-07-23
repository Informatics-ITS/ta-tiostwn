import Banner from '@components/Button';
import Header from '@components/Header';
import SonnerToaster from '@components/SonnerToaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import BreadcrumbSection from './landing/BreadcrumbSection';
import ButtonSection from './landing/ButtonSection';
import CardSection from './landing/CardSection';
import ColorPalette from './landing/ColorPaletteSection';
import FormSection from './landing/FormSection';
import ModalSection from './landing/ModalSection';
import SonnerToastPage from './landing/SonnerToast';
import TableSection from './landing/TableSection';
import TagSection from './landing/TagSection';
import TypographySection from './landing/TypographySection';

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
const App = () => (
  <main>
    <QueryClientProvider client={queryClient}>
      <div>
        <SonnerToaster />
        <Header />
        <Banner />
        <TypographySection />
        <ColorPalette />
        <FormSection />
        <ButtonSection />
        <TagSection />
        <BreadcrumbSection />
        <CardSection />
        <TableSection />
        <ModalSection />
        <SonnerToastPage />
      </div>
    </QueryClientProvider>
  </main>
);

export default App;
