"use server";

import { revalidatePath } from "next/cache";

// Server action pipeline parsing processing logs data context entry
export async function submitProjectReviewAction(id: string, formData: FormData) {
  const username = formData.get("username") as string;
  const rating = formData.get("rating") as string;
  const comment = formData.get("comment") as string;

  if (!username || !rating || !comment) {
    return { success: false, message: "Validation failure. Check registry fields data integrity matrix." };
  }

  try {
    const response = await fetch(`http://localhost:5000/projects/${id}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, rating, comment }),
    });

    if (response.ok) {
      // Re-trigger server processing logs layout to fetch absolute fresh database stream parameters context
      revalidatePath(`/projects/${id}`);
      return { success: true, message: "Review compiled directly into instance registry parameters." };
    }
    
    return { success: false, message: "API communication framework trace error cluster pipeline parameters rejection." };
  } catch (error) {
    console.error("Failed to run post logic server pipeline execution context:", error);
    return { success: false, message: "Critical service network interruption log breakdown." };
  }
}