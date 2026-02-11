import { redirect } from 'next/navigation';

export default function RootPage() {
  // Check if user is accessing portal/admin routes
  // Otherwise redirect to locale homepage
  redirect('/nl');
}
