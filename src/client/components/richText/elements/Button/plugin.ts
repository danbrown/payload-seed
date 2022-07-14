import { Editor } from "slate";

const withButton = (incomingEditor: Editor): Editor => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) =>
    (element as any).type === "button" ? true : isVoid(element);

  return editor;
};

export default withButton;
