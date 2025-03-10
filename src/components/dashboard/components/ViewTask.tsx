import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eye } from "lucide-react";

interface ViewTaskProps {
  task: {
    title: string;
    dueDate: string;
    status: string;
    priority: string;
    description: string;
  };
}

const ViewTask = ({ task }: ViewTaskProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} size={"icon"}>
          <Eye />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View Task</DialogTitle>
          <DialogDescription>
            View the current status of the task
          </DialogDescription>
        </DialogHeader>
        <div>
          <form className="space-y-3">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input type="text" value={task.title} readOnly />
            </div>
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Input type="date" value={task.dueDate} readOnly />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={task.status} disabled>
                <SelectTrigger>
                  <SelectValue>{task.status}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not started">Not started</SelectItem>
                  <SelectItem value="in progress">In progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select value={task.priority} disabled>
                <SelectTrigger>
                  <SelectValue>{task.priority}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={task.description} readOnly />
            </div>
            <div className="flex space-x-2 justify-end">
              <Button variant={"ghost"}>Close</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTask;
