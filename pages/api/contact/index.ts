import type { NextApiRequest, NextApiResponse } from "next";
import { ContactData } from "../../../interfaces/contact";
import { prisma } from "../../../lib/prisma";
import { regex } from "../../../lib/regex";
import sendContactEmail from "../../../mailer";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let body = req.body;

    const c: ContactData = body;

    if (!regex.email.test(c.email)) {
      return res.status(400).send("Invalid email address.");
    }
    if (!regex.phoneNumber.test(c.phoneNumber)) {
      return res.status(400).send("Invalid phone number.");
    }

    let contact = await prisma.contact.create({
      data: {
        firstName: c.firstName,
        lastName: c.lastName,
        organizationName: c.organizationName,
        email: c.email,
        phoneNumber: c.phoneNumber,
        message: c.message,
        createdAt: new Date(),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        organizationName: true,
        email: true,
        phoneNumber: true,
        message: true,
        createdAt: true,
      },
    });

    sendContactEmail(
      c.email,
      c.firstName,
      c.lastName,
      c.organizationName,
      c.phoneNumber,
      c.message
    );

    res.status(201).json(contact);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
