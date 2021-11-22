import type { NextApiRequest, NextApiResponse } from "next";
import { ContactData } from "../../../../interfaces/contact";
import { prisma } from "../../../../lib/prisma";
import { regex } from "../../../../lib/regex";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let body = req.body;

    if (!regex.email.test(body.email)) {
      return res.status(400).send("Invalid email address.");
    }
    if (!regex.phoneNumber.test(body.phone_number)) {
      return res.status(400).send("Invalid phone number.");
    }

    const c: ContactData = {
      firstName: body.first_name,
      lastName: body.last_name,
      organizationName: body.organization_name,
      email: body.email,
      phoneNumber: body.phone_number,
      message: body.message,
    };

    let contact = await prisma.contact.create({
      data: {
        firstName: c.firstName,
        lastName: c.lastName,
        organizationName: c.organizationName,
        email: c.email,
        phoneNumber: c.phoneNumber,
        message: c.message,
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

    res.status(201).json({ data: contact });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
