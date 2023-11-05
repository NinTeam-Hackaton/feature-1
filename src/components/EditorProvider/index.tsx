import { FC, useEffect, useRef } from "react";
import { AiOutlineStrikethrough, AiOutlineFontColors } from "react-icons/ai";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import "./index.css";
import clsx from "clsx";

type MenuBarProps = {};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  Heading,
  Paragraph,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const MenuBar = ({ setContent }: any) => {
  const { editor } = useCurrentEditor();
  const contentValue = editor ? editor.getHTML() : editor;

  useEffect(() => {
    if (contentValue) {
      setContent(contentValue);
    }
  }, [contentValue]);
  if (!editor) {
    return null;
  }
  return (
    <div className={"wrrapper-button-edit"}>
      <button
        className={"button-edit"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <AiOutlineStrikethrough size={24} />
      </button>
      <button
        className={"button-edit"}
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
      >
        <AiOutlineFontColors size={24} />
      </button>
    </div>
  );
};

const Editor = ({ content, setContent, element, isViewPage }: any) => {
  return (
    <div className="wrapper">
      <div className="tiptap">
        Transition: You can use CSS transitions along with other properties to
        create smooth animations when moving elements. This is commonly used for
        hover effects, but you can use it for other purposes too.
        <div
          className={clsx(
            { ["placeholder"]: !isViewPage },
            { ["hidden"]: !element }
          )}
        >
          I'm here to provide information and assistance to individuals like
          you. I'm not part of a team, but I can help answer questions and
          provide information on a wide range of topics. If you have any
          specific questions or need assistance with something, feel free to
          ask, and I'll do my best to help!
        </div>
      </div>
    </div>
  );
};

export { Editor };
