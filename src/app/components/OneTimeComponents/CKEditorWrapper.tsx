"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CKEditorWrapper({
  initialData = "",
  onChange,
}: {
  initialData?: string;
  onChange?: (data: string) => void;
}) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialData}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange?.(data);
      }}
    />
  );
}
