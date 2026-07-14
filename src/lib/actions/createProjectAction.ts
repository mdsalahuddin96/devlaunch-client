"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "../auth";
import toast from "react-hot-toast";

export async function createProjectAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const techRaw = formData.get("tech") as string;
  const difficulty = formData.get("difficulty") as string;
  const author = formData.get("author") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;
  
  const session=await auth.api.getSession({
    headers:await headers()
  })
  const userId:(string|undefined)=session?.user?.id;
  if (!title ||!userId|| !description || !techRaw || !difficulty || !author || !imageUrl || !liveUrl) {
    return { success: false, message: "Please fill out all required fields." };
  }
  const tech = techRaw.split(",").map((item) => item.trim()).filter(Boolean);

  try {
    const response = await fetch("http://localhost:5000/create/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        userId,
        description,
        tech,
        difficulty,
        author,
        imageUrl,
        liveUrl,
        githubUrl,
        rating: 5.0 
      }),
    });

    if (!response.ok) {
      return { success: false, message: "Failed to create project on the server." };
    }
    revalidatePath("/add/project");
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Network error. Please try again." };
  }
  toast.success("Project Added Successfully!")
  redirect("/projects");
}