import { ArrowRight } from 'lucide-react';
import { companyProjectPath, type CompanyProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

/** The index shows the first few technologies; briefs list the full stack. */
const INDEX_STACK_SIZE = 3;

interface ProjectIndexTableProps {
  projects: readonly CompanyProject[];
  /** Id of the heading that labels the table. */
  labelledBy: string;
}

/** Spec-sheet index of company projects: a table from md up, a definition list below. */
export function ProjectIndexTable({ projects, labelledBy }: ProjectIndexTableProps) {
  const rows = projects.map((project) => ({
    id: project.id,
    href: withBase(companyProjectPath(project.id)),
    ...project.data,
    coreStack: project.data.stack.slice(0, INDEX_STACK_SIZE).join(' · '),
  }));

  return (
    <>
      <table aria-labelledby={labelledBy} className="hidden w-full text-left text-sm md:table">
        <thead>
          <tr className="label-mono border-y border-border text-text-muted">
            <th scope="col" className="py-3 pr-4 font-normal">
              Project
            </th>
            <th scope="col" className="py-3 pr-4 font-normal">
              Company
            </th>
            <th scope="col" className="py-3 pr-4 font-normal">
              Domain
            </th>
            <th scope="col" className="py-3 pr-4 font-normal">
              Platform
            </th>
            <th scope="col" className="py-3 pr-4 font-normal">
              My role
            </th>
            <th scope="col" className="py-3 pr-4 font-normal">
              Core stack
            </th>
            <th scope="col" className="py-3 font-normal">
              <span className="sr-only">Brief</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="group border-b border-border align-top">
              <th scope="row" className="py-4 pr-4 font-medium">
                <a href={row.href} className="transition-colors hover:text-accent">
                  {row.title}
                </a>
              </th>
              <td className="py-4 pr-4 text-text-muted">{row.company}</td>
              <td className="py-4 pr-4 text-text-muted">{row.domain}</td>
              <td className="py-4 pr-4 text-text-muted">{row.platforms.join(' + ')}</td>
              <td className="py-4 pr-4 text-text-muted">{row.myRole}</td>
              <td className="py-4 pr-4 text-text-muted">{row.coreStack}</td>
              <td className="py-4 text-right">
                <ArrowRight
                  aria-hidden="true"
                  className="inline size-4 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul
        aria-labelledby={labelledBy}
        className="divide-y divide-border border-y border-border md:hidden"
      >
        {rows.map((row) => (
          <li key={row.id} className="py-4">
            <a href={row.href} className="font-medium transition-colors hover:text-accent">
              {row.title}
            </a>
            <dl className="mt-2 grid grid-cols-[6rem_1fr] gap-x-4 gap-y-1 text-sm">
              <dt className="label-mono pt-0.5 text-text-muted">Company</dt>
              <dd>{row.company}</dd>
              <dt className="label-mono pt-0.5 text-text-muted">Platform</dt>
              <dd>{row.platforms.join(' + ')}</dd>
              <dt className="label-mono pt-0.5 text-text-muted">My role</dt>
              <dd>{row.myRole}</dd>
              <dt className="label-mono pt-0.5 text-text-muted">Stack</dt>
              <dd>{row.coreStack}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
