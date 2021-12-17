import React from 'react';
import type { NextPage } from 'next';

import Page from '@/components/Layouts/PageLayout';
import FullState from '@/components/Lists/FullState';
import EmptyState from '@/components/Lists/EmptyState';
import DashboardShell from '@/components/DashboardShell';
import { useAppSelector } from '@/app/hooks';
import { selectIsLoggedIn } from '@/features/authSlice';

const ListsPage: NextPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Page name="Lists" path="/lists">
      <DashboardShell>{isLoggedIn ? <FullState /> : <EmptyState />}</DashboardShell>{' '}
    </Page>
  );
};

export default ListsPage;
