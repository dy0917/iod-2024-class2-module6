import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />
  </ErrorBoundary>
);

function ErrorMessage({ error, resetErrorBoundary }) {
  console.error(error);
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  // Will work for errors caused by changing state, but not syntax errors
  return (
    <div className="ErrorMessage">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Try Again?</button>
    </div>
  );
}
