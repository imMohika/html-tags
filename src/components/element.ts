export type Group =
  | "root"
  | "metadata"
  | "content-sectioning"
  | "text-content"
  | "inline-text"
  | "multimedia"
  | "embed"
  | "scripting"
  | "demarcating-edits"
  | "table"
  | "form"
  | "interactive"
  | "web-components";
type GroupObject = Record<Group, string | undefined>;

export const groupTitle: GroupObject = {
  root: "Root",
  metadata: "Metadata",
  "content-sectioning": "Content sectioning",
  "text-content": "Text content",
  "inline-text": "Inline text",
  multimedia: "Multimedia",
  embed: "Embed",
  scripting: "Scripting",
  "demarcating-edits": "Demarcating edits",
  table: "Table",
  form: "Form",
  interactive: "Interactive",
  "web-components": "Web components",
};
export const groupColor: GroupObject = {
  root: "#100f26",
  metadata: "#bf7eb4",
  "content-sectioning": "#842c6f",
  "text-content": "#fe2d0c",
  "inline-text": "#18a8c9",
  multimedia: "#0a72e2",
  embed: "#df3b83",
  scripting: "#5d2586",
  "demarcating-edits": "#6bd512",
  table: "#23a529",
  form: "#72a2d1",
  interactive: "#d27fbe",
  "web-components": "#a109ac",
};
