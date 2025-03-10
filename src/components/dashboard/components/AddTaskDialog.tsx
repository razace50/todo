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
import { Plus } from "lucide-react";
import { useState } from "react";

const AddTaskDialog = ({ onAddTask }: { onAddTask: (task: any) => void }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
    priority: "high",
  });

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the task data to the parent component's list (onAddTask)
    onAddTask(formData);

    // Reset the form
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
      priority: "high",
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new task
          </DialogDescription>
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
                  setFormData({ ...formData, title: e.target.value });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Input
                type="date"
                value={formData.dueDate}
                onChange={(e) => {
                  setFormData({ ...formData, dueDate: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-3">
              <div className="space-y-2 grow">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => {
                    setFormData({ ...formData, status: value });
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
                    setFormData({ ...formData, priority: value });
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
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Add Task</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
