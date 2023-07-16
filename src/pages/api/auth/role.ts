import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  try {
    // create role id
    if (req.method === "POST") {
      const { rolename } = req.body;
      // check duplicate user
      const checkExisting = await prisma.role.findMany({
        where: {
          rolename: rolename,
        },
      });
      console.log("exist?", checkExisting);
      if (checkExisting.length > 0) return res.status(422).json({ msg: "User Already Exists!" });

      // create new role if not exist
      try {
        const newRole = await prisma.role.create({
          data: {
            rolename: rolename,
          },
        });
        res.status(201).json({ msg: `Role created successfully}` });
      } catch (error) {
        throw new Error("Failed to create role");
      }
    } else {
      res.status(500).json({ msg: "HTTP method not valid only POST accepted" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}
