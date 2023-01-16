import { type NextApiRequest, NextApiResponse } from 'next';
import { linkService } from 'src/infra/services/link/link.service';
import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const { data: html } = await axios.get(req.body.link);
      const $ = cheerio.load(html);

      const title = $('title').text() || $('meta[property="og:title"]').attr('content');
      const desc =
        $('meta[name="description"]').attr('content') ||
        $('meta[property="og:description"]').attr('content');

      try {
        const newLink = await linkService.create({
          link: req.body.link,
          title: title || 'Link',
          desc,
          password: req.body.password,
        });

        return res.status(201).json(newLink);
      } catch (error) {
        return res.status(400).json({ message: 'invalid link', statusCode: 400 });
      }

    default:
      return res.status(405).json({ message: 'method not allowed', statusCode: 405 });
  }
}
