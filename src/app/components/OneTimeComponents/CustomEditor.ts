import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic"; //new version of ckeditor
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
} from "@ckeditor/ckeditor5-basic-styles";
import { List } from "@ckeditor/ckeditor5-list";
import { Link } from "@ckeditor/ckeditor5-link";
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { SimpleUploadAdapter } from "@ckeditor/ckeditor5-upload";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Clipboard } from "@ckeditor/ckeditor5-clipboard";

class CustomEditor extends ClassicEditor {}

CustomEditor.builtinPlugins = [
  Essentials,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  Link,
  Image,
  ImageUpload,
  ImageCaption,
  ImageStyle,
  SimpleUploadAdapter,
  Undo,
  BlockQuote,
  CodeBlock,
  Clipboard,
];

CustomEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "link",
      "imageUpload",
      "blockQuote",
      "codeBlock",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
    ],
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  simpleUpload: {
    // Configure simple upload - it will use base64 by default
    uploadUrl: "", // Leave empty for base64
  },
  codeBlock: {
    languages: [
      { language: "plaintext", label: "Plain text" },
      { language: "javascript", label: "JavaScript" },
      { language: "css", label: "CSS" },
      { language: "html", label: "HTML" },
    ],
  },
};

export default CustomEditor;
