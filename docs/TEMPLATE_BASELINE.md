# Preserved template baseline

The original project contained no product content. This textual snapshot preserves the parts replaced by this milestone, not a complete repository export.

## src/pages/Index.tsx
```tsx
const Index = () => <div className="min-h-screen flex items-center justify-center bg-background"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1><p className="text-xl text-muted-foreground">Start building your amazing project here!</p></div></div>;
export default Index;
```

## src/App.tsx
The original App wrapped one Index route and a NotFound catch-all in QueryClientProvider, TooltipProvider, BrowserRouter and the template toast providers. No admin, backend, content, media, PDF, or progress logic existed.

## Other replaced defaults
index.html contained website-title, meta-description, keyword and social-image placeholders plus OnSpace URLs. index.css contained default shadcn HSL tokens. tailwind.config.ts contained default semantic color tokens and border-radius/accordion animation definitions. The original NotFound view was a gray placeholder with a return-home anchor. src/main.tsx, Vite configuration, TypeScript configuration, package manifest and lockfiles are unchanged.

Use the platform's GitHub/source export capabilities for a complete source archive before further development. No durable database or asset backup is claimed.
