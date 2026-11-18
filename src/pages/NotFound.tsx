import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="eyebrow mb-3">A little detour</p>
        <h1 className="page-title mb-4">This class isn’t on the timetable.</h1>
        <p className="text-muted-foreground mb-6">The page or session number could not be found.</p>
        <Link to="/" className="btn">Return to my classroom</Link>
      </div>
    </div>
  );
};

export default NotFound;
