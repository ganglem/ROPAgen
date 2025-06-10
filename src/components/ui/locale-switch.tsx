"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import React from "react";
import { Button } from "@/components/ui/button";

const locales = [
  { code: "en", label: "en" },
  { code: "de", label: "de" },
];

export default function LocaleSwitch({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onLocaleClick(newLocale: string) {
    if (newLocale === currentLocale) return;
    const segments = pathname.split("/");
    if (segments[1] && locales.some(l => l.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/");
    startTransition(() => {
      router.push(newPath);
    });
  }

  return (
      //TODO make this responsive
    <div className="hidden sm:flex items-center px-2" aria-label="Select language">
      {locales.map((locale, idx) => (
        <React.Fragment key={locale.code}>
          <Button
            variant="ghost"
            className={
              `${locale.code === currentLocale ? "font-bold text-foreground/100" : "font-normal text-foreground/70"} px-1`
            }
            onClick={() => onLocaleClick(locale.code)}
            disabled={isPending || locale.code === currentLocale}
            aria-current={locale.code === currentLocale ? "true" : undefined}
          >
            {locale.label}
          </Button>
          {idx < locales.length - 1 && <span className="text-foreground">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

