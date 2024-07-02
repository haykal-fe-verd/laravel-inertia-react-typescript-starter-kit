import React from "react";
import { usePage } from "@inertiajs/react";

import { PageProps } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface AuthLayoutProps {
    children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
    // hooks
    const { sessions } = usePage<PageProps>().props;
    const { toast } = useToast();

    // mounted
    React.useEffect(() => {
        if (sessions?.success) {
            toast({
                title: "Berhasil 😚",
                description: sessions.success,
            });
        }

        if (sessions?.error) {
            toast({
                title: "Oops 😣",
                description: sessions.error,
            });
        }
    }, [sessions]);

    return (
        <main>
            {children}
            <Toaster />
        </main>
    );
}

export default AuthLayout;
