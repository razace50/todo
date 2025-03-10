import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
const DeleteTask = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"destructive"} size={"icon"}>
            <Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Fill in the form below to add a new task
            </DialogDescription>
            <div className="flex space-x-2 justify-end">
              <Button variant={"destructive"} className="hover:bg-red-700">
                Yes
              </Button>
              <Button variant={"ghost"}>No</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteTask;
