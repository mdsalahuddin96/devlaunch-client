"use client";

import React, { useState } from "react";
import { Edit3, FolderGit2 } from "lucide-react";
import {
  Button,
  Modal,
  TextField,
  Label,
  Input,
  Select,
  ListBox,
  Surface,
} from "@heroui/react";
import { updateProjectAction } from "@/lib/actions/updateProjectAction";


interface Project {
  _id: string;
  title: string;
  author: string;
  difficulty: string;
  liveUrl: string;
  imageUrl:string;
}

export default function EditProjectButton({ project }: { project: Project }) {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await updateProjectAction(project._id, formData);

    setIsPending(false);
    if (!result.success) {
      alert(result.message);
    }
  }

  return (
    <Modal>
      {/* Trigger Button to open the Modal */}
      <Button
        isIconOnly
        size="sm"
        variant="secondary"
        className="bg-brand-accent/10 hover:bg-brand-accent border border-brand-accent/20 text-brand-accent hover:text-brand-dark rounded-lg transition-all"
      >
        <Edit3 className="size-4" />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-zinc-950 border border-brand-muted/50 text-zinc-100 rounded-3xl">
            <Modal.CloseTrigger />

            {/* Modal Header */}
            <Modal.Header>
              <Modal.Icon className="bg-brand-accent/10 text-brand-accent">
                <FolderGit2 className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-white">
                Modify Project Details
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-zinc-400">
                Update the operational parameters for this codebase workspace.
                The interface adapts automatically on mobile screens.
              </p>
            </Modal.Header>

            {/* Modal Body with Form */}
            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="bg-transparent border-0 p-0 shadow-none"
              >
                <form
                  id={`edit-form-${project._id}`}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    className="w-full"
                    name="title"
                    type="text"
                    variant="secondary"
                    defaultValue={project.title}
                  >
                    <Label className="text-zinc-300 text-xs font-mono">
                      Project Title
                    </Label>
                    <Input
                      required
                      className="bg-zinc-900 border-brand-muted/40 text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="author"
                    type="text"
                    variant="secondary"
                    defaultValue={project.author}
                  >
                    <Label className="text-zinc-300 text-xs font-mono">
                      Author (GitHub Username)
                    </Label>
                    <Input
                      placeholder="e.g., salauddincse96"
                      required
                      className="bg-zinc-900 border-brand-muted/40 text-white"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="liveUrl"
                    type="url"
                    variant="secondary"
                    defaultValue={project.liveUrl}
                  >
                    <Label className="text-zinc-300 text-xs font-mono">
                      Live Deployment URL
                    </Label>
                    <Input
                      placeholder="https://your-live-link.com"
                      required
                      className="bg-zinc-900 border-brand-muted/40 text-white"
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="imageUrl"
                    type="url"
                    variant="secondary"
                    defaultValue={project.imageUrl}
                  >
                    <Label className="text-zinc-300 text-xs font-mono">
                      ImageUrl
                    </Label>
                    <Input
                      required
                      className="bg-zinc-900 border-brand-muted/40 text-white"
                    />
                  </TextField>

                  {/* New Updated Select Structure */}
                  <Select
                    className="w-full"
                    name="difficulty"
                    placeholder="Select difficulty"
                    defaultValue={project.difficulty.toLowerCase()}
                  >
                    <Label className="text-zinc-300 text-xs font-mono">
                      Difficulty Tier
                    </Label>
                    <Select.Trigger className="bg-zinc-900 border border-brand-muted/40 text-white rounded-xl py-2 px-3 flex justify-between items-center w-full">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover className="bg-zinc-900 border border-brand-muted/40 rounded-xl shadow-xl overflow-hidden">
                      <ListBox className="text-zinc-200 p-1">
                        <ListBox.Item
                          id="beginner"
                          textValue="Beginner"
                          className="hover:bg-zinc-800 p-2 rounded-lg cursor-pointer flex justify-between items-center"
                        >
                          Beginner
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="intermediate"
                          textValue="Intermediate"
                          className="hover:bg-zinc-800 p-2 rounded-lg cursor-pointer flex justify-between items-center"
                        >
                          Intermediate
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="advanced"
                          textValue="Advanced"
                          className="hover:bg-zinc-800 p-2 rounded-lg cursor-pointer flex justify-between items-center"
                        >
                          Advanced
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </form>
              </Surface>
            </Modal.Body>

            {/* Modal Footer */}
            <Modal.Footer>
              <Button
                slot="close"
                variant="secondary"
                className="text-zinc-400 font-medium"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form={`edit-form-${project._id}`}
                slot={isPending ? undefined : "close"}
                isDisabled={isPending}
                className="bg-brand-accent text-brand-dark font-bold rounded-xl"
              >
                {isPending?"Submitting...":"Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
