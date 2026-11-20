import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";
import { ArrowUpRight } from "./icons";


export function Experience() {
  if (!site.experience.length) return null;

  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="work" index="02 · experience" title="where I've worked" />

      <div className="space-y-3">
        {site.experience.map((job, i) => {
          const Card = job.url ? "a" : "div";
          return (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.06}>
              <Card
                {...(job.url
                  ? { href: job.url, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-2xl border bg-surface/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50 backdrop-blur-sm sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-6"
              >
                <div className="flex flex-wrap items-center gap-2 sm:block">
                  <span className="whitespace-nowrap font-mono text-[11px] tracking-wide text-faint">
                    {job.period}
                  </span>
                </div>
                <div className="mt-3 min-w-0 sm:mt-0 sm:border-l sm:border-dashed sm:border-border/60 sm:pl-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-fg">{job.company}</h3>
                    {job.url && (
                      <ArrowUpRight className="text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="text-sm text-accent">{job.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{job.blurb}</p>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
