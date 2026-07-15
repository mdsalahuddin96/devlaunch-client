"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "../auth";


export async function createProjectAction(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const techRaw = formData.get("tech") as string;
  const difficulty = formData.get("difficulty") as string;
  const author = formData.get("author") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;
  const priority=formData.get("priority") as string;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({ headers: await headers() });
  const userId: string | undefined = session?.user?.id;
  if (
    !title ||
    !userId ||
    !description ||
    !techRaw ||
    !difficulty ||
    !author ||
    !imageUrl ||
    !liveUrl ||
    !priority
  ) {
    return;
  }
  const tech = techRaw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/create/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
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
        rating: 5.0,
        priority
      }),
    });

    if (!response.ok) {   
      return;
    }
    revalidatePath("/add/project");
  } catch (error) {
    console.error("Error creating project:", error);
    return;
  }
  redirect("/projects");
}
