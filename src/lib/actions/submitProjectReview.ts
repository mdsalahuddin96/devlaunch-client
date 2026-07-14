"use server";

import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { auth } from "../auth";

// Server action pipeline parsing processing logs data context entry
export async function submitProjectReviewAction(id: string, formData: FormData): Promise<void> {
  const username = formData.get("username") as string;
  const rating = formData.get("rating") as string;
  const comment = formData.get("comment") as string;

  if (!username || !rating || !comment) {
    toast.error("Validation failure. Check registry fields data integrity matrix.")
    return; 
  }
  const {token}=await auth.api.getToken()
  try {
    const response = await fetch(`http://localhost:5000/projects/${id}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${token}`
      },
      body: JSON.stringify({ username, rating, comment }),
    });

    if (response.ok) {
      // Re-trigger server processing logs layout to fetch absolute fresh database stream parameters context
      revalidatePath(`/projects/${id}`);
      toast.success("Review compiled directly into instance registry parameters.")
      return;
    }
  } catch (error) {
    console.error("Failed to run post logic server pipeline execution context:", error);
    return;
  }
}