'use client'
import { deleteProjectAction } from "@/lib/actions/deleteProjectAction";
import { Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const DeleteProjectBtn = ({id}:{id:string}) => {
  const handleDelete = async (id: string) => {
    const result = await deleteProjectAction(id);
    if (result.success) {
      toast.success(result.message);
    }
  };
  return (
    <Button
      type="submit"
      size="sm"
      onClick={() => handleDelete(id)}
      className="bg-red-500/10 hover:bg-red-500 border border-red-500/20 text-red-400 hover:text-white rounded-lg transition-all"
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
};

export default DeleteProjectBtn;
