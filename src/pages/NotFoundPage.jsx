import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <main id="main-content" style={{ paddingTop: '72px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Section variant="deep" style={{ width: '100%' }}>
        <Container size="sm" style={{ textAlign: 'center' }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: 24,
            background: '#0E1624',
            border: '1px solid #1E293B',
            color: '#00E5C8',
            fontFamily: 'monospace',
            fontSize: '1.75rem',
            fontWeight: 900,
            margin: '0 auto 1.5rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
          }}>
            404
          </div>

          <h1 className="knx-h1" style={{ marginBottom: '1rem' }}>
            Trajectory Out of Bounds
          </h1>

          <p className="knx-lead" style={{ margin: '0 auto 2rem auto', maxWidth: '420px' }}>
            The page or curriculum module you are looking for does not exist or has been shifted to a new schedule.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <Link to="/">
              <Button variant="primary" size="md" icon={<Home size={16} />}>
                Return to Homepage
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="outline" size="md" icon={<ArrowLeft size={16} />}>
                Explore All Courses
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
};
