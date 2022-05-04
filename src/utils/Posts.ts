import type { IFrontmatter } from '@/types/IFrontMatter';
import type { AstroGlobal } from 'astro';

export const getAllPostsSortedByDate = async (Astro: Readonly<AstroGlobal>) => {
  const allPosts = await Astro.glob<IFrontmatter>('./*.md');
	const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf());

  return sortedPosts;
}
