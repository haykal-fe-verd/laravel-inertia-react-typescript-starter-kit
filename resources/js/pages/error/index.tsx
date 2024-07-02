import React from "react";
import { Head, Link } from "@inertiajs/react";

import { PageProps } from "@/types";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

interface PageErrorProps extends PageProps {
    status: number;
}

function PageError({ status }: PageErrorProps) {
    // events
    const back = () => {
        window.history.back();
    };

    status = 404;
    const title = {
        503: "503 Service Unavailable",
        500: "500 Server Error",
        404: "404 Page Not Found",
        403: "403 Forbidden",
    }[status];

    const message = {
        503: "We are doing some maintenance. Please check back soon.",
        500: "We are doing some maintenance. Please check back soon.",
        404: "We cant find that page",
        403: "You are forbidden from accessing this page",
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[status];

    return (
        <>
            <Head title="Something went wrong" />

            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="leading-relaxed">
                    <h1 className="text-sm font-medium text-primary">
                        {title}
                    </h1>
                    <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                        {message}
                    </h2>
                    <p className="mt-4 text-muted-foreground">{description}</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Button
                            variant="outline"
                            className="inline-flex gap-2"
                            onClick={back}
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                            <span>Go back</span>
                        </Button>
                        <Link href="/" className={buttonVariants()}>
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageError;
