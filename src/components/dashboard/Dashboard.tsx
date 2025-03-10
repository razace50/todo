"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AddTaskDialog from "./components/AddTaskDialog";
import DeleteTask from "./components/DeleteTask";
import EditTask from "./components/EditTask";
import ViewTask from "./components/ViewTask";
import {
  Pagination,
  PaginationItem,
  PaginationContent,
} from "../ui/pagination"; // Import pagination components
import PrevButton from "./components/PrevButton";
import NextButton from "./components/NextButton";
import { useEffect } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Task 2 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Task 3 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "4",
      title: "Task 4",
      description: "Task 4 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "5",
      title: "Task 5",
      description: "Task 5 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "6",
      title: "Task 6",
      description: "Task 6 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30ac",
    },
    {
      id: "7",
      title: "Task 7",
      description: "Task 7 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "8",
      title: "Task 8",
      description: "Task 8 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "9",
      title: "Task 9",
      description: "Task 9 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "10",
      title: "Task 10",
      description: "Task 10 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "11",
      title: "Task 11",
      description: "Task 11 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "12",
      title: "Task 12",
      description: "Task 12 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "13",
      title: "Task 13",
      description: "Task 13 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "14",
      title: "Task 14",
      description: "Task 14 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "15",
      title: "Task 15",
      description: "Task 15 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "16",
      title: "Task 16",
      description: "Task 16 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "17",
      title: "Task 17",
      description: "Task 17 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "18",
      title: "Task 18",
      description: "Task 18 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "19",
      title: "Task 19",
      description: "Task 19 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "20",
      title: "Task 20",
      description: "Task 20 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "21",
      title: "Task 21",
      description: "Task 21 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "22",
      title: "Task 22",
      description: "Task 22 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "23",
      title: "Task 23",
      description: "Task 23 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
    {
      id: "24",
      title: "Task 24",
      description: "Task 24 description",
      dueDate: "2021-09-30",
      status: "pending",
      priority: "high",
      createdAt: "2021-09-30",
      updatedAt: "2021-09-30",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const itemsPerPage = 3;

  const handleAddTask = (task: any) => {
    setTasks((prevTasks) => [...prevTasks, task]); // Add new task to the list
  };

  // Get the current tasks to display based on page and itemsPerPage
  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleEditTask = (updatedTask: any) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous and next buttons
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(tasks.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false); // Update login status
    window.location.href = "/"; // Redirect to login page
  };

  useEffect(() => {
    // Check for token in localStorage when the component mounts
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container mx-auto">
      {/* Conditional Logout Button */}
      {isLoggedIn && (
        <div className="absolute top-4 right-4">
          <Button onClick={handleLogout} className="bg-red-500 text-white">
            Logout
          </Button>
        </div>
      )}

      <Card className="my-20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>List of Available Tasks</CardTitle>
            </div>
            <div className="flex pr-6">
              <AddTaskDialog onAddTask={handleAddTask} />
            </div>
          </div>
          <CardDescription>
            You can see the list of available tasks here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="capitalize">
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentTasks.map((task) => (
                <TableRow key={task.id} className="py-2">
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                  <TableCell>{task.createdAt}</TableCell>
                  <TableCell>{task.updatedAt}</TableCell>
                  <TableHead>
                    <Button variant={"ghost"} size={"icon"}>
                      <ViewTask task={task} />
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                      <EditTask task={task} onEditTask={handleEditTask} />
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                      <DeleteTask />
                    </Button>
                  </TableHead>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <Pagination>
              <PaginationContent>
                {/* Previous Button */}
                <PaginationItem
                  onClick={handlePrevPage}
                  className={currentPage === 1 ? "disabled" : ""}
                >
                  <PrevButton />
                </PaginationItem>

                {/* Loop through page numbers */}
                {Array.from(
                  { length: Math.ceil(tasks.length / itemsPerPage) },
                  (_, index) => (
                    <PaginationItem
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? "font-bold" : ""}
                    >
                      <div className="border px-2 rounded">{index + 1}</div>
                    </PaginationItem>
                  )
                )}

                {/* Next Button */}
                <PaginationItem
                  onClick={handleNextPage}
                  className={
                    currentPage === Math.ceil(tasks.length / itemsPerPage)
                      ? "disabled"
                      : ""
                  }
                >
                  <NextButton />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
