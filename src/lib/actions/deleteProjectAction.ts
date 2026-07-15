"use server"
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { headers } from "next/headers";

export async function deleteProjectAction(projectId: string) {
  const {token}=await auth.api.getToken({
    headers:await headers()
  })
  console.log("token",token)
  if (!projectId) {
    return { success: false, message: "Project ID is required." };
  }

  try {
    const response = await fetch(`http://localhost:5000/projects/${projectId}`, {
      method: "DELETE",
      headers:{
        authorization:`Bearer ${token}`
      }
    });

    if (!response.ok) {
      return { success: false, message: "Failed to delete project on the server." };
    }
    revalidatePath("/projects");
    revalidatePath("/manage/project");

    return { success: true, message: "Project removed successfully." };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Network error. Please try again." };
  }
}