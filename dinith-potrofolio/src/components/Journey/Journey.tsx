import { useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { Suitcase, Medal, GraduationCap } from 'iconoir-react';
import ExperiencePane from '../ExperiencePane/ExperiencePane';
import CertificationsPane from '../CertificationsPane/CertificationsPane';
import EducationPane from '../EducationPane/EducationPane';
import './Journey.css';

type PaneId = 'experience' | 'certifications' | 'education';

const PANES: { id: PaneId; label: string; shortLabel: string; icon: ReactNode }[] = [
  { id: 'experience', label: 'Experience', shortLabel: 'Experience', icon: <Suitcase /> },
  { id: 'certifications', label: 'Certifications', shortLabel: 'Certs', icon: <Medal /> },
  { id: 'education', label: 'Education', shortLabel: 'Education', icon: <GraduationCap /> },
];

function Journey() {
  const [activePane, setActivePane] = useState<PaneId>('experience');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Roving arrow-key navigation across the tab strip (WAI-ARIA tabs pattern).
  const handleTabKeyDown = (event: KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % PANES.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + PANES.length) % PANES.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = PANES.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActivePane(PANES[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section className="Journey-section" id="journey">
      <h2 className="Journey-heading">Journey</h2>

      <div className="Journey-tabs" role="tablist" aria-label="Background">
        {PANES.map((pane, index) => (
          <button
            key={pane.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`Journey-tab-${pane.id}`}
            aria-controls={`Journey-panel-${pane.id}`}
            aria-selected={activePane === pane.id}
            tabIndex={activePane === pane.id ? 0 : -1}
            className={`Journey-tab ${activePane === pane.id ? 'is-active' : ''}`}
            onClick={() => setActivePane(pane.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {pane.icon}
            <span className="Journey-tab-label">{pane.label}</span>
            <span className="Journey-tab-label-short">{pane.shortLabel}</span>
          </button>
        ))}
      </div>

      <div
        className="Journey-panel"
        role="tabpanel"
        id="Journey-panel-experience"
        aria-labelledby="Journey-tab-experience"
        hidden={activePane !== 'experience'}
      >
        <ExperiencePane />
      </div>

      <div
        className="Journey-panel"
        role="tabpanel"
        id="Journey-panel-certifications"
        aria-labelledby="Journey-tab-certifications"
        hidden={activePane !== 'certifications'}
      >
        <CertificationsPane />
      </div>

      <div
        className="Journey-panel"
        role="tabpanel"
        id="Journey-panel-education"
        aria-labelledby="Journey-tab-education"
        hidden={activePane !== 'education'}
      >
        <EducationPane />
      </div>
    </section>
  );
}

export default Journey;
