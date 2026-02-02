import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InquiryPage from '@/pages/InquiryPage'
import { TooltipProvider } from '@/components/ui/tooltip'
import '@/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <InquiryPage />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </StrictMode>
);
