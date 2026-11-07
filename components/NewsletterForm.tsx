"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type FormValues = {
    email: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterForm() {
    const [subscribed, setSubscribed] = useState(false);
    const { t } = useLanguage();

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        mode: "onTouched",
        defaultValues: { email: "" },
    });

    const onSubmit = async () => {
        setSubscribed(false);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            reset();
            setSubscribed(true);
        } catch {
            setError("root", { message: t("error") });
        }
    };

    const message = errors.email?.message ?? errors.root?.message;

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-3 sm:flex-row"
            >
                <div className="relative flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                        {t("email")}
                    </label>
                    <Mail
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"
                        aria-hidden
                    />
                    <input
                        id="newsletter-email"
                        type="email"
                        autoComplete="email"
                        placeholder={t("email")}
                        aria-invalid={errors.email ? true : false}
                        aria-describedby={message ? "newsletter-message" : undefined}
                        className={`w-full rounded-full border bg-white py-3.5 pl-12 pr-4 text-sm text-ink outline-none transition-shadow placeholder:text-ink/40 focus:ring-2 ${errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-ink/10 focus:ring-primary"
                            }`}
                        {...register("email", {
                            required: t("emailRequired"),
                            validate: (value) =>
                                EMAIL_PATTERN.test(value.trim()) || t("invalidEmail"),
                        })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
                            {t("sending")}
                        </>
                    ) : (
                        t("subscribe")
                    )}
                </button>
            </form>

            <AnimatePresence mode="wait">
                {message ? (
                    <motion.p
                        key="error"
                        id="newsletter-message"
                        role="alert"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 px-4 text-sm font-medium text-red-600"
                    >
                        {message}
                    </motion.p>
                ) : subscribed ? (
                    <motion.p
                        key="success"
                        role="status"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 flex items-center gap-2 px-4 text-sm font-medium text-primary"
                    >
                        <CircleCheck className="h-4 w-4 shrink-0" aria-hidden />
                        {t("subscribed")}
                    </motion.p>
                ) : null}
            </AnimatePresence>
        </div>
    );
}