import { useState, useEffect } from "react";
import { Editor } from "../EditorProvider";
import { useOutletContext } from "react-router-dom";

const CreatePage = () => {
  const [content, setContent] = useState<string | null>(null);
  const [element] = useOutletContext<any>();
  useEffect(() => {
    if (element) {
      setContent((currentContent) =>
        currentContent ? currentContent + element : currentContent
      );
    }
  }, [element]);

  return (
    <div>
      <Editor element={element} content={content} setContent={setContent} />
    </div>
  );
};

export { CreatePage };
