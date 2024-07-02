import React from "react";
import { Head } from "@inertiajs/react";

import GuestLayout from "@/layouts/guest-layout";

function PageIndex() {
    return (
        <GuestLayout>
            <Head title="Index Page" />

            <div className="text-3xl text-primary underline font-bold decoration-wavy">
                Index Page
            </div>
        </GuestLayout>
    );
}

export default PageIndex;
