import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

enum StatusCodes {
  Success = 200,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res
    .status(StatusCodes.Success)
    .json({ name: 'John Doe' });
}
