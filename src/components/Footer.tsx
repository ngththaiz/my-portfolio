'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto  text-center">
        <div className="text-body dark:text-body-dark mb-6 animate-fadeIn">
          © 2025 Thai Nguyen Thanh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 