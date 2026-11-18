import { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from '@/hooks/useProgress';
import Layout from '@/components/layout/Layout';
import ProductErrorBoundary from '@/components/features/ProductErrorBoundary';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
const Programme=lazy(()=>import('@/pages/Programme'));
const Session=lazy(()=>import('@/pages/Session'));
const Exercises=lazy(()=>import('@/pages/Exercises'));
const Videos=lazy(()=>import('@/pages/Videos'));
const Wellness=lazy(()=>import('@/pages/Wellness'));
const Tracker=lazy(()=>import('@/pages/Tracker'));
const ReportCard=lazy(()=>import('@/pages/ReportCard'));
const Guide=lazy(()=>import('@/pages/Guide'));
const Workbook=lazy(()=>import('@/pages/Workbook'));
const FAQ=lazy(()=>import('@/pages/FAQ'));
const Privacy=lazy(()=>import('@/pages/Privacy'));
export default function App(){return <ProductErrorBoundary><ProgressProvider><BrowserRouter><Layout><Suspense fallback={<div className="page"><p className="eyebrow">Opening your class…</p><div className="mt-5 h-48 rounded-2xl bg-sage"/></div>}><Routes><Route path="/" element={<Index/>}/><Route path="/programme" element={<Programme/>}/><Route path="/the-programme" element={<Programme/>}/><Route path="/class/:number" element={<Session/>}/><Route path="/exercises" element={<Exercises/>}/><Route path="/videos" element={<Videos/>}/><Route path="/wellness" element={<Wellness/>}/><Route path="/tracker" element={<Tracker/>}/><Route path="/report-card" element={<ReportCard/>}/><Route path="/guide" element={<Guide/>}/><Route path="/workbook" element={<Workbook/>}/><Route path="/inside-the-workbook" element={<Workbook/>}/><Route path="/sample" element={<Workbook/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/terms" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></Layout><Toaster richColors position="bottom-right" closeButton/></BrowserRouter></ProgressProvider></ProductErrorBoundary>;}

