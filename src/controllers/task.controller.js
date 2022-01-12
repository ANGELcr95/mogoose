import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
    // res.render("index")
}

export const createTask = async (req, res) => {
    try {
      const task = Task(req.body);
      const saved = await task.save();
      console.log(saved);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  }

export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      console.log(task);
      res.render("edit", { task: task });
    } catch (error) {
      console.log(error.message);
    }
  }

export const taskEdit = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndUpdate(id, req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  }

export const taskDelete = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  }

export const taskToogleDone = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      task.done = !task.done
      await task.save()
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  }