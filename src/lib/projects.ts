import { getCollection, type CollectionEntry } from 'astro:content';

export type CompanyProject = CollectionEntry<'company-projects'>;
export type PersonalProject = CollectionEntry<'personal-projects'>;

/*
 * Drafts stay visible while the whole site is noindex. Flip this at launch (TASKLIST P8.1)
 * so unfinished entries drop out of every list and route.
 */
const SHOW_DRAFTS = true;

const isVisible = ({ data }: { data: { draft: boolean } }) => SHOW_DRAFTS || !data.draft;
const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

export async function getCompanyProjects(): Promise<CompanyProject[]> {
  return (await getCollection('company-projects', isVisible)).sort(byOrder);
}

export async function getPersonalProjects(): Promise<PersonalProject[]> {
  return (await getCollection('personal-projects', isVisible)).sort(byOrder);
}

export const companyProjectPath = (id: string) => `/company-projects/${id}/`;
export const personalProjectPath = (id: string) => `/personal-projects/${id}/`;
