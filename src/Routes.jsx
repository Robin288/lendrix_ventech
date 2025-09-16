import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage-multi-vertical-financial-ecosystem';
import ServiceVerticalEcosystems from './pages/service-vertical-ecosystems-comprehensive-financial-solutions';
import KnowledgeHub from './pages/knowledge-hub-financial-education-market-insights';
import PartnerIntegrationCenter from './pages/partner-integration-center-b2b-collaboration-hub';
import ClientDashboardPortal from './pages/client-dashboard-portal-personalized-financial-command-center';
import AuthenticationHub from './pages/authentication-hub-three-tier-login-gateway';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AuthenticationHub />} />
        <Route path="/homepage-multi-vertical-financial-ecosystem" element={<Homepage />} />
        <Route path="/service-vertical-ecosystems-comprehensive-financial-solutions" element={<ServiceVerticalEcosystems />} />
        <Route path="/knowledge-hub-financial-education-market-insights" element={<KnowledgeHub />} />
        <Route path="/partner-integration-center-b2b-collaboration-hub" element={<PartnerIntegrationCenter />} />
        <Route path="/client-dashboard-portal-personalized-financial-command-center" element={<ClientDashboardPortal />} />
        <Route path="/authentication-hub-three-tier-login-gateway" element={<AuthenticationHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
