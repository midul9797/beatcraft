import ViewCanvas from "@/components/ViewCanvas";
import React from "react";

const layout = ({ children }) => {
  return (
    <html>
      <body className="overflow-x-hidden bg-main-dark">
        <main>
          {children}

          <ViewCanvas />
        </main>
      </body>
    </html>
  );
};

export default layout;
