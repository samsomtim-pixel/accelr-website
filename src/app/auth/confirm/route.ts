import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get('code');
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const next = searchParams.get('next') ?? '/portal';

  const supabase = await createClient();

  // PKCE flow: Supabase sends a `code` param that must be exchanged for a session
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Implicit flow fallback: verify OTP via token_hash
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type: type as 'magiclink' | 'email',
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Both flows failed — redirect to login with error
  return NextResponse.redirect(`${origin}/portal/login?error=link_expired`);
}
