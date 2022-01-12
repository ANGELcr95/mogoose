import { Router } from "express";
import { renderTasks, createTask, renderTaskEdit, taskEdit, taskDelete, taskToogleDone } from "../controllers/task.controller"

const router = Router();

router.get("/", renderTasks);

router.get("/tasks/:id/toogleDone", taskToogleDone);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", taskEdit);

router.get("/tasks/:id/delete", taskDelete);


// router.get("/about", (req, res) => {
//     res.render("main");
// });

export default router;
