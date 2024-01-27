import { auth } from "@clerk/nextjs";

import { notesIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import { deleteNoteSchema } from "@/lib/validation/note";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  try {
    const parseResult = deleteNoteSchema.safeParse(params);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { id } = parseResult.data;

    const note = await prisma.note.findUnique({ where: { id } });

    if (!note) {
      return Response.json({ error: "Note not found" }, { status: 404 });
    }

    const { userId } = auth();

    if (!userId || userId !== note.userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.note.delete({ where: { id } });
      await notesIndex.deleteOne(id);
    });

    return Response.json({ message: "Note deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
