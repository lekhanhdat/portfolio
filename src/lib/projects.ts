import { getCollection, type CollectionEntry } from 'astro:content';

export type CompanyProject = CollectionEntry<'company-projects'>;
export type PersonalProject = CollectionEntry<'personal-projects'>;

/*
 * Draft entries are excluded from every list and route since launch. Set to true locally
 * to preview an unfinished entry; never ship it as true.
 */
const SHOW_DRAFTS = false;

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
