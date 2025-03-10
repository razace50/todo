import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // useEffect to set initial values
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
import { Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const EditTask = ({
  task,
  onEditTask,
}: {
  task: any;
  onEditTask: (updatedTask: any) => void;
}) => {
  const [formData, editFormData] = useState({
    id: task.id,
    title: task.title || "",
    description: task.description || "",
    dueDate: task.dueDate || "",
    status: task.status || "pending", // Set default to 'pending'
    priority: task.priority || "high", // Set default to 'high'
  });

  useEffect(() => {
    editFormData({
      id: task.id,
      title: task.title || "",
      description: task.description || "",
      dueDate: task.dueDate || "",
      status: task.status || "pending",
      priority: task.priority || "high",
    });
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditTask(formData); // Pass updated task data to parent
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} size={"icon"}>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>You can edit the current status</DialogDescription>
        </DialogHeader>
        <div>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="Task title"
                value={formData.title}
                onChange={(e) => {
                  editFormData({ ...formData, title: e.target.value });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Input
                type="date"
                value={formData.dueDate}
                onChange={(e) => {
                  editFormData({ ...formData, dueDate: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-3">
              <div className="space-y-2 grow">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => {
                    editFormData({ ...formData, status: value });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue>{formData.status}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 grow">
                <Label>Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => {
                    editFormData({ ...formData, priority: value });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue>{formData.priority}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Task description"
                value={formData.description}
                onChange={(e) => {
                  editFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Update</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default EditTask;
