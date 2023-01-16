import { prisma } from 'src/lib/prisma';
import * as argon from 'argon2';
import type { LinkDTO } from './link.types';

class LinkService {
  async create(dto: LinkDTO) {
    if (!dto.link || !dto.title) return null;

    try {
      let blockedLink: { password?: string; isBlocked?: boolean } = {};
      if (dto.password) {
        blockedLink.password = await argon.hash(dto.password);
        blockedLink.isBlocked = true;
      }

      const newLink = await prisma.link.create({
        data: {
          ...dto,
          ...blockedLink,
        },
      });

      return newLink;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getById(id: string) {
    const link = await prisma.link.findUnique({
      where: { id },
    });

    if (!link) return null;

    if (link.isBlocked) {
      return {
        id: link.id,
        title: 'Link Cutter - Provide the password to be redirected',
        isBlocked: link.isBlocked,
      };
    }

    return link;
  }

  async checkPassword(id: string, password: string) {
    const link = await prisma.link.findUnique({ where: { id } });
    if (!link) return null;
    const isChecked = await argon.verify(link.password!, password);
    if (isChecked) {
      return link;
    }
    return null;
  }
}

export const linkService = new LinkService();
