// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // Dynamically import CKEditorWrapper with SSR disabled
// const CKEditorWrapper = dynamic(
//   () => import("../components/OneTimeComponents/CKEditorWrapper"),
//   { ssr: false }
// );

// export default function QuillPage() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="space-y-10 px-20">
//       <h1 className="flex items-center">Quill is coming with 3000/quill</h1>
//       <CKEditorWrapper
//         initialData=""
//         onChange={(data) => console.log("Editor content:", data)}
//       />
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CKEditorWrapper = dynamic(
  () => import("../components/OneTimeComponents/CKEditorWrapper"),
  { ssr: false }
);

export default function QuillPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading Editor...</div>;
  }

  return (
    <div className="space-y-10 px-20">
      <h1 className="flex items-center">CKEditor with Classic Editor</h1>
      <CKEditorWrapper
        initialData="<p>Start typing here...</p>"
        onChange={(data) => console.log("Editor content:", data)}
      />
    </div>
  );
}
