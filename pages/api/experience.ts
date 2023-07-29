import { NextApiRequest, NextApiResponse } from "next"
import { IJob } from "../../model/interfaces"
import { experiences } from "../../json/experience"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IJob[]>
) {
  res.status(200).json(experiences)
}