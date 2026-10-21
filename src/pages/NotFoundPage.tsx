import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main id="main-content" className="pt-32 pb-24 min-h-[80vh] flex items-center">
      <Section variant="deep">
        <Container size="sm" className="text-center">
          <div className="w-20 h-20 rounded-3xl bg-[#0E1624] border border-[#1E293B] text-[#00E5C8] font-mono text-3xl font-black mx-auto flex items-center justify-center mb-6 shadow-xl">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Trajectory Out of Bounds
          </h1>

          <p className="text-sm text-[#94A3B8] leading-relaxed mb-8 max-w-md mx-auto">
            The page or curriculum module you are looking for does not exist or has been shifted to a new schedule.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
                Return to Homepage
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
                Explore All Courses
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
};

