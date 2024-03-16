'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Layout from '../../components/Layout'
import AdminReviewSubmission from '../../components/Admin/AdminReviewSubmission';
import AdminReviewerList from '../../components/Admin/AdminReviewerList';
import AdminApproveReview from '../../components/Admin/AdminApproveReview';
import AdminSendMail from '../../components/Admin/AdminSendMail';

const page = () => {
  const { data: session, status } = useSession();
  const [selectedNavItem, setSelectedNavItem] = useState(null);


  // useEffect(() => {
  //   if (!session?.user && status === 'authenticated') {
  //     console.log('no user');
  //     window.location.href = "http://localhost:3000/signIn?callbackUrl=%2F";
  //   }
  // }, [session, status]);

  if (!session) {
    return null;
  }

  const handleNavItemClick = (selectedItem) => {
    setSelectedNavItem(selectedItem);
  };

  const selectContainer = (selectedNavItem) => {

    switch (selectedNavItem) {
      case 'Home':
        return <div>This is Home</div>
        break;
      case 'Review Submissions':
        return <AdminReviewSubmission />
        break;
      case 'Reviewers':
        return <AdminReviewerList />
        break;
      case 'Approve Reviews':
        return <AdminApproveReview />
        break;
      case 'Send an Email':
        return <AdminSendMail />
        break;
      default:
        break;
    }
  }


  return (
    <Layout type={'admin'} handleNavItemClick={handleNavItemClick} selectedNavItem={selectedNavItem}>
      {selectContainer(selectedNavItem)}
    </Layout>
  )
}

export default page