import { PrismaClient } from "@prisma/client";
import { hash, genSalt } from "bcryptjs";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  try {
    // only post method is accepted
    if (req.method === "POST") {
      const { username, firstname, lastname, email, password, phonenumber, role_id } = req.body;
      // check duplicate email
      const checkExistingUserName = await prisma.admin.findUnique({
        where: {
          username: username,
        },
      });
      // if exist
      if (checkExistingUserName) return res.status(422).json({ message: "Username Already Exists...!" });
      // check duplicate email
      const checkExistingEmail = await prisma.admin.findUnique({
        where: {
          email: email,
        },
      });
      // if exist
      if (checkExistingEmail) return res.status(422).json({ message: "Email Already Exists...!" });

      // if do not exist
      try {
        // create salt
        const saltRounds = 12;
        const salt = await genSalt(saltRounds);
        const hashedPassword = await hash(password, salt);
        const newAdmin = await prisma.admin.create({
          data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            phonenumber: phonenumber,
            role_id: role_id,
          },
        });
        res.status(201).json({ msg: `Admin created successfully`, user: JSON.stringify(newAdmin) });
      } catch (error) {
        res.status(404).json({ error });
      }
    } else {
      res.status(500).json({ msg: "HTTP method not valid only POST accepted" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}
