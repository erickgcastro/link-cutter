import { type NextApiRequest, NextApiResponse } from 'next';
import { linkService } from 'src/infra/services/link/link.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const linkId = req.query.linkId as string;

  switch (req.method) {
    /* Getting the link by the linkId. */
    case 'GET':
      const link = await linkService.getById(linkId);
      if (!link) {
        return res.status(404).json({ message: 'link not found', statusCode: 404 });
      }
      return res.status(200).json(link);

    /* Checking the password of the link. */
    case 'POST':
      const linkChecked = await linkService.checkPassword(linkId, req.body.password);
      if (linkChecked?.id) {
        return res.status(200).json(linkChecked);
      }
      return res.status(403).json({ message: 'Invalid password', statusCorde: 403 });

    default:
      return res.status(405).json({ message: 'method not allowed', statusCode: 405 });
  }
}
