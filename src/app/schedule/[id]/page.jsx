import React from 'react';
import { useRouter } from 'next/router';

const JobDetail = ({ job }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Job ID: {id}</h1>
      {/* Qolgan ma'lumotlarni chiqaring */}
    </div>
  );
};

export default JobDetail;
