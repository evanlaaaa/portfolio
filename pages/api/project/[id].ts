import { NextApiRequest, NextApiResponse } from "next"
import { projects } from "../../../json/project"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query
  let project = projects.find(p => p.id === Number(id))
  res.status(200).json(project)
}