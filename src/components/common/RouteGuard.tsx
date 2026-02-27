import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

interface RouteGuardProps {
  children: React.ReactNode;
}

// Please add the pages that can be accessed without logging in to PUBLIC_ROUTES.
/*
const PUBLIC_ROUTES = ['/login', '/403', '/404', "/"];

function matchPublicRoute(path: string, patterns: string[]) {
  return patterns.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp('^' + pattern.replace('*', '.*') + '$');
      return regex.test(path);
    }
    return path === pattern;
  });
}
*/

export function RouteGuard({ children }: RouteGuardProps) {
  // const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // RouteGuard is currently in bypass mode (using Passkey system instead of AuthContext)
    console.log('RouteGuard bypassed for:', location.pathname);
  }, [location.pathname]);

  /*
  useEffect(() => {
    if (loading) return;

    const isPublic = matchPublicRoute(location.pathname, PUBLIC_ROUTES);

    if (!user && !isPublic) {
      navigate('/login', { state: { from: location.pathname }, replace: true });
    }
  }, [user, loading, location.pathname, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  */

  return <>{children}</>;
}