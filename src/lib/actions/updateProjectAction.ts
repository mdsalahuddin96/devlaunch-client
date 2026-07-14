"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";

// ডিলিট অ্যাকশনটি আগের মতোই থাকবে...

export async function updateProjectAction(projectId: string, formData: FormData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const difficulty = formData.get("difficulty");
  const liveUrl = formData.get("liveUrl");
  const imageUrl=formData.get("imageUrl")

  if (!projectId || !title || !author || !difficulty || !liveUrl ||!imageUrl) {
    return { success: false, message: "Missing required fields." };
  }
  const {token}=await auth.api.getToken()
  try {
    const response = await fetch(`http://localhost:5000/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${token}`
      },
      body: JSON.stringify({ title, author, difficulty, liveUrl,imageUrl }),
    });

    if (!response.ok) {
      return { success: false, message: "Failed to update project on the server." };
    }

    revalidatePath("/projects");
    revalidatePath("/manage/project");

    return { success: true, message: "Project updated successfully." };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, message: "Network error. Please try again." };
  }
}