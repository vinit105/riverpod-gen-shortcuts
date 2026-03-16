import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const licensePath = path.join(process.cwd(), "LICENSE.txt");
  const licenseText = await readFile(licensePath, "utf8");

  return new Response(licenseText, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "content-disposition": 'inline; filename="LICENSE.txt"',
    },
  });
}