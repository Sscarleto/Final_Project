import { useState, useEffect } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Home() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const returnPath = router.query.ret?.toString();

  useEffect(() => {
    if (user) {
      router.replace(returnPath || "/dashboard");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 position-absolute top-50 start-50 translate-middle">
            <h3 className="p-4 text-center">Login to Dashboard</h3>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
