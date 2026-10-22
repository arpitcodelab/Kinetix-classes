import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export const FacultyCard = ({ member }) => {
  return (
    <article className="faculty-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem' }}>
      <div style={{
        position: 'relative',
        width: 128,
        height: 128,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #1E293B',
        background: '#070C14',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        marginBottom: '1rem'
      }}>
        <img
          src={member.avatarSvg}
          alt={member.role}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          loading="lazy"
          width="240"
          height="240"
        />
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <Award size={18} color="#00E5C8" />
        </div>
      </div>

      <span className="knx-badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
        <CheckCircle size={12} />
        {member.credentials}
      </span>

      <h3 className="knx-h3" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>
        {member.role}
      </h3>

      <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#38BDF8', marginBottom: '0.75rem' }}>
        {member.subject}
      </p>

      <p className="knx-small" style={{ lineHeight: 1.5, marginBottom: '1rem' }}>
        {member.bio}
      </p>

      <div style={{
        marginTop: 'auto',
        paddingTop: '0.75rem',
        borderTop: '1px solid #1E293B',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.8rem',
        color: '#CBD5E1'
      }}>
        <span>Experience:</span>
        <span style={{ color: '#00E5C8', fontWeight: 700 }}>{member.experience}</span>
      </div>
    </article>
  );
};
