import { NextApiRequest, NextApiResponse } from "next"
import { IProject } from "../../types/interface"
import { projects } from "../../json/project"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  res.status(200).json(projects)
}
