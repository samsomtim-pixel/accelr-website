import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to portal login
  redirect('/portal/login');
}
