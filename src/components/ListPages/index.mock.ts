import { FaEdit } from "react-icons/fa";
import { FiEdit2, FiFileText, FiArchive } from "react-icons/fi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

export const options = [
  {
    id: 0,
    name: "Edit",
    icon: FaEdit,
  },
  {
    id: 1,
    disabled: true,
    name: "Rename",
    icon: FiEdit2,
  },
  {
    id: 2,
    disabled: true,
    name: "Duplicate",
    icon: HiOutlineDuplicate,
  },
  {
    id: 3,
    disabled: true,
    name: "Move to",
    icon: MdOutlineExitToApp,
  },
  {
    id: 4,
    disabled: true,
    name: "Copy link",
    icon: BiLink,
  },
  {
    id: 5,
    disabled: true,
    name: "Export PDF",
    icon: FiFileText,
  },
  {
    id: 6,
    disabled: true,
    name: "Archive",
    icon: FiArchive,
  },
  {
    id: 7,
    disabled: true,
    name: "Delete",
    icon: RiDeleteBinLine,
  },
];
